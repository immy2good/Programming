
var tamagotchi;

function setup()
{
    
    createCanvas(500,500);
    noStroke();
    
    tamagotchi = {

        points: [],
        setup : function ()
        {
            // console.log("setup");
            for(var i=0 ; i < 36; i++)
            {
                var v =createVector(0,0);
                this.points.push(v);
            }
        },
        draw: function()
        {
            // console.log("draw");

        }

    }
    tamagotchi.setup();
    
    
}

function draw()
{
    
    background(0,0,0);
    translate(width/2,height/2);
    tamagotchi.draw();
    
}

function mouseDragged()
{
  

}



