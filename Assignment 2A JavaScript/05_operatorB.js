
console.log(`1. Find the Greatest Number Amongst Two Number.`);
var greaterNumber = function (num1,num2) {
    console.log(`Two numbers are: ${num1},${num2}`);
    var result = num1 >= num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log(`${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(``);

console.log(`2. Check -> 29, 44, 0, 101 -> even or odd numbers.`);
var isEvenOrOddNum = function(num1) {
    var result = num1 % 2 == 0;
    var evenOrOdd = result== true ? `${num1} is Even` : `${num1} is Odd`;
    return evenOrOdd;
}
var result = isEvenOrOddNum(29);
console.log(result);
var result = isEvenOrOddNum(44);
console.log(result);
var result = isEvenOrOddNum(0);
console.log(result);
var result = isEvenOrOddNum(101);
console.log(result);

console.log(``);

console.log(`3. Check ->Which word has even or odd length "JavaScript","Developer","Google".`);
var wordLength = function(string) {
    console.log(`Word: ${string}, Length: ${string.length}`);
    var evenOrOdd = string.length % 2 == 0  ? `${string} is Even String` : `${string} is Odd String`;
    return console.log(`${evenOrOdd}`);
}
wordLength("JavaScript");
console.log(``);
wordLength("Developer");
console.log(``);
wordLength("Google");