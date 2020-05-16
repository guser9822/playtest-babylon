import {
    Color3
} from "@babylonjs/core/Maths/math";
import {
    StandardMaterial, FresnelParameters
} from '@babylonjs/core/Materials';
import {
    Texture
} from '@babylonjs/core/Materials/Textures';

import groundTexture from '../assets/ground.jpg';

const playerMaterialGen = function (scene) {
    const playerMaterial = new StandardMaterial("playerMaterial", scene);
    playerMaterial.diffuseColor = new Color3(1, 1, 1);
    playerMaterial.emissiveColor = new Color3(1, 1, 1);
    playerMaterial.alpha = 0.1;

    const color = Color3.FromInts(100, 100, 59);
    playerMaterial.emissiveFresnelParameters = new FresnelParameters();
    playerMaterial.emissiveFresnelParameters.bias = 0.6;
    playerMaterial.emissiveFresnelParameters.power = 2;
    playerMaterial.emissiveFresnelParameters.leftColor = Color3.Black();
    playerMaterial.emissiveFresnelParameters.rightColor = color;
    playerMaterial.opacityFresnelParameters = new FresnelParameters();
    playerMaterial.opacityFresnelParameters.leftColor = Color3.White();
    playerMaterial.opacityFresnelParameters.rightColor = Color3.Black();
    return playerMaterial;
}

const groundMaterialGen = function (scene) {
    const groundMaterial = new StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseTexture = new Texture(groundTexture, scene);
    return groundMaterial;
}

const GameMaterials = function (scene) {
    this.playerMaterial = playerMaterialGen(scene);
    this.groundMaterial = groundMaterialGen(scene);
}

GameMaterials.prototype.constructor = GameMaterials;
export default GameMaterials;