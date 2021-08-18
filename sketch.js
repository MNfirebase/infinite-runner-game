var gameState = "play"
function preload(){
playerImage = loadImage("228345.png");
bgImage = loadImage("bg.jpg")
enemyImage = loadImage("enemy.png")
} 

function setup() {
createCanvas(400,400);
bg = createSprite(200,200,400,400)
bg.addImage(bgImage)
bg.velocityX = -4;
player = createSprite(50,330,10,10)
player.addImage(playerImage)
player.scale = 0.15;
ground = createSprite(300,390,600,10)
ground.shapeColor = "red";

enemyGroup = new Group ()
}

function draw() {
 background(0)
 if (gameState === "play") {



 
 if (bg.x < 0) {
     bg.x = bg.width/2
 }
 if (keyDown("space")) {
     player.velocityY = -6
 }
 player.velocityY = player.velocityY+1
 player.collide(ground); 
 if (enemyGroup.isTouching(player)) {
    gameState = "end";
 }
 
 spawnEnemies()
 drawSprites();
}
if (gameState === "end") {
    textSize(25)
    text("Game Over", 200, 200);
}
}
function spawnEnemies() {
    if (frameCount%100 === 0){
        enemy = createSprite(400,370,10,10)
        enemy.addImage(enemyImage)
        enemy.velocityX = -4;
        enemy.scale = 0.15;
        enemyGroup.add(enemy);

    }
}
