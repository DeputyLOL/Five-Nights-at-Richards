

	var scnMonitorBootGood = new Scene("BootScreenNormal");
	scnMonitorBootGood.fnSetLayer(10);
	scnMonitorBootGood.intOffsetX = intScreenOffsetX;
	scnMonitorBootGood.intOffsetY = intScreenOffsetY;
	var imgMonitorBootGood = new Sprite("BootScreen");
	imgMonitorBootGood.fnLoadImage("./assets/img/Console/System/Boot_Normal.gif");
	imgMonitorBootGood.x = 0;
	imgMonitorBootGood.y = 0;
	imgMonitorBootGood.width = 800;
	imgMonitorBootGood.height = 600;		
	scnMonitorBootGood.fnAddSprite(imgMonitorBootGood);

	var scnMonitorStartUp = new Scene("StartUpScreen");
	scnMonitorStartUp.fnSetLayer(10);
	scnMonitorStartUp.intOffsetX = intScreenOffsetX;
	scnMonitorStartUp.intOffsetY = intScreenOffsetY;
	var imgMonitorStartUp = new Sprite("BootScreen");
	imgMonitorStartUp.fnLoadImage("./assets/img/Console/System/StartUp.gif");
	imgMonitorStartUp.x = 0;
	imgMonitorStartUp.y = 0;
	imgMonitorStartUp.width = 800;
	imgMonitorStartUp.height = 600;		
	scnMonitorStartUp.fnAddSprite(imgMonitorStartUp);
	
	var scnMonitorShutdown = new Scene("ShutDownScreen");
	scnMonitorShutdown.fnSetLayer(10);
	scnMonitorShutdown.intOffsetX = intScreenOffsetX;
	scnMonitorShutdown.intOffsetY = intScreenOffsetY;
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/Common/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnMonitorShutdown.fnAddSprite(imgLoad);	
	
	imgLoad = new Sprite("ShutDownWindow");
	imgLoad.fnLoadImage("./assets/img/Console/System/Shutdown.png");
	imgLoad.x = 209;
	imgLoad.y = 180;
	imgLoad.width = 365;
	imgLoad.height = 142;		
	scnMonitorShutdown.fnAddSprite(imgLoad);
	
	imgLoad = new Sprite("LoadingBarBoarder");
	imgLoad.fnLoadImage("./assets/img/Console/Common/LoadBarLoopBoarder.png");
	imgLoad.x = 221;
	imgLoad.y = 268;
	imgLoad.width = 341;
	imgLoad.height = 47;		
	scnMonitorShutdown.fnAddSprite(imgLoad);
	
	imgLoad = new Sprite("LoadingBar");
	imgLoad.fnLoadImage("./assets/img/Console/Common/LoadBarLoop.gif");
	imgLoad.x = 221;
	imgLoad.y = 268;
	imgLoad.width = 341;
	imgLoad.height = 47;
	scnMonitorShutdown.fnAddSprite(imgLoad);
		
	
	
	var scnLoading = new Scene("Loading");
	//Splash
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/System/Startup_Background.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;		
	scnLoading.fnAddSprite(imgLoad);
	
	//Text
	imgLoad = new Sprite("SetUp");
	imgLoad.fnLoadImage("./assets/img/Console/System/Startup_Setup.png");
	imgLoad.x = 160;
	imgLoad.y = 328;
	imgLoad.width = 403;
	imgLoad.height = 17;		
	scnLoading.fnAddSprite(imgLoad);
	
	//Text
	imgLoad = new Sprite("LoadingDots");
	imgLoad.fnLoadImage("./assets/img/Console/System/Startup_LoadDots.gif");
	imgLoad.x = 564;
	imgLoad.y = 328;
	imgLoad.width = 33;
	imgLoad.height = 17;		
	scnLoading.fnAddSprite(imgLoad);
	


	
	//Create Loading screen scene
	var scnLoadingGame = new Scene("Logging In");
	
	//Splash
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/Common/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnLoadingGame.fnAddSprite(imgLoad);	
		
	//Text
	imgLoad = new Sprite("LogInWindow");
	imgLoad.fnLoadImage("./assets/img/Console/Menu/Windows_LogIn.png");
	imgLoad.x = 209;
	imgLoad.y = 180;
	imgLoad.width = 365;
	imgLoad.height = 142;		
	scnLoadingGame.fnAddSprite(imgLoad);
	
	imgLoad = new Sprite("LoadingBarBoarder");
	imgLoad.fnLoadImage("./assets/img/Console/Common/LoadBarLoopBoarder.png");
	imgLoad.x = 221;
	imgLoad.y = 268;
	imgLoad.width = 341;
	imgLoad.height = 47;		
	scnLoadingGame.fnAddSprite(imgLoad);
	
	imgLoad = new Sprite("LoadingBar");
	imgLoad.fnLoadImage("./assets/img/Console/Common/LoadBarLoop.gif");
	imgLoad.x = 221;
	imgLoad.y = 268;
	imgLoad.width = 341;
	imgLoad.height = 47;
	scnLoadingGame.fnAddSprite(imgLoad);
	
	
	//Screen

	scnLoading.intOffsetX = intScreenOffsetX;
	scnLoading.intOffsetY = intScreenOffsetY;
	scnLoading.fnSetLayer(1);
	
	scnLoadingGame.intOffsetX = intScreenOffsetX;
	scnLoadingGame.intOffsetY = intScreenOffsetY;
	scnLoadingGame.fnSetLayer(1);
