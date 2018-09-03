/**
* This is a function that will be called each time a button is pressed
* 
*/

// FUNCTIONS FOR CAMERA MONITOR
// LOCATIONS:
// 1 - LOBBY
// 2 - VENTROOM
// 3 - LOBBY CORRIDOR
// 4 - MEDBAY
// 5 - DEMOSTAGE
// 6 - EXECUTIVE OFFICE
// 7 - EXECUTIVE CORRIDOR
// 8 - STAFF ROOM
// 9 - LAB
// 10 - MANUFACTURING
// 11 - POWER ROOM
// 12 - STORAGE
// 13 - SHIPPING
// 14 - STAFF ACCESS
// 15 - SERVER ROOM

var intCameraMode = 0;	
var intCameraTransferDelay = 500;
var intCameraPan = 0;
var intPanDirection = 0;
var intCameraPanable = 0;
var intCameraActive = 0;


function fnCameraManager()
{
	console.log("Calling fnCameraManager: ( intCameraMode = " + intCameraMode.toString() + " ) ");
	if ( intCameraMode == 0 )
	{
		intCameraActive = 0;
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
					intCameraActive = 1;
					fnCameraManagerLobby();
				}
				//else if( strActiveButton == "PowerRoom" ) {
				//	scnCameraViewport.fnAddSubScene(scnCameraPower);
				//}
				else if( strActiveButton == "LobbyCorridor" ) {
					intCameraActive = 3;
					fnCameraManagerLobbyCorridor();
				}
				else if( strActiveButton == "Medbay" ) {
					intCameraActive = 4;
					fnCameraManagerMedbay();
				}
				else if( strActiveButton == "DemoStage" ) {
					intCameraActive = 5;
					fnCameraManagerDemoStage();
				}
				else if( strActiveButton == "ExecutiveOffice" ) {
					intCameraActive = 6;
					fnCameraManagerExecutiveOffice();
				}
				else if( strActiveButton == "ExecutiveCorridor" ) {
					intCameraActive = 7;
					fnCameraManagerExecutiveCorridor();
				}
				else if( strActiveButton == "Manufacturing" ) {
					intCameraActive = 10;
					fnCameraManagerManufacturing();
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
	var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();
	var s = scnCameraViewport.lstSubScenes[0].fnGetSprite ( strActiveButton );
	if ( method == "start" ) {
		if(direction == "left")
		{
			s.scrollDirection = 10;
			game.fnPlaySound("CAM_PAN",true);
		}
		else
		{
			s.scrollDirection = -10;
			game.fnPlaySound("CAM_PAN",true);
		}
	} 
	else {
		s.scrollDirection = 0;
		game.fnStopSound("CAM_PAN");
		game.fnPlaySound("CAM_PANLIMIT");
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

function fnCameraDisrupter( camera , camera2)
{
	if(camera == 1 || camera2 == 1) // LOBBY
	{
		intCameraLobbyMode = 1;
		if(intCameraActive == 1){
			fnCameraManagerLobbyCorridor(true)
		}
		setTimeout( function() 
		{
			intCameraLobbyMode = 0;			
			if(intCameraActive == 1){
				fnCameraManager();
			}
		},3000)
	}
	if(camera == 3 || camera2 == 3) // LOBBY CORRIDOR
	{
		intCameraLobbyCorridorMode = 1;
		if(intCameraActive == 3){
			fnCameraManagerLobbyCorridor(true)
		}
		setTimeout( function() 
		{
			intCameraLobbyCorridorMode = 0;			
			if(intCameraActive == 3){
				fnCameraManager();
			}
		},3000)
	}
	if(camera == 4 || camera2 == 4) // MEDBAY
	{
		intCameraMedbayMode = 1;
		if(intCameraActive == 4){
			fnCameraManagerMedbay(true)
		}
		setTimeout( function() 
		{
			intCameraMedbayMode = 0;			
			if(intCameraActive == 4){
				fnCameraManager();
			}
		},3000)
	}
	if(camera == 5 || camera2 == 5) // DEMOSTAGE
	{
		intCameraDemoStageMode = 1;
		if(intCameraActive == 5){
			fnCameraManagerDemoStage(true)
		}
		setTimeout( function() 
		{
			intCameraDemoStageMode = 0;			
			if(intCameraActive == 5){
				fnCameraManager();
			}
		},3000)
	}
}