function setup()
{
 createCanvas(800, 600);
}

function draw()
{
    background(20);
    fill(128, 0, 128);
    ellipseRow(50, 50, 30, 12);
    fill(0, 128, 128);
    rectRow(50, 100, 30, 12);
    fill(128, 128, 0);
    triangleRow(50, 150, 30, 12);

}

//draws a row of ellipses of a particular size
//starting at coordinates x and y
function ellipseRow(x, y, size, number)
{
    var currentX = x;
    for(var i = 0; i< number; i++)
    {
        ellipse(currentX, y, size, size);
        //increase current x to location of the next ellipse
        currentX += size*1.5;
    }

}

//draws a row of rectangles of a particular size
//so that x and y are the centre coordinates of the first 
//rectangle
function rectRow(x,y, size, number)
{
    var currentX = x-size/2;
    for(var i = 0; i< number; i++)
    {
        rect(currentX, y-size/2, size, size);
        //increase current x to location of the next rectangle
        currentX += size*1.5;
    }
}

//draws a row of triangles of a particular size
//so that x and y are the centre coordinates of the first 
//triangles
function triangleRow(x, y, size, number)
{
    var currentX = x;
    //as the triangles are about the centre point a 
    //variable for half size is useful
    var hSize = size/2
    for(var i = 0; i < number; i++)
    {
        triangle(currentX - hSize, y + hSize, 
                 currentX, y-hSize, 
                 currentX + hSize, y+hSize)
        //increase current x to location of the next triangle
        currentX +=size*1.5; 
    }
}


