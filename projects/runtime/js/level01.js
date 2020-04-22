var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "tomatos", "x": 300, "y": groundY },
                { "type": "tomatos", "x": 600, "y": groundY-10 },
                { "type": "tomatos", "x": 900, "y": groundY-110 },
                { "type": "tomatos", "x": 1200, "y": groundY },
                { "type": "tomatos", "x": 1500, "y": groundY -10},
                { "type": "tomatos", "x": 1800, "y": groundY },
                { "type": "tomatos", "x": 2100, "y": groundY-110 },
                { "type": "tomatos", "x": 2400, "y": groundY },
                { "type": "tomatos", "x": 2700, "y": groundY },
                { "type": "tomatos", "x": 3000, "y": groundY-110 },
                { "type": "tomatos", "x": 3300, "y": groundY },
                { "type": "tomatos", "x": 3600, "y": groundY },
                { "type": "tomatos", "x": 3900, "y": groundY-110 },
                { "type": "tomatos", "x": 4200, "y": groundY },
                { "type": "tomatos", "x": 4500, "y": groundY-110 },
                { "type": "tomatos", "x": 4800, "y": groundY },
                { "type": "tomatos", "x": 5100, "y": groundY-110 },
                { "type": "tomatos", "x": 5400, "y": groundY -10},
                { "type": "tomatos", "x": 5700, "y": groundY },
                { "type": "tomatos", "x": 6000, "y": groundY-110 },
                { "type": "tomatos", "x": 6300, "y": groundY },
                { "type": "tomatos", "x": 6600, "y": groundY },
                { "type": "tomatos", "x": 6900, "y": groundY-110 },
                { "type": "tomatos", "x": 7200, "y": groundY },
                { "type": "tomatos", "x": 7500, "y": groundY-110 },
                { "type": "tomatos", "x": 7800, "y": groundY -10},
                { "type": "tomatos", "x": 8100, "y": groundY },
                {"type": "knife", "x": 400, "y": groundY-25},
                {"type": "knife", "x": 800, "y": groundY-110},
                {"type": "knife", "x": 1200, "y": groundY-25},
                {"type": "knife", "x": 1200, "y": groundY-25},
                {"type": "knife", "x": 1600, "y": groundY-110},
                {"type": "knife", "x": 2000, "y": groundY-25},
                {"type": "knife", "x": 2400, "y": groundY-25},
                {"type": "knife", "x": 2800, "y": groundY-110},
                {"type": "knife", "x": 3200, "y": groundY-25},
                {"type": "knife", "x": 3600, "y": groundY-25},
                {"type": "knife", "x": 4000, "y": groundY-110},
                {"type": "goldenMeatball", "x": 1000, "y": groundY-30},
                {"type": "goldenMeatball", "x": 2000, "y": groundY-89},
                {"type": "goldenMeatball", "x": 3000, "y": groundY-110},
                {"type": "goldenMeatball", "x": 4000, "y": groundY-50},
                {"type": "goldenMeatball", "x": 5000, "y": groundY-70}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        //Tomato Creation
        
        function createRottenTomatos(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);    
        
            var obstacleImage = draw.bitmap('img/Rotten Tomato Image Choice Two.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        }
        
        for (var v = 0; v <= levelData.gameItems.length - 17 ; v++){
         var manyRottenTomatos = levelData.gameItems[v];
         createRottenTomatos(manyRottenTomatos.x, manyRottenTomatos.y );
        }
        
        //Knives
        
        function createEnemy(x, y){
            var enemy =  game.createGameItem('enemy',25);
            var knife = draw.bitmap('img/What Do You Have A Knife NOOO.png');
            knife.x = -25;
            knife.y = -25;
            enemy.addChild(knife);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10;
            
          enemy.onPlayerCollision = function iveMadeContactWithSpace() {
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-10);
            enemy.fadeOut();
};
        enemy.onProjectileCollision = function contactTheSequel(){
            console.log('Halle has hit an enemy');
            game.increaseScore(100);
            enemy.fadeOut();
        };  
        }
        
        for(var k = 27; k <= levelData.gameItems.length-6; k++){
            var knifeIteration = levelData.gameItems[k];
            createEnemy(knifeIteration.x, knifeIteration.y);
        }
        
        function collectableHolyGoldenMeatball(x, y){
            var enemy =  game.createGameItem('enemy',25);
            var goldenMeatball = draw.bitmap('img/The Holy Golden Meatball.png');
            goldenMeatball.x = -25;
            goldenMeatball.y = -25;
            enemy.addChild(goldenMeatball);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            
          enemy.onPlayerCollision = function iveMadeContact() {
            console.log('The enemy has hit Halle');
            game.increaseScore(250);
            enemy.fadeOut();
};
        
        }
        
        
        for(var g = 38; g <= levelData.gameItems.length - 1; g++){
            var gMeatballIteration = levelData.GameItems[g];
            collectableHolyGoldenMeatball(gMeatballIteration.x, gMeatballIteration.y);
        }
        
        
        
        
        
        
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
