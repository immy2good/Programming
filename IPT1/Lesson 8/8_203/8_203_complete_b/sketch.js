
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
        driver: {},
        passengers: []
    };
    
    bus.driver = {
        pos_x: 0.15, 
        height: 80, 
        headSize: 70,
        bodyWidth: 65
    };
    
    for(var i = 0; i < 6; i++)
    {
        var o = {
            pos_x: 0.35 + i * 0.1, 
            height: random(30,60), 
            headSize: random(40,50),
            bodyWidth: random(25,45)
        }
        bus.passengers.push(o);
    }
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
    var centerPos_x = bus.x + bus.driver.pos_x * bus.length;
    
    drawPerson(
        centerPos_x, 
        basePos_y,
        bus.driver
    );
    
    
    for(var i = 0 ; i < bus.passengers.length; i++)
    {
        var centerPos_x = bus.x + bus.passengers[i].pos_x * bus.length;
        drawPerson(
            centerPos_x, 
            basePos_y,
            bus.passengers[i]
        );
    }
    
    bus.x -=1;
  
}


function drawPerson(center_pos_x, base_pos_y, attributes)
{
    fill(255,50,50);
    rect(
        center_pos_x - attributes.bodyWidth/2, 
        base_pos_y - attributes.height, 
        attributes.bodyWidth, 
        attributes.height,
         10,10,0,0);
    
    var headpos = center_pos_x - attributes.bodyWidth/4;
    
    //the head
    fill(255,150,150);
    ellipse(headpos, base_pos_y - attributes.height, attributes.headSize);
    
    //the eye
    fill(0);
    ellipse(headpos - attributes.headSize/4, base_pos_y - attributes.height, 5);
}