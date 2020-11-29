// Your code here:
    var bottles = 0;

    for (bottles = 99; bottles > 0; bottles--) {
//console.log(bottles);
        var decreaseBottles = bottles-1;
        var end = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";

        if (bottles > 1) {
            console.log(bottles + " bottles of milk on the wall," + bottles + " bottles of milk. Take one down and pass it around," + decreaseBottles + " bottles of milk on the wall.");
        }  else if (bottles == 1) {
            console.log (bottles + " bottle of milk on the wall," + bottles + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. " + end)
        }; 
    }
    //console.log (end);
