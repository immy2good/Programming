var circles = []; 

function setup() 
{ 
    createCanvas(800, 600); 
    background(random(0,255), random(0,255), random(0,255), random(50,100))
    
    for (var i = 0; i < 1000; i++)
    { 
        circles[i] = floor(random(0, 100)); 
    } 
} 

function draw()
{ 
    //draw the circles to the canvas at a random location use the circles array for sizes ignoring any circle under 10 pixels 16 
    //draw circles in red where they are bigger than 50 and blue otherwise 
    noStroke();
    for (var i = 0; i < circles.length; i++)
    {
        if (circles[i] < 10)
        {
            continue;
        }
        if (circles[i] >50) 
        {
            fill(random(0,255),random(0,255),random(0,255),random(50,100));
        }
        else 
        {
            fill(random(0,255),random(0,255),random(0,255),random(50,100));
        }
        ellipse(random(0, width), random(0, height), circles[i], circles[i])
        
    }
    noLoop();

} 
