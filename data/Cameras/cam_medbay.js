
		var intCameraMedbayMode = 0;	
		var intCameraMedbayWeak = 0;
		var intMedbayLight = 0;
		var intMedbayLightAmount = 0;
		
		function fnCameraManagerMedbay( toggle = true )
		{
			scnCameraMedbay.fnRemoveAllSubScenes();
			if(toggle == true){
				game.fnPlaySound("CAM_ACTIVE",true);
				game.fnPauseSound("CAM_STATIC");
				if(intCameraMedbayMode == 0){
					fnCameraPanable(true);
					fnCameraLightable(true);
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					if(intCameraMedbayWeak == 1 || intCameraMode == 1){
						scnCameraViewport.fnGetSprite("StaticInterrupt").visible = true;
						scnCameraViewport.fnGetSprite("StatusInterrupt").visible = true;						
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {
						scnCameraViewport.fnGetSprite("StaticEffect").visible = true;
						scnCameraViewport.fnGetSprite("StatusOnline").visible = true;
					}
					scnCameraViewport.fnAddSubScene(scnCameraMedbay);
					scnCameraViewport.fnAddSubScene(scnCameraMedbayOverlay);
				}
				else if(intCameraMedbayMode == 1){
					fnCameraPanable(false);
					fnCameraLightable(false);
					scnCameraViewport.fnGetSprite("StaticEffect").visible = false;
					scnCameraViewport.fnGetSprite("StatusOnline").visible = false;
					scnCameraViewport.fnGetSprite("StatusInterrupt").visible = false;
					scnCameraViewport.fnGetSprite("StatusLost").visible = true;
					scnCameraViewport.fnGetSprite("Static").visible = true;
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_STATIC",true);
					game.fnPauseSound("CAM_DANGER");
					game.fnPauseSound("CAM_INTERRUPT");
					game.fnPauseSound("CAM_ACTIVE");
				}
				if(strRobot1Room == "MED")
				{
					game.fnPlaySound("CAM_DANGER",true);					
				}
			}
			else{
				scnCameraMedbay.fnRemoveAllSubScenes();
			}
		}
		
		function fnCameraManagerMedbayLighter( toggle = true )
		{
			if(toggle)
			{
				intMedbayLight = 1;
				scnCameraMedbay.fnGetSprite("MedbayLight").visible = true;
				scnCameraMedbay.fnGetSprite("Medbay").visible = false;
				game.fnPlaySound("CAM_LIGHT",true);
				if(strRobot1Room == "MED")
				{
					scnCameraMedbay.fnGetSprite("Medbay_Robot1_Lit").visible = true;
				}
			}
			else
			{
				intMedbayLight = 0;
				scnCameraMedbay.fnGetSprite("Medbay_Robot1_Lit").visible = false;
				scnCameraMedbay.fnGetSprite("MedbayLight").visible = false;
				scnCameraMedbay.fnGetSprite("Medbay").visible = true;
				game.fnPauseSound("CAM_LIGHT");
			}
		}
				
		var scnCameraMedbay = new Scene("CameraMedbay");
		
		scnCameraMedbay.fnRefresh = function() {
			if(intMedbayLight == 1 && intMedbayLightAmount < 30)
			{
				intMedbayLightAmount++;
				//console.log(intMedbayLightAmount);
			}
			else if(intMedbayLightAmount == 30)
			{
				strRobot1Target = "MED";
				intMedbayLightAmount = 0;
				console.log("ROBOT1 IS GOING TO MOVE TOO:" + strRobot1Target);
			}
		}
		
		var imgCameraMedbay = new PanningSprite("Medbay");
		imgCameraMedbay.fnLoadImage("./assets/img/Camera/MED/CAM_MED_A.png");
		imgCameraMedbay.x = 0;
		imgCameraMedbay.y = 0;
		imgCameraMedbay.windowSize = 640;
		imgCameraMedbay.width = 1500;
		imgCameraMedbay.height = 480;
		scnCameraMedbay.fnAddSprite(imgCameraMedbay);
		var intCameraMedbayOffsetX = 0;
		var intCameraMedbayOffsetY = 0;	

		var imgCameraMedbay = new PanningSprite("MedbayLight");
		imgCameraMedbay.fnLoadImage("./assets/img/Camera/MED/CAM_MED_LIT.png");
		imgCameraMedbay.x = 0;
		imgCameraMedbay.y = 0;
		imgCameraMedbay.windowSize = 640;
		imgCameraMedbay.width = 1500;
		imgCameraMedbay.height = 480;
		scnCameraMedbay.fnAddSprite(imgCameraMedbay);
		scnCameraMedbay.fnGetSprite("MedbayLight").visible = false;
		
		var imgCameraMedbay = new PanningSprite("Medbay_Robot1");
		imgCameraMedbay.fnLoadImage("./assets/img/Camera/MED/CAM_MED_ROBOT1_1.png");
		imgCameraMedbay.x = 0;
		imgCameraMedbay.y = 0;
		imgCameraMedbay.windowSize = 640;
		imgCameraMedbay.width = 1500;
		imgCameraMedbay.height = 480;
		scnCameraMedbay.fnAddSprite(imgCameraMedbay);

		var imgCameraMedbay = new PanningSprite("Medbay_Robot1_Lit");
		imgCameraMedbay.fnLoadImage("./assets/img/Camera/MED/CAM_MED_ROBOT1_1_LIT.png");
		imgCameraMedbay.x = 0;
		imgCameraMedbay.y = 0;
		imgCameraMedbay.windowSize = 640;
		imgCameraMedbay.width = 1500;
		imgCameraMedbay.height = 480;
		scnCameraMedbay.fnAddSprite(imgCameraMedbay);

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
		imgLoad.fnLoadImage("./assets/img/Camera/MED/CAM_NAME_MED.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 205;
		imgLoad.height = 42;
		scnCameraMedbayOverlay.fnAddSprite(imgLoad);



		
		scnCameraMedbay.intOffsetX = intCameraMedbayOffsetX;
		scnCameraMedbay.intOffsetY = intCameraMedbayOffsetY;
		scnCameraMedbay.fnSetLayer(2);
		
		scnCameraMedbayOverlay.fnSetLayer(5);
