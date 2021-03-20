class Game{

    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.canvas;
        this.ctx;

        this.bg;
        this.bird;
        this.pipe;
        this.pipe2;
        this.pipe3;
        this.over;
        this.checkPipe1 = false;
        this.checkPipe2 = false;
        this.checkPipe3 = true;
        this.scoreBoard; 
        this.score = 0;
        this.init();
        this.loop(); 
        
        this.falling = true;
        this.checkJump=0;
        this.speed;
        this.delta;
        
    }
    
    init(){
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.canvas.width = this.gameWidth;
        this.canvas.height = this.gameHeight;
        this.canvas.style.border = '2px black solid';

        this.bg = new Background(this);
        this.bird = new Bird(this);
        this.pipe  = new Pipe(this);
        this.pipe2 = new Pipe(this);
        this.pipe3 = new Pipe(this);
        this.over = new Over(this);
        this.scoreBoard = new Score(this);
        
        this.checkLose = false;

        this.speed = 5;
        this.delta = 1;
   
    }
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.Height);
    }

    loop(){
        
        this.clear();
            if(this.falling){
                document.body.onclick = ()=>{
                        this.falling = false; 
                        this.speed = 1;   
                    }
                this.fall();
            }

        if(!this.falling){
                this.jump();
        }

        if(this.checkPipe3 == true){
            this.slide1();
        }
        if(this.checkPipe1 == true){
            this.slide2();
        }
        if(this.checkPipe2 == true){
            this.slide3();
        }
        setTimeout(()=>{
            this.drawGame(); 
            if(this.checkLose == true){
                this.pipe.draw();
                this.pipe2.draw();
                this.pipe3.draw();
                this.fallLose();
                return;
            }
                this.loop();
            },40);
    }    

    checkLose1(){
        if(this.bird.x >= this.pipe.xU+110 && this.bird.x <= this.pipe.xU+110+74 && this.bird.y < this.pipe.yU+440){
            console.log('lose');
            return true;
        }    
    }
    checkLose2(){
        if(this.bird.x >= this.pipe2.xU+110 && this.bird.x <= this.pipe2.xU+110+74 && this.bird.y < this.pipe2.yU+440){
            console.log('lose');
            return true;
        }    
    }
    checkLose3(){
        if(this.bird.x >= this.pipe3.xU+110 && this.bird.x <= this.pipe3.xU+110+74 && this.bird.y < this.pipe3.yU+440){

            console.log('lose');
            return true;
        }    
    }
    drawGame(){
        this.bg.draw();
        this.bird.draw();
    }

    fall(){
        this.clear();
            if(this.bird.y < 600){
                this.bird.y+=this.speed;
                this.speed+=this.delta;
                
            }
        else{
            this.checkLose = true;
            this.over.init();
        } 
    }

    fallLose(){
        this.clear();
        setTimeout(()=>{
            this.drawGame();
            if(this.bird.y < 600){
                this.bird.y+=10;
                this.fallLose();
            }
            else{
                this.scoreBoard.updateLose();
                this.over.init();
            }
            this.pipe.draw();
            this.pipe2.draw();
            this.pipe3.draw();

        },10);
    }
    jump(){
        // document.body.onclick = ()=>{
        //     if(this.checkLose == false)
        //         this.bird.y-=5;      
        // }
        if(this.checkLose == false){

            this.checkJump++;
            if(this.checkJump<7){
                if(this.bird.y > -30){
                    setTimeout(()=>{
                        this.bird.y-=10;
                    },40);
                }
            }
            else {
                this.falling = true;
                this.checkJump=0;
            }
        }
    }

    slide1(){
        if(this.bird.x >= this.pipe.xU+110 && this.bird.x <= this.pipe.xU+110+74 && (this.bird.y < this.pipe.yU+440 || this.bird.y > this.pipe.yD-50)){
            console.log("lose")
            this.checkLose = true;
        }
        if(this.pipe.xU < -30){
            this.checkPipe1 = true;
        }
        if(this.pipe.xU > -230){
            this.pipe.xU -= 5;
            this.pipe.xD -= 5;
            this.pipe.draw();
        }
        else{
            this.score++;
            this.scoreBoard.update();
            this.pipe3.createPipe();
            this.checkPipe3 = false;
        }
    }

    slide2(){
        if(this.bird.x >= this.pipe2.xU+110 && this.bird.x <= this.pipe2.xU+110+74 && (this.bird.y < this.pipe2.yU+440 || this.bird.y > this.pipe2.yD-50)){
            console.log("lose")
            this.checkLose = true;
        }      
        if(this.pipe2.xU > -230){
            this.pipe2.xU -= 5;
            this.pipe2.xD -= 5;
            this.pipe2.draw();
        }
        else{
            this.checkPipe1 = false;
            this.score++;
            this.scoreBoard.update()
        }
        if(this.pipe2.xU < -30){
            this.pipe.createPipe();
            this.checkPipe2 = true;
        } 
    }
    
    slide3(){
        if(this.bird.x >= this.pipe3.xU+110 && this.bird.x <= this.pipe3.xU+110+74 && (this.bird.y < this.pipe3.yU+440 || this.bird.y > this.pipe3.yD-50)){
            this.checkLose = true;
            console.log("lose")
        } 
        if(this.pipe3.xU > -230){
            this.pipe3.xU -= 5;
            this.pipe3.xD -= 5;
            this.pipe3.draw();
        }
        else{
            this.checkPipe2 = false;
            this.score++;
            this.scoreBoard.update()
        }
        if(this.pipe3.xU < -30){
            this.pipe2.createPipe();
            this.checkPipe3 = true;
        }  
    }
}
document.body.style = 'display: flex; justify-content: center;'
var game = new Game(WIDTH, HEIGHT);