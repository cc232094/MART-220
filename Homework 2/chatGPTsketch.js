let crustX, crustY;
let cheeseX, cheeseY;
let sauceX, sauceY;
let startCrustX, startCrustY;
let startCheeseX, startCheeseY;

function setup() {
  createCanvas(600, 600);
  
  // Set initial positions
  startCrustX = width / 2 - 100;
  startCrustY = height / 2 + 50;
  crustX = startCrustX;
  crustY = startCrustY;
  
  startCheeseX = width / 2;
  startCheeseY = height / 2;
  cheeseX = startCheeseX;
  cheeseY = startCheeseY;
  
  sauceX = width / 2;
  sauceY = height / 2;
}

function draw() {
  background(220);
  
  // Title text
  textSize(20);
  fill(0);
  text("Moving Pizza", 10, 25);
  
  // Crust (rectangle)
  fill(210, 180, 140);
  rect(crustX, crustY, 200, 30);
  
  // Sauce (triangle) - Controlled with WASD
  fill(200, 50, 50);
  triangle(sauceX - 100, sauceY + 50, sauceX + 100, sauceY + 50, sauceX, sauceY - 100);
  
  // Cheese (slightly smaller triangle)
  fill(255, 223, 0);
  triangle(cheeseX - 90, cheeseY + 40, cheeseX + 90, cheeseY + 40, cheeseX, cheeseY - 90);
  
  // Name in the bottom right
  textSize(16);
  fill(0);
  text("Created by p5.js Resource Chat", width - 200, height - 10);
}

function keyPressed() {
  let speed = 10;
  if (key === 'W' || key === 'w') {
    sauceY -= speed;
  } else if (key === 'S' || key === 's') {
    sauceY += speed;
  } else if (key === 'A' || key === 'a') {
    sauceX -= speed;
  } else if (key === 'D' || key === 'd') {
    sauceX += speed;
  }
}

function mousePressed() {
  // Reset crust and cheese to start, then move to random locations
  crustX = startCrustX + random(-100, 100);
  crustY = startCrustY + random(-50, 50);
  
  cheeseX = startCheeseX + random(-100, 100);
  cheeseY = startCheeseY + random(-50, 50);
}
