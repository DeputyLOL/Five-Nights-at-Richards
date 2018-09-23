

// FUNCTIONS THAT CONTROL EVENTS/MALFUNCTIONS/MOVEMENT

var intDebugMode = 0;

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

var intNightCounter = 0;
var intMalfunctionCounter = 0;
var intRobot1Counter = 0;


// RUN EVERY 5 SECONDS
function fnEventCoordinator()
{
	fnClock();
	//console.log(intNightCounter);
	if(intNightCounter >= 360)
	{
		fnEndNight();
	}
	if(intDebugMode == 0 && intGameOver == 0)
	{
		// MOVE ROBOTS
		if(intRobot1Counter < 10)
		{
			intRobot1Counter++;
			//console.log("LOG: fnEventCoordinator - intRobot1Counter is: " + intRobot1Counter);
		}
		else
		{
			//console.log("LOG: fnEventCoordinator - intRobot1Counter reached: " + intRobot1Counter);
			intRobot1Counter = 0;
			fnRobot1Coordinator();
		}
		
		// BREAK SOMETHING
		if(intMalfunctionCounter < 30)
		{
			intMalfunctionCounter++;
			//console.log("LOG: fnEventCoordinator - intMalfunctionCounter is: " + intMalfunctionCounter);
		}
		else
		{
			//console.log("LOG: fnEventCoordinator - intMalfunctionCounter reached: " + intMalfunctionCounter);
			intMalfunctionCounter = 0;
			fnSystemBreaker();
		}
		
		fnPowerManager();
	}
	if(intGameOver == 0)
	{
		setTimeout( function() 
		{ 
			intNightCounter++;
			fnEventCoordinator();
		}, 1000);
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
			intCameraMode = 1;
		}
		else if(intLightingMode == 0 && (intRandom > 20 && intRandom <= 40))
		{
			console.log("LOG: fnSystemBreaker - Failed Lights. Random number was: " + intRandom);
			intLightingMode = 1;		
		}
		else if(intClientMode == 0 && (intRandom > 40 && intRandom <= 60))
		{
			console.log("LOG: fnSystemBreaker - Failed Client. Random number was: " + intRandom);
			intClientMode = 1;		
		}
		else if(intServerMode == 0 && (intRandom > 60 && intRandom <= 80))
		{
			console.log("LOG: fnSystemBreaker - Failed Server. Random number was: " + intRandom);
			intServerMode = 1;			
		}
		else if(intPowerMode == 0 && (intRandom > 80 && intRandom <= 100))
		{
			console.log("LOG: fnSystemBreaker - Failed Power. Random number was: " + intRandom);
			//intPowerMode = 1;		
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

function fnEndNight()
{
	intGameOver = 1;
	console.log("NIGHT END");
	game.fnPlaySound("GAME_END");
	scnGame.fnGetSprite("MonitorFlipUp").visible = false;
	scnGame.fnGetSprite("MonitorFlipDown").visible = false;
	setTimeout( function() 
	{
		scnGame.fnRemoveAllSubScenes();
		scnGame.fnAddSubScene(scnNightWin);
		game.fnPlaySound("GAME_ENDALARM", true);
		game.fnStopSound("FAN_LOOP");
		game.fnStopSound("OFFICE_AMBIENCE");
		scnGame.fnGetSprite("MonitorFlipUp").visible = false;
		scnGame.fnGetSprite("MonitorFlipDown").visible = false;
	}, 300);
}


function fnGameOver()
{
	intGameOver = 1;
	console.log("GAME OVER! You survived for " + intNightCounter + " seconds." );
	if(game.monitorInUse == true)
	{
		fnMonitorFlipper( "down" );
	}
	scnOffice.fnAddSubScene(scnRobot1Jumpscare);
	game.fnPlaySound("SCREAM");
	setTimeout( function() 
	{
		game.fnStopSound("ALL");
		scnGame.fnRemoveAllSubScenes();
		scnGame.fnGetSprite("MonitorFlipUp").visible = false;
		scnGame.fnGetSprite("MonitorFlipDown").visible = false;
		setTimeout( function() 
		{
			game.fnPlaySound("TAUNT_ROBOT1_A");
		}, 1000);
	}, 600);
}

