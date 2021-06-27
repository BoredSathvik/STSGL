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

export default AudioLoader;
