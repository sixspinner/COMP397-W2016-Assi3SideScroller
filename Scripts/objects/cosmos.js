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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // COSMOS CLASS ++++++++++++++++++++++++++++++++++++
    var Cosmos = (function (_super) {
        __extends(Cosmos, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Cosmos() {
            _super.call(this, "cosmos");
            this._speed.x = -2; //cosmos speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Cosmos.prototype._checkBounds = function (value) {
            // check to see if the end of the cosmos image has met end of screen
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the cosmos to left of
        Cosmos.prototype._reset = function (value) {
            this.x = value;
            // console.log("reset cosmos");
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Cosmos.prototype.update = function () {
            // scroll the cosmos 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-1280);
        };
        return Cosmos;
    }(objects.GameObject));
    objects.Cosmos = Cosmos;
})(objects || (objects = {}));

//# sourceMappingURL=cosmos.js.map
