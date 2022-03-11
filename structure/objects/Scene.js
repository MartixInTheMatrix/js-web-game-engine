export class Scene { 
    constructor(window, options){
        this.window = window;
        this.background = {
            color:'#000000',
            innerHeight:window.innerHeight, 
            innerWidth:window.innerWidth
        }
        this.innerHeight = window.innerHeight;
        this.innerWidth = window.innerWidth;
        this.plugins = options? options.plugins? options.plugins : [] : [] || [];
        this.objects = options? options.objects? options.objects : undefined : undefined || undefined;
        this.id = options? options.id? options.id : 'game' : 'game' || 'game'
    }
}