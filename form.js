class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton('play')
        this.greeting=createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide();
        this.input.hide();

    }
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)
        
        this.input.position(130,160)
        this.button.position(250,200)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount;
            
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(130,100)

        });
    }
   /* play(){
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        player.getPlayerInfo();
        if(allPlayers!==undefined){
            var display_position+=20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPLayers[plr].distance,120,display_position)
        }
    }*/
}