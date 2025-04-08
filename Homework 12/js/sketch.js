var shape1;
var shape2;
let myText;

function setup()
{
    createCanvas(800, 500, WEBGL);
    myText = createGraphics(400,400)
    myText.translate(100, 100);
    myText.textSize(36)
    myText.text("''Sometimes", 80, 100)
    myText.text("        A", 80, 130)
    myText.text("    Pizza''", 80, 160)
    myText.text("By Chase Comella", 0, 220)
    myText.textFont('Source Code Pro');
    myText.textAlign(CENTER);
    myText.fill(0, 0, 0);
    myText.noStroke();
}

function draw() {
    background(200);
    image(myText, -width/2 + 600, -height/2 + 150, 150);
    pointLight(255, 255, 255, 0, 0, 100);

    push();
    strokeWeight(0.5);
    stroke(153, 153, 0);
    specularMaterial(255, 255, 153);
    translate(-100, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(100, 200);
    pop();
    
    push();
    strokeWeight(3);
    stroke(128, 96, 0);
    specularMaterial(179, 134, 0);
    translate(-87.5,-122.5);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(165, 50, 150);
    pop();

    push();
    strokeWeight(1);
    stroke(255, 128, 128);
    ambientMaterial(179, 0, 0);
    translate(-130,-75, 75);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    rotateZ(frameCount * 0.11);
    sphere(25);
    pop();

    push();
    normalMaterial();
    translate(-40,-75, 65);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 0.5);
    rotateZ(frameCount * 0.5);
    sphere(25);
    pop();

    push();
    strokeWeight(0.5);
    stroke(128, 0, 0);
    specularMaterial(255, 0, 0);
    translate(-85,-5, 85);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    sphere(25);
    pop();
}
