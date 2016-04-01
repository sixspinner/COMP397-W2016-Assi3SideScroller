/*===============================================================================================
File:_______________| player.ts
Author:             | Tom Tsiliopoulus
Last Modified by:   | Sean R. Smith
Date Last Modified: | April 1, 2015
-------------------------------------------------------------------------------------------------
Description:
This file holds the player class which is used to create the avatar and define its attributes.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
Revision History:
-Replaced the plane with the telescope avatar
-Set locaion of hubble
-Set Motion of hubble

================================================================================================*/


module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _leftBounds: number;
        private _rightBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("hubble"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);

            this.x = 2;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }

            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}