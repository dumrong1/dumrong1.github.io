var tileCount = 20;
var maxDistance = 120;

var word = 'AHHHH!';
var x, y;
var xSpeed = 2;
var ySpeed = 2;

function setup() {
  createCanvas(600, 600);
  x = width / 2;
  y = height / 2;
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(255,0,0);
  noStroke();
  text(word, x, y);
  
  
  //word animation//
  x += xSpeed;
  y += ySpeed;
  
  var d = dist(mouseX, mouseY, x, y);
  if (d < 100) {
    if (mouseX < x) x = x + 5; 
    if (mouseX > x) x = x - 5;
    if (mouseY < y) y = y + 5; 
    if (mouseY > y) y = y - 5; 
  }

  if (x > width) {
    x = width;      
    xSpeed = -3;
  } 
  if (x < 0) {
    x = 0;         
    xSpeed = 3;
  }
  if (y > height) {
    y = height; 
    ySpeed = -3;
  } 
  if (y < 0) {
    y = 0;
    ySpeed = 3;
  }
  
  //parting animation//
  fill(0);

  for (var gridY = 0; gridY <= height; gridY += 20) {
    for (var gridX = 0; gridX <= width; gridX += 20) {
      var d2 = dist(mouseX, mouseY, gridX, gridY);
      
      var diameter = (d2 / maxDistance) * 25;
      push();
      translate(gridX, gridY);
      rect(0, 0, diameter, diameter);
      pop();
    }
  }
}