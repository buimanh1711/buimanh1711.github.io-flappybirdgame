class Pipe{
    
    constructor(game){
        this.game = game;
        this.pipeUpImg;
        this.pipeDownImg;
        this.loadedUp = false;

        this.loaded = false;
        this.xU;
        this.yU;
        this.xD;
        this.yD;
        this.random;

        this.init();
    }
    init(){
        this.createPipe();
        this.pipeUpImg = document.createElement('img');
        this.pipeUpImg.src = './img/pipeUp.png';
        this.pipeDownImg = document.createElement('img');
        this.pipeDownImg.src = './img/pipeDown.png';

        this.pipeUpImg.addEventListener('load',()=>{
            this.loadedUp = true;
            this.draw();
        });
        this.pipeDownImg.addEventListener('load',()=>{
            this.loadedDown = true;
            this.draw();
        });
    }
    
    loadImg(){
        this.pipeUpImg.addEventListener('load',()=>{
            this.loadedUp = true;
            this.draw();
        });
        this.pipeDownImg.addEventListener('load',()=>{
            this.loadedDown = true;
            this.draw();
        });
    }

    createPipe(){
        this.random = Math.floor(Math.random()*(300-100))+100;
        this.yU = -440+this.random;
        this.xU = 360-74;

        this.yD = this.yU+440+180;
        this.xD = this.xU;
    }
    
    draw(){
        this.loadImg();
        this.game.ctx.drawImage(this.pipeUpImg,this.xU,this.yU,400,440);
        this.game.ctx.drawImage(this.pipeDownImg,this.xD,this.yD,400,440);
    }
    
}