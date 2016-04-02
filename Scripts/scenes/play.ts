/*===============================================================================================
File:_________________| play.ts
Author:               | Tom Tsiliopoulus
Last Modified by:     | Sean R. Smith
Date: Last Modified:  | April 1, 2015
-------------------------------------------------------------------------------------------------
Description:
This file builds all the objects into the game play scene.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
Revision History:
-Replaced Ocean game worled with space.

================================================================================================*/


// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _cosmos: objects.Cosmos;
        private _camera: objects.Camera;
        private _clouds: objects.Cloud[];
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 3;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // added cosmos to the scene
            this._cosmos = new objects.Cosmos();
            this.addChild(this._cosmos);

            // added island to the scene
            this._camera = new objects.Camera();
            this.addChild(this._camera);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._cosmos.update();
            this._camera.update();
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._camera);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}