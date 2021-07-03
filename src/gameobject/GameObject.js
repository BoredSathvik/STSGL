import Rect from "./Rect.js";

class GameObject {

    constructor(x, y, width, height) {
        this.rect = new Rect(x, y, width, height);
    }

    /**
     * Returns the rect
     * @returns {number}
     */
    getRect() {
        return this.rect;
    }

    /**
     * Returns the rects x
     * @returns {number}
     */
    getX() {
        return this.rect.x;
    }

    /**
     * Returns the rects y
     * @returns {number}
     */
    getY() {
        return this.rect.y;
    }

    /**
     * Returns the rects width
     * @returns {number}
     */
    getWidth() {
        return this.rect.width;
    }

    /**
     * Returns the rects height
     * @returns {number}
     */
    getHeight() {
        return this.rect.height;
    }

    /**
     * Sets the x position.
     * @param {number} x 
     */
    setX(x) {
        this.rect.x = x;
    }

    /**
     * Sets the y position.
     * @param {number} y 
     */
    setY(y) {
        this.rect.y = y;
    }

    /**
     * Sets the width position.
     * @param {number} width
     */
    setWidth(width) {
        this.rect.width = width;
    }

    /**
     * Sets the height position.
     * @param {number} height
     */
    setHeight(height) {
        this.rect.height = height;
    }

}

export default GameObject; 
