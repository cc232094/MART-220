//I could not for the life of me get the character to actually cycle through the frames of animation
//The idle animation would work by default, but adding running made the idle animation invisible
//Now both animations won't animate, but now they're both visible
//I assumed it was an issue with the placement of sketch and animationImages in main.html
//But I couldn't tell ya cause swapping them would make the entire thing not work
//I'd have asked for help if it wasn't 11:42pm as of this comment
//I've been working on this since like 6:00pm
var crustX = 105;
var crustY = 75;
var sauceX = 105;
var sauceY = 105;
var cheesePoint = 115;
var crustPosition;
var cheesePosition;

var pizza1, pizza2, chatgptPizza;
var pizza1X = 50, pizza1Y = 250, pizza1Speed = 2;
var pizza2X = 150, pizza2Y = 150, pizza2Speed = 4;
var chatgptPizzaX = 250, chatgptPizzaY = 50;
var myFont, timerText = 0, lastTime = 0;

var animation = [];
var runAnimation = [];
var i = 0; // Index for idle animation
var runIndex = 0; // Index for running animation
var x = 100;
var y = 100;
var foodArray = [];
var idleStrings = [];
var runStrings = [];
var flipX = false;
var score = 0;
var gameTime = 60;

var characterFrames = []; // Idle frames
var runFrames = []; // Running frames

function preload() {
  // Load idle frames and log to confirm successful loading
  idleStrings = loadStrings('data/idle_frames.txt', function(data) {
    console.log("Idle Frames Loaded:", data);  // Log the loaded frame paths
  });
  
  // Load run frames and log to confirm successful loading
  runStrings = loadStrings('data/run_frames.txt', function(data) {
    console.log("Run Frames Loaded:", data);
  });

  // Load idle frames into characterFrames array
  for (let i = 0; i < idleStrings.length; i++) {
    let img = loadImage(idleStrings[i]);
    if (img) {
      characterFrames.push(img);
    } else {
      console.error(`Failed to load idle frame: ${idleStrings[i]}`);
    }
  }

  // Log the number of loaded idle frames
  console.log("Number of idle frames loaded:", characterFrames.length);

  // Load running frames into runFrames array
  for (let i = 0; i < runStrings.length; i++) {
    let img = loadImage(runStrings[i]);
    if (img) {
      runFrames.push(img);
    } else {
      console.error(`Failed to load run frame: ${runStrings[i]}`);
    }
  }

  // Log the number of loaded running frames
  console.log("Number of run frames loaded:", runFrames.length);

  pizza1 = loadImage('images/cheesepizza1.jpg');
  pizza2 = loadImage('images/cheesepizza2.jpg');
  chatgptPizza = loadImage('images/chatgptcheesepizza.jpg');
  myFont = loadFont('fonts/KirangHaerang-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  console.log("Total idle frames loaded: " + characterFrames.length);
  console.log("Total run frames loaded: " + runFrames.length);
  crustPosition = Math.floor(Math.random() * 400);
  cheesePosition = Math.floor(Math.random() * 350);

  // Create character objects for idle and run animations
  for (let i = 0; i < idleStrings.length; i++) {
    animation.push(new Character(idleStrings[i], x, y));
    runAnimation.push(new Character(runStrings[i], x, y));
  }

  setInterval(updateTimer, 1000);

  // Create some food objects
  for (let i = 0; i < 5; i++) {
    foodArray.push(new Food(random(100, 600), random(100, 600), 25));
  }

  // Start food random movement every 2-4 seconds
  setInterval(moveFoodRandomly, random(2000, 4000));
}

function draw() {
  background(220);
  image(pizza1, pizza1X, pizza1Y);
  image(pizza2, pizza2X, pizza2Y);
  image(chatgptPizza, chatgptPizzaX, chatgptPizzaY);

  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].moveRandomly();
    foodArray[i].draw();
  }

  // Handle character animation
  if (keyIsPressed) {
    // If a key is pressed, show the running animation
    runAnimation[runIndex].draw(); // Draw running animation frame
    if (key === "a") {
      x--;
      flipX = true;
    }
    if (key === "d") {
      x++;
      flipX = false;
    }
    if (key === "w") {
      y--;
    }
    if (key === "s") {
      y++;
    }

    // Update the running animation index periodically
    if (frameCount % 6 === 0) {  // Every 6 frames, move to next animation
      updateRunIndex();
    }
  } else {
    // If no key is pressed, show the idle animation
    animation[i].draw(); // Draw idle animation frame

    // Update the idle animation index periodically
    if (frameCount % 6 === 0) {  // Every 6 frames, move to next animation
      updateIdleIndex();
    }
  }

  updateCharacterPositions();
  checkCollisions();
  pizza1X += pizza1Speed;
  if (pizza1X <= 0 || pizza1X >= width - 50) pizza1Speed *= -1;

  pizza2Y -= pizza2Speed;
  if (pizza2Y <= 0 || pizza2Y >= height - 50) pizza2Speed *= -1;

  strokeWeight(2);
  fill(204, 102, 0);
  rect(crustX, crustY, 180, 30);

  if (crustX < crustPosition) crustX += 2;
  else if (crustX > crustPosition) crustX -= 2;

  if (crustY < crustPosition) crustY += 2;
  else if (crustY > crustPosition) crustY -= 2;

  fill(255, 0, 0);
  triangle(sauceX, sauceY, (sauceX + 95), (sauceY + 220), (sauceX + 180), sauceY);

  if (keyIsPressed) {
    if (key == 'f') sauceX -= 5;
    else if (key == 'h') sauceX += 5;
    else if (key == 't') sauceY -= 5;
    else if (key == 'g') sauceY += 5;
  }

  fill(255, 255, 102);
  triangle(cheesePoint, cheesePoint, (cheesePoint + 85), (cheesePoint + 190), (cheesePoint + 160), cheesePoint);

  if (cheesePoint < cheesePosition) cheesePoint += 2;
  else if (cheesePoint > cheesePosition) cheesePoint -= 2;

  fill(0, 0, 0);
  textFont(myFont);
  strokeWeight(4);
  textSize(16);
  text("Favorite Food Dish: Cheese Pizza", 10, 20);
  text("By Chase Comella", 250, 380);
  text("Time Left: " + gameTime, 10, 50);
  text("Score: " + score, 10, 70);

  var currentTime = millis();
  if (currentTime - lastTime >= 1000) {
    lastTime = currentTime;
    timerText++;
    changeSpeed();
  }

  if (gameTime <= 0) {
    textSize(32);
    text("Game Over", width / 2 - 100, height / 2);
    noLoop();
  }
}

function updateTimer() {
  if (gameTime > 0) {
    gameTime--;
  }
}

function updateCharacterPositions() {
  for (let i = 0; i < idleStrings.length; i++) {
    animation[i].flipX = flipX;
    animation[i].x = x;
    animation[i].y = y;
    runAnimation[i].flipX = flipX;
    runAnimation[i].x = x;
    runAnimation[i].y = y;
  }
}

function checkCollisions() {
  for (let k = 0; k < foodArray.length; k++) {
    if (animation[i] && animation[i].hasCollided) {
      if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) {
        foodArray.splice(k, 1);
        score++;
      }
    }
  }
}

function mouseClicked() {
  crustPosition = Math.floor(Math.random() * 400);
  cheesePosition = Math.floor(Math.random() * 350);
  crustX = 105;
  crustY = 75;
  cheesePoint = 115;

  characterX = random(50, 350);
  characterY = random(50, 350);
  characterWidth = random(50, 150);
  characterHeight = random(50, 150);
}

function changeSpeed() {
  if (timerText % 5 == 0) {
    pizza1Speed = random(2, 6);
    pizza2Speed = random(2, 6);
    chatgptPizzaX = random(50, 350);
    chatgptPizzaY = random(50, 350);
  }
}

function updateRunIndex() {
  runIndex++;
  if (runIndex >= runFrames.length) {
    runIndex = 0;
  }
}

function updateIdleIndex() {
  i++;
  if (i >= characterFrames.length) {
    i = 0;
  }
}

function moveFoodRandomly() {
  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].x = random(100, 600);  // Randomize X position
    foodArray[i].y = random(100, 600);  // Randomize Y position
  }
}
