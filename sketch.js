
var tower, towerImg
var doors,doorimg, doorg
var climber, climberimg, climberg
var ghost,ghostimg,ghostjump

var invirail , invirailg
 var PLAY = 1;
var END = 0;

var gameState  = PLAY

var score = 0

function preload(){
  towerImg = loadImage("tower.png");
  doorimg = loadImage("door.png");
  climberimg = loadImage("climber.png");
  ghostimg = loadImage("ghost-standing.png");
  ghostjump = loadImage("ghost-jumping.png");
}

function setup(){
  createCanvas(600,600)
   tower = createSprite(0,0,600,600);
  tower.addImage("T",towerImg);
  tower.scale = 2;
  tower.velocityY = 2
  
 doorg =  new Group();
  climberg =  new Group();
  invirailg = new Group();
  
  
  ghost = createSprite(70,300,50,60);
  ghost.addImage("gg", ghostimg);
  ghost.scale = 0.4;
}

function draw(){
  background("black"); 
  
     
  
  
  if (gameState === PLAY){
    
  
  if(keyDown("space"))
  {
    ghost.addImage(ghostjump);
    ghost.velocityY = -5
  }
  ghost.velocityY = ghost.velocityY + 0.5
  
  
  if(keyDown("left")){
    ghost.x = ghost.x -3
  }
  
  if(keyDown("right")){
    ghost.x = ghost.x +3
  }

  
  
   if(tower.y > 400){
    tower.y = tower.width/2
  }
  
  
    
  if (climberg.isTouching(ghost)){
    ghost.velocityY =0
    score = score + 1;
    
     
  }
  
  if (invirailg.isTouching(ghost)|| ghost.y > 600){
    
    ghost.destroy()
    gameState = END
    
  }
  
  
  spawnDoors();
  
  drawSprites();
    
  }
  
  if (gameState === END){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
  
  
  
}

function spawnDoors(){
if(frameCount%240 === 0){
  doors = createSprite(230,100,70,100);
  doors.addImage(doorimg);
  doors.velocityY = 1
  climber = createSprite(230,150,70,100);
  climber.addImage(climberimg);
  climber.velocityY = 1
  
  
  invirail = createSprite(230,160,100,10);
  invirailg.add(invirail)
  invirail.velocityY =1;
  
  doors.x = Math.round(random(100,400));
  climber.x = doors.x
  invirail.x = doors.x
  
  
  invirail.lifetime = 600
  climber.lifetime = 600;
  doors.lifetime = 600;
  invirail.visible = false;
  
  doorg.add(doors);
  climberg.add(climber);
  
  
    ghost.depth = doors.depth
  ghost.depth = ghost.depth +1
  
  
  
  
}
}
  