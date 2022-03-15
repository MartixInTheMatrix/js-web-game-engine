(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Player {
        constructor(obj) {
            this.window = obj.window;
            this.x = obj.x || 0;
            this.y = obj.y || 0;
            this.skin = obj.skin || undefined;
            this.vx = obj.vx || 1;
            this.vy = obj.vy || 1;
        }
        up() {
            this.y += this.vy;
            console.log(this.x, this.y);
        }
        down() {
            this.y -= this.vy;
            console.log(this.x, this.y);
        }
        right() {
            this.x += this.vx;
            console.log(this.x, this.y);
        }
        left() {
            this.x -= this.vx;
            console.log(this.x, this.y);
        }
    }
    exports.default = Player;
});
