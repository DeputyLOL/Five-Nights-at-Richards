		//Create Menu scene
		var scnCameraMonitor = new Scene("CameraMonitor");
		//Add sprite
		var imgLoad = new Sprite("TaskBar");
		imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar.png");
		imgLoad.x = 0;
		imgLoad.y = 566;
		imgLoad.width = 800;
		imgLoad.height = 34;
		scnCameraMonitor.fnAddSprite(imgLoad);

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
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");			
			scnScreen.fnRemoveSubScene("CameraMonitor");
			scnCameraMonitor.fnRemoveSubScene("CameraViewport");
			game.fnStopSound("CAM_BEEP");
			game.fnStopSound("CAM_ACTIVE");
			game.fnStopSound("CAM_TRANSFER");
			game.fnStopSound("CAM_DANGER");
			game.fnStopSound("CAM_STATIC");
			scnScreen.fnAddSubScene(scnDesktop);
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
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
			changeCameras();
		}
		scnCameraMonitor.fnAddButton(imgLoad);
		cameraMonitorSelection.fnAddMenuButton(imgLoad);




		
		var scnCameraViewport = new Scene("CameraViewport");
		// Display Map
		var imgLoad = new Sprite("Overlay");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_OVERLAY.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraViewport.fnAddSprite(imgLoad);
		
	
	
		var scnCameraTransfer = new Scene("CameraTransfer");
		// Display Map
		var imgLoad = new Sprite("Transfer");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_TRANSFER.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraTransfer.fnAddSprite(imgLoad);
	
		var scnCameraMap = new Scene("CameraMap");
		// Display Map
		var imgLoad = new Sprite("Map");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_MAP.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraMap.fnAddSprite(imgLoad);
		
		var scnCameraOffine = new Scene("CameraOffline");
		// Display Map
		var imgLoad = new Sprite("Offline");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_OFFLINE.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraOffine.fnAddSprite(imgLoad);


	
		var scnCameraLobby = new Scene("CameraLobby");
		// Display Map
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
				
		var scnCameraLobbyCorridor = new Scene("CameraLobbyCorridor");
		// Display Map
		var imgLoad = new Sprite("LobbyCorridor");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_COR_A.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraLobbyCorridor.fnAddSprite(imgLoad);
		
		var scnCameraMedbay = new Scene("CameraMedbay");
		// Display Map
		var imgLoad = new Sprite("MedBay");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_MED_A.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraMedbay.fnAddSprite(imgLoad);
								
		var scnCameraDemo = new Scene("CameraDemoStage");
		// Display Map
		var imgLoad = new Sprite("DemoStage");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_DEM_A.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 640;
		imgLoad.height = 480;
		scnCameraDemo.fnAddSprite(imgLoad);
										
		
		
	

		function changeCameras()
		{
			scnCameraMonitor.fnRemoveSubScene("CameraViewport");
			scnCameraMonitor.fnAddSubScene(scnCameraViewport);
			game.fnStopSound("CAM_BEEP");
			game.fnPauseSound("CAM_STATIC");
			game.fnPauseSound("CAM_ACTIVE");
			game.fnPauseSound("CAM_DANGER");
			var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();	
			if ( strActiveButton == "Map" ) {

				game.fnPauseSound("CAM_ACTIVE");
				scnCameraViewport.fnAddSubScene(scnCameraMap)
			}
			else {
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_STATIC",true);
				scnCameraViewport.fnAddSubScene(scnCameraTransfer);
				setTimeout( function() 
				{
					game.fnPauseSound("CAM_STATIC");
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					game.fnPlaySound("CAM_ACTIVE",true);
					scnCameraViewport.fnRemoveSubScene("CameraTransfer");
					if( strActiveButton == "Lobby" ) {
						scnCameraViewport.fnAddSubScene(scnCameraLobby);
					}
					else if( strActiveButton == "PowerRoom" ) {
						scnCameraViewport.fnAddSubScene(scnCameraPower);
					}
					else if( strActiveButton == "LobbyCorridor" ) {
						scnCameraViewport.fnAddSubScene(scnCameraLobbyCorridor);
					}
					else if( strActiveButton == "Medbay" ) {
						scnCameraViewport.fnAddSubScene(scnCameraMedbay);
					}
					else if( strActiveButton == "DemoStage" ) {
						scnCameraViewport.fnAddSubScene(scnCameraDemo);
						game.fnPlaySound("CAM_DANGER",true);
					}
					else
					{
						game.fnPauseSound("CAM_ACTIVE");
						game.fnPlaySound("CAM_STATIC",true);
						console.log("ERROR: '" + strActiveButton + "' IS NOT A DEFINED CAMERA");
						scnCameraViewport.fnAddSubScene(scnCameraOffine);					
					}
				}, 100);					
			}	
		
		}		
		
			
		
		//Screen
		scnCameraMonitor.intOffsetX = intScreenOffsetX;
		scnCameraMonitor.intOffsetY = intScreenOffsetY;
		scnCameraMonitor.fnSetLayer(1);

		//Camera Viewport
		scnCameraViewport.intOffsetX = intViewPortOffsetX;
		scnCameraViewport.intOffsetY = intViewPortOffsetY;
		scnCameraViewport.fnSetLayer(2);
		