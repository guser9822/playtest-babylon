import {
    Vector3, Matrix
} from "@babylonjs/core/Maths/math";
import Css from 'json-to-css'

import { objLabel_CSS } from './css-defs'

export function toggleLabel(id, document, toggle, pickedPoint2D) {

    if (toggle) {

        // create a new div element 
        var newDiv = document.createElement("div");
        newDiv.id = `${id}`;
        // and give it some content 
        var newContent = document.createTextNode(`${id}`);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
        const style = createLabeLstyle(objLabel_CSS, pickedPoint2D)
        newDiv.setAttribute('style',style);
        document.body.appendChild(newDiv);

    } else {
        document.getElementById(`${id}`).remove();
    }

}

export function createLabeLstyle(jsonDef, pickedPoint2D){

    jsonDef.definition.top = Math.round(pickedPoint2D.y)+'px';
    jsonDef.definition.left = Math.round(pickedPoint2D.x)+'px';

    const fullStyle = Css.of(jsonDef);
    const start = fullStyle.split('{')[1];
    const style = start.split('}')[0];
    return style;
}

export function coords3Dto2D(scene, pos3D, canvas) {

    scene.updateTransformMatrix();//necessary (not so really)
    return Vector3.Project(pos3D,
        Matrix.Identity(),
        scene.getTransformMatrix(),
        getGlobalViewport(scene, canvas)
    );
}

export function getGlobalViewport(scene, canvas) {
    return scene.activeCamera.viewport.toGlobal(canvas.clientWidth, canvas.clientHeight);
}