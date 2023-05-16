console.log(`                               1`);
console.log(`1. Write a function in such a way that it should accept one String value as argument`);
function squareOfWordLength(string){
    var stringLength = string.length;
    console.log(`Length of string is: ${stringLength}`);
    var stringLengthSquare = stringLength * stringLength;
    console.log(`String Length Square is: ${stringLengthSquare}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart")

console.log(` `);
console.log(`                               2`);
console.log(`2. Given a String "I am Angular Developer" write a function with no arg and no return value`);
function wordsString(){
    var string = "I am Angular Developer";
    var stringLength = string.length;
    console.log(`String length is: ${stringLength}`);
    var totalWords = string.split(" ");
    console.log(`Total no of words available in string is: ${totalWords.length}`);
    console.log(`Total words are: ${totalWords}`);
    console.log(`String Length (22) / Divided by Total Words (4): ${stringLength/totalWords.length}`);
    console.log(`String Length (22) * Multiply by Total Words (4): ${stringLength*totalWords.length}`);
}
wordsString();