		//Create Menu scene
		var scnCameraMonitor = new Scene("CameraMonitor");
		//Add sprite
		var imgLoad = new Sprite("TaskBar");
		imgLoad.fnLoadImage("./assets/img/Console/Desktop_Taskbar.png");
		imgLoad.x = 0;
		imgLoad.y = 566;
		imgLoad.width = 800;
		imgLoad.height = 34;
		scnCameraMonitor.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Window");
		imgLoad.fnLoadImage("./assets/img/Console/Window_CameraMonitor.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 566;
		scnCameraMonitor.fnAddSprite(imgLoad);	
		
		var imgLoad = new Button("Close");
		imgLoad.x = 770;
		imgLoad.y = 6;
		imgLoad.width = 25;
		imgLoad.height = 25;
		imgLoad.fnLoadImage("./assets/img/Console/CloseButton.png", 
		"./assets/img/Console/CloseButtonHighlighted.png",
		"./assets/img/Console/CloseButtonPressed.png",
		"./assets/img/Console/null.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");			
			scnScreen.fnRemoveSubScene("CameraMonitor");
			scnScreen.fnAddSubScene(scnDesktop);
		}
		scnCameraMonitor.fnAddButton(imgLoad);
	

	
		var cameraMonitorSelection = new MenuButtonGroup();
		
		var imgLoad = new MenuButton("Map");
		imgLoad.x = 19;
		imgLoad.y = 526;
		imgLoad.width = 118;
		imgLoad.height = 35;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Button.png",
		"./assets/img/Console/ButtonHighlighted.png",
		"./assets/img/Console/ButtonPressed.png",
		"./assets/img/Console/ButtonSelected.png",
		"./assets/img/Console/Button_Map.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");				
		}
		scnCameraMonitor.fnAddButton(imgLoad);
		cameraMonitorSelection.fnAddMenuButton(imgLoad);
		imgLoad.fnButtonActive();
		
		var imgLoad = new MenuButton("Lobby");
		imgLoad.x = 667;
		imgLoad.y = 36;
		imgLoad.width = 118;
		imgLoad.height = 35;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Button.png",
		"./assets/img/Console/ButtonHighlighted.png",
		"./assets/img/Console/ButtonPressed.png",
		"./assets/img/Console/ButtonSelected.png",
		"./assets/img/Console/Button_Lob.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnCameraMonitor.fnAddButton(imgLoad);
		cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	
		var imgLoad = new MenuButton("PowerRoom");
		imgLoad.x = 667;
		imgLoad.y = 71;
		imgLoad.width = 118;
		imgLoad.height = 35;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Button.png",
		"./assets/img/Console/ButtonHighlighted.png",
		"./assets/img/Console/ButtonPressed.png",
		"./assets/img/Console/ButtonSelected.png",
		"./assets/img/Console/Button_Pow.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnCameraMonitor.fnAddButton(imgLoad);
		cameraMonitorSelection.fnAddMenuButton(imgLoad);
		
		var imgLoad = new MenuButton("LobbyCorridor");
		imgLoad.x = 667;
		imgLoad.y = 106;
		imgLoad.width = 118;
		imgLoad.height = 35;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Button.png",
		"./assets/img/Console/ButtonHighlighted.png",
		"./assets/img/Console/ButtonPressed.png",
		"./assets/img/Console/ButtonSelected.png",
		"./assets/img/Console/Button_Cor.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnCameraMonitor.fnAddButton(imgLoad);
		cameraMonitorSelection.fnAddMenuButton(imgLoad);
		
		var imgLoad = new MenuButton("Medbay");
		imgLoad.x = 667;
		imgLoad.y = 141;
		imgLoad.width = 118;
		imgLoad.height = 35;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Button.png",
		"./assets/img/Console/ButtonHighlighted.png",
		"./assets/img/Console/ButtonPressed.png",
		"./assets/img/Console/ButtonSelected.png",
		"./assets/img/Console/Button_Med.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnCameraMonitor.fnAddButton(imgLoad);
		cameraMonitorSelection.fnAddMenuButton(imgLoad);
		
		//Screen
		scnCameraMonitor.intOffsetX = intScreenOffsetX;
		scnCameraMonitor.intOffsetY = intScreenOffsetY;
		scnCameraMonitor.fnSetLayer(1);