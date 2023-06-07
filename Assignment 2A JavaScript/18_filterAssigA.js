const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Array Is: ${arrayNumbers}`);

console.log(``);
console.log(`1. Find out all the numbers which are greater than 50 and log on console`);
const greaterthan50 = arrayNumbers.filter((element) => {
    return element > 50;
}).map((element) => {
    return element;
})
console.log(`${greaterthan50}`);

console.log(``);
console.log(`2. Find out all the even number and log on console`);
const allEven = arrayNumbers.filter((element) => {
    return element % 2 == 0;
}).map((element) => {
    return element;
})
console.log(`${allEven}`);

console.log(``);
console.log(`3. Find out all the odd numbers and log on console.`);
const allOdd = arrayNumbers.filter((element) => {
    return element % 2 != 0;
}).map((element) => {
    return element;
})
console.log(`${allOdd}`);

console.log(``);
console.log(`4. Find out all the numbers which are multiple of 5`);
const multipleOfFive = arrayNumbers.filter((element) => {
    return element % 5 == 0;
}).map((element) => {
    return element;
})
console.log(`${multipleOfFive}`);

console.log(``);
console.log(`5. Find out all the number which are between 20 and 50`);
const between = arrayNumbers.filter((element) => {
    return element > 20 && element < 50;
}).map((element) => {
    return element;
})
console.log(`${between}`);