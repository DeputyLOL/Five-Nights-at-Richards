	//Create Menu scene
	var scnHelpMenu = new Scene("HelpMenu");
		
	//
	//Background
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnHelpMenu.fnAddSprite(imgLoad);	
	
	//
	//User window
	var imgLoad = new Sprite("HelpWindow");
	imgLoad.fnLoadImage("./assets/img/Console/Windows_UserHelp.png");
	imgLoad.x = 209;
	imgLoad.y = 97;
	imgLoad.width = 365;
	imgLoad.height = 387;
	scnHelpMenu.fnAddSprite(imgLoad);		
	
	var imgLoad = new Button("Close");
	imgLoad.x = 544;
	imgLoad.y = 103;
	imgLoad.width = 25;
	imgLoad.height = 25;
	imgLoad.fnLoadImage("./assets/img/Console/CloseButton.png", 
	"./assets/img/Console/CloseButtonHighlighted.png",
	"./assets/img/Console/CloseButtonPressed.png",
	"./assets/img/Console/null.png");
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");			
		scnScreen.fnRemoveSubScene("HelpMenu");
		scnScreen.fnAddSubScene(scnMenu);
	}
	scnHelpMenu.fnAddButton(imgLoad);

	//Screen
	scnHelpMenu.intOffsetX = intScreenOffsetX;
	scnHelpMenu.intOffsetY = intScreenOffsetY;
	scnHelpMenu.fnSetLayer(1);


