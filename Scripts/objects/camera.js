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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CAMERA CLASS ++++++++++++++++++++++++++++++++++++
    var Camera = (function (_super) {
        __extends(Camera, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Camera() {
            _super.call(this, "camera");
            this._speed.x = -5; //Camera speed
            this._rightBounds = (this._rightBounds + this.width);
            this._reset(this._rightBounds);
            this.name = "camera";
            this._leftBounds = (0 - this.width); //keep actions from happening until off screen
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Camera.prototype._checkBounds = function (value) {
            // check to see if the edge of the camera
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the Camera offscreen
        Camera.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Camera.prototype.update = function () {
            // scroll the Camera 5 px per frame
            this.x += this._speed.x; //move left by factor of x
            this._checkBounds(this._leftBounds); //check camera has reached edge of screen
        };
        return Camera;
    }(objects.GameObject));
    objects.Camera = Camera;
})(objects || (objects = {}));

//# sourceMappingURL=camera.js.map
