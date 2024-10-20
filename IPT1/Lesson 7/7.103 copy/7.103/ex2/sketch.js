
var gameChar_x;
var gameChar_y;
var lives;

function setup()
{

    createCanvas(500,500);
    
    gameChar_x = width/2;
    gameChar_y = height - 50;
    lives= 3;
    
    textSize(30);
}

function draw()
{
    
    background(150,180,255);
    
    drawGameChar();
    
    //draw the ground
    
    fill(100,50,50);
    noStroke();
    
    rect(0,height - 50, width, 50);
    
    text("lives: " + lives, 30,50);
    
    drawThisThing();
}



function drawGameChar()
{
    if(lives <1) 
    {
        return;
    }
    stroke(0);
  	fill(255,0,0);
	rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
	fill(255,150,150);
	ellipse(gameChar_x, gameChar_y - 55,40, 40);
	fill(0);
	rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
	rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
}

function keyPressed(){

    if(key == 'A')
    {
        lives -= 1;  
    }
    else if(key == 'S')
    {
        lives += 1;
    }
    
}

function drawThisThing(){
    var s = 100;
    fill(255)
    line(mouseX - s, mouseY - s, mouseX + s, mouseY + s);
    line(mouseX + s, mouseY - s, mouseX - s, mouseY + s);
  }

// var pos1 = {x:100, y:200};
// var pos2 = {x:500, y:1200};

// pos1.x = pos2.x;
// console.log(pos1.x);

// pos2 = pos1;
// pos1.x = pos2.y;
// console.log(pos1.x);