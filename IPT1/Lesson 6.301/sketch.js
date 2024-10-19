var wordCloud;
var currentWord;
var wordsX;
var wordsY;
function setup() {
  createCanvas(400, 400);

  // Initialisation
  wordCloud = [];
  currentWord = "";
  //To spread the wods in columns and rows 
  wordsX = [];
  wordsY = [];
  //Method called push, it adds item to hte end of the array
  // wordCloud.push("first");
  // wordCloud.push("second");
  // wordCloud.push("third");
  // wordCloud.push("fourth");

  console.log(wordCloud);
}

function draw() {
  background(220);
  fill(255);
  text(currentWord, 20, 20);
  fill(0);
  // noLoop()

for (var i = 0  ; i<wordCloud.length ; i++)
{

  text(wordCloud[i], wordsX[i], wordsY[i]); 
  textSize(random(10,48));
  fill(random(0,255), random(0,255), random(0,255))
  wordsX[i]+= random(-1,+1);
  wordsY[i] += random(-1,1)
}

}

function keyPressed() 
{
  console.log(keyCode);
  // currentWord += key;
  console.log("Current Word is : "+currentWord);
  if (keyCode == 13)
  {
    wordCloud.push(currentWord);
    currentWord = "";
    wordsX.push(random(width/4, width * 3/4));
    wordsY.push(random(height/4, height * 3/4));

  }
  else{
    currentWord +=key;
  }
  }