class Background{

    constructor(game){
        this.game = game;
        this.bgImg;

        this.loaded= false;
        
        this.init();

    }
    init(){
        this.bgImg = document.createElement('img');
        this.bgImg.src = './img/background.png';
        this.bgImg.addEventListener('load',()=>{
            this.loaded = true;
            this.draw()
        });
    }
    draw(){
        this.game.ctx.drawImage(this.bgImg,0,0);
    }
}