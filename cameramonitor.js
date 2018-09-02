	//Create Menu scene
	var scnCameraMonitor = new Scene("CameraMonitor");
	//Add sprite

	var imgViewPort = new Sprite("Window");
	imgViewPort.fnLoadImage("./assets/img/Console/CameraMonitor/Window_CameraMonitor.png");
	imgViewPort.x = 0;
	imgViewPort.y = 0;
	imgViewPort.width = 800;
	imgViewPort.height = 566;
	scnCameraMonitor.fnAddSprite(imgViewPort);
	var intViewPortOffsetX = 21;
	var intViewPortOffsetY = 40;	

	var imgLoad = new Button("Close");
	imgLoad.x = 770;
	imgLoad.y = 6;
	imgLoad.width = 25;
	imgLoad.height = 25;
	imgLoad.fnLoadImage("./assets/img/Console/Common/CloseButton.png", 
	"./assets/img/Console/Common/CloseButtonHighlighted.png",
	"./assets/img/Console/Common/CloseButtonPressed.png",
	"./assets/img/Console/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {
		game.fnPlaySound("BUTTON");			
		game.fnStopSound("CAM_BEEP");
		game.fnStopSound("CAM_ACTIVE");
		game.fnStopSound("CAM_TRANSFER");
		game.fnStopSound("CAM_DANGER");
		game.fnStopSound("CAM_STATIC");
		game.fnStopSound("CAM_JAM");
		game.fnStopSound("CAM_INTERRUPT");
		scnCameraMonitor.fnRemoveSubScene("CameraViewport");
		scnDesktop.fnRemoveSubScene("CameraMonitor");
	}
	scnCameraMonitor.fnAddButton(imgLoad);


	var imgLoad = new Button("PanLeft");
	imgLoad.x = 150;
	imgLoad.y = 526;
	imgLoad.width = 35;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/CameraMonitor/Button_PanLeft.png", 
	"./assets/img/Console/CameraMonitor/Button_PanLeftHighlighted.png",
	"./assets/img/Console/CameraMonitor/Button_PanLeftPressed.png",
	"./assets/img/Console/Common/null.png"
	);
	imgLoad.visible = intCameraPanable;
	imgLoad.fnMouseDownEvent = function () {
		intCameraPanning = 1;
		while(intCameraPanning = 1)
		{
			fnCameraPanner("left", "start", imgLoad);
			imgLoad.fnMouseUpEvent = function() {
				intCameraPanning = 0;
				fnCameraPanner("left", "stop", imgLoad);
			}
		}
	}

	scnCameraMonitor.fnAddButton(imgLoad);
	
	var imgLoad = new Button("PanRight");
	imgLoad.x = 185;
	imgLoad.y = 526;
	imgLoad.width = 35;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/CameraMonitor/Button_PanRight.png", 
	"./assets/img/Console/CameraMonitor/Button_PanRightHighlighted.png",
	"./assets/img/Console/CameraMonitor/Button_PanRightPressed.png",
	"./assets/img/Console/Common/null.png"
	);
	imgLoad.visible = intCameraPanable
	imgLoad.fnMouseDownEvent = function() {
		intCameraPanning = 1;
		fnCameraPanner("right", "start", imgLoad);
	}
	imgLoad.fnMouseUpEvent = function() {
		intCameraPanning = 0;
		fnCameraPanner("right", "stop", imgLoad);
	}
	scnCameraMonitor.fnAddButton(imgLoad);

	var cameraMonitorSelection = new MenuButtonGroup();
	
	var imgLoad = new MenuButton("Map");
	imgLoad.x = 19;
	imgLoad.y = 526;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Map.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");		
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	imgLoad.fnButtonActive();
	
	var imgLoad = new MenuButton("Lobby");
	imgLoad.x = 667;
	imgLoad.y = 36;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Lob.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);


	var imgLoad = new MenuButton("PowerRoom");
	imgLoad.x = 667;
	imgLoad.y = 71;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Pow.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	var imgLoad = new MenuButton("LobbyCorridor");
	imgLoad.x = 667;
	imgLoad.y = 106;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Cor.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	var imgLoad = new MenuButton("Medbay");
	imgLoad.x = 667;
	imgLoad.y = 141;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Med.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("DemoStage");
	imgLoad.x = 667;
	imgLoad.y = 176;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Dem.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("ExecutiveOffice");
	imgLoad.x = 667;
	imgLoad.y = 211;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Exo.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("ExecutiveCorridor");
	imgLoad.x = 667;
	imgLoad.y = 246;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Exc.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("StaffRoom");
	imgLoad.x = 667;
	imgLoad.y = 281;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Stf.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	var imgLoad = new MenuButton("VentRoom");
	imgLoad.x = 667;
	imgLoad.y = 316;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Vnt.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	var imgLoad = new MenuButton("Lab");
	imgLoad.x = 667;
	imgLoad.y = 351;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Lab.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	var imgLoad = new MenuButton("Manufacturing");
	imgLoad.x = 667;
	imgLoad.y = 386;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Man.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("Storage");
	imgLoad.x = 667;
	imgLoad.y = 421;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Str.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);
	
	var imgLoad = new MenuButton("Shipping");
	imgLoad.x = 667;
	imgLoad.y = 456;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Shp.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("StaffAccess");
	imgLoad.x = 667;
	imgLoad.y = 491;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Acc.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);

	var imgLoad = new MenuButton("ServerRoom");
	imgLoad.x = 667;
	imgLoad.y = 526;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Common/Button.png",
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/Common/ButtonSelected.png",
	"./assets/img/Console/CameraMonitor/Button_Srv.png"
	);
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		fnCameraManager();
	}
	scnCameraMonitor.fnAddButton(imgLoad);
	cameraMonitorSelection.fnAddMenuButton(imgLoad);




	// -------------------------------------------------
	// ----------------- CAMERA ROOMS ------------------
	// -------------------------------------------------
	
	// LOBBY
	var scnCameraLobby = new Scene("CameraLobby");
	var imgLoad = new Sprite("Lobby");
	imgLoad.fnLoadImage("./assets/img/Camera/CAM_OFFLINE.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 640;
	imgLoad.height = 480;
	scnCameraLobby.fnAddSprite(imgLoad);
	
	var scnCameraPower = new Scene("CameraPowerRoom");
	// Display Map
	var imgLoad = new Sprite("PowerRoom");
	imgLoad.fnLoadImage("./assets/img/Camera/CAM_OFFLINE.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 640;
	imgLoad.height = 480;
	scnCameraPower.fnAddSprite(imgLoad);


			
	//Screen
	scnCameraMonitor.intOffsetX = 0;
	scnCameraMonitor.intOffsetY = 0;
	scnCameraMonitor.fnSetLayer(2);
	
	console.log("Creating camera monitor scene");
	