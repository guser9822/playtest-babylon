import {
    Engine
} from "@babylonjs/core/Engines/engine";
import {
    Scene
} from "@babylonjs/core/scene";
import {
    Vector3
} from "@babylonjs/core/Maths/math";
import {
    UniversalCamera
} from "@babylonjs/core/Cameras/universalCamera";
import {
    HemisphericLight
} from "@babylonjs/core/Lights/hemisphericLight";
import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import {
    StandardMaterials,
} from "@babylonjs/core/Materials"
// import {
//     GridMaterial,
// } from "@babylonjs/materials/grid";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

// BABYLON Engine creation
var canvas = document.getElementById('gameCanvas');
var engine = new Engine(canvas, true);

// BABYLON Scene creation
var scene = new Scene(engine);

// The camera, necessary see the world. UniversalCamera replaced FreeCamera since Babylon 2.3
var camera = new UniversalCamera("camera", new Vector3(0, 5, -25), scene);
camera.setTarget(Vector3.Zero());

//Attach camera to the canvas
camera.attachControl(canvas,true)

// The ambient light
var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);


// The cube
const cubes = [];
let x_pos = 0;
let y_pos = 0;
let z_pos = 0;
let dimension = 1;
const numberOfCubes = 7;
for (const num of Array.from(Array(numberOfCubes).keys())) {
    const cube = Mesh.CreateBox(`myCube-${num}`, dimension, scene);
    cube.setAbsolutePosition(x_pos, y_pos, z_pos);
    x_pos = x_pos + 2;
    y_pos = y_pos + 1;
    z_pos = z_pos + 2;
    cubes.push(cube);
}

// The render loop
engine.runRenderLoop(function () {
    scene.render();
});
