/**
 * The game engine class
 */
function GameEngine() 
{
	//A list of scenes we can switch between
	this.lstScenes = [];
	this.intFPS = 25;
	this.scnActive = null;
	this.dicSounds = {};
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
		if ( typeof strName == "string" ) {
			//Loop through and try to delete scene
			for ( var i=0; i < this.lstScenes.length; i++ ) {
				//Match it by name
				if (this.lstScenes[i].strName == strName ) {
					this.lstScenes[i].fnDelete();
					//Remove from list
					this.lstScenes = this.lstScenes.splice(i,1);
				}
			}
		} else {
			for ( var i=0; i < this.lstScenes.length; i++ ) {
				//Match it by name
				if (this.lstScenes[i].strName == strName.strName ) {
					this.lstScenes[i].fnDelete();
					//Remove from list
					this.lstScenes = this.lstScenes.splice(i,1);
				}
			}
		}
	}
	/**
	 * Change scene by choosing it's name
	 */
	this.fnChangeScene = function(strName) {
		if ( typeof strName == "string") {
			//console.log("Changing Scene: " + strName);
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
		} else {
			//console.log("Changing Scene: " + strName.strName);
			//Loop through and try to delete scene
			for ( var i=0; i < this.lstScenes.length; i++ ) {
				//Match it by name
				if (this.lstScenes[i].strName == strName.strName ) {
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
	}
	
	/**
	 * Start the game
	 */
	this.fnStart = function(fps = 25) {
		this.intFPS = fps;
		console.log("Starting Game");
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
		} else { 
			
		}
		//The timeout is based on the FPS
		var t = 1000 / this.intFPS;
		var _this = this;
		setTimeout(function() { _this.fnLoop(); }, t);
	}
	/**
	 * Add sound
	 */
	this.fnAddSound = function( strName, strFile ) {
		try {
			this.dicSounds[ strName ] = new Audio(strFile);
		} catch ( error ) {
			
		}
	}
	/**
	 * Play sound
	 */
	this.fnPlaySound = function( strName , loop = false) {
		this.dicSounds[strName].loop = loop;
		this.dicSounds[strName].play();
	}
	
	/**
	 * Pause sound
	 */
	this.fnPauseSound = function( strName ) {
		this.dicSounds[strName].pause();
	}
	
	/**
	 * Stop sound
	 */
	this.fnStopSound = function( strName ) {
		if (strName == "ALL")
		{
			for (key in this.dicSounds) 
			{
				this.dicSounds[key].pause();
				this.dicSounds[key].currentTime = 0;
			}
		}
		else
		{
			this.dicSounds[strName].pause();
			this.dicSounds[strName].currentTime = 0;
		}
	}
	
	/**
	 * Stop All sound
	 */
	this.fnStopAllSound = function() {

	}
}







/**
 * The scene class.  Scenes can have an integer z-Index value.  This is effectively the "layer".  Higher layer numbers get rendered
 * on top of lower ones.  0 is the lowest layer.
 */
function Scene(name) {
	//The name of the scene
	this.strName = name;
	this.lstSprites = [];
	this.domObject = document.createElement("div");
	this.domObject.className = "cScene-" + name;
	this.lstSubScenes = [];
	this.intOffsetX = 0;
	this.intOffsetY = 0;
	this.scnParent = null;
	this.intLayerNumber = 0;
	/**
	 * Add a sprite to the scene
	 */
	this.fnAddSprite = function (s ) {
		
		//Normal sprite
		if ( s.strType == "Sprite") {
			this.lstSprites.push(s);
			this.domObject.appendChild(s.img);
		} else if ( s.strType == "Button" || s.strType == "MenuButton") {
			this.lstSprites.push(s);
			this.domObject.appendChild(s.img);
			this.domObject.appendChild(s.label);
		} else if ( s.strType == "PanningSprite") {
			this.lstSprites.push(s);
			this.domObject.appendChild(s.img);
			this.domObject.appendChild(s.leftBox);
			this.domObject.appendChild(s.rightBox);
		}
	}
	/**
	 * Get sprite
	 */
	this.fnGetSprite = function ( s ) {
		//console.log("Getting sprite " + s  + " from scene " + this.strName);
		for ( var i = 0; i < this.lstSprites.length; i++ ) {
			if ( this.lstSprites[i].strName == s ) {
				return this.lstSprites[i];
			} 
		}
		//console.log ( "Couldn't find it");
		return null;
	}
	/**
	 * Add button - buttons have a lavel as well as the button image
	 */
	this.fnAddButton = function ( s ) {
		this.lstSprites.push(s);
		this.domObject.appendChild(s.img);
		this.domObject.appendChild(s.label);
	}
	/**
	 * Add Sub Scene.  Will update and render recursively
	 */
	this.fnAddSubScene = function ( s ) {
		s.scnParent = this;
		this.lstSubScenes.push ( s );
		this.domObject.appendChild( s.domObject );
		//console.log("Adding scene " + s.strName + " to scene " + s.scnParent.strName );
	}
	/**
	 * Remove Sub Scene.
	 */
	this.fnRemoveSubScene = function ( strName ) {
		//If we are given the name
		if ( typeof strName == "string" ) {
			//console.log("Removing subscene by name " + strName);
			for ( x in this.lstSubScenes ) {
				if ( this.lstSubScenes[x].strName == strName ) {
					this.domObject.removeChild(this.lstSubScenes[x].domObject);
					this.lstSubScenes.splice(x,1);
					return;
				}
			}
		//We are given the actual object
		} else {
			//console.log("Removing subscene by object " + strName.strName);
			for ( x in this.lstSubScenes ) {
				if ( this.lstSubScenes[x].strName == strName.strName ) {
					this.domObject.removeChild(this.lstSubScenes[x].domObject);
					this.lstSubScenes.splice(x,1);
					return;
				}
			}			
		}
		//console.log("ERROR: Cannot remove sub-scene "+ strName + " from scene " + this.strName + ".  Subscenes are:");
		for ( x in this.lstSubScenes ) {
			console.log( this.lstSubScenes[x].strName);
		}
	}
	/**
	 * Remove all subscenes
	 */
	this.fnRemoveAllSubScenes = function () {
		//console.log("Removing all subscenese from " + this.strName + " there are " + this.lstSubScenes.length.toString() + " subscenes");
		for ( x in this.lstSubScenes ) {
			//console.log ( "Removing subscene " + this.lstSubScenes[x].strName );
			this.domObject.removeChild(this.lstSubScenes[x].domObject);
			//Nuclear option?  Wipe everything
			this.lstSubScenes[x].fnRemoveAllSubScenes();
		}
		this.lstSubScenes = [];
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
		//Update yourself
		for ( var i =0; i < this.lstSprites.length; i++) {
			this.lstSprites[i].fnUpdate();
		}
		//Update subscenes
		for ( var  i = 0; i < this.lstSubScenes.length; i++ ) {
			this.lstSubScenes[i].fnUpdate();
		}
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function() {
		/////
		/////Draw self
		
		//Now have to handle nested offsets
		xOffset = 0;
		yOffset = 0;

		if ( this.scnParent != null ) {
			
			xOffset = this.intOffsetX + this.scnParent.getOffsetX();
			yOffset = this.intOffsetY + this.scnParent.getOffsetY();
			
		} else {
			xOffset = this.intOffsetX;
			yOffset = this.intOffsetY;
			
		}
		
		//Pass through the offset
		for ( var i =0; i < this.lstSprites.length; i++) {
			this.lstSprites[i].fnDraw(xOffset, yOffset,this.intLayerNumber*10);
		}
		
		/////
		/////Draw subscenes
		for ( var  i = 0; i < this.lstSubScenes.length; i++ ) {
			this.lstSubScenes[i].fnDraw();
		}
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
	/**
	 * Recursively get offsets
	 */
	this.getOffsetX = function() {
		if (this.scnParent != null) {
			return this.scnParent.getOffsetX() + this.intOffsetX;
		} else {
			return this.intOffsetX;
		}
	}
	this.getOffsetY = function() {
		if (this.scnParent != null) {
			return this.scnParent.getOffsetY() + this.intOffsetY;
		}else {
			return this.intOffsetY;
		}
	}
	this.fnSetLayer = function ( intLayer ) {
		this.intLayerNumber = parseInt(intLayer);
		if ( this.intLayerNumber < 0 ) {
			this.intLayerNumber = 0;
		}
	}
//End of class
}








/**
 * The game object class.  This can have a z-index from 0 - 0.9999999 etc.  The scene above will be +1 zIndex so risk mixing elements
 * if you set zIndex = 1
 */
function Sprite(name) {
	this.strType = "Sprite";
	//These are object attributes
	this.strName = name;
	this.x = 0;
	this.y = 0;
	this.width = 10;
	this.height = 10;
	this.rotation = 0;
	this.zIndex = 0;
	this.visible = true;
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
		this.img.container = this;
	}
	/**
	 * Update function
	 */
	this.fnUpdate = function() {
		
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function(xOffset, yOffset, zIndex) {
		//Here we must update the this.img.style properties so it's in the correct location
		//We want (x,y) to represent the centre of the object.  HTML works on top left of image
		//however.  Also must convert to integer then to string so can add "px" to it to tell HTML it's in pixels.
		//this.img.style.left = parseInt(this.x - this.width / 2).toString() + "px";
		//this.img.style.top = parseInt(this.y + this.height / 2).toString() + "px";
		if ( this.visible ) {
			this.img.style.left = parseInt(this.x + xOffset).toString() + "px";
			this.img.style.top = parseInt(this.y + yOffset).toString() + "px";
			this.img.style.width = parseInt(this.width).toString() + "px";
			this.img.style.height = parseInt(this.height).toString() + "px";
			this.img.style.zIndex = (this.zIndex + zIndex).toString();
		} 
		else {
			this.img.style.width = "0px";
		}
	}
}







/**
 * Pannable sprite for the cameraz
 */
function PanningSprite(strName) {
	//Initialise the sprite class
	Sprite.call(this, strName);
	this.strType = "PanningSprite";
	/**
	 * Add the images
	 */
	this.fnLoadImage = function( strDefault ) {
		//Set img tag to show default one
		this.img = document.createElement('img');
		this.img.src = strDefault;
		this.img.container = this;
	
		this.windowSize = 500;
		
		this.imageScroll = 0;
		
		this.leftBox = document.createElement('img');
		this.rightBox = document.createElement('img');
		
		this.leftBox.style.backgroundColor = "white";
		this.rightBox.style.backgroundColor = "white";
		
		
		//document.body.appendChild(this.leftBox);
		//document.body.appendChild(this.rightBox);
		
		this.scrollDirection = 0;
	}
	
	/**
	 * Scroll
	 */
	this.fnScroll = function ( intDirection ) {

		if ( intDirection < 0 ) {
			if  ( this.imageScroll + this.width  > this.windowSize ) {
				this.imageScroll += intDirection;
			}

		} else {
			if ( this.imageScroll < 0) {
				this.imageScroll += intDirection;
			}
		}
	}
	/**
	 * Update
	 */
	this.fnUpdate = function () {
		this.fnScroll ( this.scrollDirection );
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function(xOffset, yOffset, zIndex) {
		//Here we must update the this.img.style properties so it's in the correct location
		//We want (x,y) to represent the centre of the object.  HTML works on top left of image
		//however.  Also must convert to integer then to string so can add "px" to it to tell HTML it's in pixels.
		if ( this.visible ) {

			this.img.style.left = parseInt(this.x + xOffset + this.imageScroll).toString() + "px";
			this.img.style.top = parseInt(this.y + yOffset).toString() + "px";
			this.img.style.width = parseInt(this.width).toString() + "px";
			this.img.style.height = parseInt(this.height).toString() + "px";
			this.img.style.zIndex = (this.zIndex + zIndex).toString();
			//Only cover the left side if any to show
			if ( this.imageScroll < 0 ) {
				this.leftBox.style.left = parseInt(this.x + xOffset + this.imageScroll).toString() + "px";
				this.leftBox.style.top = parseInt(this.y + yOffset).toString() + "px";
				this.leftBox.style.width = parseInt(-this.imageScroll).toString() + "px";
				this.leftBox.style.height = parseInt(this.height).toString() + "px";
				this.leftBox.style.zIndex = (1 + this.zIndex + zIndex).toString();
			} else {
				this.leftBox.style.width = "0px";
			}
			//Only cover right if any to show
			if (true) {
				this.rightBox.style.left = parseInt(xOffset + this.windowSize).toString() + "px";
				this.rightBox.style.top = parseInt(this.y + yOffset).toString() + "px";
				this.rightBox.style.width = parseInt(this.width -this.imageScroll).toString() + "px";
				this.rightBox.style.height = parseInt(this.height).toString() + "px";
				this.rightBox.style.zIndex = (1 + this.zIndex + zIndex).toString();
			} else {
				this.rightBox.style.width = "0px";
			}
		}
		else {
			this.img.style.width = "0px";
			//this.label.style.width = "0px";		
		}
	}
}
PanningSprite.prototype = Object.create(Sprite.prototype);














////////////////////////////////////// BUTTONS ///////////////////////////////////////

/**
 * Button
 */
function Button(strName) {
	//Initialise the sprite class
	Sprite.call(this, strName);
	this.strType = "Button";

	this.fnClickEvent = function() {};
	this.fnMouseDownEvent = function() {};
	this.fnMouseUpEvent = function() {};
	this.fnMouseOffEvent = function() {};
	/**
	 * Add the images
	 */
	this.fnLoadImage = function( strDefault, strMouseOver, strMouseClick, strLabel) {
		//Load up the four images here...
		//Set img tag to show default one
		this.img = document.createElement('img');
		this.img.src = strDefault;
		this.img.container = this;
		
		
		this.label = document.createElement('img');
		this.label.src = strLabel;

		this.label.container = this;
		this.LabelzIndex = 1;
		document.body.appendChild(this.label);
		
		//Set up event handlers
		this.label.onmouseover = function() {	
			this.container.img.src = strMouseOver;
		}
		this.label.onmouseout = function() {
			this.container.fnMouseOffEvent();
			this.container.img.src = strDefault;
		}
		this.label.onmousedown = function() {
			this.container.fnMouseDownEvent();
			this.container.img.src = strMouseClick;			
		}
		this.label.onmouseup = function() {
			this.container.img.src = strMouseOver;
			this.container.fnMouseUpEvent();
		}	
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function(xOffset, yOffset, zIndex) {
		//Here we must update the this.img.style properties so it's in the correct location
		//We want (x,y) to represent the centre of the object.  HTML works on top left of image
		//however.  Also must convert to integer then to string so can add "px" to it to tell HTML it's in pixels.
		//this.img.style.left = parseInt(this.x - this.width / 2).toString() + "px";
		//this.img.style.top = parseInt(this.y + this.height / 2).toString() + "px";
		if ( this.visible ) {
			this.img.style.left = parseInt(this.x + xOffset).toString() + "px";
			this.img.style.top = parseInt(this.y + yOffset).toString() + "px";
			this.img.style.width = parseInt(this.width).toString() + "px";
			this.img.style.height = parseInt(this.height).toString() + "px";
			this.img.style.zIndex = (this.zIndex + zIndex).toString();
			
			this.label.style.left = parseInt(this.x + xOffset).toString() + "px";
			this.label.style.top = parseInt(this.y + yOffset).toString() + "px";
			this.label.style.width = parseInt(this.width).toString() + "px";
			this.label.style.height = parseInt(this.height).toString() + "px";
			this.label.style.zIndex = (this.LabelzIndex + this.zIndex + zIndex).toString();
		}
		else {
			this.img.style.width = "0px";
			this.label.style.width = "0px";		
		}
	}
}
Button.prototype = Object.create(Sprite.prototype);











/**
 * Menu Button
 */
function MenuButton(strName) {
	//Initialise the sprite class
	Sprite.call(this, strName);
	this.strType = "MenuButton";
	/**
	 * Add the images
	 */
	this.fnLoadImage = function( strDefault, strMouseOver, strMouseClick, strSelected, strLabel) {
		//Set img tag to show default one
		this.img = document.createElement('img');
		this.img.src = strDefault;
		this.img.container = this;
		
		this.label = document.createElement('img');
		this.label.src = strLabel;

		this.label.container = this;
		this.LabelzIndex = 1;
		document.body.appendChild(this.label);
		
		this.buttonActive = false;
		
		this.fnButtonIdle = function() {
			this.img.src = strDefault;
			this.buttonActive = false;		
		}
		
		this.fnButtonActive = function() {
			this.img.src = strSelected;
			this.buttonActive = true;				
		}

		
		//Set up event handlers
		this.label.onmouseover = function() {			
			if (this.container.buttonActive == false)
			{
				this.container.img.src = strMouseOver;			
			}
		}
		this.label.onmouseout = function() {
			if (this.container.buttonActive == false)
			{
				this.container.img.src = strDefault;				
			}
		}
		this.label.onmousedown = function() {
			this.container.buttonGroup.fnButtonPressed(this.container);
			this.container.fnClickEvent();
			this.container.img.src = strMouseClick;			
		}
		this.label.onmouseup = function() {
			this.container.img.src = strSelected;		
		}	
	}
	/**
	 * Draw this to screen
	 */
	this.fnDraw = function(xOffset, yOffset, zIndex) {
		//Here we must update the this.img.style properties so it's in the correct location
		//We want (x,y) to represent the centre of the object.  HTML works on top left of image
		//however.  Also must convert to integer then to string so can add "px" to it to tell HTML it's in pixels.
		//this.img.style.left = parseInt(this.x - this.width / 2).toString() + "px";
		//this.img.style.top = parseInt(this.y + this.height / 2).toString() + "px";
		if ( this.visible ) {
			this.img.style.left = parseInt(this.x + xOffset).toString() + "px";
			this.img.style.top = parseInt(this.y + yOffset).toString() + "px";
			this.img.style.width = parseInt(this.width).toString() + "px";
			this.img.style.height = parseInt(this.height).toString() + "px";
			this.img.style.zIndex = (this.zIndex + zIndex).toString();
			
			this.label.style.left = parseInt(this.x + xOffset).toString() + "px";
			this.label.style.top = parseInt(this.y + yOffset).toString() + "px";
			this.label.style.width = parseInt(this.width).toString() + "px";
			this.label.style.height = parseInt(this.height).toString() + "px";
			this.label.style.zIndex = (this.LabelzIndex + this.zIndex + zIndex).toString();
		}
		else {
			this.img.style.width = "0px";
			this.label.style.width = "0px";		
		}
	}
}
Button.prototype = Object.create(Sprite.prototype);




/**
 * Menu button group
 */
function MenuButtonGroup() {
	//
	//Store a list of menu buttons
	this.lstMenuButtons = [];
	
	//
	//Add it to the list and save a reference back to the group manager
	this.fnAddMenuButton = function ( b ) {
		b.buttonGroup = this;
		this.lstMenuButtons.push(b);
	}
	
	//
	//Buttons call this and pass themselves in for group manager to handle
	this.fnButtonPressed = function ( b ) {
		for ( x in this.lstMenuButtons)
		{
			this.lstMenuButtons[x].fnButtonIdle();
		}
		b.fnButtonActive();
	}
	
	//
	//Which button was pressed?  Returns the name of it
	this.fnWhichButtonActive = function( ) {
		for ( x in this.lstMenuButtons) {
			if ( this.lstMenuButtons[x].buttonActive ) {
				//Found an active button so return name of it
				return this.lstMenuButtons[x].strName;
			}
		}
	}
}
