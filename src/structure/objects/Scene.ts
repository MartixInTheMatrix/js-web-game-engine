import Objet from "./Objet"
import Player from "./Player"

export default class Scene { 
    window: Window;
    background: { color: string, innerHeight: number, innerWidth: number};
    innerHeight: number;
    innerWidth: number;
    plugins: string[];
    objects: Objet[] | undefined;
    id: string;
    player: Player;
    
    constructor(window: Window, player: Player, options?: { plugins: string[], objects: Objet[], id: string}){
        this.window = window;
        this.background = {
            color:'#000000',
            innerHeight:window.innerHeight, 
            innerWidth:window.innerWidth
        }
        this.innerHeight = window.innerHeight;
        this.innerWidth = window.innerWidth;
        this.plugins = options? options.plugins? options.plugins : [] : [] || [];
        this.objects = options? options.objects? options.objects : undefined : undefined;
        this.id = options? options.id? options.id : 'game' : 'game' || 'game';
        this.player = player;
    }
}