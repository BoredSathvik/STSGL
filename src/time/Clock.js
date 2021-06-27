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

export default Clock;
