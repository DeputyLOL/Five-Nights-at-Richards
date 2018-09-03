

// FUNCTIONS THAT CONTROL ROBOT 1
// ROLE: STANDARD
// STARTS: 5-DEMOROOM
// NAVIGATION: 5.5-DEMOROOM 3-LOBBY CORRIDOR 3.5-LOBBY CORRIDOR 4-MEDBAY 1-LOBBY 2-VENTILATION
// GOAL: 0-OFFICE
// SPECIAL:NONE

var strRobot1Room = "DEM";
scnCameraDemoStage.fnGetSprite("DemoStage_Robot1").visible = true;
scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_2").visible = false;
scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1").visible = false;
scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_2").visible = false;
scnCameraMedbay.fnGetSprite("Medbay_Robot1").visible = false;
scnCameraLobby.fnGetSprite("Lobby_Robot1").visible = false;

function fnRobot1Coordinator()
{
	var intRandom = 0;
	if(strRobot1Room == "DEM" || strRobot1Room == "DEM2") // If robot is in demoroom...
	{
		console.log("ROBOT1: MOVING FROM:" + strRobot1Room);
		scnCameraDemoStage.fnGetSprite("DemoStage_Robot1").visible = false;
		scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_2").visible = false;
		strRobot1Room = "COR"; // ... move to Lobby Corridor
		console.log("ROBOT1: MOVING TO:" + strRobot1Room);
		scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1").visible = true;
		fnCameraDisrupter(5,3);
	}
	else if(strRobot1Room == "MED") // If robot is in medbay...
	{
		console.log("ROBOT1: MOVING FROM:" + strRobot1Room);
		scnCameraMedbay.fnGetSprite("Medbay_Robot1").visible = false;
		strRobot1Room = "COR"; // ... move to Lobby Corridor
		console.log("ROBOT1: MOVING TO:" + strRobot1Room);
		scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1").visible = true;
		fnCameraDisrupter(4,3);
	}
	else if(strRobot1Room == "VNT") // If robot is in vent room...
	{
		console.log("ROBOT1: MOVING FROM:" + strRobot1Room);
		strRobot1Room = "LOB"; // ... move to Lobby
		console.log("ROBOT1: MOVING TO:" + strRobot1Room);
		scnCameraLobby.fnGetSprite("Lobby_Robot1").visible = true;
		fnCameraDisrupter(0,1);
	}
	else if(strRobot1Room == "LOB") // If robot is in Lobby...
	{
		console.log("ROBOT1: MOVING FROM:" + strRobot1Room);
		scnCameraLobby.fnGetSprite("Lobby_Robot1").visible = false;
		intRandom = Math.floor((Math.random() * 2));
		if(intRandom == 1)
		{
			strRobot1Room = "COR"; // ... move to Lobby Corridor
			console.log("ROBOT1: MOVING TO:" + strRobot1Room);
			scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1").visible = true;
			fnCameraDisrupter(1,3);
		}
		else
		{
			strRobot1Room = "VNT";  // ... move to vent room
			console.log("ROBOT1: MOVING TO:" + strRobot1Room);		
		}
	}
	else if(strRobot1Room == "COR")
	{
		console.log("ROBOT1: MOVING FROM:" + strRobot1Room);
		scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1").visible = false;
		intRandom = Math.floor((Math.random() * 10) + 1);
		if(intRandom < 2)
		{
			strRobot1Room = "DEM2";
			console.log("ROBOT1: MOVING TO:" + strRobot1Room);
			scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_2").visible = true;
			fnCameraDisrupter(3,5);
		}
		else if(intRandom < 4)
		{
			strRobot1Room = "MED";
			console.log("ROBOT1: MOVING TO:" + strRobot1Room);
			scnCameraMedbay.fnGetSprite("Medbay_Robot1").visible = true;
			fnCameraDisrupter(3,4);			
		}
		else if(intRandom < 6)
		{
			strRobot1Room = "LOB";
			console.log("ROBOT1: MOVING TO:" + strRobot1Room);
			scnCameraLobby.fnGetSprite("Lobby_Robot1").visible = true;
			fnCameraDisrupter(3,1);			
		}
		else
		{
			strRobot1Room = "COR2";
			console.log("ROBOT1: MOVING TO:" + strRobot1Room);
			scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_2").visible = true;
			fnCameraDisrupter(3,3);
		}
	}
	else if(strRobot1Room == "COR2") // If robot is near the office...
	{
		console.log("ROBOT1: MOVING FROM:" + strRobot1Room);
		scnCameraLobbyCorridor.fnGetSprite("LobbyCorridor_Robot1_2").visible = false;
		strRobot1Room = "OFF"; // ... move to office!
		console.log("ROBOT1: MOVING TO:" + strRobot1Room);
		fnCameraDisrupter(3,0);
	}
	else
	{
		console.log("ROBOT1: UNEXPECTED ROOM:" + strRobot1Room);
		strRobot1Room = "DEM2";
		scnCameraDemoStage.fnGetSprite("DemoStage_Robot1_2").visible = true;
		console.log("ROBOT1: RESETTING TO ROOM:" + strRobot1Room);
		fnCameraDisrupter(0,5);
	}
}