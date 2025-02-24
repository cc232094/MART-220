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
    hasCollided(x2, y2, width2, height2) {
        return (
          this.x < x2 + width2 &&
          this.x +  this.width > x2 &&
          this.y < y2 + height2 &&
          this.y + this.height > y2
        );
      }

}