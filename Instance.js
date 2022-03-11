const { Player } = await import('./structure/objects/Player.js')
const { Scene } = await import('./structure/objects/Scene.js')
const keyManager = await import('./structure/managers/keyManager.js')

export class Game {

    constructor(window){
        this.window = window; // HMTL window object
        this.status = 0; // 0: offline // 1: running
        this.player = new Player(window);
        this.scene = new Scene(window);
        this.sceneDocument = null;
        this.ctx = null;
    }

    start(){
        this.status = 1; //set status online
        this.eventHandler()
        this.generateMap()
        this.generatePlayer()
        console.log(this.window)
        console.log(this.scene)
        console.log(this)
    }

    getKey(e){
        var evtobj = this.window.event? this.window.event : e; //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
        var unicode = evtobj.charCode? evtobj.charCode : evtobj.keyCode;
        var actualkey = String.fromCharCode(unicode);
        return actualkey;         
    }

    generateMap(){
        this.window.document.body.innerHTML += `<canvas id="${this.scene.id}" style="background: ${this.scene.background.color}" width="${this.scene.background.innerWidth}" height="${this.scene.background.innerHeight}">`;
        this.sceneDocument = this.window.document.getElementById(this.scene.id)
    }
    
    generatePlayer(){
        this.ctx = this.sceneDocument.getContext("2d")
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(0, 0, 100, 100);
        base_image = new Image();
        base_image.src = 'img/base.png';
        context.drawImage(base_image, 100, 100);
        
        innerHTML += `<div style="background: red, width: 200px; height: 200px">`
    }

    eventHandler(){
        this.window.onkeypress = (e) =>{
            let key = this.getKey(e);
            keyManager.getActionFromKey(key, this.player)
        }

        this.window.onresize = () => {

            this.scene.innerHeight,
            this.sceneDocument.height
            = this.window.innerHeight;

            this.scene.innerWidth,
            this.sceneDocument.width
            = this.window.innerWidth;
        }

    }
}