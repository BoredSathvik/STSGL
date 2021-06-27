import GameObject from "./GameObject.js";

class Sprite extends GameObject {
    /**
     * The sprite class is a class that has an
     * x, y, width and height variables so you
     * do not have to set them in your constructor
     * in one of your classes.
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.updateRect();
    }

    /**
     * @abstract
     */
    update() {}

    /**
     * @abstract
     */
    render() {}

    /**
     * Update the rects position and size.
     */
    updateRect() {
        this.rect.reset(this.x, this.y, this.width, this.height);
    }

    /**
     * Returns a bool to see if a sprite is colliding
     * with another sprite.
     * @param {Sprite} sprite 
     */
    checkCollisions(sprite) {
        return (this.x + this.width > sprite.rect.x) && 
            (this.x < sprite.rect.x + sprite.rect.width) &&
            (this.y + this.height > sprite.rect.y) &&
            (this.y < sprite.rect.y + sprite.rect.height);
    }
}

export default Sprite;
