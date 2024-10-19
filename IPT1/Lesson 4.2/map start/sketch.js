var map;
var loc;
var pirateFont;


function setup()
{
	createCanvas(800, 600);
	map = loadImage("map.jpg");
	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);

}



function draw()
{
	background(255);
	image(map, 0, 0, width, height);

	noStroke();
	textSize(50);
	fill(0);
	text(loc, 80, 550);

}