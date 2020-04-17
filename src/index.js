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
    FreeCamera
} from "@babylonjs/core/Cameras/freeCamera";
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

// The camera, necessary see the world
var camera = new FreeCamera("camera", new Vector3(5, 5, -5), scene);
camera.setTarget(Vector3.Zero());
// The ambient light
var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// The cube
var cube = Mesh.CreateBox("myBox", 1, scene);

// Create a grid material
//var material = new GridMaterial("grid", scene);
// Our built-in 'sphere' shape. Params: name, subdivs, size, scene
// var sphere = Mesh.CreateSphere("sphere1", 2, 2, scene);

// // Move the sphere upward 1/2 its height
// sphere.position.y = 2;

// // Affect a material
// sphere.material = material;

// The render loop
engine.runRenderLoop(function () {
    scene.render();
});
