
		var intCameraExecutiveCorridorMode = 0;	

		function fnCameraManagerExecutiveCorridor( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				if(intCameraExecutiveCorridorMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraExecutiveCorridor);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraExecutiveCorridor.fnAddSubScene(scnCameraExecutiveCorridorOverlay);
					scnCameraExecutiveCorridor.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraExecutiveCorridorMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraExecutiveCorridor);
					scnCameraViewport.fnAddSubScene(scnCameraExecutiveCorridorOverlay);
					scnCameraExecutiveCorridor.fnAddSubScene(scnCameraWeak);
					scnCameraExecutiveCorridor.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraExecutiveCorridor);
				scnCameraViewport.fnRemoveSubScene("CameraExecutiveCorridor");
				scnCameraExecutiveCorridor.fnAddSubScene(scnCameraExecutiveCorridorOverlay);
				scnCameraExecutiveCorridor.fnRemoveSubScene("CameraExecutiveCorridorOverlay");
			}
		}
		
		var scnCameraExecutiveCorridor = new Scene("CameraExecutiveCorridor");
		var imgCameraExecutiveCorridor = new Sprite("ExecutiveCorridor");
		imgCameraExecutiveCorridor.fnLoadImage("./assets/img/Camera/CAM_EXC_A.png");
		imgCameraExecutiveCorridor.x = 0;
		imgCameraExecutiveCorridor.y = 0;
		imgCameraExecutiveCorridor.width = 640;
		imgCameraExecutiveCorridor.height = 480;
		scnCameraExecutiveCorridor.fnAddSprite(imgCameraExecutiveCorridor);
		var intCameraExecutiveCorridorOffsetX = 0;
		var intCameraExecutiveCorridorOffsetY = 0;	

		var scnCameraExecutiveCorridorOverlay = new Scene("CameraExecutiveCorridorOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraExecutiveCorridorOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraExecutiveCorridorOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameExc");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_EXC.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 301;
		imgLoad.height = 42;
		scnCameraExecutiveCorridorOverlay.fnAddSprite(imgLoad);



		
		scnCameraExecutiveCorridor.intOffsetX = intCameraExecutiveCorridorOffsetX;
		scnCameraExecutiveCorridor.intOffsetY = intCameraExecutiveCorridorOffsetY;
		scnCameraExecutiveCorridor.fnSetLayer(2);
		
		scnCameraExecutiveCorridorOverlay.fnSetLayer(5);