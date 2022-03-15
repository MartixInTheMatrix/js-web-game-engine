export default class Objet{
    /**
     * @typedef Object
     * @property {string} type
     * @property {number} x
     * @property {number} y
     * @property {number} width
     * @property {number} height
     * @property {number} radius
     * @property {string} color
     */

    /**
     * 
     * @param {Object} object 
     */

    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    color: string;

    constructor(object: any){
        this.type = object.type || undefined;
        this.x = object.x || 0;
        this.y = object.y || 0;
        this.width = object.width || 50;
        this.height = object.height || 50;
        this.radius = object.radius || 5;
        this.color = object.color?object.color : false || 'green';
    }

    getTypeFromString(t:string, ctx:any){
        switch(t){
            case "rect":
                return ctx.rect(this.x, this.y, this.width, this.height);
            case "circle":
                return ctx.arc(this.x, this.y, this.radius, 0, Math.PI);
        }
    }

    draw(ctx:any){
        this.getTypeFromString(this.type, ctx)
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}