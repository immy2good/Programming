var map;
var pirateFont;
var treasureX;
var treasureY;
var message = "Pieces-o-nothing!";


function setup()
{
	createCanvas(800, 600);
	map = loadImage("map.jpg");

	treasureX = random(230, 500);
	treasureY = random(100, 330);

	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);
}



function draw()
{
	image(map, 0, 0, width, height);

	fill(0);

	textSize(40);
	textAlign(CENTER, CENTER);
	text("X", treasureX, treasureY);

	textAlign(LEFT);
	textSize(40);
	text("You've found " + message, 30, 550);

}