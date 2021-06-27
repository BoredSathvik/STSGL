class Rect {

    x = /** @private */ null;
    y = /** @private */ null; 
    width = /** @private */ null; 
    height = /** @private */ null;
    color = null;

    /**
     * The Rect class will and can be used
     * in many classes as a Rectangle.
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {string} color
     */
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    /**
     * Returns this Rectangle's x.
     * @returns {number}
     */
    getX() {
        return this.x;
    }

    /**
     * Sets this Rectangle's x.
     * @param {number} x 
     */
    setX(x) {
        this.x = x;
    }

    /**
     * Returns this Rectangle's y.
     * @returns {number}
     */
    getY() {
        return this.y;
    }

    /**
     * Sets this Rectangle's y.
     * @param {number} y
     */
    setX(y) {
        this.y = y;
    }

    /**
     * Returns this Rectangle's width.
     * @returns {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * Sets this Rectangle's width.
     * @param {number} width 
     */
    setWidth(width) {
        this.width = width;
    }

    /**
     * Returns this Rectangle's height.
     * @returns {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * Sets this Rectangle's height.
     * @param {number} height 
     */
    setHeight(height) {
        this.height = height;
    }

    /**
     * To reset all variables at once.
     * Or you can leave one or more of the params
     * as null and keep it as the original
     * value.
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     */
    reset(x, y, width, height) {
        this.x = x ? x : this.x;
        this.y = y ? y : this.y;
        this.width = width ? width : this.width;;
        this.height = height ? height : this.height;
    }

}

export default Rect;
