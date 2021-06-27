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

export default Utils;
