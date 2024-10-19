var numStars ;
var starPositionX;
var starPositionY;
var starDirectionsX;
var starDirectionsY;
var maxDist;

function setup() {
  createCanvas(400, 400);
  starPositionX = [];
  starPositionY= [  ];
  numStars = 1000;
  starDirectionsX = [];
  starDirectionsY = [];

  
  for (var i=0 ; i < numStars; i++ )
  {
    // starPositionX.push(random(0, width));
    // starPositionY.push(random(0, height));  
    starPositionX.push(width/2);
    starPositionY.push(height/2);
    starDirectionsX.push(random(-1, +1));
    starDirectionsY.push(random(-1, +1));
  
    maxDist = dist(width,height, width/2, height/2);
  }
}

function draw() {
  background(0);
fill(255);
noStroke();
var randomColour = random(100, 255);
fill(randomColour, randomColour, randomColour);

for (var i=0; i< numStars; i++)
{
  var d = dist(width/2, height/2, starPositionX[i], starPositionY[i]);
  // var r=d /50; 
  var s = d/maxDist +1;
  // fill(random(0,255),random(0,255),random(0,255));

  ellipse(starPositionX[i], starPositionY[i], 2, 2);
  starPositionX[i] += starDirectionsX[i]  * s;
  starPositionY[i] += starDirectionsY[i] * s;

  if (d>maxDist)
  {
    starPositionX[i] = width/2;
    starPositionY[i] = height/2;
  }
}


}
