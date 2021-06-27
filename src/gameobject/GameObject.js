import Rect from "./Rect.js";

class GameObject {

    constructor(x, y, width, height) {
        this.rect = new Rect(x, y, width, height);
    }

    getRect() {
        return this.rect;
    }

}

export default GameObject; 
