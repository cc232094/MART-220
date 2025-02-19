class character {
    constructor(imagePath, x, y, width, height) {
        this.img = loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawAnimation() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
}