
	var intOfficePanLeft = 0;
	var intOfficePanRight = 0;
	var intOfficeDoorLeftInTransit = 0;
	
		function fnMonitorFlipper( direction )
		{
			if (direction == "up")
			{
				game.fnPlaySound("MONITOR_UP");
				scnGame.fnGetSprite("MonitorFlipUp").visible = false;
				scnOffice.fnGetSprite("PanLeft").visible = false;
				scnOffice.fnGetSprite("PanRight").visible = false;
				scnOffice.fnAddSubScene(scnMonitorUp);
				setTimeout( function() 
				{
					scnOffice.fnRemoveSubScene(scnMonitorUp);
					scnOffice.fnAddSubScene(scnScreen);
					scnOffice.fnAddSubScene(scnDesktop);
					fnDesktopToggle("on");
					scnGame.fnGetSprite("MonitorFlipDown").visible = true;
					imgMonitorUp.fnLoadImage("./assets/img/Monitor/MonitorUp.gif");
					game.fnVolumeSound("CAM_ACTIVE",1);
					game.fnVolumeSound("CAM_TRANSFER",1);
					game.fnVolumeSound("CAM_STATIC",1);
					game.fnVolumeSound("CAM_DANGER",1);
					game.fnVolumeSound("CAM_BEEP",1);
					game.fnVolumeSound("CAM_JAM",1);
					game.fnVolumeSound("CAM_INTERRUPT",1);
					game.fnVolumeSound("CAM_PAN",1);
					game.fnVolumeSound("CAM_PANLIMIT",1);
					game.fnVolumeSound("CAM_LIGHT",1);
					game.monitorInUse = true;
				},600)				
			} 
			else if (direction == "down")
			{
				game.monitorInUse = false;
				game.fnPlaySound("MONITOR_DOWN");
				scnGame.fnGetSprite("MonitorFlipDown").visible = false;
				scnOffice.fnRemoveSubScene(scnDesktop);
				scnOffice.fnRemoveSubScene(scnScreen);
				scnOffice.fnAddSubScene(scnMonitorDown);
				setTimeout( function() 
				{
					game.fnVolumeSound("CAM_ACTIVE",0);
					game.fnVolumeSound("CAM_TRANSFER",0);
					game.fnVolumeSound("CAM_STATIC",0);
					game.fnVolumeSound("CAM_DANGER",0);
					game.fnVolumeSound("CAM_BEEP",0);
					game.fnVolumeSound("CAM_JAM",0);
					game.fnVolumeSound("CAM_INTERRUPT",0);
					game.fnVolumeSound("CAM_PAN",0);
					game.fnVolumeSound("CAM_PANLIMIT",0);
					game.fnVolumeSound("CAM_LIGHT",0);
					fnDesktopToggle("off");
					scnOffice.fnRemoveSubScene(scnMonitorDown);
					scnGame.fnGetSprite("MonitorFlipUp").visible = true;
					scnOffice.fnGetSprite("PanLeft").visible = true;
					scnOffice.fnGetSprite("PanRight").visible = true;
					imgMonitorDown.fnLoadImage("./assets/img/Monitor/MonitorDown.gif");			
				},600)					
			}
			else
			{
				console.log("ERROR: fnMonitorFlipper - Can't flip " + direction);
			}
		}

		function fnOfficeDoor( side , direction )
		{
			if (side == "left")
			{
				if (direction == "up")
				{
					game.fnPlaySound("DOOR_LEFT_OPEN");
					intOfficeDoorLeftInTransit = 1;
					console.log("LEFT DOOR OPENING");
					scnOffice.fnGetSprite("DoorLeftClose").visible = false;
					scnOffice.fnGetSprite("Office_DoorLeftClose").visible = false;
					imgOfficeDoorLeftOpen.fnResetImage("./assets/img/Office/Office_DoorLeftOpen.gif");
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;
					game.fnStopSound("DOOR_BEEP");					
					setTimeout( function() 
					{
						console.log("LEFT DOOR OPEN");
						intOfficeDoorLeftPosition = 0;
						intOfficeDoorLeftInTransit = 0;
					},1000)
				} 
				else if (direction == "down")
				{
					game.fnPlaySound("DOOR_LEFT_CLOSE");
					intOfficeDoorLeftInTransit = 1;
					console.log("LEFT DOOR CLOSING");
					scnOffice.fnGetSprite("LightLeft").visible = false;
					scnOffice.fnGetSprite("DoorLeftOpen").visible = false;
					scnOffice.fnGetSprite("Office_DoorLeftClose").visible = true;
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = false;		
					imgOfficeDoorLeftClose.fnResetImage("./assets/img/Office/Office_DoorLeftClose.gif");
					setTimeout( function() 
					{
						console.log("LEFT DOOR CLOSED");
						intOfficeDoorLeftPosition = 1;
						intOfficeDoorLeftInTransit = 0;
						game.fnPlaySound("DOOR_BEEP",true);
					},1000)			
				}
				else
				{
					console.log("ERROR: fnOfficeDoor - Can't move door " + direction);
				}
			}
			/*else if (side == "right")
			{
				if (direction == "up")
				{
					imgOfficeDoorLeftOpen.fnLoadImage("./assets/img/Office/Office_DoorLeftOpen.gif");
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;
					scnOffice.fnGetSprite("Office_DoorLeftClose").visible = false;
					setTimeout( function() 
					{

					},1000)
				} 
				else if (direction == "down")
				{
					imgOfficeDoorLeftOpen.fnLoadImage("./assets/img/Office/Office_DoorLeftOpen.gif");
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;
					scnOffice.fnGetSprite("Office_DoorLeftClose").visible = false;
					setTimeout( function() 
					{

					},1000)			
				}
				else
				{
					console.log("ERROR: fnOfficeDoor - Can't move door " + direction);
				}
				
			}*/
			else
			{
				console.log("ERROR: fnOfficeDoor - Can't move " + direction + " door");				
			}
		}
		
		function fnOfficeFlashlight( side , toggle )
		{
			if (side == "left")
			{
				if (toggle)
				{
					scnOffice.fnGetSprite("Office_LightLeft").visible = true;
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = false;	
					game.fnPlaySound("FLASHLIGHT_ON");
					if(strRobot1Room == "OFF")
					{
						scnOffice.fnGetSprite("Office_Robot1Lit").visible = true;						
					}
				} 
				else if (!toggle)
				{
					scnOffice.fnGetSprite("Office_LightLeft").visible = false;
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;
					scnOffice.fnGetSprite("Office_Robot1Lit").visible = false;		
					game.fnPlaySound("FLASHLIGHT_OFF");
				}
				else
				{
					console.log("ERROR: fnOfficeFlashlight - Can't toggle flash light to " + toggle);
				}
			}
			/*else if (side == "right")
			{
				if (direction == "up")
				{
					imgOfficeDoorLeftOpen.fnLoadImage("./assets/img/Office/Office_DoorLeftOpen.gif");
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;
					scnOffice.fnGetSprite("Office_DoorLeftClose").visible = false;
					setTimeout( function() 
					{

					},1000)
				} 
				else if (direction == "down")
				{
					imgOfficeDoorLeftOpen.fnLoadImage("./assets/img/Office/Office_DoorLeftOpen.gif");
					scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;
					scnOffice.fnGetSprite("Office_DoorLeftClose").visible = false;
					setTimeout( function() 
					{

					},1000)			
				}
				else
				{
					console.log("ERROR: fnOfficeDoor - Can't move door " + direction);
				}
				
			}*/
			else
			{
				console.log("ERROR: fnOfficeDoor - Can't move " + direction + " door");				
			}
		}
		
		function fnOfficePanner( direction = 0, method = "start", spriteCam)
		{
		var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();
		var lstPanningSprites = scnGame.lstSubScenes[0].fnGetSpritesContaining("Office");
			if ( method == "start" ) {
				if(direction == "left")
				{
					for ( var k =0; k < lstPanningSprites.length; k++ ) {
						lstPanningSprites[k].scrollDirection = 30;
						if(!lstPanningSprites[k].blnPanning && intOfficeDoorLeftInTransit == 0)
						{
							if(intOfficeDoorLeftPosition)
							{
								scnOffice.fnGetSprite("DoorLeftClose").visible = true;
								scnOffice.fnGetSprite("DoorLeftOpen").visible = false;
							}
							else
							{
								scnOffice.fnGetSprite("DoorLeftClose").visible = false;	
								scnOffice.fnGetSprite("DoorLeftOpen").visible = true;		
								scnOffice.fnGetSprite("LightLeft").visible = true;								
							}
						}
						else
						{
							scnOffice.fnGetSprite("LightLeft").visible = false;
							scnOffice.fnGetSprite("DoorLeftOpen").visible = false;
							scnOffice.fnGetSprite("DoorLeftClose").visible = false;							
						}
					}
				}
				else
				{
					for ( var k =0; k < lstPanningSprites.length; k++ ) {
						lstPanningSprites[k].scrollDirection = -30;
						if(!lstPanningSprites[k].blnPanning && intOfficeDoorLeftInTransit == 0)
						{
							if(intOfficeDoorLeftPosition)
							{
								scnOffice.fnGetSprite("DoorLeftClose").visible = true;
								scnOffice.fnGetSprite("DoorLeftOpen").visible = false;
							}
							else
							{
								scnOffice.fnGetSprite("DoorLeftClose").visible = false;	
								scnOffice.fnGetSprite("DoorLeftOpen").visible = true;		
								scnOffice.fnGetSprite("LightLeft").visible = true;								
							}
						}
						else
						{
							scnOffice.fnGetSprite("LightLeft").visible = false;
							scnOffice.fnGetSprite("DoorLeftOpen").visible = false;
							scnOffice.fnGetSprite("DoorLeftClose").visible = false;							
						}
					}
				}
			} 
			else {
				for ( var k =0; k < lstPanningSprites.length; k++ ) {
					lstPanningSprites[k].scrollDirection = 0;
				}
			}	
		}

		//Create Menu scene
		var scnOffice = new Scene("OfficeScene");
		
		scnOffice.fnRefresh = function() {
			// PANNER
			if(intOfficePanLeft)
			{
				fnOfficePanner("left","start",imgOffice);
			}
			else if(intOfficePanRight)
			{
				fnOfficePanner("right","start",imgOffice);
			}
			else
			{
				fnOfficePanner("left","stop",imgOffice);
				fnOfficePanner("right","stop",imgOffice);
			}
		}		
		
	
		//Add sprite
		var imgOffice = new PanningSprite("Office");
		imgOffice.fnLoadImage("./assets/img/Office/Office_Default.png");
		imgOffice.x = 0;
		imgOffice.y = 0;
		imgOffice.windowSize = 1369;
		imgOffice.width = 2200;
		imgOffice.height = 756;
		scnOffice.fnAddSprite(imgOffice);
		var intOfficeOffsetX = 0;
		var intOfficeOffsetY = 0;
	
		var imgOffice = new PanningSprite("Office_LightLeft");
		imgOffice.fnLoadImage("./assets/img/Office/Office_LightLeft.png");
		imgOffice.x = 0;
		imgOffice.y = 0;
		imgOffice.windowSize = 1369;
		imgOffice.width = 2200;
		imgOffice.height = 756;
		scnOffice.fnAddSprite(imgOffice);
		scnOffice.fnGetSprite("Office_LightLeft").visible = false;

		var imgOffice = new PanningSprite("Office_Robot1");
		imgOffice.fnLoadImage("./assets/img/Office/Office_Robot1.png");
		imgOffice.x = 0;
		imgOffice.y = 0;
		imgOffice.windowSize = 1369;
		imgOffice.width = 2200;
		imgOffice.height = 756;
		scnOffice.fnAddSprite(imgOffice);
		scnOffice.fnGetSprite("Office_Robot1").visible = false;
		
		var imgOffice = new PanningSprite("Office_Robot1Lit");
		imgOffice.fnLoadImage("./assets/img/Office/Office_Robot1Lit.png");
		imgOffice.x = 0;
		imgOffice.y = 0;
		imgOffice.windowSize = 1369;
		imgOffice.width = 2200;
		imgOffice.height = 756;
		scnOffice.fnAddSprite(imgOffice);
		scnOffice.fnGetSprite("Office_Robot1Lit").visible = false;
		
		var imgOfficeDoorLeftOpen = new PanningSprite("Office_DoorLeftOpen");
		imgOfficeDoorLeftOpen.fnLoadImage("./assets/img/Office/Office_DoorLeftOpen.gif");
		imgOfficeDoorLeftOpen.x = 0;
		imgOfficeDoorLeftOpen.y = 0;
		imgOfficeDoorLeftOpen.windowSize = 1369;
		imgOfficeDoorLeftOpen.width = 2200;
		imgOfficeDoorLeftOpen.height = 756;
		scnOffice.fnAddSprite(imgOfficeDoorLeftOpen);
		scnOffice.fnGetSprite("Office_DoorLeftOpen").visible = true;

		var imgOfficeDoorLeftClose = new PanningSprite("Office_DoorLeftClose");
		imgOfficeDoorLeftClose.fnLoadImage("./assets/img/Office/Office_DoorLeftClose.gif");
		imgOfficeDoorLeftClose.x = 0;
		imgOfficeDoorLeftClose.y = 0;
		imgOfficeDoorLeftClose.windowSize = 1369;
		imgOfficeDoorLeftClose.width = 2200;
		imgOfficeDoorLeftClose.height = 756;
		scnOffice.fnAddSprite(imgOfficeDoorLeftClose);
		scnOffice.fnGetSprite("Office_DoorLeftClose").visible = false;


		var imgLoad = new Button("PanLeft");
		imgLoad.fnLoadImage("./assets/img/Common/null.png", 
		"./assets/img/Common/null.png",
		"./assets/img/Common/null.png",
		"./assets/img/Common/null.png"
		);
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 200;
		imgLoad.height = 756;
		scnOffice.fnAddSprite(imgLoad);
		imgLoad.fnMouseOverEvent = function () {
			intOfficePanLeft = 1;
		}
		imgLoad.fnMouseOffEvent = function () {
			intOfficePanLeft = 0;
		}
		scnOffice.fnGetSprite("PanLeft").visible = true;
		
		var imgLoad = new Button("PanRight");
		imgLoad.fnLoadImage("./assets/img/Common/null.png", 
		"./assets/img/Common/null.png",
		"./assets/img/Common/null.png",
		"./assets/img/Common/null.png"
		);
		imgLoad.x = 1169;
		imgLoad.y = 0;
		imgLoad.width = 200;
		imgLoad.height = 756;
		scnOffice.fnAddSprite(imgLoad);
		imgLoad.fnMouseOverEvent = function () {
			intOfficePanRight = 1;
		}
		imgLoad.fnMouseOffEvent = function () {
			intOfficePanRight = 0;
		}
		scnOffice.fnGetSprite("PanRight").visible = true;

		
		
		var imgLightButtonLeft = new Button("LightLeft");
		imgLightButtonLeft.fnLoadImage("./assets/img/Office/Office_ButtonLight.png", 
		"./assets/img/Office/Office_ButtonLight.png",
		"./assets/img/Office/Office_ButtonLightActive.png",
		"./assets/img/Common/null.png"
		);
		imgLightButtonLeft.x = 0;
		imgLightButtonLeft.y = 0;
		imgLightButtonLeft.width = 50;
		imgLightButtonLeft.height = 378;
		scnOffice.fnAddSprite(imgLightButtonLeft);
		imgLightButtonLeft.fnMouseDownEvent = function () {
			fnOfficeFlashlight("left", true);
		}
		imgLightButtonLeft.fnMouseUpEvent = function () {
			fnOfficeFlashlight("left", false);
		}
		scnOffice.fnGetSprite("LightLeft").visible = true;
		
		var imgLoad = new Button("DoorLeftOpen");
		imgLoad.fnLoadImage("./assets/img/Office/Office_ButtonDoorOpen.png", 
		"./assets/img/Office/Office_ButtonDoorOpen.png",
		"./assets/img/Office/Office_ButtonDoorOpen.png",
		"./assets/img/Common/null.png"
		);
		imgLoad.x = 0;
		imgLoad.y = 378;
		imgLoad.width = 50;
		imgLoad.height = 378;
		scnOffice.fnAddSprite(imgLoad);
		imgLoad.fnMouseDownEvent = function () {
			fnOfficeDoor("left","down");
		}
		scnOffice.fnGetSprite("DoorLeftOpen").visible = true;
		
		var imgLoad = new Button("DoorLeftClose");
		imgLoad.fnLoadImage("./assets/img/Office/Office_ButtonDoorClose.png", 
		"./assets/img/Office/Office_ButtonDoorClose.png",
		"./assets/img/Office/Office_ButtonDoorClose.png",
		"./assets/img/Common/null.png"
		);
		imgLoad.x = 0;
		imgLoad.y = 378;
		imgLoad.width = 50;
		imgLoad.height = 378;
		scnOffice.fnAddSprite(imgLoad);
		imgLoad.fnMouseDownEvent = function () {
			fnOfficeDoor("left","up");
		}
		scnOffice.fnGetSprite("DoorLeftClose").visible = false;
						
		
		
		
		//Office
		scnOffice.intOffsetX = intOfficeOffsetX;
		scnOffice.intOffsetY = intOfficeOffsetY;
		scnOffice.fnSetLayer(1);