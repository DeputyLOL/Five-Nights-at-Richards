
		var intCameraDemoStageMode = 0;	
		var intCameraDemoStageWeak = 0;
		var intDemoStageLightAmount = 0;
		
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
						scnCameraViewport.fnGetSprite("StaticInterrupt").visible = true;
						scnCameraViewport.fnGetSprite("StatusInterrupt").visible = true;						
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {
						scnCameraViewport.fnGetSprite("StaticEffect").visible = true;
						scnCameraViewport.fnGetSprite("StatusOnline").visible = true;
					}
					scnCameraViewport.fnAddSubScene(scnCameraDemoStage);
					scnCameraViewport.fnAddSubScene(scnCameraDemoStageOverlay);
				}
				else if(intCameraDemoStageMode == 1){
					scnCameraViewport.fnGetSprite("StaticEffect").visible = false;
					scnCameraViewport.fnGetSprite("StatusOnline").visible = false;
					scnCameraViewport.fnGetSprite("StatusLost").visible = true;
					scnCameraViewport.fnGetSprite("Static").visible = true;
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_STATIC",true);
				}
				if(strRobot1Room == "DEM" || strRobot1Room == "DEM2")
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
		
		scnCameraDemoStage.fnRefresh = function() {
			if(intCameraLight == 1 && intDemoStageLightAmount < 30)
			{
				intDemoStageLightAmount++;
				console.log(intDemoStageLightAmount);
			}
			else if(intDemoStageLightAmount == 30)
			{
				strRobot1Target = "DEM";
				intDemoStageLightAmount = 0;
				console.log("ROBOT1 IS GOING TO MOVE TOO:" + strRobot1Target);
			}
		}
		
		
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

		var imgLoad = new Sprite("NameDem");
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
