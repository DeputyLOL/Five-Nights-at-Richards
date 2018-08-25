		//Create Menu scene
		var scnEmail = new Scene("Email");
		//Add sprite
		var imgLoad = new Sprite("TaskBar");
		imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar.png");
		imgLoad.x = 0;
		imgLoad.y = 566;
		imgLoad.width = 800;
		imgLoad.height = 34;
		scnEmail.fnAddSprite(imgLoad);

		var imgLoad = new Button("Close");
		imgLoad.x = 770;
		imgLoad.y = 6;
		imgLoad.width = 25;
		imgLoad.height = 25;
		imgLoad.fnLoadImage("./assets/img/Console/Common/CloseButton.png", 
		"./assets/img/Console/Common/CloseButtonHighlighted.png",
		"./assets/img/Console/Common/CloseButtonPressed.png",
		"./assets/img/Console/Common/null.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");			
			scnScreen.fnRemoveSubScene("Email");
			scnScreen.fnAddSubScene(scnDesktop);
		}
		scnEmail.fnAddButton(imgLoad);

		//Screen
		scnEmail.intOffsetX = intScreenOffsetX;
		scnEmail.intOffsetY = intScreenOffsetY;
		scnEmail.fnSetLayer(1);