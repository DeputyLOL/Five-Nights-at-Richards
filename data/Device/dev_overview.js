
		//Create Menu scene
		var scnDeviceMonitorOverview = new Scene("DeviceMonitorOverview");
		//Add sprite
		var imgLoad = new Sprite("Overview");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 772;
		imgLoad.height = 448;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("StatusMonitorOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_OK.png");
		imgLoad.x = 544;
		imgLoad.y = 176;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);

		
		var imgLoad = new Sprite("StatusServerOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_OK.png");
		imgLoad.x = 544;
		imgLoad.y = 200;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusServerOK").visible = false;	
				
		var imgLoad = new Sprite("StatusServerError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Error.png");
		imgLoad.x = 544;
		imgLoad.y = 200;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusServerError").visible = false;	
		
		var imgLoad = new Sprite("StatusServerNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Notresponding.png");
		imgLoad.x = 544;
		imgLoad.y = 200;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusServerNotResponding").visible = false;	
				
		
		var imgLoad = new Sprite("StatusClientOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_OK.png");
		imgLoad.x = 544;
		imgLoad.y = 224;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusClientOK").visible = false;	
		
		var imgLoad = new Sprite("StatusClientError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Error.png");
		imgLoad.x = 544;
		imgLoad.y = 224;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusClientError").visible = false;	
		
		var imgLoad = new Sprite("StatusClientNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Notresponding.png");
		imgLoad.x = 544;
		imgLoad.y = 224;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusClientNotResponding").visible = false;			
		
		var imgLoad = new Sprite("StatusCameraOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_OK.png");
		imgLoad.x = 544;
		imgLoad.y = 248;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraOK").visible = false;
		
		var imgLoad = new Sprite("StatusCameraError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Error.png");
		imgLoad.x = 544;
		imgLoad.y = 248;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraError").visible = false;
		
		var imgLoad = new Sprite("StatusCameraNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Notresponding.png");
		imgLoad.x = 544;
		imgLoad.y = 248;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraNotResponding").visible = false;		
		
		var imgLoad = new Sprite("StatusLightingOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_OK.png");
		imgLoad.x = 544;
		imgLoad.y = 272;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingOK").visible = false;
		
		var imgLoad = new Sprite("StatusLightingError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Error.png");
		imgLoad.x = 544;
		imgLoad.y = 272;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingError").visible = false;
		
		var imgLoad = new Sprite("StatusLightingNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Notresponding.png");
		imgLoad.x = 544;
		imgLoad.y = 272;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingNotResponding").visible = false;
		
		var imgLoad = new Sprite("StatusPowerOK");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_OK.png");
		imgLoad.x = 544;
		imgLoad.y = 296;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerOK").visible = false;	
		
		var imgLoad = new Sprite("StatusPowerError");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Error.png");
		imgLoad.x = 544;
		imgLoad.y = 296;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerError").visible = false;	
		
		var imgLoad = new Sprite("StatusPowerNotResponding");
		imgLoad.fnLoadImage("./assets/img/Console/DeviceMonitor/Overview_Status_Notresponding.png");
		imgLoad.x = 544;
		imgLoad.y = 296;
		imgLoad.width = 216;
		imgLoad.height = 24;
		scnDeviceMonitorOverview.fnAddSprite(imgLoad);
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerNotResponding").visible = false;
		
		scnDeviceMonitorOverview.intOffsetX = intDeviceMonitorOffsetX;
		scnDeviceMonitorOverview.intOffsetY = intDeviceMonitorOffsetY;
		scnDeviceMonitorOverview.fnSetLayer(4);