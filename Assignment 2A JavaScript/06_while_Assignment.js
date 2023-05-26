console.log(`1. Write a program from 5 to 15 by increamenting 1.`);
let i = 5;
while (i<=15) {
    console.log(`${i}`);
    i++;
}
console.log(``);

console.log(`2. Write a program to print numbers from 50 to 40 by decreamenting by 1`);
let j = 50;
while (j>=40) {
    console.log(j);
    j--;
}
console.log(``);

console.log(`3. Write a program find first 15 odd numbers.`);
let k = 0;
let oddCount = 0;
while(oddCount<15){
    if(k%2 != 0){
        console.log(k);
        oddCount++;
    }
    k++;
}
console.log(``);

console.log(`4. Write a program to find first 10 even numbers.`);
let l = 0;
let evenCount = 0;
while(evenCount<10){
    if(l%2 == 0){
        console.log(l);
        evenCount++;
    }
    l++;
}
console.log(``);

console.log(`5.Write a program to print table of 5 like -> 5 10 15 ... 50.`);
let m = 5;
while(m<=50){
    console.log(m);
    m = m + 5;    
}
console.log(``);

console.log(`6. Write a program to print table of 10 like 10 20 30  ... 100.`);
let n = 10;
while(n<=100){
    console.log(n);
    n = n + 10;    
}
console.log(``);

console.log(`7.Write a program to print table of 10 in reverse order like -> 100 90 80 ... 10`);
let o = 100;
while(o >= 10){
    console.log(o);
    o = o -10;
}