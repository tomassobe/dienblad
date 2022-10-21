let drankje: game.LedSprite = null
let opDienblad = true
let tolerantie = 500

basic.forever(function () {

    basic.showString('3', 100)
    basic.showString('2', 100)
    basic.showString('1', 100)
    basic.showString('GO', 100)

    drankje = game.createSprite(2,2)

    opDienblad = true
    while( opDienblad )
    {
        if( input.acceleration(Dimension.X) > tolerantie )
        {
            if (drankje.get(LedSpriteProperty.X) < 4) 
            {
                drankje.changeXBy( 1 );
            }
            else 
            {
                opDienblad = false;
            }
        }

        if(input.acceleration(Dimension.X) < -tolerantie)
        {
            if(drankje.get(LedSpriteProperty.X) > 0 )
            {
                drankje.changeXBy( -1 )
            }
            else
            {
                opDienblad = false
            }
        }

        if( input.acceleration(Dimension.Y) > tolerantie)
        {
            if(drankje.get(LedSpriteProperty.Y) < 4 )
            {
                drankje.changeYBy(1)
            }
            else
            {
                opDienblad = false
            }
        }

        if (input.acceleration(Dimension.Y) < -tolerantie) {
            if (drankje.get(LedSpriteProperty.Y) > 0) {
                drankje.changeYBy(-1)
            }
            else {
                opDienblad = false
            }
        }

        basic.pause(250);
        basic.clearScreen();
        basic.pause(50);
    }

    game.gameOver()


	
})  
