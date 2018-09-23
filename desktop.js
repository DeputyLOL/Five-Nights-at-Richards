

function fnDesktopToggle(toggle)
{
	if (toggle == "on")
	{
		scnDesktop.fnAddSubScene(scnBatteryIcon);
		scnDesktop.fnAddSubScene(scnClockDigit1);
		scnDesktop.fnAddSubScene(scnClockDigit2);
		scnDesktop.fnAddSubScene(scnClockDigit3);
		scnDesktop.fnAddSubScene(scnClockDigit4);
	}
	else if(toggle == "off")
	{
		scnDesktop.fnRemoveSubScene(scnBatteryIcon);
		scnDesktop.fnRemoveSubScene(scnClockDigit1);
		scnDesktop.fnRemoveSubScene(scnClockDigit2);
		scnDesktop.fnRemoveSubScene(scnClockDigit3);
		scnDesktop.fnRemoveSubScene(scnClockDigit4);
	}
	else
	{
		console.log("ERROR: fnDesktopToggle() - Can't toggle to " + toggle);
	}
}




	//Create Menu scene
	var scnDesktop = new Scene("Desktop");
	//Add sprite
	var imgLoad = new Sprite("Background");
	imgLoad.fnLoadImage("./assets/img/Console/Common/DesktopBackground.png");
	imgLoad.x = 0;
	imgLoad.y = 0;
	imgLoad.width = 800;
	imgLoad.height = 600;
	scnDesktop.fnAddSprite(imgLoad);
	
	var imgLoad = new Sprite("TaskBar");
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Taskbar.png");
	imgLoad.x = 0;
	imgLoad.y = 566;
	imgLoad.width = 800;
	imgLoad.height = 34;
	scnDesktop.fnAddSprite(imgLoad);
	
	var imgLoad = new Button("IconDeviceMonitor");
	imgLoad.x = 20;
	imgLoad.y = 20;
	imgLoad.width = 110;
	imgLoad.height = 140;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Icon_DeviceMonitor.png", 
	"./assets/img/Console/Desktop/Desktop_Icon_DeviceMonitorHighLighted.png",
	"./assets/img/Console/Desktop/Desktop_Icon_DeviceMonitorSelected.png",
	"./assets/img/Common/null.png");
	imgLoad.fnMouseUpEvent = function () {			
		scnDesktop.fnAddSubScene(scnDeviceMonitor);
		fnDeviceManager();
	}
	scnDesktop.fnAddButton(imgLoad);

	var imgLoad = new Button("IconEmail");
	imgLoad.x = 20;
	imgLoad.y = 140;
	imgLoad.width = 110;
	imgLoad.height = 140;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Icon_Email.png", 
	"./assets/img/Console/Desktop/Desktop_Icon_EmailHighlighted.png",
	"./assets/img/Console/Desktop/Desktop_Icon_EmailSelected.png",
	"./assets/img/Common/null.png"
	);
	imgLoad.fnMouseUpEvent = function () {
		scnScreen.fnRemoveSubScene("Desktop");
		scnScreen.fnAddSubScene(scnEmail);
	}
	scnDesktop.fnAddButton(imgLoad);

	var imgLoad = new Button("IconCameras");
	imgLoad.x = 20;
	imgLoad.y = 260;
	imgLoad.width = 110;
	imgLoad.height = 140;
	imgLoad.fnLoadImage("./assets/img/Console/Desktop/Desktop_Icon_Cameras.png", 
	"./assets/img/Console/Desktop/Desktop_Icon_CamerasHighlighted.png",
	"./assets/img/Console/Desktop/Desktop_Icon_CamerasSelected.png",
	"./assets/img/Common/null.png"
	);
	imgLoad.fnMouseUpEvent = function () {
		scnDesktop.fnAddSubScene(scnCameraMonitor);
		scnCameraMonitor.fnAddSubScene(scnCameraViewport);
		scnCameraMonitor.fnAddSubScene(scnCameraBackground);
		intCameraMonitorActive = 1;
		fnCameraManager();
	}
	scnDesktop.fnAddButton(imgLoad);
	
	//Screen
	scnDesktop.intOffsetX = intScreenOffsetX;
	scnDesktop.intOffsetY = intScreenOffsetY;
	scnDesktop.fnSetLayer(1);
