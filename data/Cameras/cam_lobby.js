
		var intCameraLobbyMode = 0;	
		var intCameraLobbyWeak = 0;
		var intLobbyLight = 0;
		var intLobbyLightAmount = 0;
		
		function fnCameraManagerLobby( toggle = true )
		{
			scnCameraLobby.fnRemoveAllSubScenes();
			if(toggle == true){
				game.fnPlaySound("CAM_ACTIVE",true);
				game.fnPauseSound("CAM_STATIC");
				if(intCameraLobbyMode == 0){
					fnCameraPanable(true);
					fnCameraLightable(true);
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					if(intCameraLobbyWeak == 1 || intCameraMode == 1){
						scnCameraViewport.fnGetSprite("StaticInterrupt").visible = true;
						scnCameraViewport.fnGetSprite("StatusInterrupt").visible = true;						
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {
						scnCameraViewport.fnGetSprite("StaticEffect").visible = true;
						scnCameraViewport.fnGetSprite("StatusOnline").visible = true;
					}
					scnCameraViewport.fnAddSubScene(scnCameraLobby);
					scnCameraViewport.fnAddSubScene(scnCameraLobbyOverlay);
				}
				else if(intCameraLobbyMode == 1){
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
				if(strRobot1Room == "LOB")
				{
					game.fnPlaySound("CAM_DANGER",true);					
				}
			}
			else{
				scnCameraLobby.fnRemoveAllSubScenes();
			}
		}
		
		function fnCameraManagerLobbyLighter( toggle = true )
		{
			if(toggle)
			{
				intLobbyLight = 1;
				scnCameraLobby.fnGetSprite("LobbyLight").visible = true;
				scnCameraLobby.fnGetSprite("Lobby").visible = false;
				game.fnPlaySound("CAM_LIGHT",true);
				if(strRobot1Room == "LOB")
				{
					scnCameraLobby.fnGetSprite("Lobby_Robot1_Lit").visible = true;
				}
			}
			else
			{
				intLobbyLight = 0;
				scnCameraLobby.fnGetSprite("Lobby_Robot1_Lit").visible = false;
				scnCameraLobby.fnGetSprite("LobbyLight").visible = false;
				scnCameraLobby.fnGetSprite("Lobby").visible = true;
				game.fnPauseSound("CAM_LIGHT");
			}
		}
				
		var scnCameraLobby = new Scene("CameraLobby");
		
		scnCameraLobby.fnRefresh = function() {
			if(intLobbyLight == 1 && intLobbyLightAmount < 30)
			{
				intLobbyLightAmount++;
				console.log(intLobbyLightAmount);
			}
			else if(intLobbyLightAmount == 30)
			{
				strRobot1Target = "LOB";
				intLobbyLightAmount = 0;
				console.log("ROBOT1 IS GOING TO MOVE TOO:" + strRobot1Target);
			}
		}

		
		
		var imgCameraLobby = new PanningSprite("Lobby");
		imgCameraLobby.fnLoadImage("./assets/img/Camera/CAM_LOB_A.png");
		imgCameraLobby.x = 0;
		imgCameraLobby.y = 0;
		imgCameraLobby.windowSize = 640;
		imgCameraLobby.width = 1500;
		imgCameraLobby.height = 480;
		scnCameraLobby.fnAddSprite(imgCameraLobby);
		var intCameraLobbyOffsetX = 0;
		var intCameraLobbyOffsetY = 0;	

		var imgCameraLobby = new PanningSprite("LobbyLight");
		imgCameraLobby.fnLoadImage("./assets/img/Camera/CAM_LOB_A.png");
		imgCameraLobby.x = 0;
		imgCameraLobby.y = 0;
		imgCameraLobby.windowSize = 640;
		imgCameraLobby.width = 1500;
		imgCameraLobby.height = 480;
		scnCameraLobby.fnAddSprite(imgCameraLobby);
		
		var imgCameraLobby = new Sprite("Lobby_Robot1");
		imgCameraLobby.fnLoadImage("./assets/img/debug.png");
		imgCameraLobby.x = 0;
		imgCameraLobby.y = 0;
		imgCameraLobby.width = 240;
		imgCameraLobby.height = 480;
		scnCameraLobby.fnAddSprite(imgCameraLobby);

		var imgCameraLobby = new Sprite("Lobby_Robot1_Lit");
		imgCameraLobby.fnLoadImage("./assets/img/debug.png");
		imgCameraLobby.x = 0;
		imgCameraLobby.y = 0;
		imgCameraLobby.width = 240;
		imgCameraLobby.height = 480;
		scnCameraLobby.fnAddSprite(imgCameraLobby);	
		
		var scnCameraLobbyOverlay = new Scene("CameraLobbyOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraLobbyOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraLobbyOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameLob");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_LOB.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 127;
		imgLoad.height = 42;
		scnCameraLobbyOverlay.fnAddSprite(imgLoad);

		

		scnCameraLobby.intOffsetX = intCameraLobbyOffsetX;
		scnCameraLobby.intOffsetY = intCameraLobbyOffsetX;
		scnCameraLobby.fnSetLayer(2);
		
		scnCameraLobbyOverlay.fnSetLayer(5);