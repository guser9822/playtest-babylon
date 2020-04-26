import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import {
    StandardMaterials,
} from "@babylonjs/core/Materials";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";


const GameObject = function (name, game) {
    Mesh.call(this, name, game.scene);
    this.game = game;
    this.scene = game.scene;
}

GameObject.prototype = Object.create(Mesh.prototype);
GameObject.prototype.constructor = GameObject;
export default GameObject;