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
// 16 - NULL ROOM

var intCameraTransferDelay = 500;
var intCameraPanning = 0;
var intCameraPanLeft = 0;
var intCameraPanRight = 0;
var intPanDirection = 0;
var intCameraPanable = 0;
var intCameraActive = 0;
var intCameraLight = 0;
var intCameraMonitorActive = 0;

function fnCameraManager()
{
	//console.log("Calling fnCameraManager: ( intCameraMode = " + intCameraMode.toString() + " ) ");
	scnCameraViewport.fnRemoveAllSubScenes();
	scnCameraViewport.fnGetSprite("StaticEffect").visible = false;
	scnCameraViewport.fnGetSprite("StaticInterrupt").visible = false;
	
	scnCameraViewport.fnGetSprite("Status").visible = false;	
	scnCameraViewport.fnGetSprite("StatusOnline").visible = false;
	scnCameraViewport.fnGetSprite("StatusInterrupt").visible = false;
	scnCameraViewport.fnGetSprite("StatusLost").visible = false;	
	
	fnCameraPanable(false);
	fnCameraLightable(false);
	if(intCameraMode >= 2 && intCameraMode <= 4 ){
		game.fnPlaySound("CAM_TRANSFER");
		game.fnPlaySound("CAM_JAM",true);
		game.fnPlaySound("CAM_BEEP",true);
		game.fnPauseSound("CAM_STATIC");
		game.fnPauseSound("CAM_ACTIVE");
		scnCameraViewport.fnAddSubScene(scnCameraOffine);	
	}
	
	if ( intCameraMode == 1 )
	{
		intCameraTransferDelay = 3000;
	}
	else
	{
		intCameraTransferDelay = 500;
	}
	
	if ( intCameraMode == 0 || intCameraMode == 1 )
	{
		intCameraActive = 0;
		//Clear whatever camera is currently in view
		//Play the sounds
		game.fnPlaySound("CAM_TRANSFER");
		game.fnStopSound("CAM_BEEP");
		game.fnPauseSound("CAM_STATIC");
		game.fnPauseSound("CAM_ACTIVE");
		game.fnPauseSound("CAM_DANGER");
		game.fnPauseSound("CAM_INTERRUPT");
		game.fnPauseSound("CAM_VNT_AMBIENCE");
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
			//scnCameraViewport.fnAddSubScene(scnCameraTransfer);
			scnCameraViewport.fnGetSprite("Static").visible = true;
			scnCameraViewport.fnGetSprite("Status").visible = true;
			scnCameraViewport.fnGetSprite("StatusConnecting").visible = true;
			//scnCameraViewport.fnGetSprite("Overlay").visible = true;
			setTimeout( function() 
			{
				console.log("END OF STATIC");
				scnCameraViewport.fnGetSprite("Static").visible = false;
				scnCameraViewport.fnGetSprite("StatusConnecting").visible = false;
				game.fnPauseSound("CAM_STATIC");
				
				if( strActiveButton == "Lobby" ) {
					intCameraActive = 1;
					fnCameraManagerLobby();
				}
				else if( strActiveButton == "VentRoom" ) {
					intCameraActive = 2;
					fnCameraManagerVentRoom();
				}
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
}		

function fnCameraPanner( direction = 0, method = "start", spriteCam )
{
	var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();
	var lstPanningSprites = scnCameraViewport.lstSubScenes[0].fnGetSpritesContaining ( strActiveButton );
	if ( method == "start" ) {
		if(direction == "left")
		{
			game.fnPlaySound("CAM_PAN",true);
			for ( var k =0; k < lstPanningSprites.length; k++ ) {
				lstPanningSprites[k].scrollDirection = 10;
				if (! lstPanningSprites[k].blnPanning ) {
					intCameraPanLeft = 0;
				}
			}
		}
		else
		{
			game.fnPlaySound("CAM_PAN",true);
			for ( var k =0; k < lstPanningSprites.length; k++ ) {
				lstPanningSprites[k].scrollDirection = -10;
				if (! lstPanningSprites[k].blnPanning ) {
					intCameraPanRight = 0;
				}
			}
		}
	} 
	else {
		for ( var k =0; k < lstPanningSprites.length; k++ ) {
			lstPanningSprites[k].scrollDirection = 0;
		}
		//game.fnStopSound("CAM_PAN");
		//game.fnPlaySound("CAM_PANLIMIT");
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

function fnCameraLighter(toggle = 0)
{
	if(intLightingMode <= 1)
	{
		var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();	
		if( strActiveButton == "Lobby" ) {
			fnCameraManagerLobbyLighter(toggle);
		}	
		else if( strActiveButton == "VentRoom" ) {
			fnCameraManagerVentRoomLighter(toggle);
		}
		else if( strActiveButton == "LobbyCorridor" ) {
			fnCameraManagerLobbyCorridorLighter(toggle);
		}
		else if( strActiveButton == "Medbay" ) {
			fnCameraManagerMedbayLighter(toggle);
		}
		else if( strActiveButton == "DemoStage" ) {
			fnCameraManagerDemoStageLighter(toggle);
		}
	}
	else
	{

	}
}

function fnCameraLightable( toggle = 1 )
{
	if (toggle)
	{
		scnCameraMonitor.fnGetSprite("Light").visible = true;
	} 
	else 
	{
		scnCameraMonitor.fnGetSprite("Light").visible = false;	
	}
}


function fnCameraDisrupter( camera , camera2, time = 3000)
{
	if(camera == 1 || camera2 == 1) // LOBBY
	{
		intCameraLobbyMode = 1;
		intLobbyLightAmount = 0;
		if(intCameraActive == 1 && intCameraMonitorActive == 1){
			fnCameraManagerLobby(true);
		}
		setTimeout( function() 
		{
			intCameraLobbyMode = 0;			
			if(intCameraActive == 1 && intCameraMonitorActive == 1){
				fnCameraManager();
			}
		},time)
	}
	if(camera == 2 || camera2 == 2) // VENTROOM
	{
		intCameraVentRoomMode = 1;
		intVentRoomLightAmount = 0;
		if(intCameraActive == 2 && intCameraMonitorActive == 1){
			fnCameraManagerVentRoom(true);
		}
		setTimeout( function() 
		{
			intCameraVentRoomMode = 0;			
			if(intCameraActive == 2 && intCameraMonitorActive == 1){
				fnCameraManager();
			}
		},time)
	}
	if(camera == 3 || camera2 == 3) // LOBBY CORRIDOR
	{
		intCameraLobbyCorridorMode = 1;
		intLobbyCorridorLightAmount = 0;
		if(intCameraActive == 3 && intCameraMonitorActive == 1){
			fnCameraManagerLobbyCorridor(true);
		}
		setTimeout( function() 
		{
			intCameraLobbyCorridorMode = 0;			
			if(intCameraActive == 3 && intCameraMonitorActive == 1){
				fnCameraManager();
			}
		},time)
	}
	if(camera == 4 || camera2 == 4) // MEDBAY
	{
		intCameraMedbayMode = 1;
		intMedbayLightAmount = 0;
		if(intCameraActive == 4 && intCameraMonitorActive == 1){
			fnCameraManagerMedbay(true);
		}
		setTimeout( function() 
		{
			intCameraMedbayMode = 0;			
			if(intCameraActive == 4 && intCameraMonitorActive == 1){
				fnCameraManager();
			}
		},time)
	}
	if(camera == 5 || camera2 == 5) // DEMOSTAGE
	{
		intCameraDemoStageMode = 1;
		intDemoStageLightAmount = 0;
		if(intCameraActive == 5 && intCameraMonitorActive == 1){
			fnCameraManagerDemoStage(true);
		}
		setTimeout( function() 
		{
			intCameraDemoStageMode = 0;			
			if(intCameraActive == 5 && intCameraMonitorActive == 1){
				fnCameraManager();
			}
		},time)
	}
}

//	var scnCameraManager = new Scene("CameraManager");

