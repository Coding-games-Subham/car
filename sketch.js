var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200, 300, 50, 20);
  movingRect.shapeColor="green";
  fixedRect=createSprite(400, 400, 20, 50);
  movingRect.shapeColor="green";

}

function draw() {
  background(255,255,255);
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  if(movingRect.x===fixedRect.x{
    movingRect.shapeColor="green";
    movingRect.shapeColor="green";
    
  }  
  drawSprites();
}