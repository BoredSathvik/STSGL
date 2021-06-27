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

export default Keyboard;
