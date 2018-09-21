

// FUNCTIONS THAT CONTROL EVENTS/MALFUNCTIONS/MOVEMENT

	intClockDigit1Counter = 0;
	intClockDigit2Counter = -1;
	intClockDigit3Counter = -1;
	intClockDigit3Switcher = 1;
	
	function fnClock()
	{
		if(intClockDigit1Counter == 0)
		{
			intClockDigit2Counter++;
			intClockDigit1Counter++;			
			scnClockDigit1.fnGetSprite("9").visible = false;	
			scnClockDigit1.fnGetSprite("0").visible = true;
		}
		else if(intClockDigit1Counter == 1)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("0").visible = false;	
			scnClockDigit1.fnGetSprite("1").visible = true;			
		}
		else if(intClockDigit1Counter == 2)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("1").visible = false;	
			scnClockDigit1.fnGetSprite("2").visible = true;			
		}
		else if(intClockDigit1Counter == 3)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("2").visible = false;	
			scnClockDigit1.fnGetSprite("3").visible = true;			
		}
		else if(intClockDigit1Counter == 4)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("3").visible = false;	
			scnClockDigit1.fnGetSprite("4").visible = true;			
		}
		else if(intClockDigit1Counter == 5)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("4").visible = false;	
			scnClockDigit1.fnGetSprite("5").visible = true;			
		}
		else if(intClockDigit1Counter == 6)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("5").visible = false;	
			scnClockDigit1.fnGetSprite("6").visible = true;			
		}
		else if(intClockDigit1Counter == 7)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("6").visible = false;	
			scnClockDigit1.fnGetSprite("7").visible = true;			
		}
		else if(intClockDigit1Counter == 8)
		{
			intClockDigit1Counter++;	
			scnClockDigit1.fnGetSprite("7").visible = false;	
			scnClockDigit1.fnGetSprite("8").visible = true;			
		}
		else if(intClockDigit1Counter == 9)
		{
			scnClockDigit1.fnGetSprite("8").visible = false;	
			scnClockDigit1.fnGetSprite("9").visible = true;	
			intClockDigit1Counter = 0;	
		}
		else
		{
			//console.log("ERROR: fnClock() - Unexpected digit1 number: " + intClockDigit1Counter)
		}
		
		if(intClockDigit2Counter == 0)
		{
			if(intClockDigit3Switcher)
			{
				intClockDigit3Counter++;
				intClockDigit3Switcher = 0;
			}
			scnClockDigit2.fnGetSprite("5").visible = false;	
			scnClockDigit2.fnGetSprite("0").visible = true;
		}
		else if(intClockDigit2Counter == 1)
		{
			scnClockDigit2.fnGetSprite("0").visible = false;	
			scnClockDigit2.fnGetSprite("1").visible = true;			
		}
		else if(intClockDigit2Counter == 2)
		{
			scnClockDigit2.fnGetSprite("1").visible = false;	
			scnClockDigit2.fnGetSprite("2").visible = true;			
		}
		else if(intClockDigit2Counter == 3)
		{
			scnClockDigit2.fnGetSprite("2").visible = false;	
			scnClockDigit2.fnGetSprite("3").visible = true;			
		}
		else if(intClockDigit2Counter == 4)
		{
			scnClockDigit2.fnGetSprite("3").visible = false;	
			scnClockDigit2.fnGetSprite("4").visible = true;			
		}
		else if(intClockDigit2Counter == 5)
		{
			scnClockDigit2.fnGetSprite("4").visible = false;	
			scnClockDigit2.fnGetSprite("5").visible = true;
			intClockDigit2Counter = -1;
			intClockDigit3Switcher = 1;
		}
		else
		{
			//console.log("ERROR: fnClock() - Unexpected digit2 number: " + intClockDigit2Counter)
		}
		
		if(intClockDigit3Counter == 0)
		{
			scnClockDigit3.fnGetSprite("0").visible = true;
		}
		else if(intClockDigit3Counter == 1)
		{
			scnClockDigit3.fnGetSprite("0").visible = false;	
			scnClockDigit3.fnGetSprite("1").visible = true;			
		}
		else if(intClockDigit3Counter == 2)
		{
			scnClockDigit3.fnGetSprite("1").visible = false;	
			scnClockDigit3.fnGetSprite("2").visible = true;			
		}
		else if(intClockDigit3Counter == 3)
		{
			scnClockDigit3.fnGetSprite("2").visible = false;	
			scnClockDigit3.fnGetSprite("3").visible = true;			
		}
		else if(intClockDigit3Counter == 4)
		{
			scnClockDigit3.fnGetSprite("3").visible = false;	
			scnClockDigit3.fnGetSprite("4").visible = true;			
		}
		else if(intClockDigit3Counter == 5)
		{
			scnClockDigit3.fnGetSprite("4").visible = false;	
			scnClockDigit3.fnGetSprite("5").visible = true;
		}
		else if(intClockDigit3Counter == 6)
		{
			scnClockDigit3.fnGetSprite("5").visible = false;	
			scnClockDigit3.fnGetSprite("6").visible = true;
		}
		else
		{
			//console.log("ERROR: fnClock() - Unexpected digit3 number: " + intClockDigit3Counter)
		}
	}



	var scnClockDigit1 = new Scene("ClockDigit1");
	
	var imgLoad = new Sprite("1");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/1.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("1").visible = false;
		
	var imgLoad = new Sprite("2");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/2.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("2").visible = false;
	
	var imgLoad = new Sprite("3");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/3.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("3").visible = false;
	
	var imgLoad = new Sprite("4");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/4.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("4").visible = false;
	
	var imgLoad = new Sprite("5");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/5.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("5").visible = false;
	
	var imgLoad = new Sprite("6");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/6.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("6").visible = false;
	
	var imgLoad = new Sprite("7");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/7.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("7").visible = false;
	
	var imgLoad = new Sprite("8");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/8.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("8").visible = false;
	
	var imgLoad = new Sprite("9");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/9.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("9").visible = false;

	var imgLoad = new Sprite("0");
	imgLoad.x = 780;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/0.png");
	scnClockDigit1.fnAddSprite(imgLoad);
	scnClockDigit1.fnGetSprite("0").visible = false;

	
	var scnClockDigit2 = new Scene("ClockDigit2");
	
	var imgLoad = new Sprite("1");
	imgLoad.x = 770;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/1.png");
	scnClockDigit2.fnAddSprite(imgLoad);
	scnClockDigit2.fnGetSprite("1").visible = false;
		
	var imgLoad = new Sprite("2");
	imgLoad.x = 770;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/2.png");
	scnClockDigit2.fnAddSprite(imgLoad);
	scnClockDigit2.fnGetSprite("2").visible = false;
	
	var imgLoad = new Sprite("3");
	imgLoad.x = 770;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/3.png");
	scnClockDigit2.fnAddSprite(imgLoad);
	scnClockDigit2.fnGetSprite("3").visible = false;
	
	var imgLoad = new Sprite("4");
	imgLoad.x = 770;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/4.png");
	scnClockDigit2.fnAddSprite(imgLoad);
	scnClockDigit2.fnGetSprite("4").visible = false;
	
	var imgLoad = new Sprite("5");
	imgLoad.x = 770;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/5.png");
	scnClockDigit2.fnAddSprite(imgLoad);
	scnClockDigit2.fnGetSprite("5").visible = false;

	var imgLoad = new Sprite("0");
	imgLoad.x = 770;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/0.png");
	scnClockDigit2.fnAddSprite(imgLoad);
	scnClockDigit2.fnGetSprite("0").visible = false;

	
	var scnClockDigit3 = new Scene("ClockDigit3");
	
	var imgLoad = new Sprite("1");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/1.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("1").visible = false;
		
	var imgLoad = new Sprite("2");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/2.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("2").visible = false;
	
	var imgLoad = new Sprite("3");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/3.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("3").visible = false;
	
	var imgLoad = new Sprite("4");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/4.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("4").visible = false;
	
	var imgLoad = new Sprite("5");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/5.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("5").visible = false;
	
	var imgLoad = new Sprite("6");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/6.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("6").visible = false;

	var imgLoad = new Sprite("0");
	imgLoad.x = 755;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/0.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("0").visible = false;
	
	var scnClockDigit4 = new Scene("ClockDigit4");
	
	var imgLoad = new Sprite("0");
	imgLoad.x = 745;
	imgLoad.y = 576;
	imgLoad.width = 11;
	imgLoad.height = 16;
	imgLoad.fnLoadImage("./assets/img/Common/0.png");
	scnClockDigit3.fnAddSprite(imgLoad);
	scnClockDigit3.fnGetSprite("1").visible = false;
	
	
	scnClockDigit1.fnSetLayer(1);
	scnClockDigit2.fnSetLayer(1);
	scnClockDigit3.fnSetLayer(1);