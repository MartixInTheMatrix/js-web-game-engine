import Player from "./structure/objects/Player"
import Scene from "./structure/objects/Scene"
import Objet from "./structure/objects/Objet"
import {getActionFromKey} from "./structure/managers/keyManager"

export class Game {

    window: Window;
    status: number;
    player: Player;
    scene: Scene;
    sceneDocument: any;
    ctx: any;

    constructor(window:Window){
        this.window = window; // HMTL window object
        this.status = 0; // 0: offline // 1: running
        this.player = new Player(window);
        this.scene = new Scene(window, this.player);
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

    getKey(e:any){
        var evtobj = this.window.event? this.window.event : e; //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
        var unicode = evtobj.charCode? evtobj.charCode : evtobj.keyCode;
        var actualkey = String.fromCharCode(unicode);
        return actualkey;         
    }

    generateMap(){ 
        this.window.document.body.innerHTML += `<canvas id="${this.scene.id}" style="background: ${this.scene.background.color}" width="${this.scene.background.innerWidth}" height="${this.scene.background.innerHeight}">`;
        this.sceneDocument = this.window.document.getElementById(this.scene.id);
        this.ctx = this.sceneDocument.getContext("2d");
        this.window.document.body.style.margin = '0';
        this.window.document.body.style.padding = '0';
        
        (this.scene.objects as Objet[]).forEach((obj: Objet) => {
            obj.draw(this.ctx)
            console.log(obj)
        })

    }
 
    addRect(x: number, y: number, width: number, height: number, color: string){
        (this.scene.objects as Objet[]).push(new Objet({type: 'rect', x:x, y:y, width:width, height:height, color:color}))
    }
    
    addCircle(x: number, y: number,radius: number, color: string){
        (this.scene.objects as Objet[]).push(new Objet({type: 'circle', x:x, y:y, radius:radius, color:color}))
    }

    createPlayer(x: number, y: number, skin: string, vx: number, vy: number){
        this.scene.player = new Player({window: this.window, x:x, y:y, skin:skin, vx:vx, vy:vy})
    }

    generatePlayer(){
    
    }

    eventHandler(){
        this.window.onkeypress = (e) =>{
            let key = this.getKey(e);
            getActionFromKey(key, this.player)
        }

        this.window.onresize = () => {

            this.scene.innerHeight,
            this.sceneDocument.height
            = this.window.innerHeight;

            this.scene.innerWidth,
            this.sceneDocument.width
            = this.window.innerWidth;

            (this.scene.objects as Objet[]).forEach(obj=>obj.draw(this.ctx))
        }

    }
}