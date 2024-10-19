

function setup() 
{
    createCanvas(500,500);
}

function draw() 
{

    background(0);



    for(var i = 0; i < 10; i++)
    {
        fill(255,0,255);
        ellipse(50 + i * 50, 50,50,50);
    }
    background(255);
    noLoop()
    // for(var i = 0; i < 10; i++){
    //     for(var j = 0; j < 10; j++){
    //         fill('white');
    //         strokeWeight(5)
    //      point(random(width), random(height));
    //     } 
    //    }
fill (150)
    var gap = 10;
    for(var x = 0; x < width; x += gap){
      for(var y = 0; y < height; y += gap){
        ellipse(x, y, 8, 8);
      }  
    }

//        var gap = 10;
// for(var x = 0; x < width; x += gap){
//   for(var y = 0; y < height; y += gap){
//     ellipse(x, y, 8, 8);
//   }  
// }
    
// var data = [24, 45, 76, 45, 23, 12, 98, 123, 8];

// for(var x = 0 ; x < 9; x++){
//  for(var y = 0 ; y < 9; y++){
//   ellipse(x * 100, y * 100, data[x], data[x]);
//  } 
// }


// 50 50 ellipses and rects
fill('red');
ellipseMode(CORNER);

for(var i = 0; i < 10; i++){
  for(var j = 0; j < 10; j++){
    if(random(100) > 50){
      rect(i * 30, j * 30, 20, 20);
    }else{
      ellipse(i * 30, j * 30, 20, 20);  
    } 
  } 
}

// for(var i = 0; i < 100; i += 10){
//     for(var j = 0; j < 10; j += 2){
//       point(i+20, j);
//     }
//   }
// loop();
// background(255);
// fill(0);
// for(var i = 0; i < 10; i++){
//     for(var j = 0; j < 10; j++){
//      point(random(width), random(height));
//     } 
//    }

 
// }
