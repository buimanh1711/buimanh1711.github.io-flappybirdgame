class Over{

    constructor(game){
        this.game = game;
        this.overImg;

        this.loaded= false;
    }
    init(){
        this.overImg = document.createElement('img');
        this.overImg.src = './img/lose.png';
        this.overImg.addEventListener('load',()=>{
            this.loaded = true;
            this.draw()
        });
    }
    draw(){
        console.log(this.overImg);
        this.game.ctx.drawImage(this.overImg,-10,100,380,400);
    }
}