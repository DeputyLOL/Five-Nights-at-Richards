
		var intCameraExecutiveOfficeMode = 0;	

		function fnCameraManagerExecutiveOffice( toggle = true )
		{
			if(toggle == true){
				game.fnPauseSound("CAM_STATIC");
				game.fnPlaySound("CAM_TRANSFER");
				game.fnPlaySound("CAM_BEEP");
				game.fnPlaySound("CAM_ACTIVE",true);
				if(intCameraExecutiveOfficeMode == 0){
					scnCameraViewport.fnAddSubScene(scnCameraExecutiveOffice);
					scnCameraViewport.fnAddSubScene(scnCameraEffect);
					scnCameraExecutiveOffice.fnAddSubScene(scnCameraExecutiveOfficeOverlay);
					scnCameraExecutiveOffice.fnAddSubScene(scnCameraOnline);
				}
				else if(intCameraExecutiveOfficeMode == 1){
					scnCameraViewport.fnAddSubScene(scnCameraExecutiveOffice);
					scnCameraViewport.fnAddSubScene(scnCameraExecutiveOfficeOverlay);
					scnCameraExecutiveOffice.fnAddSubScene(scnCameraWeak);
					scnCameraExecutiveOffice.fnAddSubScene(scnCameraInterrupt);
					game.fnPlaySound("CAM_INTERRUPT",true);
				}
			}
			else{
				scnCameraViewport.fnAddSubScene(scnCameraExecutiveOffice);
				scnCameraViewport.fnRemoveSubScene("CameraExecutiveOffice");
				scnCameraExecutiveOffice.fnAddSubScene(scnCameraExecutiveOfficeOverlay);
				scnCameraExecutiveOffice.fnRemoveSubScene("CameraExecutiveOfficeOverlay");
			}
		}
		
		var scnCameraExecutiveOffice = new Scene("CameraExecutiveOffice");
		var imgCameraExecutiveOffice = new Sprite("ExecutiveOffice");
		imgCameraExecutiveOffice.fnLoadImage("./assets/img/Camera/CAM_EXO_A.png");
		imgCameraExecutiveOffice.x = 0;
		imgCameraExecutiveOffice.y = 0;
		imgCameraExecutiveOffice.width = 640;
		imgCameraExecutiveOffice.height = 480;
		scnCameraExecutiveOffice.fnAddSprite(imgCameraExecutiveOffice);
		var intCameraExecutiveOfficeOffsetX = 0;
		var intCameraExecutiveOfficeOffsetY = 0;	

		var scnCameraExecutiveOfficeOverlay = new Scene("CameraExecutiveOfficeOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraExecutiveOfficeOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraExecutiveOfficeOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameExo");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME_EXO.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 270;
		imgLoad.height = 42;
		scnCameraExecutiveOfficeOverlay.fnAddSprite(imgLoad);



		
		scnCameraExecutiveOffice.intOffsetX = intCameraExecutiveOfficeOffsetX;
		scnCameraExecutiveOffice.intOffsetY = intCameraExecutiveOfficeOffsetY;
		scnCameraExecutiveOffice.fnSetLayer(2);
		
		scnCameraExecutiveOfficeOverlay.fnSetLayer(5);