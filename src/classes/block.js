import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';
import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";


import GameObject from "./gameObject";

const Block = function (x, z, game) {
    GameObject.call(this, 'block', game);
    const vertexData = VertexData.CreateBox(1, Mesh.DEFAULTSIDE);
    vertexData.applyToMesh(this);
    this.position.x = x;
    this.position.z = -z;

    this.material = game.gameMaterials.groundMaterial;

}

Block.prototype = Object.create(GameObject.prototype);
Block.prototype.constructor = Block;

Block.TYPES = {
    NOTHING: '-',
    NORMAL: 0,
    START: 'S',
    FINISH: 'F',
}

export default Block;