module objects {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Ocean extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cosmos");
            
           this._speed.x = 5; //ocean speed
           this._reset(-1280);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the ocean 
            // is met the top of the scene
            
            if(this.x >= value) {
                this._reset(-1280);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        }
    }
}