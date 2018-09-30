	//Create Menu scene
	var scnEngineerHelperMonitor = new Scene("EngineerHelperMonitor");
	//Add sprite

	var imgLoad = new Sprite("Window");
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/Window_EngineerHelperMonitor.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 566;
	var intEngineerHelperMonitorOffsetX = 14;
	var intEngineerHelperMonitorOffsetY = 103;	
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);	
	
	var imgLoad = new Button("Close");
	imgLoad.x = 770;
	imgLoad.y = 6;
	imgLoad.width = 25;
	imgLoad.height = 25;
	imgLoad.fnLoadImage("./assets/img/Console/Common/CloseButton.png", 
	"./assets/img/Console/Common/CloseButtonHighlighted.png",
	"./assets/img/Console/Common/CloseButtonPressed.png",
	"./assets/img/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {
		game.fnPlaySound("BUTTON");			
		scnDesktop.fnRemoveSubScene("EngineerHelperMonitor");
	}
	scnEngineerHelperMonitor.fnAddButton(imgLoad);


	var imgLoad = new Button("ButtonVNT");
	imgLoad.x = 19;
	imgLoad.y = 510;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Common/Button.png", 
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/CameraMonitor/Button_Vnt.png",
	);
	imgLoad.fnMouseDownEvent = function() {
		fnEngineerHelperManager("VNT");
	}
	scnEngineerHelperMonitor.fnAddButton(imgLoad);		
	scnEngineerHelperMonitor.fnGetSprite("ButtonVNT").visible = true;

	var imgLoad = new Button("ButtonPOW");
	imgLoad.x = 138;
	imgLoad.y = 510;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Common/Button.png", 
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/CameraMonitor/Button_Pow.png",
	);
	imgLoad.fnMouseDownEvent = function() {
		fnEngineerHelperManager("POW");
	}
	scnEngineerHelperMonitor.fnAddButton(imgLoad);		
	scnEngineerHelperMonitor.fnGetSprite("ButtonPOW").visible = true;	

	var imgLoad = new Button("ButtonSRV");
	imgLoad.x = 257;
	imgLoad.y = 510;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Common/Button.png", 
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/CameraMonitor/Button_Srv.png",
	);
	imgLoad.fnMouseDownEvent = function() {
		fnEngineerHelperManager("SRV");
	}
	scnEngineerHelperMonitor.fnAddButton(imgLoad);		
	scnEngineerHelperMonitor.fnGetSprite("ButtonSRV").visible = true;	

	var imgLoad = new Button("ButtonReboot");
	imgLoad.x = 376;
	imgLoad.y = 510;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Common/Button.png", 
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/DeviceMonitor/Button_Reboot.png",
	);
	imgLoad.fnMouseDownEvent = function() {
		fnEngineerHelperManager("Reboot");
	}
	scnEngineerHelperMonitor.fnAddButton(imgLoad);		
	scnEngineerHelperMonitor.fnGetSprite("ButtonReboot").visible = true;	

	var imgLoad = new Sprite("StatusBase");
	imgLoad.x = 21;
	imgLoad.y = 415;
	imgLoad.width = 472;
	imgLoad.height = 86;
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/EngineerHelper_Status_Base.png");
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);			
	scnEngineerHelperMonitor.fnGetSprite("StatusBase").visible = false;	

	var imgLoad = new Sprite("StatusIdle");
	imgLoad.x = 21;
	imgLoad.y = 415;
	imgLoad.width = 472;
	imgLoad.height = 86;
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/EngineerHelper_Status_Idle.png");
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);			
	scnEngineerHelperMonitor.fnGetSprite("StatusIdle").visible = false;	

	var imgLoad = new Sprite("StatusTransit");
	imgLoad.x = 21;
	imgLoad.y = 415;
	imgLoad.width = 472;
	imgLoad.height = 86;
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/EngineerHelper_Status_Transit.png");
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);			
	scnEngineerHelperMonitor.fnGetSprite("StatusTransit").visible = false;	

	var imgLoad = new Sprite("StatusBusy");
	imgLoad.x = 21;
	imgLoad.y = 415;
	imgLoad.width = 472;
	imgLoad.height = 86;
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/EngineerHelper_Status_Busy.png");
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);			
	scnEngineerHelperMonitor.fnGetSprite("StatusBusy").visible = false;	

	var imgLoad = new Sprite("StatusCorrupt");
	imgLoad.x = 21;
	imgLoad.y = 415;
	imgLoad.width = 472;
	imgLoad.height = 86;
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/EngineerHelper_Status_Corrupt.png");
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);			
	scnEngineerHelperMonitor.fnGetSprite("StatusCorrupt").visible = false;	

	var imgLoad = new Sprite("StatusReboot");
	imgLoad.x = 21;
	imgLoad.y = 415;
	imgLoad.width = 472;
	imgLoad.height = 86;
	imgLoad.fnLoadImage("./assets/img/Console/EngineerHelperMonitor/EngineerHelper_Status_Reboot.png");
	scnEngineerHelperMonitor.fnAddSprite(imgLoad);			
	scnEngineerHelperMonitor.fnGetSprite("StatusReboot").visible = false;	
	
	//Screen
	scnEngineerHelperMonitor.intOffsetX = 0;
	scnEngineerHelperMonitor.intOffsetY = 0;
	scnEngineerHelperMonitor.fnSetLayer(3);
	