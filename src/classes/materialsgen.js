import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";
import "@babylonjs/core/Meshes/meshBuilder";

import {
    Color3
} from "@babylonjs/core/Maths/math";
import {
    StandardMaterial, FresnelParameters
} from '@babylonjs/core/Materials';
import {
    Texture, CubeTexture
} from '@babylonjs/core/Materials/Textures';

import groundTexture from '../assets/ground.jpg';

const playerMaterialGen = function (scene) {
    const playerMaterial = new StandardMaterial("playerMaterial", scene);
    playerMaterial.diffuseColor = new Color3(1, 1, 1);
    playerMaterial.emissiveColor = new Color3(1, 1, 1);
    playerMaterial.alpha = 0.1;

    const color = Color3.FromInts(50, 50, 200);
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

const skyBox = function (scene) {
    const skybox = Mesh.CreateBox("skyBox", 1000.0, scene);
    const skyboxMaterial = new StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new CubeTexture('src/assets/skybox/SkyBoxTexture', scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
    skyboxMaterial.specularColor = new Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
    return skybox;
}

const GameMaterials = function (scene) {
    this.playerMaterial = playerMaterialGen(scene);
    this.groundMaterial = groundMaterialGen(scene);
    this.skyBox = skyBox(scene);
}

GameMaterials.prototype.constructor = GameMaterials;
export default GameMaterials;