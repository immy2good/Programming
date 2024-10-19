

function setup()
{
    createCanvas(500,500);
    background(0);
    stroke(255);
    noFill();
    
    //start the recursion
    recurse(width/2, height/2, 100); 
    
    
    
}


function recurse(x,y,scale)
{
    ellipse(x,y,scale);
}