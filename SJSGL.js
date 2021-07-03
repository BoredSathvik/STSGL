class AudioLoader {

    /**
     * Load an audio file of your machine.
     * @param {string} src 
     * @returns {HTMLAudioElement}
     */
    load(src) {
        var audio = new Audio();
        audio.src = src;
        return audio;
    }

}

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
     * @returns {boolean}
     */
    checkCollisionsSprite(sprite) {
        return (this.x + this.width > sprite.rect.x) && 
            (this.x < sprite.rect.x + sprite.rect.width) &&
            (this.y + this.height > sprite.rect.y) &&
            (this.y < sprite.rect.y + sprite.rect.height);
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @returns {boolean}
     */
    checkCollisionsPos(x, y, width, height) {
        return (this.x + this.width > x) && 
            (this.x < x + width) &&
            (this.y + this.height > y) &&
            (this.y < y + height);
    }
}

class Vector2 {

    /**
     * The Vector2 class is class used to shorten
     * x and y into vectors.
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

class ImageLoader {

    /**
     * Load an image off of your machine.
     * @param {string} src 
     * @returns {HTMLImageElement}
     */
    load(src) {
        var img = new Image();
        img.src = src;
        return img;
    }

}

class Keyboard {

    keys = /** @private */ [];


    /**
     * The Keyboard class is a class used to
     * get keyboard input to use in the main game.
     */
    constructor() {
        this.keys = [];

        for(var i = 0; i < 222; i++) {
            this.keys.push(false);
        }
    }

    /**
     * This method creates the listeners for
     * the keys to be looked for.
     */
    init() {
        var _this = this;

        window.addEventListener("keydown", function(e) {
            _this.keys[e.key] = true;
        }, false);

        window.addEventListener("keyup", function(e) {
            _this.keys[e.key] = false;
        }, false)
    }

    /**
     * This method returns all the keys.
     * The ones that are pressed are set to true.
     * @returns {boolean[]}
     */
    getKeys() {
        return this.keys;
    }

}

class Mouse {

    mouseButtonDown = /** @private */ [];
    mousePos = /** @private */ { x: 0, y: 0 };

    /**
     * @type {HTMLCanvasElement}
     */
    canvas = null;

    /**
     * The Mouse class is a class used to
     * get mouse input to use in the main game.
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.mouseButtonDown = [];
        this.mousePos = { x: 0, y: 0 };

        for(var i = 0; i < 3; i++) {
            this.mouseButtonDown.push(false);
        }
    }

    /**
     * This method creates the listeners for
     * the mouse move and mouse clicked to be
     * looked for.
     */
    init() {

        var _this = this;

        window.addEventListener("mousemove", function(e) {
            var rect = _this.canvas.getBoundingClientRect();
            _this.mousePos = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        }, false);

        window.addEventListener("mousedown", function(e) {
            _this.mouseButtonDown[e.button] = true;
        }, false);

        window.addEventListener("mouseup", function(e) {
            _this.mouseButtonDown[e.button] = false;
        }, false);

    }

    /**
     * This method returns all the mouse buttons
     * that are currently down.
     * The ones that are pressed are set to true.
     * @returns {boolean[]}
     */
    getButtonDown() {
        return this.mouseButtonDown;
    }

    /**
     * This method returns the current 
     * mouse position on the canvas
     * @returns {{x: number, y: number}}
     */
    getMousePos() {
        return this.mousePos;
    }

}

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

class Clock {

    fps = /** @private */ 0;
    milliseconds = /** @private */ 0;
    delta = 0;

    /**
     * The Clock class will allow us to run out game in a smooth fps.
     * 
     * Just set the fps in the constructor of this class.
     * @param {number} fps 
     */
    constructor(fps) {
        this.fps = fps;
        this.milliseconds = 1000 / fps;
    }

    /**
     * Gets the fps that you should have set in the constructor 
     * 
     * If you have this should your fps
     * otherwises set to 0!
     * @returns {number}
     */
    getFps() {
        return this.fps;
    }

    /**
     * Returns the fps in milliseconds.
     * @returns {number}
     */
    getMilliseconds() {
        return this.milliseconds;
    }

}

class Game {

    canvas = /** @private */ document.createElement('canvas');
    width = window.innerWidth;
    height = window.innerHeight;
    interval = /** @private */ null;
    /**
     * @type {Renderer}
     */
    render = null;
    clock = /** @private */ new Clock(60);
    updateMethod = /** @private */ null;
    keyboard = new Keyboard();
    /**
     * @type {Mouse}
     */
    mouse = null;
    image = new ImageLoader();
    audio = new AudioLoader();
    /**
     * @type {Physics}
     */
    physics = null;
    color = '#f1f1f1';
 
    /**
     * The Game class is the key to all other classes. 
     * You will need this to be able to use other classes.
     * @param {string} title 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(title="Test Game", width=window.innerWidth, height=window.innerHeight) {
        this.title = title;
        this.width = width;
        this.height = height;
    }

    /**
     * Initialize your new SJSGL Game class.
     * Set's up all the variables that the Game class
     * will need.
     */
    init() {
        document.title = this.title;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style = 'border: 1px solid #d3d3d3; background-color: #f1f1f1;';
        Utils.context = this.canvas.getContext("2d");
        this.render = new Renderer(Utils.context);
        this.physics = new Physics();
        this.keyboard.init();
        this.mouse = new Mouse(this.canvas);
        this.mouse.init();
        document.body.appendChild(this.canvas);
        this.lastTime = Date.now();
        setTimeout(() => {}, 1000);
        this.interval = setInterval(this.update.bind(this), this.clock.getMilliseconds());
    }

    /**
     * The main update loop.
     * @private
     */
    update() {
        var time = Date.now();
        var deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.clock.delta = deltaTime;

        this.clear();
        if(this.updateMethod) requestAnimationFrame(this.updateMethod);
    }

    /**
     * Clears everything from the screen.
     */
    clear() {
        Utils.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.color) {
            Utils.context.fillStyle = this.color;
            Utils.context.fillRect(0, 0, this.width, this.height);
        }
        Utils.context.setTransform(1, 0, 0, 1, 0, 0);
    }
    
    /**
     * Sets the games clock to be the new clock variable you put in this.
     * @param {Clock} clock 
     */
    setClock(clock) {
        this.clock = clock;
        clearInterval(this.interval);
        this.interval = setInterval(this.update.bind(this), this.clock.getMilliseconds())
    }

    /**
     * Sets a new update method to call every tick of a frame.
     * @param {function} func 
     */
    setUpdateMethod(func) {
        this.updateMethod = func;
    }

    /**
     * Gets the games rectangle.
     * @returns {Rect}
     */
    getRect() {
        return new Rect(0, 0, this.width, this.height);
    }

    /**
     * Sets the fill color to be a color
     * that you set.
     * @param {string} color 
     */
    setBackgroundColor(color) {
        this.color = color;
    }

}

class Utils {

    /**
     * @static
     * @type {CanvasRenderingContext2D}
     */
    static context = null;

    /**
     * @static
     * @param {CanvasRenderingContext2D} context
     */
    setContext(context) {
        Utils.context = context;
    }

}

export {
    Game,
    Utils,
    Clock,
    GameObject,
    Sprite,
    Rect,
    ImageLoader
}
