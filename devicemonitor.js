		//Create Menu scene
		var scnDeviceMonitor = new Scene("DeviceMonitor");
		//Add sprite
		var imgLoad = new Sprite("TaskBar");
		imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar.png");
		imgLoad.x = 0;
		imgLoad.y = 566;
		imgLoad.width = 800;
		imgLoad.height = 34;
		scnDeviceMonitor.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Window");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Window_DeviceMonitor.png");
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
		imgLoad.fnLoadImage("./assets/img/Console/Common/CloseButton.png", 
		"./assets/img/Console/Common/CloseButtonHighlighted.png",
		"./assets/img/Console/Common/CloseButtonPressed.png",
		"./assets/img/Console/Common/null.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");			
			scnScreen.fnRemoveSubScene("DeviceMonitor");
			scnScreen.fnAddSubScene(scnDesktop);
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
			
		var deviceMonitorTab = new MenuButtonGroup();
				
		var imgLoad = new MenuButton("Overview");
		imgLoad.x = 12;
		imgLoad.y = 63;
		imgLoad.width = 140;
		imgLoad.height = 40;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Common/null.png",
		"./assets/img/Console/DeviceMonitor/Tab_OverviewHighlighted.png",
		"./assets/img/Console/DeviceMonitor/Tab_Overview.png",
		"./assets/img/Console/DeviceMonitor/Tab_Overview.png",
		"./assets/img/Console/Common/null.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");				
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);
		imgLoad.fnButtonActive();
		
		var imgLoad = new MenuButton("Network");
		imgLoad.x = 152;
		imgLoad.y = 63;
		imgLoad.width = 140;
		imgLoad.height = 40;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Common/null.png",
		"./assets/img/Console/DeviceMonitor/Tab_NetworkHighlighted.png",
		"./assets/img/Console/DeviceMonitor/Tab_Network.png",
		"./assets/img/Console/DeviceMonitor/Tab_Network.png",
		"./assets/img/Console/Common/null.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);
	
	
		var imgLoad = new MenuButton("Power");
		imgLoad.x = 292;
		imgLoad.y = 63;
		imgLoad.width = 140;
		imgLoad.height = 40;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Common/null.png",
		"./assets/img/Console/DeviceMonitor/Tab_PowerHighlighted.png",
		"./assets/img/Console/DeviceMonitor/Tab_Power.png",
		"./assets/img/Console/DeviceMonitor/Tab_Power.png",
		"./assets/img/Console/Common/null.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);
		
		var imgLoad = new MenuButton("Camera");
		imgLoad.x = 432;
		imgLoad.y = 63;
		imgLoad.width = 140;
		imgLoad.height = 40;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Common/null.png",
		"./assets/img/Console/DeviceMonitor/Tab_CamerasHighlighted.png",
		"./assets/img/Console/DeviceMonitor/Tab_Cameras.png",
		"./assets/img/Console/DeviceMonitor/Tab_Cameras.png",
		"./assets/img/Console/Common/null.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);
		
		var imgLoad = new MenuButton("Lights");
		imgLoad.x = 572;
		imgLoad.y = 63;
		imgLoad.width = 140;
		imgLoad.height = 40;
		imgLoad.fnLoadImage(
		"./assets/img/Console/Common/null.png",
		"./assets/img/Console/DeviceMonitor/Tab_LightsHighlighted.png",
		"./assets/img/Console/DeviceMonitor/Tab_Lights.png",
		"./assets/img/Console/DeviceMonitor/Tab_Lights.png",
		"./assets/img/Console/Common/null.png"
		);
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);
		
		//Screen
		scnDeviceMonitor.intOffsetX = intScreenOffsetX;
		scnDeviceMonitor.intOffsetY = intScreenOffsetY;
		scnDeviceMonitor.fnSetLayer(1);