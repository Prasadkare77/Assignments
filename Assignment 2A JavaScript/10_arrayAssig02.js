const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Array Is: ${arrayNumbers}`);
console.log(``);

console.log(`1.Find the total elements available or length and log on console.`);
let totalLength = arrayNumbers.length;
console.log(`Total Element is: ${totalLength}`);
console.log(``);

console.log(`2. Log the first element and last element in Numbers and log on console.`);
let firstElement = arrayNumbers[0];
let lastElement = totalLength-1;
console.log(`First Element is: ${firstElement}`);
console.log(`Last Element is: ${arrayNumbers[lastElement]}`);
console.log(``);

console.log(`3. Log the third last element using length property and log on console.`);
let lastThirdElement = totalLength-3;
console.log(`Last Third Element is: ${arrayNumbers[lastThirdElement]}`);
console.log(``);

console.log(`4. Find the all even numbers using for in loop and log on console.`);
for (const i in arrayNumbers) {
    if (arrayNumbers[i] % 2 == 0) {
        //  var allEvenNum = arrayNumbers[i];
        //  console.log(`Even numbers is: ${allEvenNum}`);
        console.log("All even number is");
    }
}
console.log(``);

console.log(`5. Find all odd numbers for in loop amd log on console.`);
for (const i in arrayNumbers) {
    if(arrayNumbers[i] % 2 != 0){
        var allOddNum = arrayNumbers[i];
        console.log(`Odd Number is: ${allOddNum}`);
    }
}
console.log(``);

console.log(`6. Find all the even positioned elements from arrayNumbers, Sum it and log on console.`);
let evenSum = 0;
for (const i in arrayNumbers) {
    if (i % 2 == 0){
        let evenPositionElement = arrayNumbers[i];
        console.log(`Even Position: ${i}, element is: ${evenPositionElement}`);
        evenSum = evenSum + evenPositionElement;    
    }
}
console.log(`Sum of Even Position Element is: ${evenSum}`);
console.log(``);

console.log(`7. Find all the odd positioned elements from arrayNumbers, Sum it and log on console.`);
let oddSum = 0;
for (const i in arrayNumbers) {
    if (i % 2 != 0){
        let oddPositionElement = arrayNumbers[i];
        console.log(`Even Position: ${i}, element is: ${oddPositionElement}`);
        oddSum = oddSum + oddPositionElement;    
    }
}
console.log(`Sum of Even Position Element is: ${oddSum}`);
console.log(``);

console.log(`8. Find the sum of all elements from arrayNames, log on console.`);
let sumOfAll = 0;
for (const i in arrayNumbers) {
    sumOfAll =sumOfAll + arrayNumbers[i];
}
console.log(`Sum of all element is: ${sumOfAll}`);
console.log(``);

console.log(`9. Find the numbers which are multiple of 5.`);
for (const i in arrayNumbers) {
    if(arrayNumbers[i] % 5 == 0){
        let multipleOfFive = arrayNumbers[i];
        console.log(`Number which are multiple of 5 is: ${multipleOfFive}`);
    }
}
console.log(``);

console.log(`10. Is Number 115 available in arrayNumbers?`);
for(let i=0; i<arrayNumbers.length; i++){
    var isInclude = arrayNumbers.includes(115);
   if(isInclude){
     console.log(`${isInclude}. 115 Available in Array`);
   }
   else{
     console.log(`${isInclude}, 115 Not Available in Array`);
   }
}
console.log(``);

console.log(`11. Is Number 23 available in arrayNumbers?`);
for(let i=0; i<arrayNumbers.length; i++){
    var isInclude = arrayNumbers.includes(23);
   if(isInclude){
     console.log(`${isInclude}, 23 Available in Array`);
   }
   else{
     console.log(`${isInclude}, 23 Not Available in Array`);
   }
}
console.log(``);

console.log(`12. Insert numbers -> 55,66 before index 3 and log array on console. `);
arrayNumbers.splice(3,0,55,66);
console.log(`After insert Array is: ${arrayNumbers}`);
console.log(``);

console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console.`);
arrayNumbers.splice(4,3);
console.log(`After deletion Array is: ${arrayNumbers}`);