	//Create Menu scene
	var scnOptions = new Scene("OptionsMenu");
	//
	//Background
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/Common/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnOptions.fnAddSprite(imgLoad);	
	

	var imgLoad = new Button("Close");
	imgLoad.x = 544;
	imgLoad.y = 103;
	imgLoad.width = 25;
	imgLoad.height = 25;
	imgLoad.fnLoadImage("./assets/img/Console/Common/CloseButton.png", 
	"./assets/img/Console/Common/CloseButtonHighlighted.png",
	"./assets/img/Console/Common/CloseButtonPressed.png",
	"./assets/img/Console/Common/null.png");
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");			
		scnScreen.fnRemoveSubScene("OptionsMenu");
		scnScreen.fnAddSubScene(scnMenu);
	}
	scnOptions.fnAddButton(imgLoad);

	//Screen
	scnOptions.intOffsetX = intScreenOffsetX;
	scnOptions.intOffsetY = intScreenOffsetY;
	scnOptions.fnSetLayer(1);


