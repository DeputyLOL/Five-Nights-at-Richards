	//Create Menu scene
	var scnMenu = new Scene("Menu");
	
	//
	//Background
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnMenu.fnAddSprite(imgLoad);	
	
	//
	//User window
	var imgLoad = new Sprite("UserWindow");
	imgLoad.fnLoadImage("./assets/img/Console/Windows_User.png");
	imgLoad.x = 209;
	imgLoad.y = 97;
	imgLoad.width = 365;
	imgLoad.height = 387;
	scnMenu.fnAddSprite(imgLoad);		
	
	//
	//Start window
	var imgLoad = new Button("Start Button");
	imgLoad.x = 236;
	imgLoad.y = 402;
	imgLoad.width = 154;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Button.png", 
	"./assets/img/Console/ButtonHighlighted.png",
	"./assets/img/Console/ButtonPressed.png",
	"./assets/img/Console/Button_Start.png");
	imgLoad.fnClickEvent = function () {
		//First, check which user is selected
		var strActiveButton = mainmenu.fnWhichButtonActive();
		if ( strActiveButton == "Menu Guest" ) {
			console.log(scnScreen);
			game.fnPlaySound("BUTTON");
			game.fnPlaySound("FAN_BUSY",true);					
			scnScreen.fnRemoveSubScene("Menu");
			scnScreen.fnAddSubScene(scnLoadingGame);
			console.log(scnScreen);
			setTimeout( function() 
			{ 
				scnScreen.fnRemoveSubScene("Logging In");
				scnScreen.fnAddSubScene(scnDesktop);
				game.fnPauseSound("FAN_BUSY");
				game.fnPlaySound("SYSTEM_START");
				console.log(scnScreen);
			}, 3000);
		} else {
			alert ( "You do not have privileges to use that account");
		}
	}
	scnMenu.fnAddButton(imgLoad);

	//
	//Help Button
	var imgLoad = new Button("Help Button");
	imgLoad.x = 393;
	imgLoad.y = 402;
	imgLoad.width = 154;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Button.png", 
	"./assets/img/Console/ButtonHighlighted.png",
	"./assets/img/Console/ButtonPressed.png",
	"./assets/img/Console/Button_Help.png");
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");	
		scnScreen.fnRemoveSubScene("Menu");
		scnScreen.fnAddSubScene(scnHelpMenu);
	}
	scnMenu.fnAddButton(imgLoad);
	
	
	//
	//Options
	var imgLoad = new Button("Options Button");
	imgLoad.x = 236;
	imgLoad.y = 439;
	imgLoad.width = 154;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Button.png", 
	"./assets/img/Console/ButtonHighlighted.png",
	"./assets/img/Console/ButtonPressed.png",
	"./assets/img/Console/Button_Options.png");
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");	
		game.fnChangeScene("Options");
	}
	scnMenu.fnAddButton(imgLoad);
	
	
	
	//
	//Shutdown Button
	var imgLoad = new Button("ShutDown Button");
	imgLoad.x = 393;
	imgLoad.y = 439;
	imgLoad.width = 154;
	imgLoad.height = 35;
	imgLoad.fnLoadImage("./assets/img/Console/Button.png", 
	"./assets/img/Console/ButtonHighlighted.png",
	"./assets/img/Console/ButtonPressed.png",
	"./assets/img/Console/Button_Shutdown.png");
	imgLoad.fnClickEvent = function () {
		game.fnPlaySound("BUTTON");
		window.location.href = "http:www.richardhowellpeak.com/GameDesign";
	
	}
	scnMenu.fnAddButton(imgLoad);
	
	
	
	
	
	////// Blue menu options
	
	
	
	//
	//Administrator
	var mainmenu = new MenuButtonGroup();
	var imgLoad = new MenuButton("Menu Administrator");
	imgLoad.x = 238;
	imgLoad.y = 233;
	imgLoad.width = 307;
	imgLoad.height = 26;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Windows_User_Administrator.png",
	"./assets/img/Console/Windows_User_Administrator.png",
	"./assets/img/Console/Windows_User_AdministratorSelect.png",
	"./assets/img/Console/Windows_User_AdministratorSelect.png",
	"./assets/img/Console/null.png"
	);
	imgLoad.fnClickEvent = function () {
	}
	scnMenu.fnAddButton(imgLoad);
	mainmenu.fnAddMenuButton(imgLoad);
	imgLoad.fnButtonActive();
	
	
	
	
	//
	//Supervisor
	var imgLoad = new MenuButton("Menu Supervisor");
	imgLoad.x = 238;
	imgLoad.y = 260;
	imgLoad.width = 307;
	imgLoad.height = 26;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Windows_User_Supervisor.png",
	"./assets/img/Console/Windows_User_Supervisor.png",
	"./assets/img/Console/Windows_User_SupervisorSelect.png",
	"./assets/img/Console/Windows_User_SupervisorSelect.png",
	"./assets/img/Console/null.png"
	);
	imgLoad.fnClickEvent = function () {
	}
	scnMenu.fnAddButton(imgLoad);
	mainmenu.fnAddMenuButton(imgLoad);

	//
	//Guest
	var imgLoad = new MenuButton("Menu Guest");
	imgLoad.x = 238;
	imgLoad.y = 287;
	imgLoad.width = 307;
	imgLoad.height = 26;
	imgLoad.fnLoadImage(
	"./assets/img/Console/Windows_User_Guest.png",
	"./assets/img/Console/Windows_User_Guest.png",
	"./assets/img/Console/Windows_User_GuestSelect.png",
	"./assets/img/Console/Windows_User_GuestSelect.png",
	"./assets/img/Console/null.png"
	);
	imgLoad.fnClickEvent = function () {
		
	}
	scnMenu.fnAddButton(imgLoad);
	mainmenu.fnAddMenuButton(imgLoad);
			

	//Screen
	scnMenu.intOffsetX = intScreenOffsetX;
	scnMenu.intOffsetY = intScreenOffsetY;
	scnMenu.fnSetLayer(1);

