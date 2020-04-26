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
// import {
//     Mesh
// } from "@babylonjs/core/Meshes/mesh";

// import {
//     StandardMaterials,
// } from "@babylonjs/core/Materials"

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
// import "@babylonjs/core/Meshes/meshBuilder";
// Augments the scene with the debug methods
import "@babylonjs/core/Debug/debugLayer";
// Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version
import "@babylonjs/inspector";

//My game classes
import GameObject from '../classes/gameObject';
import Player from '../classes/player'

//Start rendering the game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    new Game('gameCanvas');
}, false)

const Game = function (canvasId) {

    const canvas = document.getElementById(canvasId);
    this.engine = new Engine(canvas, true);
    this.scene = this._initScene(this.engine);
    this.assets = [];
    this.currentLevel = 1;
    this.player = null;
    this.level = null;
    this._initGame()
    const _this = this;

    this.engine.runRenderLoop(function () {
        _this.scene.render();
    })
}

Game.prototype._initScene = function (engine) {

    const scene = new Scene(engine);

    // The camera, necessary see the world
    const camera = new UniversalCamera("camera", new Vector3(2.5, 6, -6.5), scene);
    camera.rotation = new Vector3(Math.PI / 3.5, 0, 0)
    //Attach camera to the canvas
    camera.attachControl(engine.getRenderingCanvas());

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    return scene;
}

Game.prototype._initScene = function () {

    this.player = new Player(this);
    this.level = Level.FromInts(levels[this.currentLevel], this);
    this.player.position = this.level.start.position.clone();
    this.player.position.y = 2;
    //scene.debugLayer.show();
}


export default Game;