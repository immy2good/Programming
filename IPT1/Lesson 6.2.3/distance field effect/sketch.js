
var maxDist;
function setup() 
{
    createCanvas(800,800);
    maxDist = dist(0, 0, width/2, height/2 );
    console.log(maxDist);
}
function draw() 
{
    // noLoop();

    background(0);
    fill(255,0,255);
    noStroke();
// noLoop()
//     for(var j = 0; j < 20; j ++)
//     {
//         for(var i = 0; i < 20; i++)
//         {
// //            var w = i + 1;
// //            var h = j + 1;
//             var r = dist(mouseX,mouseY,50 + i * 30,50 + j * 30)/dist(50,50,20*30,20*30);
//             var offset = random(0,1) * r * 20;
//             ellipse(
//             50 + i * 30 + offset,
//             50 + j * 30 + offset,
//             r*30,r*30
//             );
//         }
//     }

    for(var j = 0; j < 20; j ++)
    {
        for(var i = 0; i < 20; i++)
        {
            
            // var offset = 30;
            // var d = dist(width/2, height/2, 50 + i * 30, 50 + j * 30);
            var d = dist(mouseX, mouseY, 50 + i * 30, 50 + j * 30); // Distnace Field 

            var r = d/maxDist;

            ellipse(
            50 + i * 30 ,
            50 + j * 30 ,
            r*30,r*30
            );
        }
    }


    // for ( var j= 0 ; j < 20; j++) // rows
    // {
    //     for(var i = 20; i > 0; i--) // columns
    //     {
    //         // ellipse(50 + i *30, 50 + j *30 , j*2, j*2);
    //         fill(100+mouseY,255-mouseX,100+mouseX)
    //         // ellipse(50 + i *30, 50 + j *30 , j, j);
    //          ellipse(50 + i *30, 50 + j *30 , j+mouseX/50, j+mouseX/40);
    //          ellipse(50 + i *30, 50 + j *30 , j+mouseY/40, j+mouseY/40);


    //         // fill('cyan');
    //         // ellipse(50 + i *30, 50 + j *30 , i+mouseX/40, i+mouseX/40);
    //         // // ellipse(50 + i *30, 50 + j *30 , j, j);



    //     }
    // }

 
}
