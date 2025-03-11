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
var badFoodArray = [];
var idleStrings = [];
var runStrings = [];
var flipX = false;
var score = 0;
var gameTime = 60;

var characterFrames = []; // Idle frames
var runFrames = []; // Running frames

var backgroundMusic;
var goodFoodSound;
var badFoodSound;

function preload() {
  idleStrings = loadStrings('data/idle_frames.txt');
  runStrings = loadStrings('data/run_frames.txt');

  pizza1 = loadImage('images/cheesepizza1.jpg');
  pizza2 = loadImage('images/cheesepizza2.jpg');
  chatgptPizza = loadImage('images/chatgptcheesepizza.jpg');
  myFont = loadFont('fonts/KirangHaerang-Regular.ttf');
  backgroundMusic = loadSound('sounds/backgroundmusic.ogg');
  goodFoodSound = loadSound('sounds/goodfoodsound.ogg');
  badFoodSound = loadSound('sounds/badfoodsound.ogg');
}

function setup() {
  createCanvas(400, 400);
  crustPosition = Math.floor(Math.random() * 400);
  cheesePosition = Math.floor(Math.random() * 350);

  for (let i = 0; i < idleStrings.length; i++) {
    animation.push(new Character(idleStrings[i], x, y));
    runAnimation.push(new Character(runStrings[i], x, y));
  }

  setInterval(updateTimer, 1000);

  for (let i = 0; i < 5; i++) {
    foodArray.push(new Food(random(100, 600), random(100, 600), 25));
    badFoodArray.push(new BadFood());
  }
  setInterval(moveFoodRandomly, random(2000, 4000));
}

function draw() {
  background(220);
  image(pizza1, pizza1X, pizza1Y);
  image(pizza2, pizza2X, pizza2Y);
  applyGlitchEffect(chatgptPizza, chatgptPizzaX, chatgptPizzaY);

  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].moveRandomly();
    foodArray[i].draw();
  }
  for (let i = 0; i < badFoodArray.length; i++) {
    badFoodArray[i].moveRandomly();
    badFoodArray[i].draw();
  }

  if (keyIsPressed) {
    runAnimation[runIndex].draw();
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

    if (frameCount % 6 === 0) {
      updateRunIndex();
    }
  } else {
    animation[i].draw();
    if (frameCount % 6 === 0) {
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
  }

  if (gameTime <= 0) {
    textSize(32);
    text("Game Over", width / 2 - 100, height / 2);
    noLoop();
  }
}

function applyGlitchEffect(img, x, y) {
  img.loadPixels();

  let glitchWidth = 20;
  for (let i = 0; i < img.height; i++) {
    if (random(1) > 0.95) {
      let glitchStart = int(random(0, img.width - glitchWidth));
      let glitchEnd = glitchStart + glitchWidth;

      for (let j = glitchStart; j < glitchEnd; j++) {
        let offset = int(random(-10, 10));
        let sourceX = j + offset;
        sourceX = constrain(sourceX, 0, img.width - 1);

        for (let k = 0; k < 4; k++) {
          img.pixels[(i * img.width + j) * 4 + k] = img.pixels[(i * img.width + sourceX) * 4 + k];
        }
      }
    }
  }

  img.updatePixels();
  image(img, x, y);
}

function mousePressed() {
  if (backgroundMusic.isPlaying()) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.loop();
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

function isPlayerMoving() {
  return keyIsPressed && (key === 'a' || key === 'd' || key === 'w' || key === 's');
}

function checkCollisions() {
  let currentPlayer;
  if (isPlayerMoving()) {
    currentPlayer = runAnimation[0];
  } else {
    currentPlayer = animation[0];
  }

  for (let k = foodArray.length - 1; k >= 0; k--) {
    let food = foodArray[k];
    let playerX = currentPlayer.x;
    let playerY = currentPlayer.y;
    let playerW = currentPlayer.imageWidth;
    let playerH = currentPlayer.imageHeight;

    if (collideRectRect(playerX, playerY, playerW, playerH, food.x, food.y - food.size, food.size * 2, food.size * 2)) {
      foodArray.splice(k, 1);
      score++;
      goodFoodSound.play();
    }
  }
  for (let k = badFoodArray.length - 1; k >= 0; k--) {
    let badFood = badFoodArray[k];
    if (collideRectRect(currentPlayer.x, currentPlayer.y, currentPlayer.imageWidth, currentPlayer.imageHeight, badFood.x, badFood.y, badFood.size, badFood.size)) {
      badFoodArray.splice(k, 1);
      score--;
      badFoodSound.play();
    }
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
    foodArray[i].x = random(100, 600);
    foodArray[i].y = random(100, 600);
  }
  for (let i = 0; i < badFoodArray.length; i++) {
    badFoodArray[i].x = random(100, 600);
    badFoodArray[i].y = random(100, 600);
  }
}
