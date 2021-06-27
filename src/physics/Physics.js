import Rect from "../gameobject/Rect.js";
import Renderer from "../renderer/Renderer.js";
import Utils from "../Utils.js";

class Physics {

    render = new Renderer(Utils.context);

    /**
     * 
     * @param {Rect} originRect 
     * @param {number} angle 
     * @param {number} length
     * @param {boolean} drawToScreen 
     */
    raycast(originRect, angle, length, drawToScreen=false) {
        if(drawToScreen) this.render.line({ x: originRect.x, y: originRect.y, length: length });
    }

}

export default Physics
