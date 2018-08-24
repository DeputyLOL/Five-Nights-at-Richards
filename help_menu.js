	//Create Menu scene
	var scnDesktop = new Scene("HelpMenu");
	//Add sprite
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnDesktop.fnAddSprite(imgLoad);	

	var imgLoad = new Sprite("TaskBar");
	imgLoad.fnLoadImage("./assets/img/Console/Desktop_Taskbar.png");
	imgLoad.x = 0;
	imgLoad.y = 566;
	imgLoad.width = 800;
	imgLoad.height = 34;
	scnDesktop.fnAddSprite(imgLoad);
	
	var imgLoad = new Button("IconSystemMonitor");
	imgLoad.x = 20;
	imgLoad.y = 20;
	imgLoad.width = 100;
	imgLoad.height = 100;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop_Icon_DeviceMonitor.png", 
	"./assets/img/Console/Desktop_Icon_DeviceMonitorHighLighted.png",
	"./assets/img/Console/Desktop_Icon_DeviceMonitorSelected.png",
	"./assets/img/Console/null.png");
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		game.fnPlaySound("FAN_BUSY",true);					
		game.fnChangeScene("Logging In");
		setTimeout( function() 
		{ 
			game.fnChangeScene("Desktop");
			game.fnPauseSound("FAN_BUSY");
			game.fnPlaySound("SYSTEM_START");
		}, 3000);
	}
	scnDesktop.fnAddButton(imgLoad);

	var imgLoad = new Button("IconEmail");
	imgLoad.x = 20;
	imgLoad.y = 120;
	imgLoad.width = 100;
	imgLoad.height = 100;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop_Icon_Email.png", 
	"./assets/img/Console/Desktop_Icon_EmailHighlighted.png",
	"./assets/img/Console/Desktop_Icon_EmailSelected.png",
	"./assets/img/Console/null.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		game.fnPlaySound("FAN_BUSY",true);					
		game.fnChangeScene("Logging In");
		setTimeout( function() 
		{ 
			game.fnChangeScene("Desktop");
			game.fnPauseSound("FAN_BUSY");
			game.fnPlaySound("SYSTEM_START");
		}, 3000);
	}
	scnDesktop.fnAddButton(imgLoad);

	var imgLoad = new Button("IconCameras");
	imgLoad.x = 20;
	imgLoad.y = 220;
	imgLoad.width = 100;
	imgLoad.height = 100;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop_Icon_Cameras.png", 
	"./assets/img/Console/Desktop_Icon_CamerasHighlighted.png",
	"./assets/img/Console/Desktop_Icon_CamerasSelected.png",
	"./assets/img/Console/null.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		game.fnPlaySound("FAN_BUSY",true);					
		game.fnChangeScene("Logging In");
		setTimeout( function() 
		{ 
			game.fnChangeScene("Desktop");
			game.fnPauseSound("FAN_BUSY");
			game.fnPlaySound("SYSTEM_START");
		}, 3000);
	}
	scnDesktop.fnAddButton(imgLoad);
