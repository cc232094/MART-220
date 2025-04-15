let guy;
let myText;
let shapes = [];
let guyTexture, boxTexture, sphereTexture, cylinderTexture, coneTexture, foldTexture;

function preload() {
    guy = loadModel('assets/guy.obj', true);
    guyTexture = loadImage('assets/guy.jpg');
    boxTexture = loadImage('assets/cardboard.jpg');
    sphereTexture = loadImage('assets/ball.jpg');
    cylinderTexture = loadImage('assets/can.png');
    coneTexture = loadImage('assets/cone.jpg');
    foldTexture = loadImage('assets/paper.jpg');
  }

  function setup() {
    createCanvas(700, 600, WEBGL);
    myText = createGraphics(400,400)
    myText.translate(0, 200);
    myText.textSize(36)
    myText.textAlign(LEFT);
    myText.fill(0, 0, 0);
    myText.noStroke();
    myText.background(255, 255, 255, 0);
    myText.text("'Guy with Items'", 0, 100)
    myText.text("By Chase Comella", 0, 160)
    myText.textFont('Source Code Pro');

    shapes.push({ id: 'cone', type: 'cone', pos: [200, -100, 200], rotSpeed: 0.01, size: [25, 100] });
    shapes.push({ id: 'sphere', type: 'sphere', pos: [-150, -150, 0], rotSpeed: 0.15, size: [50] });
    shapes.push({ id: 'cylinder', type: 'cylinder', pos: [-175, 0, 200], rotSpeed: 0.1, size: [30, 50] });
    shapes.push({ id: 'box', type: 'box', pos: [-200, 200, 0], rotSpeed: 0.05, size: [75, 75, 75] });
  }
  
  function draw() {
    background(200);
    strokeWeight(0);
    
    push();
    scale(1.75);
    translate(0, 0, 10);
    rotateX(140);
    rotateX(frameCount * 0.0005);
    rotateY(90);
    rotateY(frameCount * 0.0005);
    texture(guyTexture);
    model(guy);
    pop();
    
    for (let s of shapes) {
        push();
        translate(...s.pos);
        rotateX(frameCount * s.rotSpeed);
        rotateY(frameCount * s.rotSpeed);
        rotateZ(frameCount * s.rotSpeed);

        if (s.type === 'cone') {
            texture(coneTexture);
            cone(...s.size);
        } else if (s.type === 'sphere') {
            texture(sphereTexture);
            sphere(...s.size);
        } else if (s.type === 'cylinder') {
            texture(cylinderTexture);
            cylinder(...s.size);
        } else if (s.type === 'box') {
            texture(boxTexture);
            box(...s.size);
        }
        pop();
      }

    push();
    translate(200, 100, 0);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
    texture(foldTexture);
    beginShape();
    vertex(0, 0, 125, 0, 0);
    vertex(25, 0, 25, 1, 0);
    vertex(25, 25, 75, 1, 1);
    vertex(0, 25, 25, 0, 1);
    endShape(CLOSE);
    pop();

    image(myText, -width/2 + 550, -height/2 + 200, 150);
  }
  function mousePressed() {
    for (let s of shapes) {
      if (s.id === 'cone' || s.id === 'cylinder') {
        s.pos = [
          random(-200, 200), random(-200, 200), 200
        ];
      }
    }
  }