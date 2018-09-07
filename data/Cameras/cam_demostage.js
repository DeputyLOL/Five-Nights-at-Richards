
		var intCameraDemoStageMode = 0;	
		var intCameraDemoStageWeak = 0;
		
		function fnCameraManagerDemoStage( toggle = true )
		{
			scnCameraDemoStage.fnRemoveAllSubScenes();
			if(toggle == true){
				game.fnPlaySound("CAM_ACTIVE",true);
				game.fnPauseSound("CAM_STATIC");
				fnCameraPanable(true);
				fnCameraLightable(true);
				if(intCameraDemoStageMode == 0){
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					if(intCameraDemoStageWeak == 1){
						scnCameraDemoStage.fnAddSubScene(scnCameraWeak);
						scnCameraDemoStage.fnAddSubScene(scnCameraInterrupt);					
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {						
						scnCameraDemoStage.fnAddSubScene(scnCameraEffect);
						scnCameraDemoStage.fnAddSubScene(scnCameraOnline);
					}
					scnCameraViewport.fnAddSubScene(scnCameraDemoStage);
					scnCameraViewport.fnAddSubScene(scnCameraDemoStageOverlay);
				}
				else if(intCameraDemoStageMode == 1){
					//scnCameraDemoStage.fnRemoveAllSubScenes();
					scnCameraViewport.fnAddSubScene(scnCameraTransfer);	
					scnCameraDemoStage.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
				if(strRobot1Room == "MED")
				{
					game.fnPlaySound("CAM_DANGER",true);					
				}
			}
			else{
				scnCameraDemoStage.fnRemoveAllSubScenes();
			}
		}
		
		function fnCameraManagerDemoStageLighter( toggle = true )
		{
			if(toggle)
			{
				scnCameraDemoStage.fnGetSprite("DemoStageLight").visible = true;
				scnCameraDemoStage.fnGetSprite("DemoStage").visible = false;
				game.fnPlaySound("CAM_LIGHT",true);
				if(strRobot1Room == "DEM")
				{
					scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_Lit").visible = true;
				}
				if(strRobot1Room == "DEM2")
				{
					scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_2_Lit").visible = true;
				}
			}
			else
			{
				scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_Lit").visible = false;
				scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_2_Lit").visible = false;
				scnCameraDemoStage.fnGetSprite("DemoStageLight").visible = false;
				scnCameraDemoStage.fnGetSprite("DemoStage").visible = true;
				game.fnStopSound("CAM_LIGHT");
			}
		}
				
		var scnCameraDemoStage = new Scene("CameraDemoStage");
		var imgCameraDemoStage = new PanningSprite("DemoStage");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/DEM/CAM_DEM_A.png");
		imgCameraDemoStage.x = 0;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.windowSize = 640;
		imgCameraDemoStage.width = 1500;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);
		var intCameraDemoStageOffsetX = 0;
		var intCameraDemoStageOffsetY = 0;	

		var imgCameraDemoStage = new PanningSprite("DemoStageLight");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/DEM/CAM_DEM_LIT.png");
		imgCameraDemoStage.x = 0;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.windowSize = 640;
		imgCameraDemoStage.width = 1500;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);
		scnCameraDemoStage.fnGetSprite("DemoStageLight").visible = false;
		
		var imgCameraDemoStage = new PanningSprite("DemoStage_Robot1");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/DEM/CAM_DEM_ROBOT1_1.png");
		imgCameraDemoStage.x = 0;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.windowSize = 640;
		imgCameraDemoStage.width = 1500;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);

		var imgCameraDemoStage = new PanningSprite("DemoStage_Robot1_Lit");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/DEM/CAM_DEM_ROBOT1_1_LIT.png");
		imgCameraDemoStage.x = 0;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.windowSize = 640;
		imgCameraDemoStage.width = 1500;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);
		
		var imgCameraDemoStage = new PanningSprite("DemoStage_Robot1_2");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/DEM/CAM_DEM_ROBOT1_2.png");
		imgCameraDemoStage.x = 0;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.windowSize = 640;
		imgCameraDemoStage.width = 1500;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);

		var imgCameraDemoStage = new PanningSprite("DemoStage_Robot1_2_Lit");
		imgCameraDemoStage.fnLoadImage("./assets/img/Camera/DEM/CAM_DEM_ROBOT1_2_LIT.png");
		imgCameraDemoStage.x = 0;
		imgCameraDemoStage.y = 0;
		imgCameraDemoStage.windowSize = 640;
		imgCameraDemoStage.width = 1500;
		imgCameraDemoStage.height = 480;
		scnCameraDemoStage.fnAddSprite(imgCameraDemoStage);
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

		var imgLoad = new Sprite("NameMed");
		imgLoad.fnLoadImage("./assets/img/Camera/DEM/CAM_NAME_DEM.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 315;
		imgLoad.height = 42;
		scnCameraDemoStageOverlay.fnAddSprite(imgLoad);



		
		scnCameraDemoStage.intOffsetX = intCameraDemoStageOffsetX;
		scnCameraDemoStage.intOffsetY = intCameraDemoStageOffsetY;
		scnCameraDemoStage.fnSetLayer(2);
		
		scnCameraDemoStageOverlay.fnSetLayer(5);
