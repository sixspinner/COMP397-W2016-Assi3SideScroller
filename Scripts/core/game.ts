﻿/*===============================================================================================
File:_______________| game.ts
Author:             | Tom Tsiliopoulus
Last Modified by:   | Sean R. Smith
Date Last Modified: | April 1, 2015
-------------------------------------------------------------------------------------------------
Description:
This file is the engine of the game

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
Revision History:
-Replaced ocean asset with cosmos asset
-Remove plane, add hubble telescope avatar

================================================================================================*/


/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var menu: scenes.Menu;
var play: scenes.Play;
var end: scenes.End;

var assetData:objects.Asset[] = [
    // Add your Assets here
    {id: "StartButton", src:"../../Assets/images/StartButton.png"},
    {id: "RestartButton", src:"../../Assets/images/RestartButton.png"},
    {id: "BackButton", src:"../../Assets/images/BackButton.png"},
    {id: "cosmos", src:"../../Assets/images/Background.png"},//---------background
    {id: "hubble", src:"../../Assets/images/GameHubble.png"}, //------------ player
    {id: "trash", src:"../../Assets/images/Trash.png"}, //------------ Trash
    {id: "camera", src:"../../Assets/images/Camera3.png"}, //------------ Camera
    {id: "island", src:"../../Assets/images/island.png"},
    {id: "cloud", src:"../../Assets/images/cloud.png"},
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;