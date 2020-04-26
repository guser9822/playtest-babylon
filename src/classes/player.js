import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';

import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import GameObject from "./gameObject";

const Player = function (game) {

    GameObject.call(this, 'player', game);
    this.body = null;
    this.directions = [0, 0];
    this.rotations = [0, 0];

    //BabylonJS manage mesh vertex thorugh a VertexData
    const vertexData = VertexData.CreateSphere(16, 0.75, Mesh.DEFAULTSIDE);

    //Our player geometry became a sphere
    vertexData.applyToMesh(this);
    this.position.y = Player.START_HEIGHT;

    const _this = this;
    this.getScene().registerBeforeRender(function () {
        if (_this.position.y < -10) {
            _this.game.reset();
        }
    });
}

Player.prototype = Object.create(GameObject.prototype);
Player.prototype.constructor = Player;
export default Player;
