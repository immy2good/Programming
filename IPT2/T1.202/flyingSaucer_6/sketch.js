//Topic 1.1 
//Object orientation revisted
//part two

var flyingSaucer;

function setup()
{
    createCanvas(800,600);
    noStroke();
    
  flyingSaucer = new FlyingSaucer(400, 100);
  flyingSaucer1 = new FlyingSaucer(500, 200, 150, 75);
  flyingSaucer2 = new FlyingSaucer(300, 300, 100, 50, 0.75, 0.85, 0.35, 10);
  flyingSaucer3 = new FlyingSaucer(200, 400);
    
    

}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    // flyingSaucer.draw();
    flyingSaucer.draw();
    flyingSaucer1.draw();
    flyingSaucer2.draw();
    flyingSaucer3.draw();
    

    
    

    
    
}

function keyPressed()
{
    flyingSaucer.beamOn = true;
    push(); 
    flyingSaucer.y +=50;
    pop()

}

function keyReleased()
{
    flyingSaucer.beamOn = false;
    
    if (flyingSaucer.y > height/2)
    {
        flyingSaucer.y = 100;
        flyingSaucer.x = random(0,width);
    }

}

class FlyingSaucer {
  constructor(x = 200, y = 100, width = 250, height = 100, window_width = 0.5, 
    window_height = 0.95, base_height = 0.45, num_lights = 30) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.window_width = window_width;
    this.window_height = window_height;
    this.base_height = base_height;
    this.num_lights = num_lights;
    this.brightnesses = [];
    this.beamOn = false;

    this.beam = function () {
      if (random() > 0.25) {
        fill(255, 255, 100, 150);
        beginShape();
        vertex(this.x - 25, this.y + this.height * this.base_height * 0.5);
        vertex(this.x + 25, this.y + this.height * this.base_height * 0.5);
        vertex(this.x + 70, height - 100);
        vertex(this.x - 70, height - 0);
        endShape();
      }
    };

    this.hover = function () {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    };


    this.draw = function () {
          //draw the flying saucer
    if(this.beamOn)
      {
          this.beam();
      }
      
      this.hover();
      
      //draw the window
      fill(175,238,238);
      arc(
          this.x,
          this.y,
          this.width * this.window_width,
          this.height * this.window_height,
          PI,TWO_PI);
      
      //draw the body
      fill(150);
      arc(
          this.x,
          this.y,
          this.width,
          this.height/2,
          PI,TWO_PI);
      
      //draw the base
      fill(50);
      arc(
          this.x,
          this.y,
          this.width,
          this.height * this.base_height,
          0,PI);
      
      //draw the lights
      var incr = (this.width/(this.num_lights -1)); 
      
      for(var i = 0; i < this.num_lights; i++)
      {
          
          var x = this.x - this.width/2 + i * incr;
          fill(this.brightnesses[i]);
          ellipse(
              x,
              this.y,
              5,
              5
          )
          this.brightnesses[i] += 5;
          if(this.brightnesses[i] > 255)
          {
              this.brightnesses[i] = 100;
          }
      }

    }


    for (var i = 0; i < this.num_lights; i++) {
      this.brightnesses.push((i * 20) % 255);
    }
  }
}