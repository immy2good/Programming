
var bus;
var floorPos_y;

function setup()
{

    createCanvas(1200,800);
    floorPos_y = 600;
    bus = {
        x: 200, 
        length: 800, 
        height: 400, 
        wheelDia: 100, 
        driver_pos_x: 0.15,
        passengers: [0.4,0.5,0.6,0.7,0.8]
    };
}

function draw()
{
    
    background(102,179,255);
    
    noStroke();
    fill(130);
    rect(0,floorPos_y,width, height - floorPos_y);
    
    //draw the bus
    stroke(0);
    fill(250,190,0);
    
    rect(
        bus.x, 
        floorPos_y - bus.height, 
        bus.length, 
        bus.height - bus.wheelDia/2,
        200,
        25,
        25,
        25
    );
    
    //the wheels
    fill(100);
    ellipse(
        bus.x + bus.wheelDia, 
        floorPos_y - bus.wheelDia/2,
        bus.wheelDia
    )
    
        ellipse(
        bus.x - bus.wheelDia + bus.length, 
        floorPos_y - bus.wheelDia/2,
        bus.wheelDia
    )
    
    //the windows
    
    fill(0,255,255);
    
    rect(
    bus.x + bus.length * 0.075,
    floorPos_y - bus.height * 0.9, 
    bus.length * 0.2, 
    bus.height * 0.4, 
    150,
    10,
    10,
    10    
    );
    
    rect(
        bus.x + bus.length * 0.3,
        floorPos_y - bus.height * 0.9, 
        bus.length * 0.65, 
        bus.height * 0.4, 
        10);
    

    var basePos_y = floorPos_y - bus.height * 0.9 + bus.height * 0.4;
    var centerPos_x = bus.x + bus.driver_pos_x * bus.length;
    
    drawPerson(
        centerPos_x, 
        basePos_y
    );
    
    for(var i = 0 ; i < bus.passengers.length; i++)
    {
        var centerPos_x = bus.x + bus.passengers[i] * bus.length;
        drawPerson(
            centerPos_x, 
            basePos_y
        );
    }
    
}


function drawPerson(center_pos_x, base_pos_y)
{
    fill(255,50,50);
    rect(center_pos_x - 20, base_pos_y - 80, 
         70, 80,
         10,10,0,0);
    
    fill(255,150,150);
    ellipse(center_pos_x, base_pos_y - 80, 70);
    
    fill(0);
    ellipse(center_pos_x - 20, base_pos_y - 80, 5);
}