function getColor(selection)
{
	switch(selection){
        case "red":
            return true; 
            break;
        case "green":
            return true;
            break;
        case "blue":
            return true;
            break;
	    default:
	    	return false;
	    break;               
	}
}
var colorname = window.prompt('What color do you want?').toLowerCase();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
