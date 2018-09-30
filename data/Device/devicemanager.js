
// FUNCTIONS THAT CONTROL DEVICE MONITOR

function fnDeviceManager()
{
	scnDeviceMonitor.fnRemoveAllSubScenes();
	var strActiveButton = deviceMonitorTab.fnWhichButtonActive();
	if(strActiveButton == "Overview")
	{
		scnDeviceMonitor.fnAddSubScene(scnDeviceMonitorOverview);
		fnDeviceStatus()
	}
	else if(strActiveButton == "Camera")
	{
		scnDeviceMonitor.fnAddSubScene(scnDeviceMonitorCameras);
		fnDeviceStatus()
	}
	else if(strActiveButton == "Lighting")
	{
		scnDeviceMonitor.fnAddSubScene(scnDeviceMonitorLighting);
		fnDeviceStatus()
	}
	else
	{
		console.log("ERROR: fnDeviceManager - No such tab.");		
	}
}

function fnDeviceRebooter(strName)
{
	console.log("REBOOTING:" + strName);
	if(strName == "Cameras")
	{
		scnDeviceMonitor.fnAddSubScene(scnDeviceMonitorRebooting);
		game.fnPlaySound("FAN_BUSY",true);
		game.fnPlaySound("SYSTEM_PROCESS",true);
		setTimeout( function() 
		{
			game.fnPauseSound("FAN_BUSY");			
			game.fnStopSound("SYSTEM_PROCESS");
			game.fnPlaySound("SYSTEM_PROCESSCOMPLETE");
			scnDeviceMonitor.fnRemoveSubScene(scnDeviceMonitorRebooting);
			if(intCameraMode >= 3)
			{
				console.log("REBOOT FAILED");				
			}
			else
			{
				intCameraMode = 0;
				console.log("REBOOT SUCCESS");
				fnDeviceStatus();
			}
		},5000)
	}
	else if(strName == "Lighting")
	{
		scnDeviceMonitor.fnAddSubScene(scnDeviceMonitorRebooting);
		game.fnPlaySound("FAN_BUSY",true);
		game.fnPlaySound("SYSTEM_PROCESS",true);
		setTimeout( function() 
		{
			game.fnPauseSound("FAN_BUSY");			
			game.fnStopSound("SYSTEM_PROCESS");
			game.fnPlaySound("SYSTEM_PROCESSCOMPLETE");
			scnDeviceMonitor.fnRemoveSubScene(scnDeviceMonitorRebooting);
			if(intLightingMode >= 3)
			{
				console.log("REBOOT FAILED");				
			}
			else
			{
				intLightingMode = 0;
				console.log("REBOOT SUCCESS");
				fnDeviceStatus();
			}
		},5000)
	}
}


function fnDeviceStatus()
{
	if(intServerMode == 0)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusServerOK").visible = true;
		scnDeviceMonitorOverview.fnGetSprite("StatusServerError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusServerNotResponding").visible = false;			
	}
	else if(intServerMode == 1 || intServerMode == 2)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusServerOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusServerError").visible = true;	
		scnDeviceMonitorOverview.fnGetSprite("StatusServerNotResponding").visible = false;			
	}
	else
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusServerOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusServerError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusServerNotResponding").visible = true;			
	}

	if(intVentMode == 0)
	{
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentOK").visible = true;
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentError").visible = false;	
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentNotResponding").visible = false;			
	}
	else if(intVentMode == 1 || intVentMode == 2)
	{
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentOK").visible = false;
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentError").visible = true;	
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentNotResponding").visible = false;			
	}
	else
	{
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentOK").visible = false;
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentError").visible = false;	
		//scnDeviceMonitorOverview.fnGetSprite("StatusVentNotResponding").visible = true;			
	}
	
	if(intPowerMode == 0)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerOK").visible = true;
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerNotResponding").visible = false;			
	}
	else if(intPowerMode == 1 || intPowerMode == 2)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerError").visible = true;	
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerNotResponding").visible = false;			
	}
	else
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusPowerNotResponding").visible = true;			
	}
	
	if(intCameraMode == 0)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraOK").visible = true;
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraNotResponding").visible = false;
		
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraOK").visible = true;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarn").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraError").visible = false;	
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotResponding").visible = false;

		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarnIcon").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraErrorIcon").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotRespondingIcon").visible = false;
		
		scnCameraViewport.fnGetSprite("StatusCameraError").visible = false;
		scnCameraViewport.fnGetSprite("StatusCameraFail").visible = false;
	}
	else if(intCameraMode == 1)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraError").visible = true;	
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraNotResponding").visible = false;
		
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraOK").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarn").visible = true;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraError").visible = false;	
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotResponding").visible = false;	

		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarnIcon").visible = true;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraErrorIcon").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotRespondingIcon").visible = false;
		
		scnCameraViewport.fnGetSprite("StatusCameraError").visible = true;
		scnCameraViewport.fnGetSprite("StatusCameraFail").visible = false;
	}
	else if(intCameraMode == 2)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraError").visible = true;	
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraNotResponding").visible = false;
		
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraOK").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarn").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraError").visible = true;	
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotResponding").visible = false;	

		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarnIcon").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraErrorIcon").visible = true;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotRespondingIcon").visible = false;
				
		scnCameraViewport.fnGetSprite("StatusCameraError").visible = true;
		scnCameraViewport.fnGetSprite("StatusCameraFail").visible = false;
	}
	else
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusCameraNotResponding").visible = true;
		
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraOK").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarn").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraError").visible = false;	
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotResponding").visible = true;	

		scnDeviceMonitorCameras.fnGetSprite("StatusCameraWarnIcon").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraErrorIcon").visible = false;
		scnDeviceMonitorCameras.fnGetSprite("StatusCameraNotRespondingIcon").visible = true;
				
		scnCameraViewport.fnGetSprite("StatusCameraError").visible = false;
		scnCameraViewport.fnGetSprite("StatusCameraFail").visible = true;	
	}

	if(intLightingMode == 0)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingOK").visible = true;
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingNotResponding").visible = false;
		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingOK").visible = true;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarn").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingError").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotResponding").visible = false;

		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarnIcon").visible = false;		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingErrorIcon").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotRespondingIcon").visible = false;

		scnCameraViewport.fnGetSprite("StatusLightError").visible = false;		
		scnCameraViewport.fnGetSprite("StatusLightFail").visible = false;
	}
	else if(intLightingMode == 1)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingError").visible = true;	
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingNotResponding").visible = false;
		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingOK").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarn").visible = true;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingError").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotResponding").visible = false;	

		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarnIcon").visible = true;		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingErrorIcon").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotRespondingIcon").visible = false;		
		
		scnCameraViewport.fnGetSprite("StatusLightError").visible = true;		
		scnCameraViewport.fnGetSprite("StatusLightFail").visible = false;	
	}
	else if(intLightingMode == 2)
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingError").visible = true;	
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingNotResponding").visible = false;
		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingOK").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarn").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingError").visible = true;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotResponding").visible = false;	

		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarnIcon").visible = false;		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingErrorIcon").visible = true;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotRespondingIcon").visible = false;		
		
		scnCameraViewport.fnGetSprite("StatusLightError").visible = true;		
		scnCameraViewport.fnGetSprite("StatusLightFail").visible = false;		
	}
	else
	{
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingOK").visible = false;
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingError").visible = false;	
		scnDeviceMonitorOverview.fnGetSprite("StatusLightingNotResponding").visible = true;
		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingOK").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarn").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingError").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotResponding").visible = true;

		scnDeviceMonitorLighting.fnGetSprite("StatusLightingWarnIcon").visible = false;		
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingErrorIcon").visible = false;
		scnDeviceMonitorLighting.fnGetSprite("StatusLightingNotRespondingIcon").visible = true;		
		
		scnCameraViewport.fnGetSprite("StatusLightError").visible = false;		
		scnCameraViewport.fnGetSprite("StatusLightFail").visible = true;
	}
}
