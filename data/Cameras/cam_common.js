
		var scnCameraViewport = new Scene("CameraViewport");
		// Overlay
		
		var imgLoad = new Sprite("Static");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATIC.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraViewport.fnAddSprite(imgLoad);	
		scnCameraViewport.fnGetSprite("Static").visible = false;
		
		var imgLoad = new Sprite("StaticEffect");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_EFFECT.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StaticEffect").visible = false;

		var imgLoad = new Sprite("StaticInterrupt");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_WEAK.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StaticInterrupt").visible = false;
	

		// STATUS
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("Status").visible = false;
		
		// Camera Working Normally
		var imgLoad = new Sprite("StatusOnline");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_ONLINE.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 82;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);	
		scnCameraViewport.fnGetSprite("StatusOnline").visible = false;
		
		var imgLoad = new Sprite("StatusConnecting");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_CONNECTING.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 137;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StatusConnecting").visible = false;

		var imgLoad = new Sprite("StatusInterrupt");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_INTERRUPT.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 216;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StatusInterrupt").visible = false;

		var imgLoad = new Sprite("StatusLost");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_LOST.gif");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 120;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);				
		scnCameraViewport.fnGetSprite("StatusLost").visible = false;
	
		// Lighting system has failed		
		var imgLoad = new Sprite("StatusLightFail");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_LIGHTFAIL.gif");
		imgLoad.x = 21;
		imgLoad.y = 64;
		imgLoad.width = 164;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StatusLightFail").visible = false;

		var imgLoad = new Sprite("StatusCameraError");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_CAMERAERROR.gif");
		imgLoad.x = 21;
		imgLoad.y = 42;
		imgLoad.width = 163;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StatusCameraError").visible = false;	

		var imgLoad = new Sprite("StatusCameraFail");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_CAMERAFAIL.gif");
		imgLoad.x = 21;
		imgLoad.y = 42;
		imgLoad.width = 147;
		imgLoad.height = 20;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("StatusCameraFail").visible = false;	


		var imgLoad = new Sprite("Overlay");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_OVERLAY.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraViewport.fnAddSprite(imgLoad);
		scnCameraViewport.fnGetSprite("Overlay").visible = false;


		var scnCameraBackground = new Scene("CameraBackground");
		var imgLoad = new Sprite("Background");
		imgLoad.fnLoadImage("./assets/img/Camera/background.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraBackground.fnAddSprite(imgLoad);	

		
		var scnCameraWeak = new Scene("CameraWeak");
		// Camera Weak Signal

		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraWeak.fnAddSprite(imgLoad);

		var scnCameraOffine = new Scene("CameraOffline");
		// Camera Not Working
		var imgLoad = new Sprite("Static");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_JAM.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraOffine.fnAddSprite(imgLoad);
		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraOffine.fnAddSprite(imgLoad);	
		
		var imgLoad = new Sprite("Offline");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_OFFLINE.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 94;
		imgLoad.height = 20;
		scnCameraOffine.fnAddSprite(imgLoad);				

	
		var scnCameraMap = new Scene("CameraMap");
		// Display Map
		var imgLoad = new Sprite("Map");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_MAP.png");
		imgLoad.x = 21;
		imgLoad.y = 40;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraMap.fnAddSprite(imgLoad);

		//Camera Viewport
		scnCameraViewport.intOffsetX = intViewPortOffsetX;
		scnCameraViewport.intOffsetY = intViewPortOffsetY;
		scnCameraViewport.fnSetLayer(5);
		scnCameraBackground.intOffsetX = intViewPortOffsetX;
		scnCameraBackground.intOffsetY = intViewPortOffsetY;		
		scnCameraBackground.fnSetLayer(1);
		
		scnCameraMap.intOffsetX = -20;
		scnCameraMap.intOffsetY = -40;
		
		scnCameraMap.fnSetLayer(6);
		scnCameraOffine.fnSetLayer(4);
