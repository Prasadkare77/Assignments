function fibbonaci (num){
    let num1 = 0;
    let num2 =1;
    let sum;
    let fibb = " ";
    console.log(`Fibonacci Series.....`);
    let first = num1;
    let second = num2;
    for(let i=0; i<num; i++){
        sum = num1 + num2;
        num1 = num2; 
        num2 = sum;
        fibb = fibb + sum + " "; 
    }
    console.log(`${first} ${second} ${fibb}`);
}
fibbonaci(8);