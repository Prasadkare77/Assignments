console.log(`1. Count the total no of vowels including small and capital vowels. `);

console.log(``);

function vowels (string){
    var count = 0;
    console.log(`String is: ${string}`);
    for (let i=0; i<string.length;i++){
        var char = string.charAt(i);
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
            char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
            console.log(`Vowels is:${char}`);
            count++;
        }
    }
    console.log(`Total Count of Vowels is: ${count}`);
}
vowels("I am very good IT Developer");

console.log(``);

console.log(`2. Write a function to get the sum of cube of number from 1 to 5.`);
function sumOfCube() {
    console.log(`Number is:`);
    var sum = 0;
    for ( let i=1; i<=5; i++){
        var cube = i*i*i;
        console.log(`Cube of ${i}: ${cube}`);
        sum = sum + cube;
    }
    console.log(`Sum of cube of numbers from 1 to 5: ${sum}`);
}
sumOfCube();

console.log(``);

console.log(`3. Odd position characters from given string`);
function oddPositionedChars(string) {
    console.log(`String is: "${string}"`);
    for (let i=0; i<string.length; i++){
        if(i%2 != 0 && string.charAt(i)!= ' '){
            console.log(`Odd Position: ${i}, Charater is: ${string.charAt(i)}`);
        }
    }
    console.log(``);
}
oddPositionedChars("Hard work alwyas pays back");
oddPositionedChars("Soon i will be Angular IT Champ");
