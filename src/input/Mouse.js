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

export default Mouse;
