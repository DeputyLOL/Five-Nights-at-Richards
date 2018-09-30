
		var intCameraVentRoomMode = 0;	
		var intCameraVentRoomWeak = 0;
		var intVentRoomLight = 0;
		var intVentRoomLightAmount = 0;
		
		function fnCameraManagerVentRoom( toggle = true )
		{
			scnCameraVentRoom.fnRemoveAllSubScenes();
			if(toggle == true){
				game.fnPlaySound("CAM_ACTIVE",true);
				game.fnPlaySound("CAM_VNT_AMBIENCE",true);
				game.fnPauseSound("CAM_STATIC");
				if(intCameraVentRoomMode == 0){
					fnCameraLightable(true);
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_BEEP");
					if(intCameraVentRoomWeak == 1 || intCameraMode == 1){
						scnCameraViewport.fnGetSprite("StaticInterrupt").visible = true;
						scnCameraViewport.fnGetSprite("StatusInterrupt").visible = true;						
						game.fnPlaySound("CAM_INTERRUPT",true);
					}
					else {
						scnCameraViewport.fnGetSprite("StaticEffect").visible = true;
						scnCameraViewport.fnGetSprite("StatusOnline").visible = true;
					}
					if(strRobot1Room == "VNT")
					{
						game.fnPlaySound("CAM_DANGER",true);					
					}
					scnCameraViewport.fnAddSubScene(scnCameraVentRoom);
					scnCameraViewport.fnAddSubScene(scnCameraVentRoomOverlay);
				}
				else if(intCameraVentRoomMode == 1){
					fnCameraPanable(false);
					fnCameraLightable(false);
					scnCameraViewport.fnGetSprite("StaticEffect").visible = false;
					scnCameraViewport.fnGetSprite("StatusOnline").visible = false;
					scnCameraViewport.fnGetSprite("StatusInterrupt").visible = false;
					scnCameraViewport.fnGetSprite("StatusLost").visible = true;
					scnCameraViewport.fnGetSprite("Static").visible = true;
					game.fnPlaySound("CAM_TRANSFER");
					game.fnPlaySound("CAM_STATIC",true);
					game.fnPauseSound("CAM_DANGER");
					game.fnPauseSound("CAM_INTERRUPT");
					game.fnPauseSound("CAM_ACTIVE");
					game.fnPauseSound("CAM_VNT_AMBIENCE");
				}
			}
			else{
				scnCameraVentRoom.fnRemoveAllSubScenes();
			}
		}
		
		function fnCameraManagerVentRoomLighter( toggle = true )
		{
			if(toggle)
			{
				intVentRoomLight = 1;
				scnCameraVentRoom.fnGetSprite("VentRoomLight").visible = true;
				scnCameraVentRoom.fnGetSprite("VentRoom").visible = false;
				game.fnPlaySound("CAM_LIGHT",true);
				if(strRobot1Room == "VNT")
				{
					scnCameraVentRoom.fnGetSprite("VentRoom_Robot1_Lit").visible = true;
				}
			}
			else
			{
				intVentRoomLight = 0;
				scnCameraVentRoom.fnGetSprite("VentRoom_Robot1_Lit").visible = false;
				scnCameraVentRoom.fnGetSprite("VentRoomLight").visible = false;
				scnCameraVentRoom.fnGetSprite("VentRoom").visible = true;
				game.fnPauseSound("CAM_LIGHT");
			}
		}
				
		var scnCameraVentRoom = new Scene("CameraVentRoom");
		
		scnCameraVentRoom.fnRefresh = function() {
			if(intVentRoomLight == 1 && intVentRoomLightAmount < 30)
			{
				intVentRoomLightAmount++;
				//console.log(intVentRoomLightAmount);
			}
			else if(intVentRoomLightAmount == 30)
			{
				strRobot1Target = "VNT";
				intVentRoomLightAmount = 0;
				console.log("ROBOT1 IS GOING TO MOVE TOO:" + strRobot1Target);
			}
		}
		
		var imgCameraVentRoom = new Sprite("VentRoom");
		imgCameraVentRoom.fnLoadImage("./assets/img/Camera/VNT/CAM_VNT_A.png");
		imgCameraVentRoom.x = 0;
		imgCameraVentRoom.y = 0;
		imgCameraVentRoom.width = 640;
		imgCameraVentRoom.height = 480;
		scnCameraVentRoom.fnAddSprite(imgCameraVentRoom);
		var intCameraVentRoomOffsetX = 0;
		var intCameraVentRoomOffsetY = 0;	

		var imgCameraVentRoom = new Sprite("VentRoomLight");
		imgCameraVentRoom.fnLoadImage("./assets/img/Camera/VNT/CAM_VNT_LIT.png");
		imgCameraVentRoom.x = 0;
		imgCameraVentRoom.y = 0;
		imgCameraVentRoom.width = 640;
		imgCameraVentRoom.height = 480;
		scnCameraVentRoom.fnAddSprite(imgCameraVentRoom);
		scnCameraVentRoom.fnGetSprite("VentRoomLight").visible = false;
		
		var imgCameraVentRoom = new Sprite("VentRoom_Robot1");
		imgCameraVentRoom.fnLoadImage("./assets/img/Camera/VNT/CAM_VNT_ROBOT1_1.png");
		imgCameraVentRoom.x = 0;
		imgCameraVentRoom.y = 0;
		imgCameraVentRoom.width = 640;
		imgCameraVentRoom.height = 480;
		scnCameraVentRoom.fnAddSprite(imgCameraVentRoom);

		var imgCameraVentRoom = new Sprite("VentRoom_Robot1_Lit");
		imgCameraVentRoom.fnLoadImage("./assets/img/Camera/VNT/CAM_VNT_ROBOT1_1_LIT.png");
		imgCameraVentRoom.x = 0;
		imgCameraVentRoom.y = 0;
		imgCameraVentRoom.width = 640;
		imgCameraVentRoom.height = 480;
		scnCameraVentRoom.fnAddSprite(imgCameraVentRoom);
		
		var imgCameraVentRoom = new Sprite("VentRoom_EngineerHelper");
		imgCameraVentRoom.fnLoadImage("./assets/img/Common/debug.png");
		imgCameraVentRoom.x = 0;
		imgCameraVentRoom.y = 0;
		imgCameraVentRoom.width = 640;
		imgCameraVentRoom.height = 480;
		scnCameraVentRoom.fnAddSprite(imgCameraVentRoom);

		var imgCameraVentRoom = new Sprite("VentRoom_EngineerHelper_Lit");
		imgCameraVentRoom.fnLoadImage("./assets/img/Common/debug.png");
		imgCameraVentRoom.x = 0;
		imgCameraVentRoom.y = 0;
		imgCameraVentRoom.width = 640;
		imgCameraVentRoom.height = 480;
		scnCameraVentRoom.fnAddSprite(imgCameraVentRoom);

		var scnCameraVentRoomOverlay = new Scene("CameraVentRoomOverlay");		
		var imgLoad = new Sprite("Status");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_STATUS.png");
		imgLoad.x = 21;
		imgLoad.y = 20;
		imgLoad.width = 86;
		imgLoad.height = 20;
		scnCameraVentRoomOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Name");
		imgLoad.fnLoadImage("./assets/img/Camera/CAM_NAME.png");
		imgLoad.x = 21;
		imgLoad.y = 418;
		imgLoad.width = 114;
		imgLoad.height = 42;
		scnCameraVentRoomOverlay.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("NameVNT");
		imgLoad.fnLoadImage("./assets/img/Camera/VNT/CAM_NAME_VNT.png");
		imgLoad.x = 108;
		imgLoad.y = 418;
		imgLoad.width = 205;
		imgLoad.height = 42;
		scnCameraVentRoomOverlay.fnAddSprite(imgLoad);



		
		scnCameraVentRoom.intOffsetX = intCameraVentRoomOffsetX;
		scnCameraVentRoom.intOffsetY = intCameraVentRoomOffsetY;
		scnCameraVentRoom.fnSetLayer(2);
		
		scnCameraVentRoomOverlay.fnSetLayer(5);
