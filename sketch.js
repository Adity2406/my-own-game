var bg,bgimg
var shooter,shooterimg

function preload(){
bgimg=loadImage('background.jpg') 
shooterimg=loadImage('shooter.png')
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2)
  bg.addImage(bgimg)

  shooter=createSprite(width/2-400,height/2)
shooter.addImage(shooterimg)
shooter.scale=0.5
}

function draw() {
  background(0);  
  drawSprites();
}
zombieimg=loadImage('zombie.png')





