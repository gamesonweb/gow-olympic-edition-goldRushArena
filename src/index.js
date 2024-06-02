import { Engine, FreeCamera, HemisphericLight, SceneLoader, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import { Inspector } from '@babylonjs/inspector';
import Game from "./game";

let engine;
let canvas;
let game;

window.onload = () => {


  // Get the canvas element
  canvas = document.getElementById("renderCanvas");

  // Create the Babylon.js engine
  engine = new Engine(canvas, true);



  // Add an event listener to resize the engine on window resize
  window.addEventListener("resize", function () {
    engine.resize();
  });

  // Initialize the game
  game = new Game(engine, canvas);
  game.init();

  // Get the play button and menu elements
  const playButton = document.getElementById('playButton');
  const menu = document.getElementById('menu');
  const gui = document.getElementById('gui');

  // Add a click event listener to the play button
  playButton.addEventListener('click', () => {
    // Remove the menu and GUI elements
    menu.style.display = 'none';
    gui.style.display = 'none';
    // Start the game
    game.start();
    // Set focus to the canvas
    canvas.focus();
  });

  const restartButton = document.getElementById('restartButton');
  const gameOverScreen = document.getElementById('gameOverScreen');
  restartButton.addEventListener('click', function () {
    gameOverScreen.style.display = 'none';
    window.location.reload();
  });


}
