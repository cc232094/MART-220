class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.currentAnimation;
        this.createAnimation();
        this.direction = "";
        this.verticalDirection = "";
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount) {

        this.currentFrameCount = currentFrameCount;
    }

    createAnimation() {
        this.currentAnimation = createSprite(this.x, this.y);
    }

    loadAnimation(animationType, fileNames) {


        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
        this.currentAnimation.width = 300;
        this.currentAnimation.height = 150;

    }


    drawAnimation(animationType) {
        
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = .5;
        this.currentAnimation.changeAnimation(animationType);
        this.currentAnimation.rotation = 0;
        if (animationType == 'run' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 1;

        }
        else if (animationType == 'run' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 1;

        }
        else if (animationType == 'attack' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;

        }
        else if (animationType == 'attack' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;

        }
        else {
            this.currentAnimation.velocity.x = 0;
        }
        if (this.verticalDirection === 'up') {
            this.currentAnimation.position.y -= 2;
        } 
        else if (this.verticalDirection === 'down') {
            this.currentAnimation.position.y += 2;
        }
        else {
            this.currentAnimation.velocity.y = 0;
        }
    }

    incrementIndex() {

        if (this.currentFrameCount % 5 == 0) {
            this.i++;
        }

        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction) {
        if (direction === 'forward' || direction === 'reverse') {
            this.direction = direction;
        } 
        else if (direction === 'up' || direction === 'down') {
            this.verticalDirection = direction;
        }
        else {
            this.verticalDirection = "";
        }
    }

    isColliding(myImage) {
        return this.currentAnimation.collide(myImage);
    }

}