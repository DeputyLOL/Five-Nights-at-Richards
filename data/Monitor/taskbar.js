
	var intTaskbarPowerMenu = 0;
	function fnTaskbarPowerMenu(toggle)
	{
		if (toggle == "on")
		{
			scnTaskbar.fnGetSprite("TaskbarRestartButton").visible = true;
			scnTaskbar.fnGetSprite("TaskbarShutdownButton").visible = true;
			intTaskbarPowerMenu = 1;
		}
		else if(toggle == "off")
		{
			scnTaskbar.fnGetSprite("TaskbarRestartButton").visible = false;
			scnTaskbar.fnGetSprite("TaskbarShutdownButton").visible = false;
			intTaskbarPowerMenu = 0;
		}
		else if(toggle == "toggle")
		{
			if (intTaskbarPowerMenu == 0)
			{
				fnTaskbarPowerMenu("on");
			}
			else
			{
				fnTaskbarPowerMenu("off");			
			}
		}
		else
		{
			console.log("ERROR: fnTaskbarPowerMenu() - Unexpected input: " + toggle);
		}
	}

	var scnTaskbar = new Scene("Taskbar");

	var imgLoad = new Sprite("TaskBar");
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar.png");
	imgLoad.x = 0;
	imgLoad.y = 566;
	imgLoad.width = 800;
	imgLoad.height = 34;
	scnTaskbar.fnAddSprite(imgLoad);

	var imgLoad = new Button("TaskbarPowerButton");
	imgLoad.x = 2;
	imgLoad.y = 570;
	imgLoad.width = 64;
	imgLoad.height = 28;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_ButtonPower.png", 
	"./assets/img/Console/Desktop/Desktop_Taskbar_ButtonPowerHighlighted.png",
	"./assets/img/Console/Desktop/Desktop_Taskbar_ButtonPowerPressed.png",
	"./assets/img/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {
		game.fnPlaySound("BUTTON");					
		fnTaskbarPowerMenu("toggle");		
	}
	scnTaskbar.fnAddButton(imgLoad);
	
	var imgLoad = new Button("TaskbarRestartButton");
	imgLoad.x = 0;
	imgLoad.y = 520;
	imgLoad.width = 182;
	imgLoad.height = 46;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Restart.png", 
	"./assets/img/Console/Desktop/Desktop_Taskbar_RestartHighlighted.png",
	"./assets/img/Console/Desktop/Desktop_Taskbar_RestartSelected.png",
	"./assets/img/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {
		game.fnPlaySound("BUTTON");			
		fnTaskbarPowerMenu("off");
		fnMonitorPower("restart");
	}
	scnTaskbar.fnAddButton(imgLoad);
	scnTaskbar.fnGetSprite("TaskbarRestartButton").visible = false;
	
	var imgLoad = new Button("TaskbarShutdownButton");
	imgLoad.x = 0;
	imgLoad.y = 474;
	imgLoad.width = 182;
	imgLoad.height = 46;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar_Shutdown.png", 
	"./assets/img/Console/Desktop/Desktop_Taskbar_ShutdownHighlighted.png",
	"./assets/img/Console/Desktop/Desktop_Taskbar_ShutdownSelected.png",
	"./assets/img/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {
		game.fnPlaySound("BUTTON");			
		fnTaskbarPowerMenu("off");
		fnMonitorPower("off");
	}
	scnTaskbar.fnAddButton(imgLoad);
	scnTaskbar.fnGetSprite("TaskbarShutdownButton").visible = false;
	
	scnTaskbar.fnSetLayer(8);
	