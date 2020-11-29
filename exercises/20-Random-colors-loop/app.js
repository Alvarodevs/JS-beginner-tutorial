//colours to assiged(depending on random number)
function getColor(colorNumber)
{
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
        
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
    }
}
//var with random generated
function getAllStudentColors() {
    var random = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    return getColor(random);
}
for(var i = 1; i < 11; i++)
	{    
    console.log (i + " " + getAllStudentColors());
    }

