class Score{
    constructor(game){
        this.game = game;
        this.init();
        this.update();
        this.scoreBoard;
    }
    init(){
       this.scoreBoard = document.createElement('div');
       this.scoreBoard.onclick = ()=>{
           location.reload();
       }
       document.body.appendChild(this.scoreBoard);
       this.scoreBoard.style = 'height: 100px; width: 300px; border: solid 3px black; margin-top: 0; display: flex; justify-content: center; align-items: center; font-size: 30px;'
    }
    update(){
        this.scoreBoard.innerHTML = "score: " + this.game.score;
    }
    updateLose(){
        this.scoreBoard.innerHTML = "score: " + this.game.score + 'click to restart';
    }
}
