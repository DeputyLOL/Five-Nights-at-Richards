		//Create Menu scene
		var scnDeviceMonitor = new Scene("DeviceMonitor");
		//Add sprite

		var imgLoad = new Sprite("Window");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Window_DeviceMonitor.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 566;
		var intDeviceMonitorOffsetX = 14;
		var intDeviceMonitorOffsetY = 103;	
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
		imgLoad.fnMouseUpEvent = function () {
			game.fnPlaySound("BUTTON");			
			scnDesktop.fnRemoveSubScene("DeviceMonitor");
			//scnScreen.fnAddSubScene(scnDesktop);
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
			fnDeviceManager();			
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
			fnDeviceManager();	
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
			fnDeviceManager();	
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
			fnDeviceManager();	
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);
		
		var imgLoad = new MenuButton("Lighting");
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
			fnDeviceManager();
		}
		scnDeviceMonitor.fnAddButton(imgLoad);
		deviceMonitorTab.fnAddMenuButton(imgLoad);

		var scnDeviceMonitorRebooting = new Scene("DeviceMonitorRebooting");
		imgLoad = new Sprite("ClickBlocker");
		imgLoad.fnLoadImage("./assets/img/Console/Common/null.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 600;		
		scnDeviceMonitorRebooting.fnAddSprite(imgLoad);
		
		imgLoad = new Sprite("RebootingWindow");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Window_Rebooting.png");
		imgLoad.x = 209;
		imgLoad.y = 180;
		imgLoad.width = 365;
		imgLoad.height = 142;		
		scnDeviceMonitorRebooting.fnAddSprite(imgLoad);
		
		imgLoad = new Sprite("LoadingBarBoarder");
		imgLoad.fnLoadImage("./assets/img/Console/Common/LoadBarLoopBoarder.png");
		imgLoad.x = 221;
		imgLoad.y = 268;
		imgLoad.width = 341;
		imgLoad.height = 47;		
		scnDeviceMonitorRebooting.fnAddSprite(imgLoad);
		
		imgLoad = new Sprite("LoadingBar");
		imgLoad.fnLoadImage("./assets/img/Console/Common/LoadBarLoop.gif");
		imgLoad.x = 221;
		imgLoad.y = 268;
		imgLoad.width = 341;
		imgLoad.height = 47;
		scnDeviceMonitorRebooting.fnAddSprite(imgLoad);
		
		//Screen
		scnDeviceMonitor.intOffsetX = 0;
		scnDeviceMonitor.intOffsetY = 0;
		scnDeviceMonitor.fnSetLayer(3);
		
		scnDeviceMonitorRebooting.intOffsetX = 0;
		scnDeviceMonitorRebooting.intOffsetY = 0;
		scnDeviceMonitorRebooting.fnSetLayer(5);