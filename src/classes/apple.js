import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';

import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import GameObject from "./gameObject";


const Apple = function (game) {
    GameObject.call(this, 'apple', game);
    const apple = Mesh.CreateTorusKnot('knot', 0.25, 0.05, 64, 64, 2, 3, this.getScene());
    apple.parent = this;
}

Apple.prototype = Object.create(GameObject.prototype);
Apple.prototype.constructor = Apple;

export default Apple;