function noReturn(){
 console.log("This function doesn't have any argument and no return value.");
}
noReturn();

console.log("");

console.log("Personal Details");
var firstName = "Prasad";
var lastName = "Kare.";
var collegeName = "Sinhgad Institute of Technology.";
function personalDetails(firstName,lastName,collegeName){
    console.log("My Name Is: ", firstName + " " + lastName);
    console.log("My College Name: ", collegeName);

}
personalDetails(firstName,lastName,collegeName);

console.log("");

console.log("Swapping Values");
var hubby = "Virat";
var wife = "Anushka";
var value1 = 1000;
var value2 = 2000;
function swapValueDude(valueOne,valueTwo){
    console.log("Before Swap Value One:",valueOne, ", Value Two: ",valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After Swap Value One:",valueOne, ", Value Two:",valueTwo);
}
swapValueDude(hubby,wife);
swapValueDude(value1,value2);

console.log("");

console.log("Adding Values");
var num1 = 10.23;
var num2 = 600;
var num3 = 40;
var value1 = "Hello";
var value2 = "Good";
var value3 = "Morning";
function addThreeValues(valueOne,valueTwo,valueThree){
    console.log("Values:",valueOne,",",valueTwo,",",valueThree);
    var sum = valueOne + valueTwo + valueThree;
    console.log("Addition of Values: ", sum);
}
addThreeValues(num1,num2,num3);
addThreeValues(value1,value2,value3);