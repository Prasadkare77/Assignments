
function primeNo(...arrayNum){
    console.log(`Array is: ${arrayNum}`);
    const arrayPrime = [];
    for(let i=0; i<arrayNum.length; i++){
        if(arrayNum[i]%2 != 0 || arrayNum[i]==2){
            arrayPrime.push(arrayNum[i]);
        }
    }
    console.log(`Prime number array : ${arrayPrime}`);
}
primeNo(2,19,123,34,56,78,100);

