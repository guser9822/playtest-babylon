import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';

import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import GameObject from "./gameObject";

const Spikes = function (game, number) {
    GameObject.call(this, 'spikes', game);
    this.sharpPart = Mesh.CreateCylinder("cylinder", 0.5, 0.5, 0.5, 6, 1, this.getScene());
    this.sharpPart.parent = this;
    this.sharpPart.material = game.gameMaterials.spikesMaterial;

};

Spikes.prototype = Object.create(GameObject.prototype);
Spikes.prototype.constructor = Spikes;
Spikes.prototype.updateMaterial = function (mat) {
    this.sharpPart.material = mat
};

Spikes.prototype.delete = function () {
    this.dispose();
}

export default Spikes;
