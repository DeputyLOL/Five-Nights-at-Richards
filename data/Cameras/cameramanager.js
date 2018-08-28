
// FUNCTIONS FOR CAMERA MONITOR
		var intCameraMode = 0;	
		var intCameraTransferDelay = 300;
		var intCameraPan = 0;	

		
		function fnCameraManager()
		{
			if ( intCameraMode == 0 )
			{
				
				scnCameraMonitor.fnAddSubScene(scnCameraMap);
				scnCameraMonitor.fnRemoveSubScene("CameraMap");
				
				scnCameraMonitor.fnRemoveSubScene("CameraViewport");
				scnCameraMonitor.fnAddSubScene(scnCameraViewport);
	
				scnCameraViewport.fnRemoveSubScene("CameraEffect");
				scnCameraViewport.fnRemoveSubScene("CameraWeak");
				scnCameraViewport.fnRemoveSubScene("CameraOffline");
				scnCameraViewport.fnRemoveSubScene("CameraOnline");
				scnCameraViewport.fnRemoveSubScene("CameraInterrupt");
				
				game.fnPlaySound("CAM_TRANSFER");
				game.fnStopSound("CAM_BEEP");
				game.fnPauseSound("CAM_STATIC");
				game.fnPauseSound("CAM_ACTIVE");
				game.fnPauseSound("CAM_DANGER");
				game.fnPauseSound("CAM_INTERRUPT");

				fnCameraManagerLobbyCorridor(false);
				fnCameraManagerMedbay(false);
				fnCameraManagerDemoStage(false);
				fnCameraManagerExecutiveCorridor(false);

				var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();	
				if ( strActiveButton == "Map" ) {
					game.fnPauseSound("CAM_ACTIVE");
					scnCameraMonitor.fnAddSubScene(scnCameraMap);
					console.log("MAP");
				}
				else{
					game.fnPlaySound("CAM_STATIC",true);
					scnCameraViewport.fnAddSubScene(scnCameraTransfer);
					setTimeout( function() 
					{
						scnCameraViewport.fnRemoveSubScene("CameraTransfer");
						if( strActiveButton == "Lobby" ) {
							scnCameraViewport.fnAddSubScene(scnCameraLobby);
						}
						else if( strActiveButton == "PowerRoom" ) {
							scnCameraViewport.fnAddSubScene(scnCameraPower);
						}
						else if( strActiveButton == "LobbyCorridor" ) {
							fnCameraManagerLobbyCorridor();
						}
						else if( strActiveButton == "Medbay" ) {
							fnCameraManagerMedbay();
						}
						else if( strActiveButton == "DemoStage" ) {
							game.fnPlaySound("CAM_DANGER",true);
							fnCameraManagerDemoStage();
						}
						else if( strActiveButton == "ExecutiveCorridor" ) {
							fnCameraManagerExecutiveCorridor();
						}
						else
						{
							game.fnPauseSound("CAM_ACTIVE");
							game.fnPlaySound("CAM_STATIC",true);
							console.log("ERROR: '" + strActiveButton + "' IS NOT A DEFINED CAMERA");
							scnCameraViewport.fnAddSubScene(scnCameraOffine);					
						}
					}, intCameraTransferDelay);					
				}					
			}
			else if( intCameraMode == 1){
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_JAM",true);
				game.fnPlaySound("CAM_BEEP",true);
				game.fnPauseSound("CAM_STATIC");
				game.fnPauseSound("CAM_ACTIVE");
				scnCameraViewport.fnAddSubScene(scnCameraOffine);	
			}	
		}		

		function fnCameraPanner( direction = "left")
		{
			console.log(intCameraPan);
			if(direction == "left")
			{
				if(intCameraPan <= 0){
					intCameraPan = 0;
				}
				else {
				intCameraPan = intCameraPan - 1;
				}
			}
			else
			{
				if(intCameraPan >= 100){
					intCameraPan = 100;
				}
				else {
				intCameraPan = intCameraPan + 1;
				}
			}
		}