
		var intCameraLobbyCorridorMode = 0;	
		var intCameraLobbyCorridorWeak = 0;
		
		function fnCameraManagerLobbyCorridor( toggle = true )
		{
			scnCameraLobbyCorridor.fnRemoveAllSubScenes();
			if(toggle == true){
				game.fnPlaySound("CAM_ACTIVE",true);
				game.fnPauseSound("CAM_STATIC");
				fnCameraLightable(true);
				if(intCameraLobbyCorridorMode == 0){
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					if(intCameraLobbyCorridorWeak == 1){
						scnCameraLobbyCorridor.fnAddSubScene(scnCameraWeak);
						scnCameraLobbyCorridor.fnAddSubScene(scnCameraInterrupt);					
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {						
						scnCameraLobbyCorridor.fnAddSubScene(scnCameraEffect);
						scnCameraLobbyCorridor.fnAddSubScene(scnCameraOnline);
					}
					scnCameraViewport.fnAddSubScene(scnCameraLobbyCorridor);
					scnCameraViewport.fnAddSubScene(scnCameraLobbyCorridorOverlay);
				}
				else if(intCameraLobbyCorridorMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraTransfer);	
					scnCameraLobbyCorridor.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
				if(strRobot1Room == "COR" || strRobot1Room == "COR2")
				{
					game.fnPlaySound("CAM_DANGER",true);					
				}
			}
			else{
				scnCameraLobbyCorridor.fnRemoveAllSubScenes();
			}
		}
		
		function fnCameraManagerLobbyCorridorLighter( toggle = true )
		{
			if(toggle)
			{
				scnCameraLobbyCorridor.fnGetSprite("LobbyCorridorLight").visible = true;
				scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor").visible = false;
				game.fnPlaySound("CAM_LIGHT",true);
				if(strRobot1Room == "COR")
				{
					scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_Lit").visible = true;
				}
				if(strRobot1Room == "COR2")
				{
					scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_2_Lit").visible = true;
				}
			}
			else
			{
				scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_Lit").visible = false;
				scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_2_Lit").visible = false;
				scnCameraLobbyCorridor.fnGetSprite("LobbyCorridorLight").visible = false;
				scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor").visible = true;
				game.fnStopSound("CAM_LIGHT");
			}
		}
		
		var scnCameraLobbyCorridor = new Scene("CameraLobbyCorridor");
		var imgCameraLobbyCorridor = new Sprite("LobbyCorridor");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/COR/CAM_COR_A.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);
		var intCameraLobbyCorridorOffsetX = 0;
		var intCameraLobbyCorridorOffsetY = 0;	

		var imgCameraLobbyCorridor = new Sprite("LobbyCorridorLight");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/COR/CAM_COR_LIT.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);
		scnCameraLobbyCorridor.fnGetSprite("LobbyCorridorLight").visible = false;		
		
		var imgCameraLobbyCorridor = new Sprite("LobbyCorridor_Robot1");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/COR/CAM_COR_ROBOT1_1.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);

		var imgCameraLobbyCorridor = new Sprite("LobbyCorridor_Robot1_Lit");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/COR/CAM_COR_ROBOT1_1_LIT.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);
		
		var imgCameraLobbyCorridor = new Sprite("LobbyCorridor_Robot1_2");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/COR/CAM_COR_ROBOT1_2.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);

		var imgCameraLobbyCorridor = new Sprite("LobbyCorridor_Robot1_2_Lit");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/COR/CAM_COR_ROBOT1_2_LIT.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);
		
		var scnCameraLobbyCorridorOverlay = new Scene("CameraLobbyCorridorOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraLobbyCorridorOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraLobbyCorridorOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameCor");
		imgLoad.fnLoadImage("./assets/img/Camera/COR/CAM_NAME_COR.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 249;
		imgLoad.height = 42;
		scnCameraLobbyCorridorOverlay.fnAddSprite(imgLoad);

		

		scnCameraLobbyCorridor.intOffsetX = intCameraLobbyCorridorOffsetX;
		scnCameraLobbyCorridor.intOffsetY = intCameraLobbyCorridorOffsetX;
		scnCameraLobbyCorridor.fnSetLayer(2);
		
		scnCameraLobbyCorridorOverlay.fnSetLayer(5);