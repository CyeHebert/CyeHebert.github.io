var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var parm;
        var forks = [];
        var spagett = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'ivory');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var moomPlate = draw.bitmap('img/moom plate.png');
            moomPlate.x = 1070;
            moomPlate.y = -150;
            moomPlate.scaleX = .75;
            moomPlate.scaleY = .75;
            background.addChild(moomPlate);
            
            var yellowCloud;
            for(var y=0; y<8; y++) {
                yellowCloud = draw.bitmap('img/Yellow Cloud Two.png');
                yellowCloud.x = canvasWidth*Math.random();
                yellowCloud.y = groundY*Math.random();
                background.addChild(yellowCloud);
            }
            
            var meatball;
            for(var i=0;i<5;i++) {
            meatball = draw.bitmap('img/flying meatball.jpg.png');
            meatball.x = canvasWidth*Math.random();
            meatball.y = groundY*Math.random();
            background.addChild(meatball);
            }
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var f=0;f<50;++f) {
                var forksHeight = 300;
                var fork = draw.bitmap('img/forkkkkkkkkk.png');
                fork.x = 200*f;
                fork.y = groundY-forksHeight;
                background.addChild(fork);
                forks.push(fork);
             }
            
            
            
            for(var s = 0;s < 20; s++){
                var spagetti = draw.bitmap('img/Its A Spagett.png');
                spagetti.x = 500*s;
                spagetti.y = groundY - 450;
                background.addChild(spagetti);
                spagett.push(spagetti);
            }
            
            // TODO 4: Part 1 - Add a tree
            parm = draw.bitmap('img/CHEESE!!!!.png');
            parm.x = 500;
            parm.y = 175;
            background.addChild(parm);
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
             parm.x = parm.x - 1;
             if(parm.x < -200) {
             parm.x = canvasWidth;
             }
            
            // TODO 5: Part 2 - Parallax
            for(var j = 0; j < forks.length; j++){
                var eachForkForSpagett = forks[j];
                eachForkForSpagett.x = eachForkForSpagett.x - .5;
                
            }
            
            for(var q = 0; q < spagett.length; q++){
                var pilesOfSpagett = spagett[q];
                pilesOfSpagett.x = pilesOfSpagett.x - .5;
            }
            
            
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
