class Bird{
    
    constructor(game){
        this.game = game;
        this.birdImg;
        this.loaded= false;
        this.init();
        this.x;
        this.y;
    }
    init(){
        this.x = (this.game.gameWidth/2 - 68/2) - 50;
        this.y = this.game.gameHeight/2 - 68/2;

        this.birdImg = document.createElement('img');
        this.birdImg.src = './img/bird1.png';
        this.changeStt();
        this.birdImg.addEventListener('load',()=>{
            this.loaded = true;
            this.draw();
        });
    }
    draw(){
        this.game.ctx.drawImage(this.birdImg,this.x,this.y,68,68);
    }
    changeStt(){
       setTimeout(()=>{
            this.birdImg.src = './img/bird2.png';
            setTimeout(()=>{
                this.birdImg.src = './img/bird1.png';
                this.changeStt();
            },250);
       },250);   
    }

}