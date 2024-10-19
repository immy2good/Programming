/*
The Game Project

2b - using variables
*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = 432; // NB. we are now using a variable for the floor position

  // NB. We are now using the built-in variables height and width
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  treePos_x = width / 3;
  treePos_y = height / 1.4;

  mountainPos_x = width / 1.6;
  mountainPos_y = floorPos_y;

  canyonPos_x = width/10;
  canyonPos_y = floorPos_y;

  collectable_x = canyonPos_x;
  collectable_y = canyonPos_y;

  sun_x = width/2;
  sun_y = height/4;
}

function draw() {
  background(100, 155, 255); // fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); // draw some green ground

  // Draw the Game Character
  fill(255, 0, 0);
  rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
  fill(255, 150, 150);
  ellipse(gameChar_x, gameChar_y - 55, 40, 40);
  fill(0);
  rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
  rect(gameChar_x + 6, gameChar_y - 10, 10, 10);

  // Draw the Tree

  // Draw the trunk
  fill(120, 100, 19); // Brown color
  rect(treePos_x - 16, treePos_y - 70, 40, 100);

  // Draw the tree top using 3 ellipses
  fill(34, 139, 34); // Green color

  // Bottom ellipse
  ellipse(treePos_x, treePos_y - 70, 150, 60);

  // Middle ellipse
  ellipse(treePos_x, treePos_y - 110, 120, 70);

  // Top ellipse
  ellipse(treePos_x, treePos_y - 140, 80, 50);

  // Draw the Mountain with Two Peaks

  // Draw the smaller peak
  fill(200, 200, 200); // Grey color
  triangle(
	mountainPos_x - 80+70,
	mountainPos_y,
	mountainPos_x + 135+70,
	mountainPos_y,
	mountainPos_x + 40+70,
	mountainPos_y - 150
  );
  // Draw the larger peak
  fill(169, 169, 169); // Grey color
  triangle(
    mountainPos_x - 150,
    mountainPos_y,
    mountainPos_x + 150,
    mountainPos_y,
    mountainPos_x,
    mountainPos_y - 250
  );


  // Draw the snowcap on the larger peak
  fill('white'); // White color
  triangle(
    mountainPos_x - 40,
    mountainPos_y - 180,
    mountainPos_x + 40,
    mountainPos_y - 180,
    mountainPos_x,
    mountainPos_y - 250
  );



  // Draw a cloud made of 3 different-sized ellipses

  fill(255); // White color

  // Left ellipse
  ellipse(150, 100, 80, 60);

  // Middle ellipse
  ellipse(200, 90, 100, 80);

  // Right ellipse
  ellipse(250, 100, 80, 60);

  // draw canyon 
  fill('black');
  rect(canyonPos_x, canyonPos_y, 80, 100)


  // Draw The Sun
  fill('gold');
  ellipse(sun_x, sun_y, 100, 100)

  //Collectable
  fill('skyblue');

  ellipse(collectable_x, collectable_y, 50, 50);
  fill('darkblue')
  ellipse(collectable_x, collectable_y, 40, 40);
  fill('white')
  text("$$$", collectable_x-10, collectable_y)

}

function mousePressed() {
  gameChar_x = mouseX;
  gameChar_y = mouseY;
}
