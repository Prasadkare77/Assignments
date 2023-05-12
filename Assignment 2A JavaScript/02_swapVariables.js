console.log("<-- Swaping Two Variables -->");
var sweety = "Sweety";
var cutie = "Cutie";
function swapVariable(valueOne,valueTwo){
    console.log("Before Swapping, Sweety:",valueOne, "Cutie:",valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After Swapping, Sweety:",valueOne, "Cutie:",valueTwo);
}
swapVariable(sweety,cutie);

console.log("");

console.log("<-- Swaping Three Number -->");
var num1 =100;
var num2 = 200;
var num3 = 300;
function swapNumbers(num1,num2,num3){
    console.log("Before Swapping, Number1:",num1, "Number2:",num2, "Number3:",num3);
    var temp = num1;
    num1 = num2;
    num2 = num3;
    num3 = temp;
    console.log("After Swapping, Number1:",num1, "Number2:",num2, "Number3:",num3);
}
swapNumbers(num1,num2,num3);