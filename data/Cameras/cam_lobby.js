
		var intCameraLobbyMode = 0;	
		var intCameraLobbyWeak = 0;
		
		function fnCameraManagerLobby( toggle = true )
		{
			scnCameraLobby.fnRemoveAllSubScenes();
			if(toggle == true){
				game.fnPlaySound("CAM_ACTIVE",true);
				game.fnPauseSound("CAM_STATIC");
				fnCameraPanable(true);
				if(intCameraLobbyMode == 0){
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					if(intCameraLobbyWeak == 1){
						scnCameraLobby.fnAddSubScene(scnCameraWeak);
						scnCameraLobby.fnAddSubScene(scnCameraInterrupt);					
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {						
						scnCameraLobby.fnAddSubScene(scnCameraEffect);
						scnCameraLobby.fnAddSubScene(scnCameraOnline);
					}
					scnCameraViewport.fnAddSubScene(scnCameraLobby);
					scnCameraViewport.fnAddSubScene(scnCameraLobbyOverlay);
				}
				else if(intCameraLobbyMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraTransfer);	
					scnCameraLobby.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_INTERRUPT",true);
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
		
		
		var scnCameraLobby = new Scene("CameraLobby");
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
		
		var imgCameraLobby = new Sprite("Lobby_Robot1");
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