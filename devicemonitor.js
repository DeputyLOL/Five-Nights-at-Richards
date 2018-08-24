		//Create Menu scene
		var scnDeviceMonitor = new Scene("DeviceMonitor");
		//Add sprite
		var imgLoad = new Sprite("TaskBar");
		imgLoad.fnLoadImage("./assets/img/Console/Desktop_Taskbar.png");
		imgLoad.x = 0;
		imgLoad.y = 566;
		imgLoad.width = 800;
		imgLoad.height = 34;
		scnDeviceMonitor.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Window");
		imgLoad.fnLoadImage("./assets/img/Console/Window_DeviceMonitor.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 566;
		scnDeviceMonitor.fnAddSprite(imgLoad);	
		
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
			game.fnChangeScene("Desktop");
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
