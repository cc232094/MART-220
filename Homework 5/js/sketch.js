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

var characterFrames = [];
var animationIndex = 0;
var myFood;
var foodArray = [];
var foodFound = false;
var i = 0;

var characterX = 30, characterY = 150, characterWidth = 100, characterHeight = 150;

function preload() {
    for (let i = 0; i < 10; i++) {
        let path = `images/Idle__00${i}.png`;
        console.log("Loading:", path);
        
        let char = new character(path, characterX, characterY, characterWidth, characterHeight);
        
        characterFrames.push(char);
    }
    
    pizza1 = loadImage('images/cheesepizza1.jpg');
    pizza2 = loadImage('images/cheesepizza2.jpg');
    chatgptPizza = loadImage('images/chatgptcheesepizza.jpg');
    myFont = loadFont('fonts/KirangHaerang-Regular.ttf');
}

function setup() {
    createCanvas(400, 400);
    setInterval(incrementIndex, 100);
    crustPosition = Math.floor(Math.random() * 400);
    cheesePosition = Math.floor(Math.random() * 350);
    for (let i = 0; i < 5; i++) {
        foodArray.push(new Food());
    }
}

function draw() {
    background(220);
    
    image(pizza1, pizza1X, pizza1Y);
    image(pizza2, pizza2X, pizza2Y);
    image(chatgptPizza, chatgptPizzaX, chatgptPizzaY);

    for (let i = 0; i < foodArray.length; i++) {
        foodArray[i].draw();
    }

    if (keyIsPressed) {
        if (key == "a") {
            characterX--;
        }
        if (key == "d") {
            characterX++;
        }
        if (key == "w") {
            characterY--;
        }
        if (key == "s") {
            characterY++;
        }
        for (let i = 0; i < characterFrames.length; i++) {
            characterFrames[i].x = characterX;
            characterFrames[i].y = characterY;
        }
        for (let j = 0; j < foodArray.length; j++) {
            if (characterFrames[i].hasCollided(foodArray[j].x, foodArray[j].y, 25, 25)) {
                foodArray.splice(j, 1);
                
            }
           
            
        }
    }

    pizza1X += pizza1Speed;
    if (pizza1X <= 0 || pizza1X >= width - 50) pizza1Speed *= -1;

    pizza2Y -= pizza2Speed;
    if (pizza2Y <= 0 || pizza2Y >= height - 50) pizza2Speed *= -1;

    if (characterFrames.length > 0) {
        characterFrames[animationIndex].drawAnimation();
    }

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
    text("Time Passed: " + timerText, 10, 50);

    var currentTime = millis();
    if (currentTime - lastTime >= 1000) {
        lastTime = currentTime;
        timerText++;
        changeSpeed();
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

function incrementIndex() {
    animationIndex = (animationIndex + 1) % characterFrames.length;
}
