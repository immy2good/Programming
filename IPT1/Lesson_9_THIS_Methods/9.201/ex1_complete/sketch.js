
var myPoint;

var myPoints;


function setup()
{
    
    createCanvas(500,500);

    myPoint = createVector(0,200);

    
    myPoints = [];
    
    for(var i = 0; i < 100; i++)
    {
        var v = createVector(random(-250,250),random(-250,250));
        v.normalize();
        v.mult(200);
        myPoints.push(v);
        
    }
    
}

function draw()
{
    
    background(0,0,0);
    fill(255);
    
    
    translate(width/2,height/2);
    
    stroke(128,0,128);
    for(var i = 0; i < myPoints.length; i++)
    {
        line(0,0,myPoints[i].x, myPoints[i].y);
    }
    
    stroke(255);
    line(0,0,myPoint.x, myPoint.y);
    
    
    var v = p5.Vector.mult(myPoint,0.5);
    
    ellipse(v.x,v.y,25,25);
    
    myPoint.rotate(0.01);
    
}

function keyPressed()
{
    
    if(key == 'A')
    {
        myPoint.mult(0.9);
    }
    
    if(key == 'S')
    {
        myPoint.mult(1.1);
    }
 
}


