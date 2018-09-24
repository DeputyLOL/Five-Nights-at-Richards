

	intMonitorPower = 0;
	intMonitorOn = 0;
	
		function fnMonitorToggler( toggle )
		{
			scnOffice.fnRemoveSubScene(scnScreenOff);		
			scnOffice.fnRemoveSubScene(scnDesktop);
			scnOffice.fnRemoveSubScene(scnScreen);
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
			if (toggle == "on")
			{
				if (game.monitorInUse == true)
				{
					if(intMonitorOn)
					{
						scnOffice.fnAddSubScene(scnScreen);
						scnOffice.fnAddSubScene(scnDesktop);
						fnDesktopToggle("on");
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
					}
					else if(intMonitorPower)
					{
						scnOffice.fnAddSubScene(scnScreen);		
					}
					else
					{
						scnOffice.fnAddSubScene(scnScreenOff);
						scnGame.fnGetSprite("MonitorPowerOn").visible = true;							
					}
				}
			}
		}
		
		
		
		function fnMonitorFlipper( direction )
		{
			if (direction == "up" && game.monitorInUse == false )
			{
				game.fnPlaySound("MONITOR_UP");
				scnGame.fnGetSprite("MonitorFlipUp").visible = false;
				scnOffice.fnGetSprite("PanLeft").visible = false;
				scnOffice.fnGetSprite("PanRight").visible = false;
				scnOffice.fnAddSubScene(scnMonitorUp);
				setTimeout( function() 
				{
					scnOffice.fnRemoveSubScene(scnMonitorUp);
					game.monitorInUse = true;
					fnMonitorToggler("on");
					scnGame.fnGetSprite("MonitorFlipDown").visible = true;
					imgMonitorUp.fnLoadImage("./assets/img/Monitor/MonitorUp.gif");
				},600)				
			} 
			else if (direction == "down" &&	game.monitorInUse == true )
			{
				game.monitorInUse = false;
				game.fnPlaySound("MONITOR_DOWN");
				scnGame.fnGetSprite("MonitorPowerOn").visible = false;	
				scnGame.fnGetSprite("MonitorFlipDown").visible = false;
				scnOffice.fnAddSubScene(scnMonitorDown);
				fnMonitorToggler("off");
				setTimeout( function() 
				{
					scnOffice.fnRemoveSubScene(scnMonitorDown);
					scnOffice.fnGetSprite("PanLeft").visible = true;
					scnOffice.fnGetSprite("PanRight").visible = true;
					imgMonitorDown.fnLoadImage("./assets/img/Monitor/MonitorDown.gif");
					if(intGameOver == 0 && intPower > 0)
					{
						scnGame.fnGetSprite("MonitorFlipUp").visible = true;
					}
				},600);					
			}
			else
			{
				console.log("ERROR: fnMonitorFlipper - Can't flip " + direction);
			}
		}

		function fnMonitorPower( toggle )
		{
			if (toggle == "on" && intMonitorPower == 0 )
			{
				intMonitorPower = 1;
				game.fnPlaySound("FAN_START");
				scnGame.fnGetSprite("MonitorPowerOn").visible = false;
				if(game.monitorInUse == true)
				{
					scnOffice.fnAddSubScene(scnScreen);
				}
				scnScreen.fnAddSubScene(scnMonitorBootGood);
				setTimeout( function() 
				{
					game.fnPlaySound("FAN_LOOP",true);
					game.fnPlaySound("FAN_BUSY",true);	
				},4350);	
				setTimeout( function() 
				{
					scnScreen.fnRemoveSubScene(scnMonitorBootGood);
					imgMonitorBootGood.fnResetImage("./assets/img/Console/System/Boot_Normal.gif");
					fnMonitorStartUp();
				},5500);		
			} 
			else if ((toggle == "off" || toggle == "restart") && intMonitorPower == 1 )
			{
				fnDesktopToggle("off");
				fnCloseCameraMonitor();
				intMonitorOn = 0;
				scnScreen.fnAddSubScene(scnMonitorShutdown);
				setTimeout( function() 
				{
					intMonitorPower = 0;
					scnScreen.fnRemoveSubScene(scnMonitorShutdown);
					scnOffice.fnRemoveSubScene(scnScreen);
					if(game.monitorInUse == true)
					{
						scnOffice.fnAddSubScene(scnScreenOff);
					}
					if(toggle == "off")
					{
						game.fnStopSound("FAN_LOOP");
						game.fnPlaySound("FAN_STOP");
						if(game.monitorInUse == true)
						{
							scnGame.fnGetSprite("MonitorPowerOn").visible = true;
						}							
					}
					else
					{
						game.fnVolumeSound("FAN_START",0);
						setTimeout( function() 
						{
							fnMonitorPower("on");
						},1000);	
					}
				},4000);					
			}
			else
			{
				console.log("ERROR: fnMonitorPower() - Can't toggle to " + toggle);
			}
			
			function fnMonitorStartUp(){
				game.fnPlaySound("BOOT_GOOD");
				scnScreen.fnAddSubScene(scnMonitorStartUp);	
				setTimeout( function() 
				{
					scnScreen.fnRemoveSubScene(scnMonitorStartUp);
					imgMonitorStartUp.fnResetImage("./assets/img/Console/System/StartUp.gif");
					game.fnPlaySound("SYSTEM_START");
					game.fnVolumeSound("FAN_START",1);		
					game.fnStopSound("FAN_BUSY");
					intMonitorOn = 1;
					fnMonitorToggler("on");
				},4000);				
			}
		}
		
		
		var scnMonitorUp = new Scene("MonitorUpAnimation");
		scnMonitorUp.fnSetLayer(10);
		var imgMonitorUp = new Sprite("MonitorUp");
		imgMonitorUp.fnLoadImage("./assets/img/Monitor/MonitorUp.gif");
		imgMonitorUp.x = 0;
		imgMonitorUp.y = 0;
		imgMonitorUp.width = 1369;
		imgMonitorUp.height = 756;		
		scnMonitorUp.fnAddSprite(imgMonitorUp);

		var scnMonitorDown = new Scene("MonitorDownAnimation");
		scnMonitorDown.fnSetLayer(10);
		var imgMonitorDown = new Sprite("MonitorDown");
		imgMonitorDown.fnLoadImage("./assets/img/Monitor/MonitorDown.gif");
		imgMonitorDown.x = 0;
		imgMonitorDown.y = 0;
		imgMonitorDown.width = 1369;
		imgMonitorDown.height = 756;		
		scnMonitorDown.fnAddSprite(imgMonitorDown);

	
		var scnScreenOff = new Scene("ScreenOff");
		scnScreenOff.fnSetLayer(2);
		var imgScreenOff = new Sprite("ScreenOff");
		imgScreenOff.fnLoadImage("./assets/img/Monitor/MonitorOff.png");
		imgScreenOff.x = 0;
		imgScreenOff.y = 0;
		imgScreenOff.width = 1369;
		imgScreenOff.height = 756;
		scnScreenOff.fnAddSprite(imgScreenOff);

		
		//Set up the screen
		var scnScreen = new Scene("Screen");
		var imgScreen = new Sprite("ScreenTop");
		imgScreen.fnLoadImage("./assets/img/Monitor/MonitorTop.png");
		imgScreen.x = 294;
		imgScreen.y = 0;
		imgScreen.width = 800;
		imgScreen.height = 72;
		scnScreen.fnAddSprite(imgScreen);
		
		var imgScreen = new Sprite("ScreenBottom");
		imgScreen.fnLoadImage("./assets/img/Monitor/MonitorBottom.png");
		imgScreen.x = 294;
		imgScreen.y = 672;
		imgScreen.width = 800;
		imgScreen.height = 84;
		scnScreen.fnAddSprite(imgScreen);
		
		var imgScreen = new Sprite("ScreenLeft");
		imgScreen.fnLoadImage("./assets/img/Monitor/MonitorLeft.png");
		imgScreen.x = 0;
		imgScreen.y = 0;
		imgScreen.width = 294;
		imgScreen.height = 756;
		scnScreen.fnAddSprite(imgScreen);
		
		var imgScreen = new Sprite("ScreenRight");
		imgScreen.fnLoadImage("./assets/img/Monitor/MonitorRight.png");
		imgScreen.x = 1094;
		imgScreen.y = 0;
		imgScreen.width = 275;
		imgScreen.height = 756;
		scnScreen.fnAddSprite(imgScreen);
				
		var intScreenOffsetX = 294;
		var intScreenOffsetY = 72;	
		scnScreen.fnSetLayer(6);
	