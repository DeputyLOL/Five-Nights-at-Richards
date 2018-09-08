
		//Create Menu scene
		var scnDeviceMonitorLighting = new Scene("DeviceMonitorOverview");
		//Add sprite
		var imgLoad = new Sprite("Lighting");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Lighting.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 772;
		imgLoad.height = 448;
		scnDeviceMonitorLighting.fnAddSprite(imgLoad);
		
		var imgLoad = new Sprite("StatusLightingOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Lighting_Status_OK.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorLighting.fnAddSprite(imgLoad);
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingOK").visible = false;
		
		var imgLoad = new Sprite("StatusLightingError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Lighting_Status_Error.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorLighting.fnAddSprite(imgLoad);
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingError").visible = false;
		
		var imgLoad = new Sprite("StatusLightingNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Lighting_Status_Notresponding.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorLighting.fnAddSprite(imgLoad);
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotResponding").visible = false;



		var imgLoad = new Button("Reboot");
		imgLoad.x = 644;
		imgLoad.y = 392;
		imgLoad.width = 118;
		imgLoad.height = 35;
		imgLoad.fnLoadImage("./assets/img/Console/Common/Button.png", 
		"./assets/img/Console/Common/ButtonHighlighted.png",
		"./assets/img/Console/Common/ButtonPressed.png",
		"./assets/img/Console/DeviceMonitor/Button_Reboot.png",
		);
		imgLoad.fnMouseUpEvent = function () {	
			fnDeviceRebooter("Lighting");
		}
		scnDeviceMonitorLighting.fnAddButton(imgLoad);		
		

		
		scnDeviceMonitorLighting.intOffsetX = intDeviceMonitorOffsetX;
		scnDeviceMonitorLighting.intOffsetY = intDeviceMonitorOffsetY;
		scnDeviceMonitorLighting.fnSetLayer(4);