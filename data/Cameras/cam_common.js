
		var scnCameraViewport = new Scene("CameraViewport");
		// Display Map
		var imgLoad = new Sprite("Overlay");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_OVERLAY.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraViewport.fnAddSprite(imgLoad);

	
	
		var scnCameraTransfer = new Scene("CameraTransfer");
		// Changing Camera
		var imgLoad = new Sprite("Static");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATIC.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraTransfer.fnAddSprite(imgLoad);
		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraTransfer.fnAddSprite(imgLoad);
		
		var imgLoad = new Sprite("Connecting");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_CONNECTING.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 123;
		imgLoad.height = 20;
		scnCameraTransfer.fnAddSprite(imgLoad);

		
		
		var scnCameraEffect = new Scene("CameraEffect");
		// Camera Signal Effect
		var imgLoad = new Sprite("Static");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_EFFECT.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraEffect.fnAddSprite(imgLoad);
	

	
		var scnCameraWeak = new Scene("CameraWeak");
		// Camera Weak Signal
		var imgLoad = new Sprite("Static");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_WEAK.gif");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraWeak.fnAddSprite(imgLoad);
		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraWeak.fnAddSprite(imgLoad);

		
		var scnCameraOffine = new Scene("CameraInterrupt");
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
		
		var imgLoad = new Sprite("Lost");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_LOST.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 164;
		imgLoad.height = 42;
		scnCameraOffine.fnAddSprite(imgLoad);				



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
	
	

		var scnCameraOnline = new Scene("CameraOnline");
		// Camera Working Normally

		var imgLoad = new Sprite("Online");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_ONLINE.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 82;
		imgLoad.height = 20;
		scnCameraOnline.fnAddSprite(imgLoad);	

		
		var scnCameraInterrupt = new Scene("CameraInterrupt");
		// Camera is disabled due to enermy movements or has been degraded

		var imgLoad = new Sprite("Interrupted");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS_INTERRUPT.png");
		imgLoad.x = 107;
		imgLoad.y = 20;
		imgLoad.width = 216;
		imgLoad.height = 20;
		scnCameraInterrupt.fnAddSprite(imgLoad);	
				
		
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
		scnCameraOnline.fnSetLayer(5);		
		scnCameraInterrupt.fnSetLayer(5);		

		scnCameraMap.fnSetLayer(6);
		scnCameraOffine.fnSetLayer(4);		
		scnCameraEffect.fnSetLayer(4);		
		scnCameraWeak.fnSetLayer(4);
		scnCameraTransfer.fnSetLayer(4);