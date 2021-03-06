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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Cloud Count
            this._cloudCount = 3;
            // Instantiate Cloud array
            this._clouds = new Array();
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
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._cosmos.update();
            this._camera.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._collision.check(cloud);
            });
            this._collision.check(this._camera);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
