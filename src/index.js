// import {
//     Engine
// } from "@babylonjs/core/Engines/engine";
// import {
//     Scene
// } from "@babylonjs/core/scene";
// import {
//     Vector3, Color3, Matrix
// } from "@babylonjs/core/Maths/math";
// import {
//     UniversalCamera
// } from "@babylonjs/core/Cameras/universalCamera";
// import {
//     HemisphericLight
// } from "@babylonjs/core/Lights/hemisphericLight";
// import {
//     Mesh
// } from "@babylonjs/core/Meshes/mesh";

// import {
//     StandardMaterials,
// } from "@babylonjs/core/Materials"
// // import {
// //     GridMaterial,
// // } from "@babylonjs/materials/grid";

// // Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
// import "@babylonjs/core/Meshes/meshBuilder";
// // Augments the scene with the debug methods
// import "@babylonjs/core/Debug/debugLayer";
// // Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version
// import "@babylonjs/inspector";

//Utils
//import {toggleLabel, coords3Dto2D, coords2Dto3D} from '../src/utils'
//Componenets
import Game from '../src/classes/game'

// // BABYLON Engine creation
// var canvas = document.getElementById('gameCanvas');
// var engine = new Engine(canvas, true);

// //Activate debug layer
// //scene.debugLayer.show();

// // BABYLON Scene creation
// var scene = new Scene(engine);

// // The camera, necessary see the world
// var camera = new UniversalCamera("camera", new Vector3(5, 5, -5), scene);
// camera.setTarget(Vector3.Zero());
// //Attach camera to the canvas
// camera.attachControl(canvas, true);
// // The ambient light
// var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// // The cube
// var cube = Mesh.CreateBox("Cube 1", 1, scene);
// //Add pointer down event
// scene.onPointerDown = (evt, pickInfo) => {

//     if (!pickInfo.hit) {
//         return;
//     }
    
//     const { distance, pickedPoint, pickedMesh, bu, bv } = pickInfo;
//     console.log('______onMouseDown___________________| 0 |');
//     console.log(`Distance ${distance}`);
//     console.log(`PickedPoint 3D `, pickedPoint);
//     const pickedPoint2D = coords3Dto2D(scene, pickedPoint, canvas);
//     //console.log('To 3D : ', coords2Dto3D(pickedPoint2D,camera, canvas))
//     console.log(`PickedPoint 2D `, pickedPoint2D);
//     console.log(`PickedMesh `, pickedMesh);
//     console.log(`bu ${bu}`);
//     console.log(`bv ${bv}`);

//     //Outline mesh
//     if (pickedMesh.renderOutline) {
//         pickedMesh.renderOutline = false;
//         toggleLabel(pickedMesh.id, document, false);
//     } else {
//         pickedMesh.renderOutline = true;
//         pickedMesh.outlineWidth = .1;
//         pickedMesh.outlineColor = Color3.Yellow();
//         toggleLabel(pickedMesh.id,document, true, pickedPoint2D);
//     }

//     console.log('_________________________________________|');
// }

// // The render loop
// engine.runRenderLoop(function () {
//     scene.render();
// });