/**
 * The game engine class
 */
function GameEngine() {
	//A list of scenes we can switch between
	this.lstScenes = [];
	this.intFPS = 30;
	this.scnActive = null;
	/**
	 * Add a scene
	 */
	this.fnAddScene = function(s) {
		this.lstScenes.push(s);
	}
	/**
	 * Get a scene by it's name
	 */
	this.fnGetScene = function( strName ) {
		
	}
	/**
	 * Remove a scene
	 */
	this.fnRemoveScene = function (strName ) {
		//Loop through and try to delete scene
		for ( var i=0; i < this.lstScenes.length; i++ ) {
			//Match it by name
			if (this.lstScenes[i].strName == strName ) {
				this.lstScenes[i].fnDelete();
				//Remove from list
				this.lstScenes = this.lstScenes,splice(i,1);
			}
		}
	}
	/**
	 * Change scene by choosing it's name
	 */
	this.fnChangeScene = function(strName) {
		//Loop through and try to delete scene
		for ( var i=0; i < this.lstScenes.length; i++ ) {
			//Match it by name
			if (this.lstScenes[i].strName == strName ) {
				//First of all, if there is an active scene deactivate it
				if (this.scnActive != null)  {
					this.scnActive.fnDeactivate();
				}
				//Now set a scene as active
				this.scnActive = this.lstScenes[i];
				this.scnActive.fnActivate();
			}
		}
	}
	
	/**
	 * Start the game
	 */
	this.fnStart = function(fps = 30) {
		this.intFPS = fps;
		//Start the game
		this.fnLoop();
	}
	/**
	 * The game loop
	 */
	this.fnLoop = function() {
		//Update and draw the active scene if we have it
		if ( this.scnActive != null ) {
			this.scnActive.fnUpdate();
			this.scnActive.fnRender();
		}
		//The timeout is based on the FPS
		setTimeout( this.fnLoop, 60000 / this.intFPS );
	}
}

/**
 * The scene class
 */
function Scene(name) {
	//The name of the scene
	this.strName = name;
	/**
	 * The load function, load images etc.
	 */
	this.fnLoad = function() {
		
	}
	/**
	 * Reset the scene, like restart level etc.
	 */
	this.fnReset = function() {
	
	}
	/**
	 * Update function
	 */
	this.fnUpdate = function() {
		
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function() {
		
	}
	/**
	 * Delete a scene.  Gets called when removed.  Clean up objects etc and garbage collect
	 */
	this.fnDelete = function() {
		
	}
	/**
	 * Call this when a scene is switched away from
	 */
	this.fnDeactivate = function() {
		
	}
	/**
	 * Call this when a scene is switched to
	 */
	this.fnActivate = function() {
		
	}
}



/**
 * The game object class
 */
function Sprite(name) {
	this.strName = name;
	this.x = 0;
	this.y = 0;
	this.width = 10;
	this.height = 10;
	this.rotation = 0;
	
	/**
	 * Update function
	 */
	this.fnUpdate = function() {
		
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function() {
		
	}
}
