import Rect from "../gameobject/Rect.js";

class Renderer {

    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */
    context = null;

    /**
     * The renderer class is the key to rendering
     * images, shapes and text!
     * This is used in the Game class as the "render" variable.
     * @param {RenderingContext} context 
     */
    constructor(context) {
        this.context = context;
        this.color = 'blue'
    }

    /**
     * Draws a new rect to the screen.
     * Using the x, y, width and height you can create a filled square.
     * 
     * If you want, you can add the color param
     * to change the color of the rect.
     * @param {{x: number, y: number, width: number, height: number, color: string}|Rect} opts 
     */
    rect(opts) {
        this.context.fillStyle = opts.color ? opts.color : this.color;
        if(opts.x && opts.y && opts.width && opts.height) this.context.fillRect(opts.x, opts.y, opts.width, opts.height);
        else return new Error("You must enter a x, y, width and height params to draw a rect");
    }
    
    /**
     * Draws a image to the screen.
     * Using the x and y you can draw your images to the screen.
     * @param {HTMLImageElement} image 
     * @param {{x: number, y: number, width: number, height: number, rot: number}|Rect} opts 
     */
    image(image, opts) {
        if(!opts.width) opts.width = image.width;
        if(!opts.height) opts.height = image.height;
        if(opts.x && opts.y) this.context.drawImage(image, opts.x, opts.y, opts.width, opts.height);
        else return new Error("You must enter a x, y, width and height params to draw a rect");
    }

    /**
     * Draws a line to the screen.
     * Using the x and y you can draw lines to the screen.
     * @param {{x: number, y: number, length: number}|Rect} opts 
     */
    line(opts) {
        if(!opts.length) opts.length = 10;
        if(opts.x && opts.y) this.context.fillRect(opts.x, opts.y, 1, opts.length);
        else return new Error("You must enter a x and y params to draw a line");
    }

    /**
     * Renders text to the screen.
     * Using the x and y you can drwa your text to the screen.
     * @param {string} text
     * @param {{x: number, y: number, width: number, height: number, color: string}|Rect} opts
     */
    text(text, opts) {
        if(opts.color) this.context.fillStyle = opts.color;
        else this.context.fillStyle = "#fff";
        if(opts.x && opts.y) this.context.fillText(text, opts.x, opts.y, opts.width);
        else return new Error("You must enter a x and y params to draw text to the screen");
    }

    /**
     * Restores the screen from it's rotation
     */
    restore() {
        this.context.restore();
    }

}

export default Renderer;
