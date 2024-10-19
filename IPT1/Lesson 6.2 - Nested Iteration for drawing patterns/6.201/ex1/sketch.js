

function setup() 
{
    createCanvas(800,800);
}

function draw() 
{

    background(0);
    fill(255,0,255);

    for(var j = 0; j < 10; j ++)
    {
        for(var i = 0; i < 10; i++)
        {
              ellipse(i * 30,j * 30,30,30);
        }
    }

 
}
