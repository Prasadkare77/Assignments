function countCharA(string) {
    console.log(`String is: ${string}`);
    var countOfa = 0;
    var countOfA = 0;
    for(let i=0; i<=string.length; i++){
        var char = string.charAt(i);
        if(char == 'a'){
            countOfa++
        } 
        if(char == 'A'){
            countOfA++
        }
    }
    console.log(`Toatal count of "a" is: ${countOfa}`);    
    console.log(`Toatal count of "A" is: ${countOfA}`);  
    return console.log(`Count of total charater "a" or "A" is: ${countOfa + countOfA}`);
    
}
countCharA("I Am Learnig JavaScript, The language of internet");
console.log(``);
countCharA("My favourite movie is LAggAn");