export class Player{

    constructor(obj){
        this.window = obj.window;
        this.x = obj.x|| 0;
        this.y = obj.y || 0;
        this.skin = obj.skin ||undefined;
        this.vx = obj.vx ||1;
        this.vy = obj.vy ||1;
    }

    up(){ 
        this.position.y += this.vy
        console.log(this.position.x, this.position.y)
    }
    down(){ 
        this.position.y -= this.vy
        console.log(this.position.x, this.position.y)
    }
    right(){ 
        this.position.x += this.vx
        console.log(this.position.x, this.position.y)
    }
    left(){  
        this.position.x -= this.vx
        console.log(this.position.x, this.position.y)
    }
}