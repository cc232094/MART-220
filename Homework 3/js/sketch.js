var crustX = 105;
var crustY = 75;
var sauceX = 105;
var sauceY = 105;
var cheesePoint = 115;
var crustPosition;
var cheesePosition;

var pizza1;
var pizza1X = 50;
var pizza1Y = 250;
var pizza1Speed = 2;
var pizza2;
var pizza2X = 150;
var pizza2Y = 150;
var pizza2Speed = 4;
var chatgptPizza;
var chatgptPizzaX = 250;
var chatgptPizzaY = 50;
var myFont;
var timerText = 0;
var lastTime = 0;


function setup() {
    createCanvas(400, 400);
    pizza1 = loadImage('images/cheesepizza1.jpg', () => console.log("pizza1 loaded"));
    pizza2 = loadImage('images/cheesepizza2.jpg', () => console.log("pizza2 loaded"));
    chatgptPizza = loadImage('images/chatgptcheesepizza.jpg', () => console.log("chatgptPizza loaded"));
    myFont = loadFont('fonts/KirangHaerang-Regular.ttf', () => console.log("Font loaded"));
    crustPosition = Math.floor(Math.random() * 400);
    cheesePosition = Math.floor(Math.random() * 350);
}

function draw() {
    background(220);
    image(pizza1, pizza1X, pizza1Y);
    image(pizza2, pizza2X, pizza2Y);
    image(chatgptPizza, chatgptPizzaX, chatgptPizzaY);
    
    pizza1X += pizza1Speed;
    if (pizza1X <= 0) {
        pizza1X = 50;
        pizza1Speed *= -1;
    } else if (pizza1X >= width - 50) {
        pizza1X = 50;
        pizza1Speed *= -1;
    }
    
    pizza2Y -= pizza2Speed;
    if (pizza2Y <= 0) {
        pizza2Y = 150;
        pizza2Speed *= -1;
    } else if (pizza2Y >= height - 50) {
        pizza2Y = 150;
        pizza2Speed *= -1;
    }

    strokeWeight(2);
    fill(204, 102, 0);
    rect(crustX, crustY, 180, 30);

    if (crustX < crustPosition) {
        crustX += 2;
    } else if (crustX > crustPosition) {
        crustX -= 2;
    }

    if (crustY < crustPosition) {
        crustY += 2;
    } else if (crustY > crustPosition) {
        crustY -= 2;
    }

    fill(255, 0, 0);
    triangle(sauceX, sauceY, (sauceX + 95), (sauceY + 220), (sauceX + 180), sauceY);

    if (keyIsPressed) {
        if (key == 'a') {
            sauceX -= 5;
        } else if (key == 'd') {
            sauceX += 5;
        } else if (key == 'w') {
            sauceY -= 5;
        } else if (key == 's') {
            sauceY += 5;
        }
    }

    fill(255, 255, 102);
    triangle(cheesePoint, cheesePoint, (cheesePoint + 85), (cheesePoint + 190), (cheesePoint + 160), cheesePoint);

    if (cheesePoint < cheesePosition) {
        cheesePoint += 2;
    } else if (cheesePoint > cheesePosition) {
        cheesePoint -= 2;
    }

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
}

function changeSpeed() {
    if (timerText % 5 == 0) {
        pizza1Speed = random(2, 6);
        pizza2Speed = random(2, 6);
        chatgptPizzaX = random(50, 350);
        chatgptPizzaY = random(50, 350);
    }
}