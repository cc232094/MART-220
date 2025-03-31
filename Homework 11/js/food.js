class Food {
    constructor() {
        this.x = random(50, width - 50);
        this.y = random(50, height - 50);
        this.size = 25;
        this.isMoving = false;
    }

    draw() {
        stroke(0)
        fill(255, 255, 0);
        strokeWeight(2);
        triangle(
            this.x, this.y - this.size,
            this.x - this.size, this.y + this.size,
            this.x + this.size, this.y + this.size
        );
    }

    randomPosition() {
        this.x = random(50, width - 50);
        this.y = random(50, height - 50);
    }

    moveRandomly() {
        if (this.isMoving) {
            this.x += random(-5, 5);
            this.y += random(-5, 5);
        }
    }
}
class EnemyFood {
    constructor() {
        this.x = random(50, width - 50);
        this.y = random(50, height - 50);
        this.size = 25;
        this.health = 5;
        this.isMoving = false;
    }

    draw() {
        stroke(0)
        fill(255, 0, 0);
        strokeWeight(2);
        rect(this.x, this.y, this.size, this.size);
        fill(255);
        textSize(14);
        text(`HP: ${this.health}`, this.x - 15, this.y - 30);
    }

    randomPosition() {
        this.x = random(50, width - 50);
        this.y = random(50, height - 50);
    }
}
