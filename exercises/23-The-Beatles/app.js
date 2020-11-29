function sing (){
    let i = 0;
    let letra= "";
    //let song = [];
    let letItbe = "let it be";
    let words = "words of wisdom";
    let thereWillBe = "there will be an answer";
    let comma = ", ";
        
        for (i = 1; i <= 23; i++){
        
            if (i % 2 == 0) {
                letra += comma; 

            } else if (i == 9) {
                
                letra += words;

            } else if (i == 21) {
                
                letra += thereWillBe;
            }
            else {letra += letItbe};

            //song.push(letra);
            }
            return letra;
}

//Your code above ^^^

console.log(sing());