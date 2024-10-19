var rect1;
var drawRect2 = false;

function setup()
{
   createCanvas(800, 600);
   rect1 = {
       x: 100,
       y: 100, 
       size: 200
   };
}

function draw()
{
    background(20);
    fill(128, 0, 128);
    rect(rect1.x, rect1.y, rect1.size, rect1.size);
//    if(drawRect2)
//    {
//        fill(0, 128, 128);
//        rect(rect2.x, rect2.y, rect2.size, rect2.size);
//    }
}

function mousePressed()
{
    drawRect2 = !drawRect2;
}


