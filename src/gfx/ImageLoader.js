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

export default ImageLoader;
