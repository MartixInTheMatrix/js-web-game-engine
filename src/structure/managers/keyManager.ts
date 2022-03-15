import { keys } from "../../settings"
import Player from "../objects/Player"

export function getActionFromKey(k: string, player: Player){
    switch(k){
        case keys.up:
            return player.up();
        case keys.down: 
            return player.down();
        case keys.right:
            return player.right();
        case keys.left: 
            return player.left();  
        default:
            return console.log(k)               
    }
}

