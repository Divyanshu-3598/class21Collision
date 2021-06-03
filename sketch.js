var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";


  fixedRect1= createSprite(100, 200, 50, 80);
  fixedRect1.shapeColor="green";

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
}
else if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  fixedRect1.shapeColor="green";
}
  drawSprites();
}


function isTouching(movingRect,fixedRect){

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 )
    {
      return true;
  
  }
  else{
    return false;
  }
  
}