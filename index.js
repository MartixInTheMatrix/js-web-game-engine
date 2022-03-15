import * as Game from './build/Instance.js' 

window.onload = async ()=>{

    console.log(Game)
    const process = new Game(window)
    process.addRect(window.innerWidth/2,window.innerHeight/2, 50, 50)
    process.start()
}