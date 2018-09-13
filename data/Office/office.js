

		function fnMonitorFlipper( direction )
		{
			if (direction == "up")
			{
				scnGame.fnGetSprite("MonitorFlipUp").visible = false;
				scnOffice.fnGetSprite("PanLeft").visible = false;
				scnOffice.fnGetSprite("PanRight").visible = false;
				scnOffice.fnAddSubScene(scnMonitorUp);
				setTimeout( function() 
				{
					scnOffice.fnRemoveSubScene(scnMonitorUp);
					scnOffice.fnAddSubScene(scnScreen);
					scnOffice.fnAddSubScene(scnDesktop);
					scnGame.fnGetSprite("MonitorFlipDown").visible = true;
				},600)				
			} 
			else if (direction == "down")
			{
				scnGame.fnGetSprite("MonitorFlipDown").visible = false;
				scnOffice.fnRemoveSubScene(scnDesktop);
				scnOffice.fnRemoveSubScene(scnScreen);
				scnOffice.fnAddSubScene(scnMonitorDown);
				setTimeout( function() 
				{
					scnOffice.fnRemoveSubScene(scnMonitorDown);
					scnGame.fnGetSprite("MonitorFlipUp").visible = true;
					scnOffice.fnGetSprite("PanLeft").visible = true;
					scnOffice.fnGetSprite("PanRight").visible = true;
				},600)					
			}
			else
			{
				console.log("ERROR: fnMonitorFlipper - Can't flip " + direction);
			}
		}

		//Create Menu scene
		var scnOffice = new Scene("OfficeScene");
		//Add sprite
		var imgOffice = new PanningSprite("Office");
		imgOffice.fnLoadImage("./assets/img/Office/OFFICE_VIEW.png");
		imgOffice.x = 0;
		imgOffice.y = 0;
		imgOffice.windowSize = 1369;
		imgOffice.width = 2500;
		imgOffice.height = 756;
		scnOffice.fnAddSprite(imgOffice);
		var intOfficeOffsetX = 0;
		var intOfficeOffsetY = 0;

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
			console.log("PAN LEFT");
			fnOfficePanner("left","start",imgOffice);
		}
		imgLoad.fnMouseOffEvent = function () {
			fnOfficePanner("left","stop",imgOffice);
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
			console.log("PAN RIGHT");
			fnOfficePanner("right","start",imgOffice);
		}
		imgLoad.fnMouseOffEvent = function () {
			fnOfficePanner("right","stop",imgOffice);
		}
		scnOffice.fnGetSprite("PanRight").visible = true;
		
		function fnOfficePanner( direction = 0, method = "start", spriteCam)
		{
		console.log("PANNING:");
		var strActiveButton = cameraMonitorSelection.fnWhichButtonActive();
		var lstPanningSprites = scnGame.lstSubScenes[0].fnGetSpritesContaining("Office");
			if ( method == "start" ) {
				if(direction == "left")
				{
					for ( var k =0; k < lstPanningSprites.length; k++ ) {
						lstPanningSprites[k].scrollDirection = 20;
					}
				}
				else
				{
					for ( var k =0; k < lstPanningSprites.length; k++ ) {
						lstPanningSprites[k].scrollDirection = -20;
					}
				}
			} 
			else {
				for ( var k =0; k < lstPanningSprites.length; k++ ) {
					lstPanningSprites[k].scrollDirection = 0;
				}
			}	
		}
		
		//Office
		scnOffice.intOffsetX = intOfficeOffsetX;
		scnOffice.intOffsetY = intOfficeOffsetY;
		scnOffice.fnSetLayer(1);