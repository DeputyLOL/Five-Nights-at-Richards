

var intPower = 1000;



function fnPowerManager()
{
	intPower = intPower - (intOfficeDoorLeftPosition*3) - game.monitorInUse - intCameraLight - 1;
	console.log("POWER USAGE:");
	console.log("MONITOR - " + game.monitorInUse);
	console.log("LIGHTS - " + intCameraLight);
	console.log("LEFT DOOR - " + intOfficeDoorLeftPosition*3);
	console.log("POWER LEFT: " + intPower);
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
		else if(intPower > 50)
		{
			scnBatteryIcon.fnGetSprite("BatteryWarn").visible = true;
			scnBatteryIcon.fnGetSprite("BatteryIcon20").visible = false;
			scnBatteryIcon.fnGetSprite("BatteryIcon5").visible = true;
		}	
	}
	else
	{
		scnBatteryIcon.fnGetSprite("BatteryFail").visible = true;
		scnBatteryIcon.fnGetSprite("BatteryWarn").visible = false;
	}		
}


	var scnBatteryIcon = new Scene("BatteryIcon");
	scnBatteryIcon.fnSetLayer(1);
	
	var imgLoad = new Sprite("BatteryIcon95");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power7.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon95").visible = false;
	
	var imgLoad = new Sprite("BatteryIcon85");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power6.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon85").visible = false;

	var imgLoad = new Sprite("BatteryIcon75");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power5.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon75").visible = false;
		
	var imgLoad = new Sprite("BatteryIcon65");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power4.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon65").visible = false;
	
	var imgLoad = new Sprite("BatteryIcon50");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power3.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon50").visible = false;

	var imgLoad = new Sprite("BatteryIcon30");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power2.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon30").visible = false;

	var imgLoad = new Sprite("BatteryIcon20");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power1.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon20").visible = false;	
	
	var imgLoad = new Sprite("BatteryIcon5");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Power0.png");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryIcon5").visible = false;
	
	var imgLoad = new Sprite("BatteryFail");
	imgLoad.x = 720;
	imgLoad.y = 574;
	imgLoad.width = 21;
	imgLoad.height = 20;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_PowerFail.gif");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryFail").visible = false;
	
	var imgLoad = new Sprite("BatteryWarn");
	imgLoad.x = 725;
	imgLoad.y = 580;
	imgLoad.width = 15;
	imgLoad.height = 15;
	imgLoad.fnLoadImage("./assets/img/Console/Common/Warning.gif");
	scnBatteryIcon.fnAddSprite(imgLoad);
	scnBatteryIcon.fnGetSprite("BatteryWarn").visible = false;
