

var intPower = 1000;
var intPoweredDown = 0;
var intPoweredDrain = 0;

function fnPowerManager()
{
	intPoweredDrain = (intOfficeDoorLeftPosition*10) + (game.monitorInUse * intMonitorPower) + intCameraLight + 1;
	intPower = intPower - intPoweredDrain
	console.log("POWER USAGE: -" + intPoweredDrain);

	if(intPowerMode == 0)
	{
		scnBatteryIcon.fnGetSprite("BatteryFail").visible = false;
		if(intPower > 950)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon95").visible = true;
		}
		else if(intPower > 850)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon95").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon85").visible = true;
		}
		else if(intPower > 750)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon85").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon75").visible = true;
		}
		else if(intPower > 650)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon75").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon65").visible = true;
		}
		else if(intPower > 400)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon65").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon50").visible = true;
		}
		else if(intPower > 300)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon50").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon30").visible = true;
		}
		else if(intPower > 200)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon30").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon20").visible = true;
		}
		else if(intPower > 100)
		{
			scnBatteryIcon.fnGetSprite("BatteryIcon20").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon5").visible = true;
		}	
		else if(intPower > 50)
		{
			scnBatteryIcon.fnGetSprite("BatteryWarn").visible = true;
		}	
	}
	else
	{
		scnBatteryIcon.fnGetSprite("BatteryFail").visible = true;
		scnBatteryIcon.fnGetSprite("BatteryWarn").visible = false;
	}
	if( intPower <= 0)
	{
		fnPowerDown()
	}
}

function fnPowerDown()
{
	if(intPoweredDown == 0)
	{
		game.fnStopSound("ALL");
		fnOfficeDoor( "left" , "up" )
		fnOfficeDoor( "right" , "up" )
		fnMonitorFlipper("down");
		scnGame.fnGetSprite("MonitorFlipUp").visible = false;
		scnOffice.fnGetSprite("LightLeft").visible = false;
		scnOffice.fnGetSprite("DoorLeftOpen").visible = false;
		scnOffice.fnGetSprite("DoorLeftClose").visible = false;
		game.fnPlaySound("OFFICE_POWERDOWN");
		game.fnPlaySound("BUILDING_AMBIENCE",true);
		if(intMonitorOn)
		{
			game.fnPlaySound("FAN_STOP");
		}
		intPoweredDown = 1;
		setTimeout( function() 
		{
			game.fnPlaySound("QUARANTINE_ALARM");
		},10000)	

	}
	else
	{
	}
}
