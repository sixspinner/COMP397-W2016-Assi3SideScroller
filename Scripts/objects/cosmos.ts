module objects {
    // COSMOS CLASS ++++++++++++++++++++++++++++++++++++
    export class Cosmos extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cosmos");
            
           this._speed.x = 5; //cosmos speed
           this._reset(-1280);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the end of the cosmos image has met end of screen
           
            
            
            if(this.x >= value) {
                this._reset(-1280);
            }
        }
        
        // reset the cosmos offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cosmos 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        }
    }
}