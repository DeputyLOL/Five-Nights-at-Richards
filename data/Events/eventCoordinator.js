

// FUNCTIONS THAT CONTROL EVENTS/MALFUNCTIONS/MOVEMENT

// System Operation
// 0 = Normal
// 1 = Degraded - Needs Rebooting
// 2 = Disabled - Needs Rebooting 
// 3 = Not Responding - Needs Repairing
// 4 = Dead

var intCameraMode = 0;
var intLightingMode = 0;
var intClientMode = 0;
var intServerMode = 0;
var intPowerMode = 0;


function fnEventCoordinator()
{
	var i = 0;
	if(i < 5)
	{
		i++;
	}
}

function fnMalfunctions()
{
	var intRandom = 0;
	intRandom = Math.floor((Math.random() * 100) + 1);
}









