"use strict";

import Utils from "./Utils.js";
import Renderer from "./renderer/Renderer.js";
import Clock from "./time/Clock.js";
import Keyboard from "./input/Keyboard.js";
import Mouse from "./input/Mouse.js";
import Sprite from "./gameobject/Sprite.js";
import Rect from "./gameobject/Rect.js";
import ImageLoader from "./gfx/ImageLoader.js";
import AudioLoader from "./audio/AudioLoader.js";
import GameObject from "./gameobject/GameObject.js";
import Physics from "./physics/Physics.js";

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

export {
    Game,
    Utils,
    Clock,
    GameObject,
    Sprite,
    Rect,
    ImageLoader
}
