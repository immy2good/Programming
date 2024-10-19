
var sizes = [4, 9, 10, 5, 110, 95, 40, 40];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Naptune"];
var colours = ['grey', "brown", "green", "red", "sienna", "pink", "blue", "cyan" ];
function setup()
{
	createCanvas(1000, 600);
}



function draw()
{
	background(0)
	textAlign(CENTER);
	// fill('red');
	// text("WHAT IS IT", width/2, height/2);
	fill(255);

	fill(colours[0]);
	ellipse(50, height/2, sizes[0]);
	text(names[0], 50, height/2 +150);

	fill(colours[1]);
	ellipse(175, height/2, sizes[1]);
	text(names[1], 175, height/2 +150);
	
	fill(colours[2]);
	ellipse(300, height/2, sizes[2]);
	text(names[2], 300, height/2 +150);
	fill(colours[3]);
	ellipse(425, height/2, sizes[3]);
	text(names[3], 425, height/2 +150);
	fill(colours[4]);
	ellipse(550, height/2, sizes[4]);
	text(names[4], 550, height/2 +150);
	fill(colours[5]);
	ellipse(675, height/2, sizes[5]);
	text(names[5], 675, height/2 +150);
	fill(colours[6]);
	ellipse(800, height/2, sizes[6]);
	text(names[6], 800, height/2 +150);
	fill(colours[7]);
	ellipse(925, height/2, sizes[7]);
	text(names[7], 925, height/2 +150);



}