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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("hubble"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);
            this.x = 2;
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
