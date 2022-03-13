window.onload = async ()=>{
    const { Game } = await import('./Instance.js')
    const process = new Game(window)
    
    process.addRect(window.innerWidth/2,window.innerHeight/2,50,50)
    process.start()
}