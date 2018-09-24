

	var scnBatteryIcon = new Scene("BatteryIcon");
	scnBatteryIcon.fnSetLayer(8);
	
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
