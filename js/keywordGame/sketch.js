'use strict';

// Define the canvas size
var canvasWidth = 800;
var canvasHeight = 800;

// Define the brick size
var brickWidth = 40;
var brickHeight = 10;

// Global Variable to capture milliseconds
var animationSpeed;

// Starting game speed
var gameSpeed = 1;

// Game On off button
var gamePlaying = false;

// Computer life
var computerHealth = 3;

// Bomb instance variables 
var bomb = new Bomb(1, seenKeywords[seenKeywords.length-1]); 

var bombArray = [];

// function to generate a new bomb
function generateNewBomb(){
  bomb = new Bomb(gameSpeed, seenKeywords[seenKeywords.length-1]);
}

// generated the brick wall
function showBricks(){
  // fill(150,25,25);
  fill('#6f6969');

  for(var i = 0; i < (canvasHeight/brickHeight) + 2 ; i++) {
    for(var j = 0; j < (canvasWidth/brickWidth) + 2 ; j++){
      if(j % 3 === 0){
        fill('#4e4e4e');
      } else if(j % 2 === 0 && i % 11 === 0){
        fill('#4b5a2a');
      } else if(j % 2 === 0){
        fill('#53634b')
      } else if(j % 7 === 0){
        fill('#43513a');
      }
      if( i % 2 === 0){
        rect(j*43, i*13, brickWidth, brickHeight);
      } else{
        rect((j*43-20), i*13, brickWidth, brickHeight);
      }
      fill('#6f6969');
    }
  }
}

// Generate the ground ellipse
function showGround(){
  // var groundColor = '#7de83a';
  var groundColor = '#8c5500';
  fill(groundColor);
  noStroke();
  ellipse((canvasWidth/2), (canvasHeight*2.1), (canvasHeight*2.5));
  stroke(1);
}

//Generate the computer. Takes a 'string' argument
function renderComputer(condition){
  var computerColor = '#a39e81';
  var computerScreenColor = '#e8e8e6';
  var computerX = (canvasWidth/2) - 50;
  var computerY = (canvasHeight) - 200;
  var screenX = computerX + 13;
  var screenY = computerY + 10;

  //render box
  fill(computerColor);
  rect(computerX, computerY, 100,150);

  //render screen
  fill(computerScreenColor);
  rect(screenX, screenY, 75, 75);

  //render floppy drive
  fill(0);
  rect(screenX + 40, screenY + 100 , 30, 1);

  // render computer with smile
  function happyComputer(){
    fill(0);
    rect(screenX+22, screenY+20, 1, 10);
    rect(screenX+52, screenY+20, 1, 10);

    noFill();
    arc(screenX+37, screenY+40, 40, 40, 0, PI);

  }

  // render computer with frown
  function sadComputer(){
    fill(0);
    rect(screenX+22, screenY+20, 1, 10);
    rect(screenX+52, screenY+20, 1, 10);

    noFill();
    arc(screenX+38, screenY+60, -40, -40, PI, TWO_PI);
  }

  // Render computer with flat line
  function worriedComputer(){
    fill(0);
    rect(screenX+22, screenY+20, 1, 10);
    rect(screenX+52, screenY+20, 1, 10);

    fill(0);
    rect(screenX+18, screenY+45, 40, 2);
  }

  // render computer with X for eyes.
  function deadComputer(){
    fill(0);
    line(screenX+18, screenY+15, screenX+28, screenY+25);
    line(screenX+18, screenY+25,screenX+28, screenY+15);

    line(screenX+57, screenY+25, screenX+47, screenY+15);
    line(screenX+57, screenY+15,screenX+47, screenY+25);

    fill(0);
    rect(screenX+18, screenY+45, 40, 5);
  }

  // Conditional logic for the eyes
  if(condition === 'happy'){
    happyComputer();
  } else if (condition === 'worried'){
    worriedComputer();
  } else if (condition === 'sad') {
    sadComputer();
  } else {
    deadComputer();
  }
}


var setup = function(){ //eslint-disable-line
  var myCanvas = createCanvas(canvasWidth, canvasHeight); //eslint-disable-line
  myCanvas.parent('viewport');
};

function draw() {
  animationSpeed = millis()/10;
  background(220); //eslint-disable-line

  showBricks();
  showGround();

  // --------- WIP ------------
  gameController();
  bomb.show();
}

// ===============================================
// TODO - This is for testing. Needs to be in the game start function
generateNewBomb();

// Explosion animation needs to be moved into bomb class
//Might need to get rid of this
function explode(){
  push();
  fill('red');
  translate(canvasWidth/2, canvasHeight/2);
  // rotate(frameCount / 50.0);
  star(0, 0, 40+ animationSpeed, 50+ animationSpeed, 10);
  pop();

  push();
  fill('yellow');
  translate(canvasWidth/2, canvasHeight/2);
  // rotate(frameCount / 50.0);
  star(0, 0, 20+ animationSpeed, 40+ animationSpeed, 10);
  pop();

  push();
  fill('white');
  translate(canvasWidth/2, canvasHeight/2);
  // rotate(frameCount / 50.0);
  star(0, 0, 5 + animationSpeed, 10 + animationSpeed, 10);
  pop();

  // This the helper function to make the explosion animation
  function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
