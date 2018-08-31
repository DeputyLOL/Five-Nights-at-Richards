
		var intCameraDemoStageMode = 0;	

		function fnCameraManagerDemoStage( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				fnCameraPanable(true);
				if(intCameraDemoStageMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraDemoStage);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraDemoStage.fnAddSubScene(scnCameraDemoStageOverlay);
					scnCameraDemoStage.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraDemoStageMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraDemoStage);
					scnCameraViewport.fnAddSubScene(scnCameraDemoStageOverlay);
					scnCameraDemoStage.fnAddSubScene(scnCameraWeak);
					scnCameraDemoStage.fnAddSubScene(scnCameraInterrupt);					
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraDemoStage);
				scnCameraViewport.fnRemoveSubScene("CameraDemoStage");
				scnCameraDemoStage.fnAddSubScene(scnCameraDemoStageOverlay);
				scnCameraDemoStage.fnRemoveSubScene("CameraDemoStageOverlay");
			}
		}
				
		var scnCameraDemoStage = new Scene("CameraDemoStage");
		var imgCameraDemoStage = new Sprite("DemoStage");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/CAM_DEM_A.png");
		imgCameraDemoStage.x = 0 + intCameraPan;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.width = 640;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);
		var intCameraDemoStageOffsetX = 0;
		var intCameraDemoStageOffsetY = 0;	

		var scnCameraDemoStageOverlay = new Scene("CameraDemoStageOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraDemoStageOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraDemoStageOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameDem");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_DEM.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 315;
		imgLoad.height = 42;
		scnCameraDemoStageOverlay.fnAddSprite(imgLoad);



		
		scnCameraDemoStage.intOffsetX = intCameraDemoStageOffsetX;
		scnCameraDemoStage.intOffsetY = intCameraDemoStageOffsetY;
		scnCameraDemoStage.fnSetLayer(2);
		
		scnCameraDemoStageOverlay.fnSetLayer(5);