
var isAssignmentDone = true;
var result = isAssignmentDone ? "You will get job" : "You will not get job";
console.log(`${result}`);

var prasadSSC = 74.80;
var prasadHSC = 58.69;
var result = prasadSSC >= 55 && prasadHSC >=60 ? "Allowed for interviev" : "Sorry, Not allowed";
console.log(`${result}`);

var prasadAge = 25;
var result = prasadAge >= 18 ? "Yor are eligible for vote" : "Sorry, Your not eligible";
console.log(`${result}`);
var candidateName = "Prasad";
var age = 25;
var gender = "Male";
var result = age >= 21 && gender == "Male" ? "You are eligible" : "You are not eligible";
console.log(`${result}`);
var result = (age >= 21 && gender == "Male") || (age >= 18 && gender == "Female")  ? "You are eligible" : "You are not eligible";
console.log(`${result}`);

var num1 = 13;
var result = num1%2 == 0 ? "Even number" : "Odd number";
console.log(`${result}`);