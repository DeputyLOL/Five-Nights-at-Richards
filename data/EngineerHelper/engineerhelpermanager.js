

function fnEngineerHelperManager( command )
{
	if(command == "VNT")
	{
		strEngineerHelperTarget = command;
	}
	else if(command == "POW")
	{
		strEngineerHelperTarget = command;
	}
	else if(command == "SRV")
	{
		strEngineerHelperTarget = command;
	}
	else if(command == "Reboot")
	{
		intEngineerHelperState = "REBOOT";
	}
}

function fnEngineerHelperStatus()
{
	if(intEngineerHelperCorrupted && intEngineerHelperState != "REBOOT" && intEngineerHelperState != "REBOOTING")
	{
		scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = false;
		scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = false;
		scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = false;	
		scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = false;	
		scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = true;
		
		scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = false;
		scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = false;	
		scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = false;	
		scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = true;			
	}
	else
	{
		if(strEngineerHelperRoom == "MAN" && intEngineerHelperState == "IDLE") // BASE
		{
			scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = true;
			scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusReboot").visible = false;			
			scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = true;
			scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = true;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = true;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = true;
		}
		else if(intEngineerHelperState == "IDLE")
		{
			scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = true;
			scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusReboot").visible = false;			
			scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = true;
			scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = true;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = true;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = true;		
		}
		else if(intEngineerHelperState == "TRANSIT")
		{
			scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = true;	
			scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusReboot").visible = false;			
			scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = false;	
		}
		else if(intEngineerHelperState == "BUSY")
		{
			scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = true;	
			scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusReboot").visible = false;			
			scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = false;	
		}	
		else
		{
			scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("StatusReboot").visible = true;			
			scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = false;
			scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = false;	
			scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = false;	
		}
	}
}

var strEngineerHelperRoom = "MAN";
var strEngineerHelperTarget = "NUL"; //MAN, VNT, SRV, POW
var intEngineerHelperState = "IDLE"; //TRANSIT, BUSY, IDLE, CORRUPTED
var intEngineerHelperCorrupted = 0;
var intEngineerHelperIdleTime = 0;
var intEngineerHelperFoundPlayer = 0;

function fnEngineerHelperCoordinator()
{
	console.log(strEngineerHelperRoom + strEngineerHelperTarget + intEngineerHelperState);
	fnEngineerHelperStatus();
	if(intEngineerHelperState != "REBOOT" && intEngineerHelperState != "REBOOTING")
	{
		if(strEngineerHelperTarget != strEngineerHelperRoom && strEngineerHelperTarget != "NUL" && intEngineerHelperState == "IDLE" )
		{	
			if(strEngineerHelperRoom != "MAN")
			{
				fnEngineerHelperAudioResponse("return");			
			}
			else
			{
				fnEngineerHelperAudioResponse("dispatch");				
			}
			strEngineerHelperRoom = "NUL";
			intEngineerHelperState = "TRANSIT";
			fnEngineerHelperStatus();
			console.log(strEngineerHelperRoom + strEngineerHelperTarget + intEngineerHelperState);
			setTimeout( function() 
			{
				strEngineerHelperRoom = strEngineerHelperTarget;
				intEngineerHelperState = "IDLE";
				strEngineerHelperTarget = "NUL";
				intEngineerHelperIdleTime = 0;
				fnEngineerHelperStatus();
				console.log(strEngineerHelperRoom + strEngineerHelperTarget + intEngineerHelperState);
				if(strEngineerHelperRoom != "MAN")
				{
					fnEngineerHelperCheckRoom();
				}
			}, 7000);
		}
		else if(strEngineerHelperTarget == strEngineerHelperRoom)
		{
			console.log("RECHECKING");
			strEngineerHelperTarget = "NUL";
			intEngineerHelperIdleTime = 0;	
			if(strEngineerHelperRoom != "MAN")
			{
				fnEngineerHelperStatus();
				fnEngineerHelperCheckRoom();
			}		
		}
		else
		{
			intEngineerHelperIdleTime++;
			if(intEngineerHelperIdleTime > 5 && strEngineerHelperRoom != "MAN" && intEngineerHelperState == "IDLE")
			{
				strEngineerHelperTarget = "MAN";
				intEngineerHelperIdleTime = 0;
				fnEngineerHelperCoordinator();
			}
			else if(intEngineerHelperIdleTime > 15 && strEngineerHelperRoom == "MAN")
			{
				var random = Math.floor((Math.random() * 100) + 1);
				if(random < 10 && intEngineerHelperCorrupted)
				{
					fnEngineerHelperManager("VNT");
				}
				else if(random < 20 && intEngineerHelperCorrupted )
				{
					fnEngineerHelperManager("POW");				
				}
				else if(random < 30 && intEngineerHelperCorrupted)
				{
					fnEngineerHelperManager("SRV");				
				}
				else
				{
					if(intEngineerHelperCorrupted && intPower < 50)
					{
						fnEngineerHelperAudioResponse("power");					
					}
					else
					{
						fnEngineerHelperAudioResponse("idle");							
					}	
				}
				intEngineerHelperIdleTime = 0;
			}	
		}
		fnEngineerHelperStatus();
	}
	else if(intEngineerHelperState == "REBOOT")
	{
		
		intEngineerHelperIdleTime = 0;
		console.log("REBOOTING");
		fnEngineerHelperAudioResponse("shutdown");
		intEngineerHelperState = "REBOOTING";
		fnEngineerHelperStatus();
		setTimeout( function() 
		{
			intEngineerHelperCorrupted = 0;
			fnEngineerHelperAudioResponse("reboot");
			intEngineerHelperState = "IDLE";
			fnEngineerHelperStatus();
			intEngineerHelperIdleTime = 0;			
		}, 5000);		
	}
}

function fnEngineerHelperCheckRoom()
{
	intEngineerHelperIdleTime = 0;
	if(intEngineerHelperCorrupted)
	{
		intEngineerHelperState = "BUSY";
		fnEngineerHelperStatus();
		fnEngineerHelperAudioResponse("repair_check");
		setTimeout( function() 
		{
			if(strEngineerHelperRoom == "VNT")
			{
				if(intVentMode == 0)
				{
					fnEngineerHelperAudioResponse("repair_start");
					setTimeout( function() 
					{
						fnEngineerHelperAudioResponse("repair_done");
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
						intEngineerHelperIdleTime = 0;	
						intVentMode = 3;
					}, 4500);
				}
				else if(intVentMode < 3)
				{
					fnEngineerHelperAudioResponse("repair_fail");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4500);
				}
				else
				{
					fnEngineerHelperAudioResponse("repair_cancel");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4500);
				}
			}
			else if(strEngineerHelperRoom == "POW")
			{
				console.log("CHECKING POWER");
				if(intPowerMode == 0)
				{
					fnEngineerHelperAudioResponse("repair_start");
					console.log("REPAIRING POWER");
					setTimeout( function() 
					{
						fnEngineerHelperAudioResponse("repair_done");
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
						intEngineerHelperIdleTime = 0;	
						intPowerMode = 3;
					}, 3000);
				}
				else if(intPowerMode < 3)
				{
					fnEngineerHelperAudioResponse("repair_fail");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4500);
				}
				else
				{
					fnEngineerHelperAudioResponse("repair_cancel");
					console.log("NOT REPAIRING POWER");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4000);
				}
			}
			else if(strEngineerHelperRoom == "SRV")
			{
				console.log("CHECKING SERVER");
				if(intServerMode == 0)
				{
					fnEngineerHelperAudioResponse("repair_start");
					console.log("REPAIRING SERVER");
					setTimeout( function() 
					{
						fnEngineerHelperAudioResponse("repair_done");
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
						intEngineerHelperIdleTime = 0;	
						intServerMode = 3;
					}, 3000);
				}
				else if(intServerMode < 3)
				{
					fnEngineerHelperAudioResponse("repair_fail");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4500);
				}
				else
				{
					fnEngineerHelperAudioResponse("repair_cancel");
					console.log("NOT REPAIRING SERVER");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4000);
				}
			}
			else
			{
				intEngineerHelperIdleTime = 0;		
				intEngineerHelperState = "IDLE";
				fnEngineerHelperStatus();
			}
		}, 2000);			
	}
	else
	{
		// start inspecting
		intEngineerHelperState = "BUSY";
		fnEngineerHelperStatus();
		fnEngineerHelperAudioResponse("repair_check");
		setTimeout( function() 
		{
			if(strEngineerHelperRoom == "VNT")
			{
				console.log("CHECKING VENT");
				if(intVentMode > 0 && intVentMode < 4)
				{
					fnEngineerHelperAudioResponse("repair_start");
					console.log("REPAIRING VENT");
					setTimeout( function() 
					{
						fnEngineerHelperAudioResponse("repair_done");
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
						intEngineerHelperIdleTime = 0;	
						intVentMode = 0;
					}, 4500);
				}
				else
				{
					fnEngineerHelperAudioResponse("repair_cancel");
					console.log("NOT REPAIRING VENT");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4500);
				}
			}
			else if(strEngineerHelperRoom == "POW")
			{
				console.log("CHECKING POWER");
				if(intPowerMode > 0 && intPowerMode < 4)
				{
					fnEngineerHelperAudioResponse("repair_start");
					console.log("REPAIRING POWER");
					setTimeout( function() 
					{
						fnEngineerHelperAudioResponse("repair_done");
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
						intEngineerHelperIdleTime = 0;	
						intPowerMode = 0;
					}, 3000);
				}
				else
				{
					fnEngineerHelperAudioResponse("repair_cancel");
					console.log("NOT REPAIRING POWER");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4000);
				}
			}
			else if(strEngineerHelperRoom == "SRV")
			{
				console.log("CHECKING SERVER");
				if(intServerMode > 0 && intServerMode < 4)
				{
					fnEngineerHelperAudioResponse("repair_start");
					console.log("REPAIRING SERVER");
					setTimeout( function() 
					{
						fnEngineerHelperAudioResponse("repair_done");
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
						intEngineerHelperIdleTime = 0;	
						intServerMode = 0;
					}, 3000);
				}
				else
				{
					fnEngineerHelperAudioResponse("repair_cancel");
					console.log("NOT REPAIRING SERVER");
					setTimeout( function() 
					{
						intEngineerHelperIdleTime = 0;	
						intEngineerHelperState = "IDLE";
						fnEngineerHelperStatus();
					}, 4000);
				}
			}
			else
			{
				intEngineerHelperIdleTime = 0;		
				intEngineerHelperState = "IDLE";
				fnEngineerHelperStatus();
			}
		}, 2000);		
	}
}

