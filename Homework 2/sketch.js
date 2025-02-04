var crustX = 105;
var crustY = 75;
var sauceX = 105;
var sauceY = 105;
var cheesePoint = 115;
var crustPosition;
var cheesePosition;

function setup(){
    createCanvas(400,400);
    crustPosition = Math.floor(Math.random() * 400);
    cheesePosition = Math.floor(Math.random() * 350);
}
function draw(){
    strokeWeight(2);
    background(220);
    fill(204, 102, 0);
    rect(crustX,crustY,180,30);
    
    if(crustX < crustPosition){
        crustX += 2;
    }else if(crustX > crustPosition){
        crustX -= 2;
    }else if(crustX = crustPosition){
        crustX += 0;
        crustX = crustPosition;
    }
    

    if(crustY < crustPosition){
        crustY += 2;
    }else if(crustY > crustPosition){
        crustY -= 2;
    }else if(crustY = crustPosition){
        crustY += 0;
        crustY = crustPosition;
    }

    fill(255, 0, 0);
    triangle(sauceX, sauceY, (sauceX + 95), (sauceY + 220), (sauceX + 180), sauceY);

    if(keyIsPressed){
          if(key == 'a'){
              sauceX -= 5;
          }else if(key == 'd'){
              sauceX += 5;
          }else if(key == 'w'){
              sauceY -= 5;
          }else if(key == 's'){
              sauceY += 5;
          }
        }

    fill(255, 255, 102);
    triangle(cheesePoint, cheesePoint, (cheesePoint + 85), (cheesePoint + 190), (cheesePoint + 160), cheesePoint);

    if(cheesePoint < cheesePosition){
        cheesePoint += 2;
    }else if(cheesePoint > cheesePosition){
        cheesePoint -= 2;
    }else if(cheesePoint = cheesePosition){
        cheesePoint += 0;
        cheesePoint = cheesePosition;
    }

    fill(0, 0, 0);
    strokeWeight(4);
    textSize(16);
    text("Favorite Food Dish: Cheese Pizza", 10, 20);
    text("By Chase Comella", 250, 380);
}

function mouseClicked() {
    crustPosition = Math.floor(Math.random() * 400);
    cheesePosition = Math.floor(Math.random() * 350);
    crustX = 105;
    crustY = 75;
    cheesePoint = 115;
 }