//Hack it - we are the robot family

//TASK 1. modify the code so that all three robots are drawn
//TASK 2. try changing the numbers to create your robot family
//TASK 3. create more arrays and use the values in them to add more variation to the robots


var robotWidths;
var robotHeights;
var headWidths;

function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
    robotWidths = [100,100,120];
    robotHeights = [35,120,110];
    headWidths = [0.7,0.8,1.2];
    noseFills= ['red', 'green', 'orange'];
    earsFills= ['red', 'green', 'orange'];
    
}

function draw()
{
	strokeWeight(2);
    translate(0, 400);

    //ROBOT 1
    translate(200,0);
    // Roboto body
    fill(200);
    rect(-robotWidths[0]/2, -robotHeights[0] - 130, robotWidths[0], 130);
    rect(-70, -robotHeights[0] - 130, 30, 100);
    rect(40,  -robotHeights[0] - 130, 30, 100);
    rect(-30, -robotHeights[0], 30, robotHeights[0]);
    rect(0,  -robotHeights[0], 30, robotHeights[0]);

    //robot heads
    fill(200);
    rect(-50* headWidths[0], -robotHeights[0] - 230, 100* headWidths[0], 100, 10);

    //ears
    // fill(255, 0, 0);
    fill(earsFills[0]);
    rect(-50 * headWidths[0] - 10, -robotHeights[0] - 200, 10, 33);
    rect(50 * headWidths[0], -robotHeights[0] - 200, 10, 33);

    //robots' antennas
    fill(250, 250, 0);
    ellipse(0, -robotHeights[0] - 237, 10, 10);
    fill(200, 0, 200);
    rect(-10, -robotHeights[0] - 233, 20, 10);

    //robot's eyes
    fill(255)
    ellipse(-25 * headWidths[0], -robotHeights[0] - 200, 26, 26);
    point(-25 * headWidths[0], -robotHeights[0] - 200);
    ellipse(25 * headWidths[0], -robotHeights[0] - 200, 26, 26);
    point(25 * headWidths[0], -robotHeights[0] - 200);

    //robots' nose
    fill(noseFills[0]);
    triangle(0, -robotHeights[0] - 190, -15, -robotHeights[0] - 170,15, -robotHeights[0] - 170);

    //robot mouth
    noFill();
    beginShape();
    vertex(-23, -robotHeights[0] - 155);
    vertex(-15, -robotHeights[0] - 145);
    vertex(-9, -robotHeights[0] - 155);
    vertex(-1, -robotHeights[0] - 145);
    vertex(7, -robotHeights[0] - 155);
    vertex(15, -robotHeights[0] - 145);
    vertex(23, -robotHeights[0] - 155);
    endShape();
    
    //ROBOT 2
    translate(200,0);
    // Roboto body
    fill(200);
    rect(-robotWidths[1]/2, -robotHeights[1] - 130, robotWidths[1], 130);
    rect(-70, -robotHeights[1] - 130, 30, 100);
    rect(40,  -robotHeights[1] - 130, 30, 100);
    rect(-30, -robotHeights[1], 30, robotHeights[1]);
    rect(0,  -robotHeights[1], 30, robotHeights[1]);

    //robot heads
    fill(200);
    rect(-50* headWidths[1], -robotHeights[1] - 230, 100* headWidths[1], 100, 10);

    //ears
    // fill(255, 0, 0);
    fill(earsFills[1]);

    rect(-50 * headWidths[1] - 10, -robotHeights[1] - 200, 10, 33);
    rect(50 * headWidths[1], -robotHeights[1] - 200, 10, 33);

    //robots' antennas
    fill(250, 250, 0);
    ellipse(0, -robotHeights[1] - 237, 10, 10);
    fill(200, 0, 200);
    rect(-10, -robotHeights[1] - 233, 20, 10);

    //robot's eyes
    fill(255)
    ellipse(-25 * headWidths[1], -robotHeights[1] - 200, 26, 26);
    point(-25 * headWidths[1], -robotHeights[1] - 200);
    ellipse(25 * headWidths[1], -robotHeights[1] - 200, 26, 26);
    point(25 * headWidths[1], -robotHeights[1] - 200);

    //robots' nose
    // fill(255, 0, 0);
    fill(noseFills[1]);

    triangle(0, -robotHeights[1] - 190, -15, -robotHeights[1] - 170,15, -robotHeights[1] - 170);

    //robot mouth
    noFill();
    beginShape();
    vertex(-23, -robotHeights[1] - 155);
    vertex(-15, -robotHeights[1] - 145);
    vertex(-9, -robotHeights[1] - 155);
    vertex(-1, -robotHeights[1] - 145);
    vertex(7, -robotHeights[1] - 155);
    vertex(15, -robotHeights[1] - 145);
    vertex(23, -robotHeights[1] - 155);
    endShape();
        
    
      //ROBOT 3
      translate(200,0);
      // Roboto body
      fill(200);
      rect(-robotWidths[2]/2, -robotHeights[2] - 130, robotWidths[2], 130);
      rect(-70, -robotHeights[2] - 130, 30, 100);
      rect(40,  -robotHeights[2] - 130, 30, 100);
      rect(-30, -robotHeights[2], 30, robotHeights[2]);
      rect(0,  -robotHeights[2], 30, robotHeights[2]);
  
      //robot heads
      fill(200);
      rect(-50* headWidths[2], -robotHeights[2] - 230, 100* headWidths[2], 100, 10);
  
      //ears
    fill(earsFills[2]);
    //   fill(255, 0, 0);
      rect(-50 * headWidths[2] - 10, -robotHeights[2] - 200, 10, 33);
      rect(50 * headWidths[2], -robotHeights[2] - 200, 10, 33);
  
      //robots' antennas
      fill(250, 250, 0);
      ellipse(0, -robotHeights[2] - 237, 10, 10);
      fill(200, 0, 200);
      rect(-10, -robotHeights[2] - 233, 20, 10);
  
      //robot's eyes
      fill(255)
      ellipse(-25 * headWidths[2], -robotHeights[2] - 200, 26, 26);
      point(-25 * headWidths[2], -robotHeights[2] - 200);
      ellipse(25 * headWidths[2], -robotHeights[2] - 200, 26, 26);
      point(25 * headWidths[2], -robotHeights[2] - 200);
  
      //robots' nose
    //   fill(255, 0, 0);
    fill(noseFills[2]);

      triangle(0, -robotHeights[2] - 190, -15, -robotHeights[2] - 170,15, -robotHeights[2] - 170);
  
      //robot mouth
      noFill();
      beginShape();
      vertex(-23, -robotHeights[2] - 155);
      vertex(-15, -robotHeights[2] - 145);
      vertex(-9, -robotHeights[2] - 155);
      vertex(-1, -robotHeights[2] - 145);
      vertex(7, -robotHeights[2] - 155);
      vertex(15, -robotHeights[2] - 145);
      vertex(23, -robotHeights[2] - 155);
      endShape();

}