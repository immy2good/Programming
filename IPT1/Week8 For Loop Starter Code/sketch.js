// var x_pos;
// var y_pos:

// function setup()

// {
//     createCanvas(800, 800)

// }

// function draw () {

//     // background(0)
//     for (var i=10; i> 0; i-=1)
//         {
//             console.log("Hello World!");
//             noStroke()
//             fill(random(0,200),random(0,255),random(0,255))
//             ellipse(
//                 random(10,800),
//                 random(10,800),
//                 50,50)
//         }
// }

// function draw () {

//     // background(0)
//     for (var i=10; i> 0; i-=1)
//         {

//             ellipse(
//                 random(100),
//                 random(100),
//                 10,10)
//         }
// }

// function draw () {
//     background(255)
//     noLoop()
//     for(var i = 0 ; i < 101; i += 1){
//         console.log("hello world!");
//       }
//     //   for(var i = 0; i < 1; i += 10){
//     //     line(0, 0, random(200), random(100));
//     //   }
// }

// var x_pos;
// var y_pos;

// function setup()
// {
//     createCanvas(800, 800);

// }

// function draw() {
//     // noLoop()
//     background(255);
//     fill('black');
//     x_pos = 100;
//     y_pos = 100;

//     for (var i=0; i < 20; i++ )
//     {
//         ellipse(x_pos, y_pos, 20, 20);
//         y_pos+=30;
//         x_pos+=30;
//     }
// }

// var x_pos;
// var y_pos;

// function setup()
// {
//     createCanvas(800, 800);

// }

// function draw() {
//     noLoop()
//     background(255);
//     fill('black');
//     x_pos = 100;
//     y_pos = 100;

//     // for (var i=0; i < 20; i++ )
//     // {
//     //     ellipse(100 + i *30, 100 +i *30 ,20+i *10, 20 +i*5);
//     //     // y_pos+=30;
//     //     // x_pos+=30;
//     //     console.log(x_pos);
//     // }

//     for(var i = 0; i < 10; i++){
//         var x = i * 10;
//         ellipse(x, 10, 20, 20);
//         console.log(x);

//       }
//     // for(var i = 0 ; i < 11; i ++){
//     //         line( i * 10, 10, i * 10, 100);
//     //         line( 0, i * 10, 100, i * 10);
//     //       }

//     for(var i = 1 ; i < 5; i++){
//     console.log(i);
//     }
// var x = 0;

// for(var i = 0; i < 4; i++){
//   x = x + i;
//   console.log("this"+i);
// }

// var x = 0;

// for(var i = 0; i < 4; i++){
//   x = x + i;
//   console.log(x)
// }

// for(var i = 0 ; i < 11; i ++){
//   line( i * 10, 0, i * 10, 100);
//   line( 0, i * 10, 100, i * 10);
// }

// }

//Week 9
// combining loops and conditional statemetns

function setup() {
  createCanvas(800, 800);
  strokeWeight(5);
}

function draw() {
  noLoop();
  // loop(5);
  background(255);
  noFill();
  // stroke(150);
  stroke("red");
  // stroke('blue', 50);
  // stroke(255,200,100,50);
  
  for(var i = 1 ; i <= 300; i++ ){
    if(i < 100){
      stroke(255,0,0);
    }else if(i < 200){
      stroke(0,255,0);
    }else{
      stroke(0,0,255);
    }
    point(i, 0);
  }

  for (var i = 0; i < 9; i++) {
    r = 0;
    if (i > 7) {
      stroke("lightgray");
    }
    if (i > 3) {
      stroke("purple");
      r = 20;
    } else if (i > 1) {
      stroke("orange");
      r = 5;
    } else {
      stroke("blue");
    }

    rect(80 + i * 80 + random(-r, r), 80 + random(-r, r), 60, 60);
    // rect(80, 80 + i * 80, 60, 60);
  }

  for (var i = 0; i < 9; i++) {
    r = 0;
    if (i > 6) {
      stroke("lightgray");
    }
    if (i > 4) {
      stroke("purple");
      r = 20;
    } else if (i > 0) {
      stroke("orange");
      r = 5;
    } else {
      stroke("black");
    }

    rect(80 + i * 80 + random(-r, r), 160 + random(-r, r), 60, 60);
    // rect(80, 80 + i * 80, 60, 60);
  }
// 400 ellipses and 600 rectangles
  // for(var i = 0; i < 1000; i++){
  //   if( i < 200){
  //     ellipse(random(width), random(height), 20, 20);    
  //   }else{
  //     rect(random(width), random(height), 20, 20);    
  //   }
    
  //   if(i >= 800){
  //     ellipse(random(width), random(height), 20, 20);
  //   }
  // }

}
