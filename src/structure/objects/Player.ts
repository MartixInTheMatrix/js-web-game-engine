export default class Player{

    window:Window;
    x:number;
    y:number;
    skin:string;
    vx:number;
    vy:number;

    constructor(obj:any){
        this.window = obj.window;
        this.x = obj.x|| 0;
        this.y = obj.y || 0;
        this.skin = obj.skin ||undefined;
        this.vx = obj.vx ||1;
        this.vy = obj.vy ||1;
    }

    up(){ 
        this.y += this.vy
        console.log(this.x, this.y)
    }
    down(){ 
        this.y -= this.vy
        console.log(this.x, this.y)
    }
    right(){ 
        this.x += this.vx
        console.log(this.x, this.y)
    }
    left(){  
        this.x -= this.vx
        console.log(this.x, this.y)
    }
}