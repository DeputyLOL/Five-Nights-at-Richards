/**
 * The game engine class
 */
function GameEngine() {
	//A list of scenes we can switch between
	this.lstScenes = [];
	this.intFPS = 25;
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
	this.fnStart = function(fps = 25) {
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
			this.scnActive.fnDraw();
		}
		//The timeout is based on the FPS
		setTimeout( this.fnLoop, 1000 / this.intFPS );
	}
}

/**
 * The scene class
 */
function Scene(name) {
	//The name of the scene
	this.strName = name;
	this.lstSprites = [];
	this.domObject = document.createElement("div");
	/**
	 * The load function, load images etc.
	 */
	this.fnLoad = function() {
		
	}
	/**
	 * Add a sprite to the scene
	 */
	this.fnAddSprite = function (s ) {
		this.lstSprites.push(s);
		this.domObject.appendChild(s.img);
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
		//Unload all objects off the DOM
		document.body.removeChild(this.domObject);
	}
	/**
	 * Call this when a scene is switched to
	 */
	this.fnActivate = function() {
		//Load all objects to DOM
		document.body.appendChild(this.domObject);
	}
}



/**
 * The game object class
 */
function Sprite(name) {
	//These are object attributes
	this.strName = name;
	this.x = 0;
	this.y = 0;
	this.width = 10;
	this.height = 10;
	this.rotation = 0;
	//The DOM, or "Document Object Model" are the things on the actual screen.
	//In other words, the actual html document.  "body" is the main one, also "head" and "title" etc.
	//Anything displayed on the screen needs to be a child element of "body"
	this.img = null;
	
	/**
	 * Load image function
	 */
	this.fnLoadImage = function(strFile) {
		this.img = document.createElement('img');
		this.img.src = strFile;
	}
	/**
	 * Update function
	 */
	this.fnUpdate = function() {
		this.x++;
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function() {
		//Here we must update the this.img.style properties so it's in the correct location
		//We want (x,y) to represent the centre of the object.  HTML works on top left of image
		//however.  Also must convert to integer then to string so can add "px" to it to tell HTML it's in pixels.
		this.img.style.left = parseInt(this.x - this.width / 2).toString() + "px";
		this.img.style.top = "px";
		this.img.style.width = "px";
		this.img.style.height = "px";
		
	}
}
