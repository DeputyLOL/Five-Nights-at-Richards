
		var intCameraManufacturingMode = 0;	

		function fnCameraManagerManufacturing( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				fnCameraPanable(true);
				if(intCameraManufacturingMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraManufacturing);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraManufacturing.fnAddSubScene(scnCameraManufacturingOverlay);
					scnCameraManufacturing.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraManufacturingMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraManufacturing);
					scnCameraViewport.fnAddSubScene(scnCameraManufacturingOverlay);
					scnCameraManufacturing.fnAddSubScene(scnCameraWeak);
					scnCameraManufacturing.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraManufacturing);
				scnCameraViewport.fnRemoveSubScene("CameraManufacturing");
				scnCameraManufacturing.fnAddSubScene(scnCameraManufacturingOverlay);
				scnCameraManufacturing.fnRemoveSubScene("CameraManufacturingOverlay");
			}
		}
		
		var scnCameraManufacturing = new Scene("CameraManufacturing");
		var imgCameraManufacturing = new PanningSprite("Manufacturing");
		imgCameraManufacturing.fnLoadImage("./assets/img/Camera/CAM_MAN_A.png");
		imgCameraManufacturing.x = 0;
		imgCameraManufacturing.y = 0;
		imgCameraManufacturing.windowSize = 640;
		imgCameraManufacturing.width = 3000;
		imgCameraManufacturing.height = 480;
		scnCameraManufacturing.fnAddSprite(imgCameraManufacturing);
		var intCameraManufacturingOffsetX = 0;
		var intCameraManufacturingOffsetY = 0;	

		var scnCameraManufacturingOverlay = new Scene("CameraManufacturingOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraManufacturingOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraManufacturingOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameMan");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_MAN.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 236;
		imgLoad.height = 42;
		scnCameraManufacturingOverlay.fnAddSprite(imgLoad);



		
		scnCameraManufacturing.intOffsetX = intCameraManufacturingOffsetX;
		scnCameraManufacturing.intOffsetY = intCameraManufacturingOffsetY;
		scnCameraManufacturing.fnSetLayer(2);
		
		scnCameraManufacturingOverlay.fnSetLayer(5);
