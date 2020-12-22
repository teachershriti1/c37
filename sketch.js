var backgroundImg;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
//var display_position=0;
var database,form,game,player;
function setup(){
    createCanvas(400,400)
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start();

    
}
function draw(){
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }



}
