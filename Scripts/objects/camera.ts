/*===============================================================================================
File:_________________| camera.ts
Author:               | Sean R. Smith
Last Modified by:     | Sean R. Smith
Date: Last Modified:  | April 1, 2015
-------------------------------------------------------------------------------------------------
Description:
This file holds the camera class used to show player's goal.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
Revision History:
-Created File: camera class with constructor, checkBounds, reset and update, 
    and set sideways motion.


================================================================================================*/

module objects {
    // CAMERA CLASS ++++++++++++++++++++++++++++++++++++
    export class Camera extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("camera");
            
           this._speed.x = -4; //Camera speed
           this._rightBounds = (this._rightBounds + this.width);
           this._reset(this._rightBounds);
           this.name = "camera";
           this._leftBounds = (0 - this.width); //keep actions from happening until off screen
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the edge of the camera
            // is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the Camera offscreen
        protected _reset(value:number):void {          
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the Camera 5 px per frame
            this.x += this._speed.x;        //move left by factor of x
            this._checkBounds(this._leftBounds); //check camera has reached edge of screen
        }
    }
}