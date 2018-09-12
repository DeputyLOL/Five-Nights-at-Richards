
		//Create Menu scene
		var scnDeviceMonitorCameras = new Scene("DeviceMonitorCameras");
		//Add sprite
		var imgLoad = new Sprite("Cameras");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Cameras.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 772;
		imgLoad.height = 448;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		
		var imgLoad = new Sprite("StatusCameraOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Cameras_Status_OK.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraOK").visible = false;

		var imgLoad = new Sprite("StatusCameraWarn");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Cameras_Status_Warn.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarn").visible = false;
				
		var imgLoad = new Sprite("StatusCameraError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Cameras_Status_Error.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraError").visible = false;
		
		var imgLoad = new Sprite("StatusCameraNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Cameras_Status_Notresponding.png");
		imgLoad.x = 12;
		imgLoad.y = 266;
		imgLoad.width = 748;
		imgLoad.height = 103;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotResponding").visible = false;

		var imgLoad = new Sprite("StatusCameraWarnIcon");
		imgLoad.fnLoadImage("./assets/img/Console/Common/Warning.png");
		imgLoad.x = 240;
		imgLoad.y = 200;
		imgLoad.width = 30;
		imgLoad.height = 30;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarnIcon").visible = false;
		
		var imgLoad = new Sprite("StatusCameraErrorIcon");
		imgLoad.fnLoadImage("./assets/img/Console/Common/Error.png");
		imgLoad.x = 240;
		imgLoad.y = 200;
		imgLoad.width = 30;
		imgLoad.height = 30;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraErrorIcon").visible = false;
		
		var imgLoad = new Sprite("StatusCameraNotRespondingIcon");
		imgLoad.fnLoadImage("./assets/img/Console/Common/Error.png");
		imgLoad.x = 545;
		imgLoad.y = 200;
		imgLoad.width = 30;
		imgLoad.height = 30;
		scnDeviceMonitorCameras.fnAddSprite(imgLoad);
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotRespondingIcon").visible = false;



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
			fnDeviceRebooter("Cameras");
		}
		scnDeviceMonitorCameras.fnAddButton(imgLoad);		
		

		
		scnDeviceMonitorCameras.intOffsetX = intDeviceMonitorOffsetX;
		scnDeviceMonitorCameras.intOffsetY = intDeviceMonitorOffsetY;
		scnDeviceMonitorCameras.fnSetLayer(4);