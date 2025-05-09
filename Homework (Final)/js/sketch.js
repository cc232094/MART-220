let myText;
let moveXAmount = 0;
let moveYAmount = 0;
let moveZAmount = 0;
let rotateXAmount = 0;
let rotateYAmount = 0;
let showWallsAndRoof = true;
let showHouse = false;

function preload() {
    planks = loadImage('assets/planks.jpg', true);
    log = loadImage('assets/log.jpg', true);
    stone = loadImage('assets/cobblestone.jpg', true);
    door = loadImage('assets/door.jpg', true);
    // These images appear blurry because unfortunately, I could
    // only find these textures in their original aspect ratios
    craftingTableTop = loadImage('assets/crafting_table_top.png', true);
    craftingTableSide = loadImage('assets/crafting_table_side.png', true);
    craftingTableFront = loadImage('assets/crafting_table_front.png', true);
    furnaceFront = loadImage('assets/furnace_front_on.png', true);
    furnaceSide = loadImage('assets/furnace_side.png', true);
    furnaceTop = loadImage('assets/furnace_top.png', true);
    chestFront = loadImage('assets/chest_front.jpg', true);
    chestSide = loadImage('assets/chest_side.jpg', true);
    chestTop = loadImage('assets/chest_top.jpg', true);
    bedTop = loadImage('assets/bed_top.png', true);
    bedRightSide = loadImage('assets/bed_right_side.png', true);
    bedLeftSide = loadImage('assets/bed_left_side.png', true);
    bedFront = loadImage('assets/bed_front.png', true);
    bedBack = loadImage('assets/bed_back.png', true);
  }

function setup()
{
    createCanvas(1100, 600, WEBGL);
    myText = createGraphics(1400, 800);
    myText.clear();
    myText.textSize(36)
    myText.textFont('Source Code Pro');
    myText.textAlign(CENTER, CENTER);
    myText.fill(0, 0, 0);
    myText.noStroke();
    myText.translate(550, 0)
    myText.text("''Minecraft", 90, 120)
    myText.text("House''", 90, 170)
    myText.text("By Chase Comella", 90, 240)
    myText.text("Press ENTER to Start", 90, 400)
    myText.textSize(20)
    myText.text("Controls:", -300, 200)
    myText.text("A and D = X Movement", -300, 250)
    myText.text("W and S = Y Movement", -300, 300)
    myText.text("Q and E = Z Movement", -300, 350)
    myText.text("Arrow Keys = Rotation", -300, 400)
    myText.text("Spacebar = Walls and Roof Toggle", -300, 450)
}

function draw() {
    background(200);
    normalMaterial();
    noStroke();
    translate(0, 100, -100);

    // Removes text and displays house
    if (keyIsPressed && keyCode === ENTER) {
        showHouse = true;
    }

    if (!showHouse) {
        image(myText, -700, -500);
    } else {
        // XYZ Movement
        if (keyIsDown(87)) {
            moveYAmount -= 2;
        }
        if (keyIsDown(83)) {
            moveYAmount += 2;
        }
        if (keyIsDown(65)) {
            moveXAmount -= 2;
        }
        if (keyIsDown(68)) {
            moveXAmount += 2;
        }
        if (keyIsDown(81)) {
            moveZAmount -= 3;
        }
        if (keyIsDown(69)) {
            moveZAmount += 3;
        }
        // XY Rotation
        if (keyIsDown(LEFT_ARROW)) {
            rotateYAmount -= 0.02;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            rotateYAmount += 0.02;
        }
        if (keyIsDown(UP_ARROW)) {
            rotateXAmount -= 0.02;
        }
        if (keyIsDown(DOWN_ARROW)) {
            rotateXAmount += 0.02;
        }

        translate(moveXAmount, moveYAmount, moveZAmount);
        rotateX(rotateXAmount);
        rotateY(rotateYAmount);

    // Wood Planks
    if (showWallsAndRoof) {
    customBox(-350, 0, -100, 100, 100, 100, planks);
    customBox(-350, -100, -100, 100, 100, 100, planks);
    customBox(-350, -200, -100, 100, 100, 100, planks);
    customBox(-350, -300, -100, 100, 100, 100, planks);
    customBox(-350, 0, -200, 100, 100, 100, planks);
    customBox(-350, -100, -200, 100, 100, 100, planks);
    customBox(-350, -200, -200, 100, 100, 100, planks);
    customBox(-350, -300, -200, 100, 100, 100, planks);
    customBox(-350, -400, -100, 100, 100, 100, planks);
    customBox(-350, -400, -200, 100, 100, 100, planks);
    customBox(-350, -500, -200, 100, 100, 100, planks);
    customBox(-350, -700, -300, 100, 100, 100, planks);
    customBox(-350, 0, -400, 100, 100, 100, planks);
    customBox(-350, -100, -400, 100, 100, 100, planks);
    customBox(-350, -200, -400, 100, 100, 100, planks);
    customBox(-350, -300, -400, 100, 100, 100, planks);
    customBox(-350, -400, -400, 100, 100, 100, planks);
    customBox(-350, -500, -400, 100, 100, 100, planks);
    customBox(-350, 0, -500, 100, 100, 100, planks);
    customBox(-350, -100, -500, 100, 100, 100, planks);
    customBox(-350, -200, -500, 100, 100, 100, planks);
    customBox(-350, -300, -500, 100, 100, 100, planks);
    customBox(-350, -400, -500, 100, 100, 100, planks);
    customBox(-250, 0, 0, 100, 100, 100, planks);
    customBox(-250, -200, 0, 100, 100, 100, planks);
    customBox(-250, -300, 0, 100, 100, 100, planks);
    customBox(-250, -700, -300, 100, 100, 100, planks);
    customBox(-250, 0, -600, 100, 100, 100, planks);
    customBox(-250, -200, -600, 100, 100, 100, planks);
    customBox(-250, -300, -600, 100, 100, 100, planks);
    customBox(-150, 0, 0, 100, 100, 100, planks);
    customBox(-150, -100, 0, 100, 100, 100, planks);
    customBox(-150, -200, 0, 100, 100, 100, planks);
    customBox(-150, -300, 0, 100, 100, 100, planks);
    customBox(-150, -700, -300, 100, 100, 100, planks);
    customBox(-150, 0, -600, 100, 100, 100, planks);
    customBox(-150, -200, -600, 100, 100, 100, planks);
    customBox(-150, -300, -600, 100, 100, 100, planks);
    customBox(-50, -200, 0, 100, 100, 100, planks);
    customBox(-50, -300, 0, 100, 100, 100, planks);
    customBox(-50, -700, -300, 100, 100, 100, planks);
    customBox(-50, 0, -600, 100, 100, 100, planks);
    customBox(-50, -100, -600, 100, 100, 100, planks);
    customBox(-50, -200, -600, 100, 100, 100, planks);
    customBox(-50, -300, -600, 100, 100, 100, planks);
    customBox(50, 0, 0, 100, 100, 100, planks);
    customBox(50, -100, 0, 100, 100, 100, planks);
    customBox(50, -200, 0, 100, 100, 100, planks);
    customBox(50, -300, 0, 100, 100, 100, planks);
    customBox(50, -700, -300, 100, 100, 100, planks);
    customBox(50, 0, -600, 100, 100, 100, planks);
    customBox(50, -200, -600, 100, 100, 100, planks);
    customBox(50, -300, -600, 100, 100, 100, planks);
    customBox(150, 0, 0, 100, 100, 100, planks);
    customBox(150, -200, 0, 100, 100, 100, planks);
    customBox(150, -300, 0, 100, 100, 100, planks);
    customBox(150, -700, -300, 100, 100, 100, planks);
    customBox(150, 0, -600, 100, 100, 100, planks);
    customBox(150, -200, -600, 100, 100, 100, planks);
    customBox(150, -300, -600, 100, 100, 100, planks);
    customBox(250, 0, -100, 100, 100, 100, planks);
    customBox(250, -100, -100, 100, 100, 100, planks);
    customBox(250, -200, -100, 100, 100, 100, planks);
    customBox(250, -300, -100, 100, 100, 100, planks);
    customBox(250, 0, -200, 100, 100, 100, planks);
    customBox(250, -100, -200, 100, 100, 100, planks);
    customBox(250, -200, -200, 100, 100, 100, planks);
    customBox(250, -300, -200, 100, 100, 100, planks);
    customBox(250, -400, -100, 100, 100, 100, planks);
    customBox(250, -400, -200, 100, 100, 100, planks);
    customBox(250, -500, -200, 100, 100, 100, planks);
    customBox(250, -700, -300, 100, 100, 100, planks);
    customBox(250, 0, -400, 100, 100, 100, planks);
    customBox(250, -100, -400, 100, 100, 100, planks);
    customBox(250, -200, -400, 100, 100, 100, planks);
    customBox(250, -300, -400, 100, 100, 100, planks);
    customBox(250, -400, -400, 100, 100, 100, planks);
    customBox(250, -500, -400, 100, 100, 100, planks);
    customBox(250, 0, -500, 100, 100, 100, planks);
    customBox(250, -100, -500, 100, 100, 100, planks);
    customBox(250, -200, -500, 100, 100, 100, planks);
    customBox(250, -300, -500, 100, 100, 100, planks);
    customBox(250, -400, -500, 100, 100, 100, planks);
    customBox(250, 0, -600, 100, 100, 100, planks);
    customBox(250, -200, -600, 100, 100, 100, planks);
    customBox(250, -300, -600, 100, 100, 100, planks);

    // Wood Logs
    customBox(-350, 0, 0, 100, 100, 100, log);
    customBox(-350, -100, 0, 100, 100, 100, log);
    customBox(-350, -200, 0, 100, 100, 100, log);
    customBox(-350, 0, -300, 100, 100, 100, log);
    customBox(-350, -100, -300, 100, 100, 100, log);
    customBox(-350, -200, -300, 100, 100, 100, log);
    customBox(-350, -300, -300, 100, 100, 100, log);
    customBox(-350, -400, -300, 100, 100, 100, log);
    customBox(-350, -500, -300, 100, 100, 100, log);
    customBox(-350, -600, -300, 100, 100, 100, log);
    customBox(-350, 0, -600, 100, 100, 100, log);
    customBox(-350, -100, -600, 100, 100, 100, log);
    customBox(-350, -200, -600, 100, 100, 100, log);
    customBox(-350, -300, -600, 100, 100, 100, log);
    customBox(250, 0, 0, 100, 100, 100, log);
    customBox(250, -100, 0, 100, 100, 100, log);
    customBox(250, -200, 0, 100, 100, 100, log);
    customBox(250, 0, -300, 100, 100, 100, log);
    customBox(250, -100, -300, 100, 100, 100, log);
    customBox(250, -200, -300, 100, 100, 100, log);
    customBox(250, -300, -300, 100, 100, 100, log);
    customBox(250, -400, -300, 100, 100, 100, log);
    customBox(250, -500, -300, 100, 100, 100, log);
    customBox(250, -600, -300, 100, 100, 100, log);
    customBox(250, 0, -600, 100, 100, 100, log);
    customBox(250, -100, -600, 100, 100, 100, log);
    customBox(250, -200, -600, 100, 100, 100, log);
    customBox(250, -300, -600, 100, 100, 100, log);

    // Wood Stairs
    customStairs(-350, -400, -25, planks);
    customStairs(-350, -500, -125, planks);
    customStairs(-350, -600, -225, planks);
    customStairs(-350, -600, -375, planks, true);
    customStairs(-350, -500, -475, planks, true);
    customStairs(-350, -400, -575, planks, true);
    customStairs(-350, -300, -675, planks, true);
    customStairs(-250, -400, -25, planks);
    customStairs(-250, -500, -125, planks);
    customStairs(-250, -600, -225, planks);
    customStairs(-250, -600, -375, planks, true);
    customStairs(-250, -500, -475, planks, true);
    customStairs(-250, -400, -575, planks, true);
    customStairs(-250, -300, -675, planks, true);
    customStairs(-150, -400, -25, planks);
    customStairs(-150, -500, -125, planks);
    customStairs(-150, -600, -225, planks);
    customStairs(-150, -600, -375, planks, true);
    customStairs(-150, -500, -475, planks, true);
    customStairs(-150, -400, -575, planks, true);
    customStairs(-150, -300, -675, planks, true);
    customStairs(-50, -400, -25, planks);
    customStairs(-50, -500, -125, planks);
    customStairs(-50, -600, -225, planks);
    customStairs(-50, -600, -375, planks, true);
    customStairs(-50, -500, -475, planks, true);
    customStairs(-50, -400, -575, planks, true);
    customStairs(-50, -300, -675, planks, true);
    customStairs(50, -400, -25, planks);
    customStairs(50, -500, -125, planks);
    customStairs(50, -600, -225, planks);
    customStairs(50, -600, -375, planks, true);
    customStairs(50, -500, -475, planks, true);
    customStairs(50, -400, -575, planks, true);
    customStairs(50, -300, -675, planks, true);
    customStairs(150, -400, -25, planks);
    customStairs(150, -500, -125, planks);
    customStairs(150, -600, -225, planks);
    customStairs(150, -600, -375, planks, true);
    customStairs(150, -500, -475, planks, true);
    customStairs(150, -400, -575, planks, true);
    customStairs(150, -300, -675, planks, true);
    customStairs(250, -400, -25, planks);
    customStairs(250, -500, -125, planks);
    customStairs(250, -600, -225, planks);
    customStairs(250, -600, -375, planks, true);
    customStairs(250, -500, -475, planks, true);
    customStairs(250, -400, -575, planks, true);
    customStairs(250, -300, -675, planks, true);

    // Wood Door
    customDoor(-50, -50, 37.5, 100, 200, 25, door);

    // Cobblestone Roof Blocks
    customBox(350, -300, 0, 100, 100, 100, stone);
    customBox(350, -400, -100, 100, 100, 100, stone);
    customBox(350, -500, -200, 100, 100, 100, stone);
    customBox(350, -600, -300, 100, 100, 100, stone);
    customBox(350, -700, -300, 100, 100, 100, stone);
    customBox(350, -500, -400, 100, 100, 100, stone);
    customBox(350, -400, -500, 100, 100, 100, stone);
    customBox(350, -300, -600, 100, 100, 100, stone);
    customBox(-450, -300, 0, 100, 100, 100, stone);
    customBox(-450, -400, -100, 100, 100, 100, stone);
    customBox(-450, -500, -200, 100, 100, 100, stone);
    customBox(-450, -600, -300, 100, 100, 100, stone);
    customBox(-450, -700, -300, 100, 100, 100, stone);
    customBox(-450, -500, -400, 100, 100, 100, stone);
    customBox(-450, -400, -500, 100, 100, 100, stone);
    customBox(-450, -300, -600, 100, 100, 100, stone);

    // Cobblestone Roof Stairs
    customStairs(-450, -300, 75, stone);
    customStairs(-450, -400, -25, stone);
    customStairs(-450, -500, -125, stone);
    customStairs(-450, -600, -225, stone);
    customStairs(-450, -600, -375, stone, true);
    customStairs(-450, -500, -475, stone, true);
    customStairs(-450, -400, -575, stone, true);
    customStairs(-450, -300, -675, stone, true);
    customStairs(-350, -300, 75, stone);
    customStairs(-250, -300, 75, stone);
    customStairs(-150, -300, 75, stone);
    customStairs(-50, -300, 75, stone);
    customStairs(50, -300, 75, stone);
    customStairs(150, -300, 75, stone);
    customStairs(250, -300, 75, stone);
    customStairs(350, -300, 75, stone);
    customStairs(350, -400, -25, stone);
    customStairs(350, -500, -125, stone);
    customStairs(350, -600, -225, stone);
    customStairs(350, -600, -375, stone, true);
    customStairs(350, -500, -475, stone, true);
    customStairs(350, -400, -575, stone, true);
    customStairs(350, -300, -675, stone, true);
    }

    // Cobblestone Floor Blocks
    customBox(-350, 100, 0, 100, 100, 100, stone);
    customBox(-350, 100, -100, 100, 100, 100, stone);
    customBox(-350, 100, -200, 100, 100, 100, stone);
    customBox(-350, 100, -300, 100, 100, 100, stone);
    customBox(-350, 100, -400, 100, 100, 100, stone);
    customBox(-350, 100, -500, 100, 100, 100, stone);
    customBox(-350, 100, -600, 100, 100, 100, stone);
    customBox(-250, 100, 0, 100, 100, 100, stone);
    customBox(-250, 100, -100, 100, 100, 100, stone);
    customBox(-250, 100, -200, 100, 100, 100, stone);
    customBox(-250, 100, -300, 100, 100, 100, stone);
    customBox(-250, 100, -400, 100, 100, 100, stone);
    customBox(-250, 100, -500, 100, 100, 100, stone);
    customBox(-250, 100, -600, 100, 100, 100, stone);
    customBox(-250, 100, 100, 100, 100, 100, stone);
    customBox(-150, 100, 0, 100, 100, 100, stone);
    customBox(-150, 100, -100, 100, 100, 100, stone);
    customBox(-150, 100, -200, 100, 100, 100, stone);
    customBox(-150, 100, -300, 100, 100, 100, stone);
    customBox(-150, 100, -400, 100, 100, 100, stone);
    customBox(-150, 100, -500, 100, 100, 100, stone);
    customBox(-150, 100, -600, 100, 100, 100, stone);
    customBox(-50, 100, 0, 100, 100, 100, stone);
    customBox(-50, 100, -100, 100, 100, 100, stone);
    customBox(-50, 100, -200, 100, 100, 100, stone);
    customBox(-50, 100, -300, 100, 100, 100, stone);
    customBox(-50, 100, -400, 100, 100, 100, stone);
    customBox(-50, 100, -500, 100, 100, 100, stone);
    customBox(-50, 100, -600, 100, 100, 100, stone);
    customBox(50, 100, 0, 100, 100, 100, stone);
    customBox(50, 100, -100, 100, 100, 100, stone);
    customBox(50, 100, -200, 100, 100, 100, stone);
    customBox(50, 100, -300, 100, 100, 100, stone);
    customBox(50, 100, -400, 100, 100, 100, stone);
    customBox(50, 100, -500, 100, 100, 100, stone);
    customBox(50, 100, -600, 100, 100, 100, stone);
    customBox(150, 100, 0, 100, 100, 100, stone);
    customBox(150, 100, -100, 100, 100, 100, stone);
    customBox(150, 100, -200, 100, 100, 100, stone);
    customBox(150, 100, -300, 100, 100, 100, stone);
    customBox(150, 100, -400, 100, 100, 100, stone);
    customBox(150, 100, -500, 100, 100, 100, stone);
    customBox(150, 100, -600, 100, 100, 100, stone);
    customBox(150, 100, 100, 100, 100, 100, stone);
    customBox(250, 100, 0, 100, 100, 100, stone);
    customBox(250, 100, -100, 100, 100, 100, stone);
    customBox(250, 100, -200, 100, 100, 100, stone);
    customBox(250, 100, -300, 100, 100, 100, stone);
    customBox(250, 100, -400, 100, 100, 100, stone);
    customBox(250, 100, -500, 100, 100, 100, stone);
    customBox(250, 100, -600, 100, 100, 100, stone);

    // Cobblestone Floor Stairs
    customStairs(-150, 100, 75, stone);
    customStairs(-50, 100, 75, stone);
    customStairs(50, 100, 75, stone);

    // Bed
    customBed(-200, 20, -500, 200, 60, 100, bedTop, planks, bedRightSide, bedLeftSide, bedFront, bedBack);

    // Crafting Table, Furnace, Chest
    customTexturedBox(50, 0, -500, 100, 100, 100, craftingTableFront, craftingTableFront, craftingTableSide, craftingTableSide, craftingTableTop, planks);
    customTexturedBox(150, 0, -500, 100, 100, 100, furnaceFront, furnaceSide, furnaceSide, furnaceSide, furnaceTop, stone);
    customTexturedBox(150, 5, -100, 87.5, 87.5, 87.5, chestSide, chestFront, chestSide, chestSide, chestTop, chestTop);
}
}

function keyPressed() {
    if (key === ' ') {
      showWallsAndRoof = !showWallsAndRoof;
    }
  }

// Created custom shapes to make the textures face the same direction
// on all sides, just like in actual Minecraft
function customBox(x, y, z, w, h, d, textureImg) {
    push();
    translate(x, y, z);
    
    // Front
    push();
    translate(0, 0, d/2);
    texture(textureImg);
    plane(w, h);
    pop();
    
    // Back
    push();
    translate(0, 0, -d/2);
    rotateY(PI);
    texture(textureImg);
    plane(w, h);
    pop();
    
    // Right
    push();
    translate(w/2, 0, 0);
    rotateY(HALF_PI);
    texture(textureImg);
    plane(d, h);
    pop();
    
    // Left
    push();
    translate(-w/2, 0, 0);
    rotateY(-HALF_PI);
    texture(textureImg);
    plane(d, h);
    pop();
    
    // Top
    push();
    translate(0, -h/2, 0);
    rotateX(-HALF_PI);
    texture(textureImg);
    plane(w, d);
    pop();
    
    // Bottom
    push();
    translate(0, h/2, 0);
    rotateX(HALF_PI);
    texture(textureImg);
    plane(w, d);
    pop();
    
    pop();
  }

  function customStairs(x, y, z, textureImg, flipped = false) {
    push();
    translate(x, y, z);
    texture(textureImg);
    if (flipped) {
        rotateY(PI);
      }
      // Top Step
    push();
    // Front
    beginShape();
    vertex(-50, -50, 25, 0, 0);
    vertex(50, -50, 25, 1, 0);
    vertex(50, 50, 25, 1, 1);
    vertex(-50, 50, 25, 0, 1);
    endShape(CLOSE);
  
    // Back
    beginShape();
    vertex(50, -50, -25, 0, 0);
    vertex(-50, -50, -25, 1, 0);
    vertex(-50, 50, -25, 1, 1);
    vertex(50, 50, -25, 0, 1);
    endShape(CLOSE);
  
    // Right
    beginShape();
    vertex(50, -50, 25, 0.5, 0);
    vertex(50, -50, -25, 0, 0);
    vertex(50, 50, -25, 0, 1);
    vertex(50, 50, 25, 0.5, 1);
    endShape(CLOSE);
  
    // Left
    beginShape();
    vertex(-50, -50, -25, 0, 0);
    vertex(-50, -50, 25, 0.5, 0);
    vertex(-50, 50, 25, 0.5, 1);
    vertex(-50, 50, -25, 0, 1);
    endShape(CLOSE);
  
    // Top
    beginShape();
    vertex(-50, -50, -25, 0, 0.5);
    vertex(50, -50, -25, 1, 0.5);
    vertex(50, -50, 25, 1, 1);
    vertex(-50, -50, 25, 0, 1);
    endShape(CLOSE);
  
    // Bottom
    beginShape();
    vertex(-50, 50, 25, 0, 0.5);
    vertex(50, 50, 25, 1, 0.5);
    vertex(50, 50, -25, 1, 1);
    vertex(-50, 50, -25, 0, 1);
    endShape(CLOSE);
    pop();
  
    // Bottom Step
    push();
    translate(0, 25, 25);
    
    // Front
    beginShape();
    vertex(-50, -25, 50, 0, 0.5);
    vertex(50, -25, 50, 1, 0.5);
    vertex(50, 25, 50, 1, 1);
    vertex(-50, 25, 50, 0, 1);
    endShape(CLOSE);
  
    // Back
    beginShape();
    vertex(50, -25, 0, 1, 0.5);
    vertex(-50, -25, 0, 0, 0.5);
    vertex(-50, 25, 0, 0, 1);
    vertex(50, 25, 0, 1, 1);
    endShape(CLOSE);
  
    // Right
    beginShape();
    vertex(50, -25, 50, 0.5, 0.5);
    vertex(50, -25, 0, 1, 0.5);
    vertex(50, 25, 0, 1, 1);
    vertex(50, 25, 50, 0.5, 1);
    endShape(CLOSE);
  
    // Left
    beginShape();
    vertex(-50, -25, 0, 0.5, 0.5);
    vertex(-50, -25, 50, 1, 0.5);
    vertex(-50, 25, 50, 1, 1);
    vertex(-50, 25, 0, 0.5, 1);
    endShape(CLOSE);
  
    // Top
    beginShape();
    vertex(-50, -25, 0, 0, 0.5);
    vertex(50, -25, 0, 1, 0.5);
    vertex(50, -25, 50, 1, 1);
    vertex(-50, -25, 50, 0, 1);
    endShape(CLOSE);
  
    // Bottom
    beginShape();
    vertex(-50, 25, 50, 0, 0.5);
    vertex(50, 25, 50, 1, 0.5);
    vertex(50, 25, 0, 1, 1);
    vertex(-50, 25, 0, 0, 1);
    endShape(CLOSE);
    pop();
  
      pop();
}

  
  
  

  function customDoor(x, y, z, w, h, d, textureImg) {
    push();
    translate(x, y, z);
    texture(textureImg);
    
    // Front
    push();
    translate(0, 0, d/2);
    beginShape();
    vertex(-w/2, -h/2, 0, 0, 0);
    vertex(w/2, -h/2, 0, 1, 0);
    vertex(w/2, h/2, 0, 1, 1);
    vertex(-w/2, h/2, 0, 0, 1);
    endShape(CLOSE);
    pop();
    
    // Back
    push();
    translate(0, 0, -d/2);
    rotateY(PI);
    beginShape();
    vertex(-w/2, -h/2, 0, 1, 0);
    vertex(w/2, -h/2, 0, 0, 0);
    vertex(w/2, h/2, 0, 0, 1);
    vertex(-w/2, h/2, 0, 1, 1);
    endShape(CLOSE);
    pop();
    
    // Right
    push();
    translate(w/2, 0, 0);
    rotateY(HALF_PI);
    beginShape();
    vertex(-d/2, -h/2, 0, 0, 0);
    vertex(d/2, -h/2, 0, 1, 0);
    vertex(d/2, h/2, 0, 1, 1);
    vertex(-d/2, h/2, 0, 0, 1);
    endShape(CLOSE);
    pop();
    
    // Left
    push();
    translate(-w/2, 0, 0);
    rotateY(-HALF_PI);
    beginShape();
    vertex(-d/2, -h/2, 0, 0, 0);
    vertex(d/2, -h/2, 0, 1, 0);
    vertex(d/2, h/2, 0, 1, 1);
    vertex(-d/2, h/2, 0, 0, 1);
    endShape(CLOSE);
    pop();
    
    // Top
    push();
    translate(0, -h/2, 0);
    rotateX(-HALF_PI);
    beginShape();
    vertex(-w/2, -d/2, 0, 0, 0);
    vertex(w/2, -d/2, 0, 1, 0);
    vertex(w/2, d/2, 0, 1, 0.1);
    vertex(-w/2, d/2, 0, 0, 0.1);
    endShape(CLOSE);
    pop();
    
    // Bottom
    push();
    translate(0, h/2, 0);
    rotateX(HALF_PI);
    beginShape();
    vertex(-w/2, -d/2, 0, 0, 0);
    vertex(w/2, -d/2, 0, 1, 0);
    vertex(w/2, d/2, 0, 1, 0.1);
    vertex(-w/2, d/2, 0, 0, 0.1);
    endShape(CLOSE);
    pop();
    
    pop();
  }

  function customTexturedBox(x, y, z, w, h, d, textureFront, textureBack, textureLeft, textureRight, textureTop, textureBottom) {
    push();
    translate(x, y, z);
  
    // FRONT
    beginShape();
    texture(textureFront);
    vertex(-w/2, -h/2, d/2, 0, 0);
    vertex(w/2, -h/2, d/2, 1, 0);
    vertex(w/2, h/2, d/2, 1, 1);
    vertex(-w/2, h/2, d/2, 0, 1);
    endShape(CLOSE);
  
    // BACK
    beginShape();
    texture(textureBack);
    vertex(w/2, -h/2, -d/2, 0, 0);
    vertex(-w/2, -h/2, -d/2, 1, 0);
    vertex(-w/2, h/2, -d/2, 1, 1);
    vertex(w/2, h/2, -d/2, 0, 1);
    endShape(CLOSE);
  
    // RIGHT
    beginShape();
    texture(textureRight);
    vertex(w/2, -h/2, d/2, 0, 0);
    vertex(w/2, -h/2, -d/2, 1, 0);
    vertex(w/2, h/2, -d/2, 1, 1);
    vertex(w/2, h/2, d/2, 0, 1);
    endShape(CLOSE);
  
    // LEFT
    beginShape();
    texture(textureLeft);
    vertex(-w/2, -h/2, -d/2, 0, 0);
    vertex(-w/2, -h/2, d/2, 1, 0);
    vertex(-w/2, h/2, d/2, 1, 1);
    vertex(-w/2, h/2, -d/2, 0, 1);
    endShape(CLOSE);
  
    // TOP
    beginShape();
    texture(textureTop);
    vertex(-w/2, -h/2, d/2, 0, 0);
    vertex(w/2, -h/2, d/2, 1, 0);
    vertex(w/2, -h/2, -d/2, 1, 1);
    vertex(-w/2, -h/2, -d/2, 0, 1);
    endShape(CLOSE);
  
    // BOTTOM
    beginShape();
    texture(textureBottom);
    vertex(-w/2, h/2, -d/2, 0, 0);
    vertex(w/2, h/2, -d/2, 1, 0);
    vertex(w/2, h/2, d/2, 1, 1);
    vertex(-w/2, h/2, d/2, 0, 1);
    endShape(CLOSE);
  
    pop();
  }

  function customBed(x, y, z, w, h, d, textureTop, textureBottom, textureFront, textureBack, textureLeftSide, textureRightSide) {
    push();
    translate(x, y, z);
  
    // FRONT
    beginShape();
    texture(textureFront);
    vertex(-w/2, -h/2, d/2, 0, 0);
    vertex(w/2, -h/2, d/2, 1, 0);
    vertex(w/2, h/2, d/2, 1, 1);
    vertex(-w/2, h/2, d/2, 0, 1);
    endShape(CLOSE);
  
    // BACK
    beginShape();
    texture(textureBack);
    vertex(w/2, -h/2, -d/2, 0, 0);
    vertex(-w/2, -h/2, -d/2, 1, 0);
    vertex(-w/2, h/2, -d/2, 1, 1);
    vertex(w/2, h/2, -d/2, 0, 1);
    endShape(CLOSE);
  
    // RIGHT
    beginShape();
    texture(textureRightSide);
    vertex(w/2, -h/2, d/2, 0, 0);
    vertex(w/2, -h/2, -d/2, 1, 0);
    vertex(w/2, h/2, -d/2, 1, 1);
    vertex(w/2, h/2, d/2, 0, 1);
    endShape(CLOSE);
  
    // LEFT
    beginShape();
    texture(textureLeftSide);
    vertex(-w/2, -h/2, -d/2, 0, 0);
    vertex(-w/2, -h/2, d/2, 1, 0);
    vertex(-w/2, h/2, d/2, 1, 1);
    vertex(-w/2, h/2, -d/2, 0, 1);
    endShape(CLOSE);
  
    // TOP
    beginShape();
    texture(textureTop);
    vertex(-w/2, -h/2, d/2, 0, 0);
    vertex(w/2, -h/2, d/2, 1, 0);
    vertex(w/2, -h/2, -d/2, 1, 1);
    vertex(-w/2, -h/2, -d/2, 0, 1);
    endShape(CLOSE);
  
    // BOTTOM
    beginShape();
    texture(textureBottom);
    vertex(-w/2, h/2, -d/2, 0, 0);
    vertex(w/2, h/2, -d/2, 1, 0);
    vertex(w/2, h/2, d/2, 1, 1);
    vertex(-w/2, h/2, d/2, 0, 1);
    endShape(CLOSE);
  
    pop();
  }