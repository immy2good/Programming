var base_x;
var base_y;
var windows;

function setup() {
  createCanvas(500, 500);
  base_x = width / 2;
  base_y = height - 100;

  // Each window object now includes a color property
  windows = [
    { x: 120, y: 210, w: 50, h: 60, c: color(255) },
    { x: 190, y: 210, w: 50, h: 60, c: color(255) },
    { x: 260, y: 210, w: 50, h: 60, c: color(255) },
    { x: 330, y: 210, w: 50, h: 60, c: color(255) }
  ];
}

function draw() {
  background(150, 180, 255);
  drawHouse();
  drawWindows();
  
  // Draw the ground
  fill(100, 50, 50);
  rect(0, height - 100, width, 200);
  
  // A helpful mouse pointer
  push();
  fill(0);
  noStroke();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}

// Draw House with a square and a triangle roof, and a rect as a door.
function drawHouse() {
  fill(100);
  noStroke();
  rect(100, base_y - 200, 300, 200); // Main house
  fill(255, 0, 0);
  triangle(250, 75, 100, 200, 400, 200);
  fill(100, 0, 255);
  rect(width / 2 - 15, base_y - 50, 30, 50);
}

// Create windows that flicker on or off on click of a mouse.
function drawWindows() {
  noStroke();
  for (var i = 0; i < windows.length; i++) {
    fill(windows[i].c);
    rect(windows[i].x, windows[i].y, windows[i].w, windows[i].h);
  }
}

function mousePressed() {
  for (var i = 0; i < windows.length; i++) {
    // Check if the mouse is inside the current window
    if (mouseX > windows[i].x && mouseX < windows[i].x + windows[i].w &&
        mouseY > windows[i].y && mouseY < windows[i].y + windows[i].h) {
      // Change the color of the window
      windows[i].c = color(0);
    }
  }
}
