

// FUNCTIONS THAT CONTROL ENGINEER HELPER
// ROLE: SPECIAL
// STARTS: 10 - MANUFACTURING (BASE)
// NAVIGATION: 2-VENTROOM, 11-POWERROOM, 15-SERVERROOM, 14-STAFF ACCESS, 16 - NULL
// GOAL: DYNAMIC (OFFICE WHEN CORRUPTED)
// SPECIAL: REPAIR, CONTROLLED, DUCK NAVIGATION

//var strEngineerHelperRoom = "MAN";
//var strEngineerHelperTarget = "OFF";
//var intEngineerHelperState = "IDLE"; //BASE, TRANSIT, BUSY, IDLE, CORRUPTED
//var intEngineerHelperCorrupted = 1;
//var intEngineerHelperIdleTime = 0;
//var intEngineerHelperFoundPlayer = 0;

/*
scnCameraDemoStage.fnGetSprite("DemoStage_EngineerHelper").visible = true;
scnCameraDemoStage.fnGetSprite("DemoStage_EngineerHelper_Lit").visible = false;
scnCameraDemoStage.fnGetSprite("DemoStage_EngineerHelper_2").visible = false;
scnCameraDemoStage.fnGetSprite("DemoStage_EngineerHelper_2_Lit").visible = false;
scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_EngineerHelper").visible = false;
scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_EngineerHelper_Lit").visible = false;
scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_EngineerHelper_2").visible = false;
scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_EngineerHelper_2_Lit").visible = false;
scnCameraMedbay.fnGetSprite("Medbay_EngineerHelper").visible = false;
scnCameraMedbay.fnGetSprite("Medbay_EngineerHelper_Lit").visible = false;
scnCameraLobby.fnGetSprite("Lobby_EngineerHelper").visible = false;
*/
scnCameraVentRoom.fnGetSprite("VentRoom_EngineerHelper").visible = false;
scnCameraVentRoom.fnGetSprite("VentRoom_EngineerHelper_Lit").visible = false;

////

/*
function fnEngineerHelperCoordinator()
{
	var intRandom = 0;
	if(intEngineerHelperCorrupted)
	{
		if(strEngineerHelperRoom == "MAN")
		{
			//console.log("LOG: fnEngineerHelper() - Moving from: " + strEngineerHelperRoom);
			//strEngineerHelperRoom = "NUL"; // ... move to Lobby Corridor
			//console.log("LOG: fnEngineerHelper() - Moving to: " + strEngineerHelperRoom);
			//game.fnPlaySound("FOOTSTEP_EngineerHelper");
			//fnCameraDisrupter(2,0);
		}
	}
	else
	{
		if(intEngineerHelperIdleTime > 2)
		{
			if(strEngineerHelperTarget !== "MAN")
			{
				strEngineerHelperRoom = strEngineerHelperTarget;
			}
			if(strEngineerHelperRoom == "VNT")
			{
				console.log("LOG: fnEngineerHelper() - Moving from: " + strEngineerHelperRoom);
				strEngineerHelperRoom = "NUL"; // ... move to Lobby Corridor
				console.log("LOG: fnEngineerHelper() - Moving to: " + strEngineerHelperRoom);
				//game.fnPlaySound("FOOTSTEP_EngineerHelper");
				fnCameraDisrupter(2,0);
			}
			else if(strEngineerHelperRoom == "NUL")
			{
				console.log("LOG: fnEngineerHelper() - Moving from: " + strEngineerHelperRoom);
				strEngineerHelperRoom = "MAN"; // ... move to Lobby Corridor
				console.log("LOG: fnEngineerHelper() - Moving to: " + strEngineerHelperRoom);
				//game.fnPlaySound("FOOTSTEP_EngineerHelper");
				fnCameraDisrupter(0,10);
			}
			else if(strEngineerHelperRoom == "POW")
			{
				console.log("LOG: fnEngineerHelper() - Moving from: " + strEngineerHelperRoom);
				strEngineerHelperRoom = "MAN"; // ... move to Lobby Corridor
				console.log("LOG: fnEngineerHelper() - Moving to: " + strEngineerHelperRoom);
				//game.fnPlaySound("FOOTSTEP_EngineerHelper");
				fnCameraDisrupter(11,10);
			}
			else if(strEngineerHelperRoom == "SRV")
			{
				console.log("LOG: fnEngineerHelper() - Moving from: " + strEngineerHelperRoom);
				strEngineerHelperRoom = "MAN"; // ... move to Lobby Corridor
				console.log("LOG: fnEngineerHelper() - Moving to: " + strEngineerHelperRoom);
				//game.fnPlaySound("FOOTSTEP_EngineerHelper");
				fnCameraDisrupter(15,10);
			}
		}
		else
		{
			//(strEngineerHelperRoom == "VNT" || strEngineerHelperRoom == "POW" || strEngineerHelperRoom == "SRV") &&
			console.log("ERROR: fnEngineerHelper() - Unexpected room: " + strEngineerHelperRoom);
			strEngineerHelperRoom = "MAN";
			console.log("LOG: fnEngineerHelper() - Resetting to: " + strEngineerHelperRoom);
		}
		strEngineerHelperTarget = "MAN";
	}

}
*/
function fnEngineerHelperAudioResponse( strName )
{
	var random = Math.floor((Math.random() * 100) + 1);
	console.log(random);
	if(strName == "idle")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random < 20)
			{
				game.fnPlaySound("EH_IDLE_C");
			}
			else if(random < 40)
			{
				game.fnPlaySound("EH_IDLE2_C");				
			}
			else if(random < 60)
			{
				game.fnPlaySound("EH_IDLE3_C");				
			}
			else if(random < 80)
			{
				game.fnPlaySound("EH_IDLE4_C");				
			}
			else if(random < 95)
			{
				game.fnPlaySound("EH_IDLE5_C");				
			}
			else
			{
				game.fnPlaySound("EH_IDLE6_C");		
			}				
		}
		else
		{
			if(random < 25)
			{
				game.fnPlaySound("EH_IDLE");
			}
			else if(random < 50)
			{
				game.fnPlaySound("EH_IDLE2");				
			}
			else if(random < 75)
			{
				game.fnPlaySound("EH_IDLE3");				
			}
			else
			{
				game.fnPlaySound("EH_IDLE4");		
			}		
		}
	}
	else if(strName == "dispatch")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random < 33)
			{
				game.fnPlaySound("EH_DISPATCH_C");
			}
			else if(random < 66)
			{
				game.fnPlaySound("EH_DISPATCH2_C");				
			}
			else
			{
				game.fnPlaySound("EH_DISPATCH3_C");		
			}				
		}
		else
		{
			if(random < 33)
			{
				game.fnPlaySound("EH_DISPATCH");
			}
			else if(random < 66)
			{
				game.fnPlaySound("EH_DISPATCH2");				
			}
			else
			{
				game.fnPlaySound("EH_DISPATCH3");			
			}		
		}
	}
	else if(strName == "return")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random < 33)
			{
				game.fnPlaySound("EH_RETURN_C");
			}
			else
			{
				game.fnPlaySound("EH_RETURN2_C");				
			}			
		}
		else
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_DISPATCH");
			}
			else
			{
				game.fnPlaySound("EH_DISPATCH2");			
			}		
		}
	}
	else if(strName == "repair_check")
	{
		if(intEngineerHelperCorrupted)
		{
			if(random < 33)
			{
				game.fnPlaySound("EH_REPAIR_CHECK_C");
			}
			else if(random < 66)
			{
				game.fnPlaySound("EH_REPAIR_CHECK2_C");				
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_CHECK3_C");		
			}				
		}
		else
		{
			game.fnPlaySound("EH_REPAIR_CHECK");
		}
	}
	else if(strName == "repair_start")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random < 33)
			{
				game.fnPlaySound("EH_REPAIR_START_C");
			}
			else if(random < 66)
			{
				game.fnPlaySound("EH_REPAIR_START2_C");				
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_START3_C");		
			}			
		}
		else
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_REPAIR_START");
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_START2");			
			}		
		}
	}
	else if(strName == "repair_done")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random > 75)
			{
				game.fnPlaySound("EH_REPAIR_DONE_C");
			}
			else if(random > 50)
			{
				game.fnPlaySound("EH_REPAIR_DONE2_C");				
			}
			else if(random > 25)
			{
				game.fnPlaySound("EH_REPAIR_DONE3_C");		
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_DONE4_C");		
			}						
		}
		else
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_REPAIR_DONE");
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_DONE2");			
			}		
		}
	}
	else if(strName == "repair_cancel")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_REPAIR_CANCEL_C");
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_CANCEL2_C");		
			}						
		}
		else
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_REPAIR_CANCEL");
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_CANCEL2");			
			}		
		}
	}
	else if(strName == "repair_fail")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_REPAIR_FAIL_C");
			}
			else
			{
				game.fnPlaySound("EH_REPAIR_FAIL2_C");		
			}						
		}
		else
		{
		//	game.fnPlaySound("EH_REPAIR_FAIL");
		}
	}
	else if(strName == "reboot")
	{	
		if(intEngineerHelperCorrupted)
		{				
		}
		else
		{
			game.fnPlaySound("EH_REBOOT");
		}
	}
	else if(strName == "shutdown")
	{	
		if(intEngineerHelperCorrupted)
		{
			if(random > 50)
			{
				game.fnPlaySound("EH_SHUTDOWN_C");
			}
			else
			{
				game.fnPlaySound("EH_SHUTDOWN2_C");		
			}						
		}
		else
		{
			game.fnPlaySound("EH_SHUTDOWN");
		}
	}
	else if(strName == "power" && intEngineerHelperCorrupted == 1)
	{	
		if(intPower < 0)
		{
			game.fnPlaySound("EH_POWERTAUNT");
		}
		else
		{
			game.fnPlaySound("EH_POWERWARN");			
		}
	}
	else
	{
		console.log("ERROR: fnEngineerHelperAudioResponse(strName) - No such response:" + strName);
	}
}

