class Food {
    constructor() {
        this.x = random(50, width - 50);
        this.y = random(50, height - 50);
        this.size = 25;
    }

    draw() {
        fill(255, 0, 0);
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
}
