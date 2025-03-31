var idlePaths = [];
var idleAnimation;
var runPaths = [];
var runAnimation;
var attackPaths = [];
var attackAnimation;
var pizzaImage1;
var pizzaImage2;
var chatgptPizzaImage;
var foodArray = [];
var enemyFoodArray = [];
const particles = [];
var score = 0;
var health = 0;
var enemyHealth = [];
for (let i = 0; i < enemyFoodArray.length; i++) {
    enemyHealth.push(5);
}

function preload() {
   idlePaths = loadStrings("assets/idle_frames.txt");
   runPaths = loadStrings("assets/run_frames.txt");
   attackPaths = loadStrings("assets/attack_frames.txt");
}

function setup() {
    createCanvas(800, 500);
    idleAnimation = new animationImage(400, 200, 150, 150);
    idleAnimation.loadAnimation('idle', idlePaths);
    idleAnimation.loadAnimation('run', runPaths);
    idleAnimation.loadAnimation('attack', attackPaths);

    pizzaImage1 = createSprite(random(0, 250), random(100, height), 100, 100, 'static');
    pizzaImage1.img = "assets/cheesepizza1.jpg";
    pizzaImage1.scale = 0.75;
    pizzaImage1.diameter = 200;
    pizzaImage2 = createSprite(random(550, 800), random(100, height), 100, 100, 'static');
    pizzaImage2.img = "assets/cheesepizza2.jpg";
    pizzaImage2.scale = 0.75;
    pizzaImage2.diameter = 200;
    chatgptPizzaImage = createSprite(random(0, 300), random(100, height), 100, 100, 'static');
    chatgptPizzaImage.img = "assets/chatgptcheesepizza.jpg";
    chatgptPizzaImage.scale = 0.50;
    chatgptPizzaImage.diameter = 130;

    for (let i = 0; i < 5; i++) {
        foodArray.push(new Food(random(100, 600), random(100, 600), 25));
        let enemy = new EnemyFood();
        enemy.health = 50;
        enemyFoodArray.push(enemy);
      }
      setInterval(moveFoodRandomly, random(2000, 4000));
}

function draw() {

    background(0, 150, 150);
    let prevY = idleAnimation.currentAnimation.position.y;

    for (let i = foodArray.length - 1; i >= 0; i--) {
        foodArray[i].moveRandomly();
        foodArray[i].draw();

        let d = dist(
            idleAnimation.currentAnimation.position.x, 
            idleAnimation.currentAnimation.position.y, 
            foodArray[i].x, 
            foodArray[i].y
        );
        
        if (d < 100) {
            score += 1;
            foodArray[i].randomPosition();
        }
    }
    for (let i = enemyFoodArray.length - 1; i >= 0; i--) {
        enemyFoodArray[i].draw();
    }
    

    if(kb.pressing('d')) {
        idleAnimation.updatePosition('forward');
        idleAnimation.drawAnimation('run'); 
        if(idleAnimation.isColliding(pizzaImage1)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(pizzaImage2)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(chatgptPizzaImage)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }          
    }
    else if(kb.pressing('a')) {
        idleAnimation.updatePosition('reverse');
        idleAnimation.drawAnimation('run'); 
        if(idleAnimation.isColliding(pizzaImage1)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(pizzaImage2)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(chatgptPizzaImage)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }          
    }
    else if(kb.pressing('w')) {
        idleAnimation.updatePosition('up');
        idleAnimation.drawAnimation('run');
        idleAnimation.currentAnimation.position.y -= 1; 
        if(idleAnimation.isColliding(pizzaImage1)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(pizzaImage2)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(chatgptPizzaImage)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }          
    }
    else if(kb.pressing('s')) {
        idleAnimation.updatePosition('down');
        idleAnimation.drawAnimation('run');
        idleAnimation.currentAnimation.position.y += 1; 
        if(idleAnimation.isColliding(pizzaImage1)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(pizzaImage2)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }
        if(idleAnimation.isColliding(chatgptPizzaImage)){
            idleAnimation.drawAnimation('idle');
            idleAnimation.updatePosition('idle');
        }          
    }
    else {
        idleAnimation.drawAnimation('idle');
    }
    for (let i = enemyFoodArray.length - 1; i >= 0; i--) {
        let enemy = enemyFoodArray[i];
        enemy.draw();

        if (kb.pressing('x')) {
            idleAnimation.drawAnimation('attack');

            let distance = dist(
                idleAnimation.currentAnimation.position.x,
                idleAnimation.currentAnimation.position.y,
                enemy.x,
                enemy.y
            );
            if (distance < 150) {
                createParticles(enemy.x, enemy.y);
                enemy.health -= 1;
                if (enemy.health <= 0) {
                    enemyFoodArray.splice(i, 1);
                }
            }
        }
    }
    if (!kb.pressing('w') && !kb.pressing('s')) {
        idleAnimation.verticalDirection = "";
    }
    //This keeps collision from causing the character to uncontrollably move up or down
    //The character can still move up and down after collision, but with more control 
    if (idleAnimation.isColliding(pizzaImage1) || 
    idleAnimation.isColliding(pizzaImage2) || 
    idleAnimation.isColliding(chatgptPizzaImage)) {
    idleAnimation.currentAnimation.position.y = prevY;
    idleAnimation.currentAnimation.velocity.y = 0;  
}
updateParticles();
if (enemyFoodArray.length === 0) {
    textSize(60);
    fill(255, 255, 0);
    text("You Win", width / 2 - 100, 50);
    noLoop();
}

    noStroke();
    textSize(16);
    fill(255, 255, 0);
    text("Score: " + score, 20, 20);
}

function moveFoodRandomly() {
    for (let i = 0; i < foodArray.length; i++) {
      foodArray[i].x = random(100, 600);
      foodArray[i].y = random(100, 600);
    }
  }

  function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

function createParticles(x, y) {
    for (let i = 0; i < 5; i++) {
        let p = new Particle(x, y);
        particles.push(p);
    }
}

