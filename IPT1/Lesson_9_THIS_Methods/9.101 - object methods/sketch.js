var kitty;
function setup()
{
    createCanvas(500, 500);
  kitty = {
      x: width/2,
      y: 100, 
      meow: function (xPos, yPos )
      {
        fill(0);
        stroke(0);
        strokeWeight(1);  
        textSize(30);
        text("meow", xPos, yPos);

      }
  }
}

function draw()
{
    stroke(0,0,0);
    strokeWeight(4);
    //V1
    //fill(255,255,255);
    fill(100, 100, 100);

    //outline of the cat
    triangle(kitty.x, kitty.y + 150, kitty.x + 20, kitty.y - 50, kitty.x+100, kitty.y + 150);
    triangle(kitty.x+300,kitty.y+150,kitty.x+280,kitty.y -50,kitty.x+200,kitty.x+150);
    ellipse(kitty.x+150,kitty.y+150,300,300);

    //collar
    fill(230, 0, 0);
    rect(kitty.x+30, kitty.y+270, 240, 30);
    fill(255,255, 0);
    
    // and bell
    fill(255, 255, 0);
    ellipse(kitty.x+150, kitty.y+285, 30,30);
    
    //eyes
    fill(0,0,0);
    stroke(201,226, 59);
    strokeWeight(8);
    
    ellipse(kitty.x+95, kitty.y+120, 30,30);
    ellipse(kitty.x+205, kitty.y+120, 30, 30);
    
    //nose
    fill(255, 180, 180);
    stroke(0,0,0);
    strokeWeight(4);
    triangle(kitty.x+130,kitty.y+160, kitty.x+170, kitty.y+160, kitty.x+150, kitty.y+180)
    
  //mouth
    line(kitty.x+ 150, kitty.y + 180, kitty.x + 150, kitty.y +210);
    line(kitty.x+ 150, kitty.y + 210, kitty.x + 120, kitty.y +220);
    line(kitty.x+ 150, kitty.y + 210, kitty.x + 180, kitty.y +220);
    
    //whiskers
    line(kitty.x+ 130, kitty.y + 190, kitty.x + 25, kitty.y +170);
    line(kitty.x+ 130, kitty.y + 190, kitty.x + 20,  kitty.y + 190);
    line(kitty.x+ 130, kitty.y + 190, kitty.x + 25, kitty.y +210);
    
    line(kitty.x+ 170, kitty.y + 190, kitty.x + 275, kitty.y +170);
    line(kitty.x+ 170, kitty.y + 190, kitty.x + 280, kitty.y +190);
    line(kitty.x+ 170, kitty.y + 190, kitty.x + 275, kitty.y +210);
  //speak 
    kitty.meow(width/2, 450);
    kitty.meow(width/2, 500);


  }