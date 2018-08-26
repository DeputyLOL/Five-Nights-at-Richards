
		var intCameraLobbyCorridorMode = 1;	

		function fnCameraManagerLobbyCorridor( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				if(intCameraLobbyCorridorMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraLobbyCorridor);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraLobbyCorridor.fnAddSubScene(scnCameraLobbyCorridorOverlay);
					scnCameraLobbyCorridor.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraLobbyCorridorMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraLobbyCorridor);
					scnCameraViewport.fnAddSubScene(scnCameraWeak);
					scnCameraLobbyCorridor.fnAddSubScene(scnCameraLobbyCorridorOverlay);
					scnCameraLobbyCorridor.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraLobbyCorridor);
				scnCameraViewport.fnRemoveSubScene("CameraLobbyCorridor");
				scnCameraLobbyCorridor.fnAddSubScene(scnCameraLobbyCorridorOverlay);
				scnCameraLobbyCorridor.fnRemoveSubScene("CameraLobbyCorridorOverlay");
			}
		}
		
		var scnCameraLobbyCorridor = new Scene("CameraLobbyCorridor");
		var imgCameraLobbyCorridor = new Sprite("LobbyCorridor");
		imgCameraLobbyCorridor.fnLoadImage("./assets/img/Camera/CAM_COR_A.png");
		imgCameraLobbyCorridor.x = 0;
		imgCameraLobbyCorridor.y = 0;
		imgCameraLobbyCorridor.width = 640;
		imgCameraLobbyCorridor.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgCameraLobbyCorridor);
		var intCameraLobbyCorridorOffsetX = 0;
		var intCameraLobbyCorridorOffsetY = 0;	
		
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
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_COR.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 249;
		imgLoad.height = 42;
		scnCameraLobbyCorridorOverlay.fnAddSprite(imgLoad);

		

		scnCameraLobbyCorridor.intOffsetX = intCameraLobbyCorridorOffsetX;
		scnCameraLobbyCorridor.intOffsetY = intCameraLobbyCorridorOffsetX;
		scnCameraLobbyCorridor.fnSetLayer(2);
		
		scnCameraLobbyCorridorOverlay.fnSetLayer(5);