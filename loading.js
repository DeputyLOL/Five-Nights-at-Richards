


		var scnLoading = new Scene("Loading");
		//Splash
		var imgLoad = new Sprite("Background");
		imgLoad.fnLoadImage("./assets/img/Console/Startup_Background.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 600;		
		scnLoading.fnAddSprite(imgLoad);
		
		//Text
		imgLoad = new Sprite("SetUp");
		imgLoad.fnLoadImage("./assets/img/Console/Startup_Setup.png");
		imgLoad.x = 160;
		imgLoad.y = 328;
		imgLoad.width = 403;
		imgLoad.height = 17;		
		scnLoading.fnAddSprite(imgLoad);
		
		//Text
		imgLoad = new Sprite("LoadingDots");
		imgLoad.fnLoadImage("./assets/img/Console/Startup_LoadDots.gif");
		imgLoad.x = 564;
		imgLoad.y = 328;
		imgLoad.width = 33;
		imgLoad.height = 17;		
		scnLoading.fnAddSprite(imgLoad);
		


		
		//Create Loading screen scene
		var scnLoadingGame = new Scene("Logging In");
		
		//Splash
		var imgLoad = new Sprite("Background");
		imgLoad.fnLoadImage("./assets/img/Console/DesktopBackground.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 600;
		scnLoadingGame.fnAddSprite(imgLoad);	
			
		//Text
		imgLoad = new Sprite("LogInWindow");
		imgLoad.fnLoadImage("./assets/img/Console/Windows_LogIn.png");
		imgLoad.x = 209;
		imgLoad.y = 180;
		imgLoad.width = 365;
		imgLoad.height = 142;		
		scnLoadingGame.fnAddSprite(imgLoad);
		
		imgLoad = new Sprite("LoadingBarBoarder");
		imgLoad.fnLoadImage("./assets/img/Console/LoadBarLoopBoarder.png");
		imgLoad.x = 221;
		imgLoad.y = 268;
		imgLoad.width = 341;
		imgLoad.height = 47;		
		scnLoadingGame.fnAddSprite(imgLoad);
		
		imgLoad = new Sprite("LoadingBar");
		imgLoad.fnLoadImage("./assets/img/Console/LoadBarLoop.gif");
		imgLoad.x = 221;
		imgLoad.y = 268;
		imgLoad.width = 341;
		imgLoad.height = 47;
		scnLoadingGame.fnAddSprite(imgLoad);