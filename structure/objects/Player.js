export class Player{

    constructor(window){
        this.window = window;
        this.position = {
            x: 0,
            y: 0
        };
    }

    up(){ 
        this.position.y += 1
        console.log(this.position.x, this.position.y)
    }
    down(){ 
        this.position.y -= 1
        console.log(this.position.x, this.position.y)
    }
    right(){ 
        this.position.x += 1
        console.log(this.position.x, this.position.y)
    }
    left(){  
        this.position.x -= 1
        console.log(this.position.x, this.position.y)
    }
}