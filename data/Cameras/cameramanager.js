/**
* This is a function that will be called each time a button is pressed
* 
*/

// FUNCTIONS FOR CAMERA MONITOR


var intCameraMode = 0;	
var intCameraTransferDelay = 500;
var intCameraPan = 0;
var intPanDirection = 0;
var intCameraPanable = 0;


function fnCameraManager()
{
	console.log("Calling fnCameraManager: ( intCameraMode = " + intCameraMode.toString() + " ) ");
	if ( intCameraMode == 0 )
	{
		fnCameraPanable(false);
		//Clear whatever camera is currently in view
		scnCameraViewport.fnRemoveAllSubScenes();
		//Play the sounds
		game.fnPlaySound("CAM_TRANSFER");
		game.fnStopSound("CAM_BEEP");
		game.fnPauseSound("CAM_STATIC");
		game.fnPauseSound("CAM_ACTIVE");
		game.fnPauseSound("CAM_DANGER");
		game.fnPauseSound("CAM_INTERRUPT");
		//Find out what has been pressed
		var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();	
		
		if ( strActiveButton == "Map" ) {
			//Display the map
			game.fnPauseSound("CAM_ACTIVE");
			scnCameraViewport.fnAddSubScene(scnCameraMap);
			console.log("MAP");
		}
		else
		{
			//Display whatever camera has been clicked on
			game.fnPlaySound("CAM_STATIC",true);
			scnCameraViewport.fnAddSubScene(scnCameraTransfer);
			
			setTimeout( function() 
			{
				console.log("END OF STATIC");
				scnCameraViewport.fnRemoveSubScene("CameraTransfer");
				game.fnStopSound("CAM_STATIC");
				
				if( strActiveButton == "Lobby" ) {
					fnCameraManagerLobby();
				}
				//else if( strActiveButton == "PowerRoom" ) {
				//	scnCameraViewport.fnAddSubScene(scnCameraPower);
				//}
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
				else if( strActiveButton == "ExecutiveOffice" ) {
					fnCameraManagerExecutiveOffice();
					game.fnPlaySound("CAM_DANGER",true);
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

function fnCameraPanner( direction = 0, method = "start", spriteCam )
{
	console.log(intCameraPan);
	var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();
	var s = scnCameraViewport.lstSubScenes[0].fnGetSprite ( strActiveButton );
	if ( method == "start" ) {
		if(direction == "left")
		{
			s.scrollDirection = -5;
			game.fnPlaySound("CAM_PAN",true);
		}
		else
		{
			s.scrollDirection = 5;
			game.fnPlaySound("CAM_PAN",true);
		}
	} 
	else {
		s.scrollDirection = 0;
		game.fnStopSound("CAM_PAN");
	}	
}

function fnCameraPanable( toggle = 1 )
{
	if (toggle)
	{
		scnCameraMonitor.fnGetSprite("PanLeft").visible = true;
		scnCameraMonitor.fnGetSprite("PanRight").visible = true;			
	} 
	else 
	{
		scnCameraMonitor.fnGetSprite("PanLeft").visible = false;
		scnCameraMonitor.fnGetSprite("PanRight").visible = false;			
	}
}
