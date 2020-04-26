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
        console.log('objLabel_CSS ', Css.of(objLabel_CSS))
        newDiv.setAttribute('style', `position: fixed;background-color: red;top: ${pickedPoint2D.y}px;left: ${pickedPoint2D.x}px;`);
        document.body.appendChild(newDiv);

    } else {
        document.getElementById(`${id}`).remove();
    }

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