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
// Augments the scene with the debug methods
import "@babylonjs/core/Debug/debugLayer";
// Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version
import "@babylonjs/inspector";

// BABYLON Engine creation
var canvas = document.getElementById('gameCanvas');
var engine = new Engine(canvas, true);

// BABYLON Scene creation
var scene = new Scene(engine);

// The camera, necessary see the world
var camera = new UniversalCamera("camera", new Vector3(5, 5, -5), scene);
camera.setTarget(Vector3.Zero());
//Attach camera to the canvas
camera.attachControl(canvas, true);
// The ambient light
var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// The cube
var cube = Mesh.CreateBox("myBox", 1, scene);
scene.debugLayer.show();


// The render loop
engine.runRenderLoop(function () {
    scene.render();
});
