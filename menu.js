		//Create Menu scene
		var scnMenu = new Scene("Menu");
		//Add sprite
		var imgLoad = new Sprite("Background");
		imgLoad.fnLoadImage("./assets/img/Console/DesktopBackground.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 600;
		scnMenu.fnAddSprite(imgLoad);	
		
		var imgLoad = new Sprite("UserWindow");
		imgLoad.fnLoadImage("./assets/img/Console/Windows_User.png");
		imgLoad.x = 209;
		imgLoad.y = 97;
		imgLoad.width = 365;
		imgLoad.height = 387;
		scnMenu.fnAddSprite(imgLoad);		
		
		var imgLoad = new Button("Start Button");
		imgLoad.x = 236;
		imgLoad.y = 402;
		imgLoad.width = 154;
		imgLoad.height = 35;
		imgLoad.fnLoadImage("./assets/img/Console/Button.png", "./assets/img/Console/ButtonHighlighted.png","./assets/img/Console/ButtonPressed.png","./assets/img/Console/Button_Start.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");
			game.fnPlaySound("FAN_BUSY",true);					
			game.fnChangeScene("Logging In");
		}
		scnMenu.fnAddButton(imgLoad);

		var imgLoad = new Button("Help Button");
		imgLoad.x = 393;
		imgLoad.y = 402;
		imgLoad.width = 154;
		imgLoad.height = 35;
		imgLoad.fnLoadImage("./assets/img/Console/Button.png", "./assets/img/Console/ButtonHighlighted.png","./assets/img/Console/ButtonPressed.png","./assets/img/Console/Button_Help.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnMenu.fnAddButton(imgLoad);

		var imgLoad = new Button("Options Button");
		imgLoad.x = 236;
		imgLoad.y = 439;
		imgLoad.width = 154;
		imgLoad.height = 35;
		imgLoad.fnLoadImage("./assets/img/Console/Button.png", "./assets/img/Console/ButtonHighlighted.png","./assets/img/Console/ButtonPressed.png","./assets/img/Console/Button_Options.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnMenu.fnAddButton(imgLoad);

		var imgLoad = new Button("ShutDown Button");
		imgLoad.x = 393;
		imgLoad.y = 439;
		imgLoad.width = 154;
		imgLoad.height = 35;
		imgLoad.fnLoadImage("./assets/img/Console/Button.png", "./assets/img/Console/ButtonHighlighted.png","./assets/img/Console/ButtonPressed.png","./assets/img/Console/Button_Shutdown.png");
		imgLoad.fnClickEvent = function () {
			game.fnPlaySound("BUTTON");	
		}
		scnMenu.fnAddButton(imgLoad);

		var imgLoad = new Button("Menu Administrator");
		imgLoad.x = 238;
		imgLoad.y = 233;
		imgLoad.width = 307;
		imgLoad.height = 26;
		imgLoad.fnLoadImage("./assets/img/Console/Windows_User_Administrator.png", "./assets/img/Console/Windows_User_Administrator.png","./assets/img/Console/Windows_User_AdministratorSelect.png","./assets/img/Console/null.png");
		imgLoad.fnClickEvent = function () {
		}
		scnMenu.fnAddButton(imgLoad);
		

		var imgLoad = new Sprite("Button2");
		imgLoad.fnLoadImage("./assets/img/Console/Windows_User_Supervisor.png");
		imgLoad.x = 238;
		imgLoad.y = 260;
		imgLoad.width = 307;
		imgLoad.height = 26;
		scnMenu.fnAddSprite(imgLoad);

		var imgLoad = new Sprite("Button3");
		imgLoad.fnLoadImage("./assets/img/Console/Windows_User_Guest.png");
		imgLoad.x = 238;
		imgLoad.y = 287;
		imgLoad.width = 307;
		imgLoad.height = 26;
		scnMenu.fnAddSprite(imgLoad);
