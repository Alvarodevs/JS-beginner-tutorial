
function fizzBuzz() { 
    let i = 0;

	for (i = 1; i <= 100; i++){

        var mult3 = ("Fizz");
        var mult5 = ("Buzz");
        

        if (i % 3 == 0 && i % 5 == 0){
            console.log (mult3 + mult5);
        } else if (i % 5 == 0) {
            console.log (mult5);            
        } else if (i % 3 == 0) {
            console.log (mult3);
        } else console.log (i);
    }
    
}


fizzBuzz();