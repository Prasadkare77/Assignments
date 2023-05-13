
console.log("1. Write a function Expression to get square of the number Ex -> 5,6,25,100.");
var squareOfNumbers = function (num1){
    var squareOfNum1 = num1*num1;
    return `Square of ${num1} is:-->${squareOfNum1}`;
}
var result = squareOfNumbers(5);
console.log(result);
var result = squareOfNumbers(6);
console.log(result);
var result = squareOfNumbers(15);
console.log(result);
var result = squareOfNumbers(100);
console.log(result);
console.log("");
console.log("2. Check and log type of function");
console.log(`Type of variable is: ${typeof squareOfNumbers}`);

console.log("");

console.log("3. Write a FE to get the area of rectangle plot [length = 499 and width = 917] ");
var areaOfRect = function (length,width){
    var result = length * width;
    return `Area of Rectangle plot is: ${result}`;
}
var result = areaOfRect(499,917);
console.log(result);

console.log("");

console.log("4. Write a FE with two arg and should swap the passed values and log on console");
console.log("before swap and after swap values inside function itself.");
var swapValues = function (var1,var2){
    console.log(`Before swap valueOne: ${var1}, ValueTwo: ${var2}`);
    var temp = var1;
    var1 = var2;
    var2 = temp;
    console.log(`After swap valueOne: ${var1}, ValueTwo: ${var2}`);
}
var result = swapValues("Virat", "Anushka");
console.log("");
var result = swapValues(1000,2000);

console.log("");

console.log(`5. Write a FE can perform steps for String "JS the most popular language of internet."`);
var strigOper = function(){
    var string = "JS is the most popular language of internet";

    console.log("A. Find the total charcter available in the string.");
    var totalChar = string.split("");
    console.log(`Total characters in string: ${totalChar.length}`);

    console.log("");

    console.log("B. Find the character at index 6.");
    var charAtIndex = string.charAt(6);
    console.log(`Character at index 6 is: ${charAtIndex}`);

    console.log("");

    console.log("C. Find the charcter at index 11.");
    var charAtIndex = string.charAt(11);
    console.log(`Character at index 11 is: ${charAtIndex}`);

    console.log("");

    console.log("D. Find the last character using length property.");
    var charAtLast = string.charAt(string.length-1);
    console.log(`Last character is: ${charAtLast}`);

    console.log("");

    console.log("E. Find the very first character from the given string.");
    var veryFirstChar = string.charAt(0);
    console.log(`Very First character is: ${veryFirstChar}`);

    console.log("");

    console.log("F. Find the total number words of the given string and then calculate the swuare of it and log it.");
    var totalWords = string.split(" ");
    console.log(`Total no of word in string is: ${totalWords.length}`);
    var result = squareOfNumbers(8);
    console.log(result);
}
var result = strigOper();

