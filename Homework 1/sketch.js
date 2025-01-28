function setup(){
    createCanvas(400,400);
}
function draw(){
    strokeWeight(2);
    background(220);
    fill(204, 102, 0);
    rect(105,75,180,30);
    fill(255, 0, 0);
    triangle(105, 105, 200, 325, 285, 105);
    fill(255, 255, 102);
    triangle(115, 115, 200, 305, 275, 115);
    fill(0, 0, 0);
    strokeWeight(4);
    textSize(16);
    text("Favorite Food Dish: Cheese Pizza", 75, 20);
}