var myRect;

function setup()
{
    createCanvas(800, 600);
    myRect = {
        x: 100, 
        y: 100, 
        width: 300,
        height: 300,
        drawRect : function ()
        {
            rect(this.x, this.y, this.width, this.height);
        }
    }
}

function draw()
{
    fill(0,255,0)
    myRect.drawRect();
}