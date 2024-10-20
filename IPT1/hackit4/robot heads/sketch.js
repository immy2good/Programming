/*
Hack it: Conditionals

Make the robot heads bounce of the sides of the canvas.

You'll need to write several if statements to test if the robots have reached
the edge of the screen.

HINT:
You can easy switch the direction of the robot by mulitplying the current speed
by -1 I.E.

robotSpeed_x *= -1;

Extensions and alternatives
1. Customise the robots and add additional animations, such as flashing antenna
or mouths

2. Instead of bouncing of the edge of the screen make the robots wrap around to the
other corner

3. Make the robots bouce off one another as well. (this is quite tricky so don't
get into it unless you are feeling confident and have the time!)

*/

var robot1_x;
var robot1_y;
var robot1Speed_x;
var robot1Speed_y;

var robot2_x;
var robot2_y;
var robot2Speed_x;
var robot2Speed_y;

function setup()
{
	//create a canvas for the robot
	createCanvas(600, 700);
	robot1_x = random(0, width - 100);
	robot1_y = random(0, height - 100);

	robot2_x = random(0, width - 100);
	robot2_y = random(0, height - 100);

	robot1Speed_x = random(2, 5);
	robot1Speed_y = random(2, 5);

	robot2Speed_x = 0;
	robot2Speed_y = 0;

}

function draw()
{
	background(255);
	strokeWeight(2);

	//robot heads
	fill(200);
	rect(robot1_x, robot1_y, 100, 100, 10);
	rect(robot2_x, robot2_y, 100, 100, 10);


	//ears
	fill(255, 0, 0);

	//robot 1
	rect(robot1_x - 7, robot1_y + 30, 10, 33);
	rect(robot1_x + 97, robot1_y + 30, 10, 33);

	//robot 2
	rect(robot2_x - 7, robot2_y + 30, 10, 33);
	rect(robot2_x + 97, robot2_y + 30, 10, 33);


	//robots' antennas
	fill(250, 250, 0);
	ellipse(robot1_x + 50, robot1_y - 7, 10, 10);
	ellipse(robot2_x + 50, robot2_y - 7, 10, 10);

	fill(200, 0, 200);
	rect(robot1_x + 40, robot1_y - 3, 20, 10);
	rect(robot2_x + 40, robot2_y - 3, 20, 10);

	//robot 1's eyes
	fill(255);
	ellipse(robot1_x + 25, robot1_y + 30, 26, 26);
	point(robot1_x + 25, robot1_y + 30);
	ellipse(robot1_x + 75, robot1_y + 30, 26, 26);
	point(robot1_x + 75, robot1_y + 30);

	//robot 2's eyes
	ellipse(robot2_x + 25, robot2_y + 30, 26, 26);
	point(robot2_x + 25, robot2_y + 30);
	ellipse(robot2_x + 75, robot2_y + 30, 26, 26);
	point(robot2_x + 75, robot2_y + 30);


	//robots' noses
	fill(255, 0, 0);
	triangle(robot1_x + 50, robot1_y + 35, robot1_x + 35, robot1_y + 60, robot1_x + 65, robot1_y + 60);
	triangle(robot2_x + 50, robot2_y + 35, robot2_x + 35, robot2_y + 60, robot2_x + 65, robot2_y + 60);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(robot1_x + 28, robot1_y + 75);
	vertex(robot1_x + 36, robot1_y + 85);
	vertex(robot1_x + 42, robot1_y + 75);
	vertex(robot1_x + 50, robot1_y + 85);
	vertex(robot1_x + 58, robot1_y + 75);
	vertex(robot1_x + 66, robot1_y + 85);
	vertex(robot1_x + 74, robot1_y + 75);
	endShape();

	//robot 2 mouth
	beginShape();
	vertex(robot2_x + 28, robot2_y + 75);
	vertex(robot2_x + 36, robot2_y + 85);
	vertex(robot2_x + 42, robot2_y + 75);
	vertex(robot2_x + 50, robot2_y + 85);
	vertex(robot2_x + 58, robot2_y + 75);
	vertex(robot2_x + 66, robot2_y + 85);
	vertex(robot2_x + 74, robot2_y + 75);
	endShape();

	//update the robots location
	robot1_x += robot1Speed_x;
	robot1_y += robot1Speed_y;
	//robot2_x += robot2Speed_x;
	//robot2_y += robot2Speed_y;

	//place your if statements here

}