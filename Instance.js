const { Player } = await import('./structure/objects/Player.js')
const keyManager = await import('./structure/managers/keyManager.js')

export class Game {

    constructor(window){
        this.player = new Player(window);
        this.window = window;
        this.status = 0; // 0: offline // 1: running
    }

    start(){
        this.status = 1;
        console.log(this.window)

            this.window.onkeypress = (e) =>{
                let key = this.getKey(e);
                keyManager.getActionFromKey(key, this.player)
            }
        
    }

    getKey(e){
        var evtobj = this.window.event? this.window.event : e; //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
        var unicode = evtobj.charCode? evtobj.charCode : evtobj.keyCode;
        var actualkey = String.fromCharCode(unicode);
        return actualkey;         
    }

    
}