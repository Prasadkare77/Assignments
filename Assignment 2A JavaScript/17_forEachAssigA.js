const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`1. Log the array element with it's index using forEach() with arrow function`);
arrayNumbers.forEach((element, index) => {
    console.log(`Index: ${index}, Element is: ${element}`);
});

console.log(``);
console.log(`2. Find the positive number and log and console`);
const positiveNum = [];
arrayNumbers.forEach((element) => {
    if(element>0){
        positiveNum.push(element);
    }
});
console.log(`Positive Numbers Are: ${positiveNum}`);

console.log(``);
console.log(`3. Find  the negative numbers, add into new array and log new array on console using arrow function`);
const arraynegative = [];
arrayNumbers.forEach((element) => {
    if (element<0) {
        arraynegative.push(element);
    }
})
console.log(`Negative Numbers: ${arraynegative}`);

console.log(``);
console.log(`4. Find the Even number and log on console using forEach() with arrow function`);
const evenNum = [];
arrayNumbers.forEach((element) => {
    if(element%2==0){
        evenNum.push(element);
    }
})
console.log(`Even Number is: ${evenNum}`);

console.log(``);
console.log(`5. Find the sum of all elements from arrayNumbers and log on sum value on console`);
let sum = 0;
arrayNumbers.forEach((elememt) => {
    sum = sum + elememt;
})
console.log(`Sum of all element is: ${sum}`);

console.log(``);
console.log(`6. Log the only even indexed array value on console. forEach() with arrow function prefered.`);
arrayNumbers.forEach((element,index) => {
    if(index%2==0){
        console.log(`Index is ${index}, Element is: ${element}`);
    }
})