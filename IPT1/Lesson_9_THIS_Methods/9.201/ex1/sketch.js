
var myPoint;
var mul;
var myPoints; 


function setup()
{
    
    createCanvas(500,500);
    
    myPoint = createVector(0, -200);

    mul = 1;

    myPoints = [];

    // myPoint.rotate(PI *1);
    // myPoint.mult(0.75); // this function multiply the x and y of the vector
    // static version of the method

    for (var i =0 ; i < 100 ; i++) {

        var v = (createVector(
            random(-width/2, width/2),
            random(-height/2, height/2)));
            v.normalize();
            v.mult(100);
        myPoints.push(v);
    }


    
}

function draw()
{
    
    background(0,0,0);
    fill(255);
    stroke(255);
    translate(width/2,height/2);

    var v = p5.Vector.mult(myPoint, mul);
    
    ellipse(v.x, v.y, 50, 50);

    line(0, 0, myPoint.x, myPoint.y)
    
    myPoint.rotate(0.01)

    stroke(255,0,0);

    for (var i = 0 ; i < myPoints.length ; i++)
    {
      line(0,0, myPoints[i].x, myPoints[i].y)  ;

    }
    

    
}

function keyPressed()
{
    if (key == 'A')
    {
        mul -=0.05
        
    }
    else{
        mul += 0.05
    }
}


