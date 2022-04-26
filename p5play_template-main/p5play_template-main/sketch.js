var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200, 200, 50, 50)
}

function draw() 
{
  background(60);

if (keyIsDown(UP_ARROW)){
box.y=box.y-20
}
if (keyIsDown(DOWN_ARROW)){
  box.y=box.y+20
  }
   if (keyIsDown(RIGHT_ARROW)){
    box.x=box.x+20
    }
    if (keyIsDown(LEFT_ARROW)){
      box.x=box.x-20
      }

drawSprites();
}




