		//Create Menu scene
		var scnDesktop = new Scene("Desktop");
		//Add sprite
		var imgLoad = new Sprite("Background");
		imgLoad.fnLoadImage("./assets/img/Console/DesktopBackground.png");
		imgLoad.x = 0;
		imgLoad.y = 0;
		imgLoad.width = 800;
		imgLoad.height = 600;
		scnDesktop.fnAddSprite(imgLoad);	

		var imgLoad = new Sprite("TaskBar");
		imgLoad.fnLoadImage("./assets/img/Console/Desktop_Taskbar.png");
		imgLoad.x = 0;
		imgLoad.y = 566;
		imgLoad.width = 800;
		imgLoad.height = 34;
		scnDesktop.fnAddSprite(imgLoad);
