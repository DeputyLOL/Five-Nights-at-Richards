
		var intCameraMedbayMode = 0;	

		function fnCameraManagerMedbay( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				fnCameraPanable(true);
				if(intCameraMedbayMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraMedbay);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraMedbay.fnAddSubScene(scnCameraMedbayOverlay);
					scnCameraMedbay.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraMedbayMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraMedbay);
					scnCameraViewport.fnAddSubScene(scnCameraMedbayOverlay);
					scnCameraMedbay.fnAddSubScene(scnCameraWeak);
					scnCameraMedbay.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraMedbay);
				scnCameraViewport.fnRemoveSubScene("CameraMedbay");
				scnCameraMedbay.fnAddSubScene(scnCameraMedbayOverlay);
				scnCameraMedbay.fnRemoveSubScene("CameraMedbayOverlay");
			}
		}
		
		var scnCameraMedbay = new Scene("CameraMedbay");
		var imgCameraMedbay = new PanningSprite("Medbay");
		imgCameraMedbay.fnLoadImage("./assets/img/Camera/CAM_MED_A.png");
		imgCameraMedbay.x = 0;
		imgCameraMedbay.y = 0;
		imgCameraMedbay.windowSize = 640;
		imgCameraMedbay.width = 1500;
		imgCameraMedbay.height = 480;
		scnCameraMedbay.fnAddSprite(imgCameraMedbay);
		var intCameraMedbayOffsetX = 0;
		var intCameraMedbayOffsetY = 0;	

		var scnCameraMedbayOverlay = new Scene("CameraMedbayOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraMedbayOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraMedbayOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameMed");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_MED.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 205;
		imgLoad.height = 42;
		scnCameraMedbayOverlay.fnAddSprite(imgLoad);



		
		scnCameraMedbay.intOffsetX = intCameraMedbayOffsetX;
		scnCameraMedbay.intOffsetY = intCameraMedbayOffsetY;
		scnCameraMedbay.fnSetLayer(2);
		
		scnCameraMedbayOverlay.fnSetLayer(5);
