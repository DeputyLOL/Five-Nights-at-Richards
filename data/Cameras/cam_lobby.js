
		var intCameraLobbyMode = 0;	

		function fnCameraManagerLobby( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				fnCameraPanable(true);
				if(intCameraLobbyMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraLobby);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraLobby.fnAddSubScene(scnCameraLobbyOverlay);
					scnCameraLobby.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraLobbyMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraLobby);
					scnCameraViewport.fnAddSubScene(scnCameraWeak);
					scnCameraLobby.fnAddSubScene(scnCameraLobbyOverlay);
					scnCameraLobby.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraLobby);
				scnCameraViewport.fnRemoveSubScene("CameraLobby");
				scnCameraLobby.fnAddSubScene(scnCameraLobbyOverlay);
				scnCameraLobby.fnRemoveSubScene("CameraLobbyOverlay");
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