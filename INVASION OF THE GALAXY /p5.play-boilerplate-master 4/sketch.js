var player
var Edges
var HQ
function preload(){
playerImg=loadImage("images/player.png")
backgroundImg=loadImage("images/background.png")
bombImg=loadImage("images/bomb.png")
laserImg=loadImage("images/laser.png")
HQImg=loadImage("images/HQ.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
bg=createSprite(displayWidth/2, displayHeight/2)
bg.addImage(backgroundImg)
bg.scale=4
player=createSprite(400, 200, 50, 50);
player.addImage(playerImg)

}

function draw() {
 background(0,0,0);
 Edges=createEdgeSprites()
 player.collide(Edges[1])
 player.collide(Edges[0])
 player.collide(Edges[2])
 player.collide(Edges[3])
if (keyIsDown(UP_ARROW)){
  player.y=player.y-5
}
if (keyIsDown(DOWN_ARROW)){
  player.y=player.y+5
}
if (keyIsDown(RIGHT_ARROW)){
 generateBullet()
}
if (keyIsDown(LEFT_ARROW)){
  generateBomb()
 }
 if (frameCount%200===0)
 generateHQ()
  drawSprites();
}
function generateBullet(){
  var laserSpawn=createSprite(350,200)
  laserSpawn.addImage(laserImg)
laserSpawn.scale=0.5
laserSpawn.y=player.y
laserSpawn.x=player.x
laserSpawn.velocityX=+5
}
function generateBomb(){
  bomb=createSprite(400,200)
bomb.addImage(bombImg)
bomb.scale=0.3
bomb.y=player.y
bomb.x=player.x
bomb.velocityX=+5
}
function generateHQ(){
  HQ=createSprite(displayWidth,random(0,displayHeight))
  HQ.addImage(HQImg)
  HQ.velocityX=-2
}
  
function keyPressed(){
  console.log("entering x")
  if((keyCode==120)){
  laserSpawn.velocityX=+5  
  }
}
function keyPressed(){
  console.log("entering x")
  if((keyCode==120)){
  bomb.velocityX=+5  
  }
}
