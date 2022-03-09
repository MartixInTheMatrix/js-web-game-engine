const { Settings } = await import('../../settings.js')

export function getActionFromKey(k, player){
    switch(k){
        case Settings.keys.up:
            return player.up();
        case Settings.keys.down: 
            return player.down();
        case Settings.keys.right:
            return player.right();
        case Settings.keys.left: 
            return player.left();           
    }
}

