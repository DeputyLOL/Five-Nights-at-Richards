/**
 * This is the actual scene in which we can move the cameras around
 */

	//Create Menu scene
	var scnCameraMonitor = new Scene("CameraMonitor");
	
	scnCameraMonitor.fnRefresh = function() {
		if(intCameraLight == 1)
		{
			var intRandom = 0;
			if(intLightingMode == 0)
			{
				fnCameraLighter(true);
			}
			else if(intLightingMode == 1)
			{
					intRandom = Math.floor((Math.random() * 100) + 1);
					if(intRandom <= 30)
					{
						fnCameraLighter(true);
					}
					else
					{
						fnCameraLighter(false);						
					}
			}
			else
			{
				fnCameraLighter(false);				
			}
		}
		else
		{
			fnCameraLighter(false);		
		}
		if(intCameraPanning)
		{
			if(intCameraPanLeft || intCameraPanRight)
			{
				if(intCameraPanLeft)
				{
					fnCameraPanner("left", "start", imgLoad);
				}
				else if(intCameraPanRight)
				{
					fnCameraPanner("right", "start", imgLoad);
				}
				else
				{
					fnCameraPanner("left", "stop", imgLoad);
					fnCameraPanner("right", "stop", imgLoad);
					intCameraPanning = 0;
					console.log("not panning");
					game.fnStopSound("CAM_PAN");
					game.fnPlaySound("CAM_PANLIMIT");
				}
			}
			else
			{
				fnCameraPanner("left", "stop", imgLoad);
				fnCameraPanner("right", "stop", imgLoad);
				intCameraPanning = 0;
				console.log("stop panning");
				game.fnStopSound("CAM_PAN");
				game.fnPlaySound("CAM_PANLIMIT");
			}
		}
	}

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
	"./assets/img/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {
		game.fnPlaySound("BUTTON");			
		game.fnStopSound("CAM_BEEP");
		game.fnStopSound("CAM_ACTIVE");
		game.fnStopSound("CAM_TRANSFER");
		game.fnStopSound("CAM_DANGER");
		game.fnStopSound("CAM_STATIC");
		game.fnStopSound("CAM_JAM");
		game.fnStopSound("CAM_INTERRUPT");
		scnCameraMonitor.fnRemoveSubScene(scnCameraViewport);
		scnDesktop.fnRemoveSubScene(scnCameraMonitor);
		intCameraMonitorActive = 0;
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
	"./assets/img/Common/null.png"
	);
	imgLoad.fnMouseDownEvent = function() {
		//fnCameraPanner("left", "start", imgLoad);
		intCameraPanLeft = 1;
		intCameraPanning = 1;
	}
	imgLoad.fnMouseUpEvent = function () {
		//fnCameraPanner("left", "stop", imgLoad);
		intCameraPanLeft = 0;		
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
	"./assets/img/Common/null.png"
	);
	imgLoad.fnMouseDownEvent = function() {
		//fnCameraPanner("right", "start", imgLoad);
		intCameraPanRight = 1;
		intCameraPanning = 1;
	}
	imgLoad.fnMouseUpEvent = function () {
		//fnCameraPanner("right", "stop", imgLoad);
		intCameraPanRight = 0;		
	}
	scnCameraMonitor.fnAddButton(imgLoad);

	var imgLoad = new Button("Light");
	imgLoad.x = 250;
	imgLoad.y = 526;
	imgLoad.width = 118;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Common/Button.png", 
	"./assets/img/Console/Common/ButtonHighlighted.png",
	"./assets/img/Console/Common/ButtonPressed.png",
	"./assets/img/Console/CameraMonitor/Button_Light.png",
	);
	imgLoad.fnMouseDownEvent = function() {
		intCameraLight = 1;
		//fnCameraLighter(true);
	}
	imgLoad.fnMouseUpEvent = function () {
		intCameraLight = 0;
		//fnCameraLighter(false);
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

	var imgLoad = new MenuButton("VentRoom");
	imgLoad.x = 667;
	imgLoad.y = 71;
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
	
	var imgLoad = new MenuButton("Lab");
	imgLoad.x = 667;
	imgLoad.y = 316;
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
	imgLoad.y = 351;
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
	
	var imgLoad = new MenuButton("PowerRoom");
	imgLoad.x = 667;
	imgLoad.y = 386;
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

	
			
	//Screen
	scnCameraMonitor.intOffsetX = 0;
	scnCameraMonitor.intOffsetY = 0;
	scnCameraMonitor.fnSetLayer(3);
	
	console.log("Creating camera monitor scene");
	
