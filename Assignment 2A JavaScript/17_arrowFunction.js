
console.log(`Arrow function with no arguments and no return value`);
let display = () => {
    console.log(`Display Function`);
}
display();

console.log(`Arrow function with arguments and no return value`);
let show = (id, name) => {
    console.log(`ID: ${id}, Name: ${name}`);
    console.log(`Inside show function...`);
}
show(22,"BIll");

console.log(`Arrow function with arguments and return value`);
let add = (num1, num2) => {
    let result = num1 + num2;
    return console.log(`Result is: ${result}`);
    
}
add(100,200);
