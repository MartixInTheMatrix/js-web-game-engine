var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./structure/objects/Player", "./structure/objects/Scene", "./structure/objects/Objet", "./structure/managers/keyManager"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Player_1 = __importDefault(require("./structure/objects/Player"));
    const Scene_1 = __importDefault(require("./structure/objects/Scene"));
    const Objet_1 = __importDefault(require("./structure/objects/Objet"));
    const keyManager_1 = require("./structure/managers/keyManager");
    class Game {
        constructor(window) {
            this.window = window; // HMTL window object
            this.status = 0; // 0: offline // 1: running
            this.player = new Player_1.default(window);
            this.scene = new Scene_1.default(window, this.player);
            this.sceneDocument = null;
            this.ctx = null;
        }
        start() {
            this.status = 1; //set status online
            this.eventHandler();
            this.generateMap();
            this.generatePlayer();
            console.log(this.window);
            console.log(this.scene);
            console.log(this);
        }
        getKey(e) {
            var evtobj = this.window.event ? this.window.event : e; //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
            var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode;
            var actualkey = String.fromCharCode(unicode);
            return actualkey;
        }
        generateMap() {
            this.window.document.body.innerHTML += `<canvas id="${this.scene.id}" style="background: ${this.scene.background.color}" width="${this.scene.background.innerWidth}" height="${this.scene.background.innerHeight}">`;
            this.sceneDocument = this.window.document.getElementById(this.scene.id);
            this.ctx = this.sceneDocument.getContext("2d");
            this.window.document.body.style.margin = '0';
            this.window.document.body.style.padding = '0';
            this.scene.objects.forEach((obj) => {
                obj.draw(this.ctx);
                console.log(obj);
            });
        }
        addRect(x, y, width, height, color) {
            this.scene.objects.push(new Objet_1.default({ type: 'rect', x: x, y: y, width: width, height: height, color: color }));
        }
        addCircle(x, y, radius, color) {
            this.scene.objects.push(new Objet_1.default({ type: 'circle', x: x, y: y, radius: radius, color: color }));
        }
        createPlayer(x, y, skin, vx, vy) {
            this.scene.player = new Player_1.default({ window: this.window, x: x, y: y, skin: skin, vx: vx, vy: vy });
        }
        generatePlayer() {
        }
        eventHandler() {
            this.window.onkeypress = (e) => {
                let key = this.getKey(e);
                (0, keyManager_1.getActionFromKey)(key, this.player);
            };
            this.window.onresize = () => {
                this.scene.innerHeight,
                    this.sceneDocument.height
                        = this.window.innerHeight;
                this.scene.innerWidth,
                    this.sceneDocument.width
                        = this.window.innerWidth;
                this.scene.objects.forEach(obj => obj.draw(this.ctx));
            };
        }
    }
    exports.default = Game;
});
