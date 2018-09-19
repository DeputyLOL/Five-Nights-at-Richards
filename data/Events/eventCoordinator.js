

// FUNCTIONS THAT CONTROL EVENTS/MALFUNCTIONS/MOVEMENT

// System Operation
// 0 = Normal
// 1 = Degraded - Needs Rebooting
// 2 = Disabled - Needs Rebooting 
// 3 = Not Responding - Needs Repairing
// 4 = Dead

var intCameraMode = 0;
var intLightingMode = 0;
var intClientMode = 0;
var intServerMode = 0;
var intPowerMode = 0;

var intOfficeDoorLeftPosition = 0;
var intOfficeDoorRightPosition = 0;

var intGameOver = 0;

var intMalfunctionCounter = 0;
var intRobot1Counter = 0;


// RUN EVERY 5 SECONDS
function fnEventCoordinator()
{
	if(intGameOver == 0)
	{
		if(intRobot1Counter < 5)
		{
			intRobot1Counter++;
			console.log("LOG: fnEventCoordinator - intRobot1Counter is: " + intRobot1Counter);
		}
		else
		{
			console.log("LOG: fnEventCoordinator - intRobot1Counter reached: " + intRobot1Counter);
			intRobot1Counter = 0;
			fnRobot1Coordinator();
		}
		if(intMalfunctionCounter < 10)
		{
			intMalfunctionCounter++;
			console.log("LOG: fnEventCoordinator - intMalfunctionCounter is: " + intMalfunctionCounter);
		}
		else
		{
			console.log("LOG: fnEventCoordinator - intMalfunctionCounter reached: " + intMalfunctionCounter);
			intMalfunctionCounter = 0;
			fnSystemBreaker();
		}
		setTimeout( function() 
		{ 
			fnEventCoordinator();
		}, 5000);
	}
}

function fnSystemBreaker()
{
	var intRandom = 0;
	intRandom = Math.floor((Math.random() * 100) + 1);
	if(intRandom < 50)
	{
		intRandom = Math.floor((Math.random() * 100) + 1);
		if(intCameraMode == 0 && intRandom <= 20)
		{
			console.log("LOG: fnSystemBreaker - Failed Camera. Random number was: " + intRandom);
			intCameraMode = 2;
		}
		else if(intLightingMode == 0 && (intRandom > 20 && intRandom <= 40))
		{
			console.log("LOG: fnSystemBreaker - Failed Lights. Random number was: " + intRandom);
			intLightingMode = 2;		
		}
		else if(intClientMode == 0 && (intRandom > 40 && intRandom <= 60))
		{
			console.log("LOG: fnSystemBreaker - Failed Client. Random number was: " + intRandom);
			intClientMode = 2;		
		}
		else if(intServerMode == 0 && (intRandom > 60 && intRandom <= 80))
		{
			console.log("LOG: fnSystemBreaker - Failed Server. Random number was: " + intRandom);
			intServerMode = 2;			
		}
		else if(intPowerMode == 0 && (intRandom > 80 && intRandom <= 100))
		{
			console.log("LOG: fnSystemBreaker - Failed Power. Random number was: " + intRandom);
			intPowerMode = 2;		
		}
		else
		{
			console.log("ERROR: fnSystemBreaker - Couldn't fail anything! Random number was: " + intRandom);
		}
		fnDeviceStatus();
	}
	else
	{
		console.log("LOG: fnSystemBreaker - Didn't fail anything. Random number was: " + intRandom);		
	}
}

function fnGameOver()
{
	intGameOver = 1;
	if(game.monitorInUse == true)
	{
		fnMonitorFlipper( "down" );
	}
	scnOffice.fnAddSubScene(scnRobot1Jumpscare);
	game.fnPlaySound("SCREAM");
	setTimeout( function() 
	{
		game.fnStopSound("FAN_LOOP");
		game.fnStopSound("OFFICE_AMBIENCE");
		scnGame.fnRemoveAllSubScenes();
		scnGame.fnGetSprite("MonitorFlipUp").visible = false;
		scnGame.fnGetSprite("MonitorFlipDown").visible = false;
		setTimeout( function() 
		{
			game.fnPlaySound("TAUNT_ROBOT1_A");
		}, 4000);
	}, 600);
}







