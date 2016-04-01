/*===============================================================================================
File:_________________| cosmos.ts
Author:               | Sean R. Smith
Last Modified by:     | Sean R. Smith
Date: Last Modified:  | April 1, 2015
-------------------------------------------------------------------------------------------------
Description:
This file holds the cosmos class used to run the game's background of the galaxy.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
Revision History:
-Created File: Cosmos class with constructor, checkBounds, reset and update, 
    and set sideways motion.


================================================================================================*/

module objects {
    // COSMOS CLASS ++++++++++++++++++++++++++++++++++++
    export class Cosmos extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cosmos");
            
           this._speed.x = -2; //cosmos speed
           this._reset(0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the end of the cosmos image has met end of screen
                                
            if(this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the cosmos to left of
        protected _reset(value:number):void {
            this.x = value;
            // console.log("reset cosmos");
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cosmos 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-1280);
        }
    }
}