'use strict';

class Bomb{

  constructor(speed, text){
    this.x = randomNumberGen(canvasWidth/4, canvasWidth/1.4); //random x between 2 
    this.y = -100; // set to top of screen
    this.speed = speed; // sets the speed based of score
    this.r = 170; // Define the radius(size of the bomb);
    // max letter with is 14 characters.
    this.text = text;// the keyword that will be inside the bomb
    this.armed = true; //triggers damage if still true
  }

  //Draw the bomb on canvas
  show() {
    this.drawBomb();
    this.restoreDefaultStroke();
    this.drawText();
    this.y += this.speed;
  }

  // Draw the bomb and its parts
  drawBomb(){
    // draw the bomb body
    fill(50);
    circle(this.x, this.y, this.r);
    // Draw the fuse
    fill(50);
    ellipse(this.x+50, this.y-70, this.r/5,);
    noFill();
    stroke(255);
    strokeWeight(4);
    arc(this.x+52, this.y-95, 50, 50, 0, HALF_PI);
  }

  // restore the Default stroke settings
  restoreDefaultStroke(){
    strokeWeight(1);
    stroke(0);
    fill(255);
  }

  // write the text content onto the bomb
  drawText(){
    textSize(25);
    textAlign(CENTER);
    text(this.text, this.x, this.y+8);
  }

  explode() {
    // function to command the bomb to explode    
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
    
    push();
    fill('red');
    translate(canvasWidth/2, canvasHeight/2);
    // rotate(frameCount / 50.0);
    star(this.x, this.y, 40+ animationSpeed, 50+ animationSpeed, 10);
    pop();
  
    push();
    fill('yellow');
    translate(canvasWidth/2, canvasHeight/2);
    // rotate(frameCount / 50.0);
    star(this.x, this.y, 20+ animationSpeed, 40+ animationSpeed, 10);
    pop();
  
    push();
    fill('white');
    translate(canvasWidth/2, canvasHeight/2);
    // rotate(frameCount / 50.0);
    star(this.x, this.y, 5 + animationSpeed, 10 + animationSpeed, 10);
    pop();
  }
}