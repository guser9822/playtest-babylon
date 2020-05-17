import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';

import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import GameObject from "./gameObject";

const Key = function (game, number) {
    GameObject.call(this, 'key', game);
    this.number = number;
    this.spike = null;
    const key = Mesh.CreateTorus("key", 0.75, 0.25, 10, this.getScene());
    key.parent = this;
    key.material = game.gameMaterials.keyMaterial;
};

Key.prototype = Object.create(GameObject.prototype);
Key.prototype.constructor = Key;
Key.prototype.link = function (spike) {
    this.spike = spike
};
Key.prototype.delete = function () {
    this.spike.delete();
    this.dispose();
}

export default Key;