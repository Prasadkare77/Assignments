var factorialOfNum = function (num) {
  if (num == 0) {
    return console.log(`Factorial of 0 is: 1`);
  }
  if (num == null || num == undefined || isNaN(num)) {
    return console.log(`Factorial of ${num} : Invalid Input`);
  }

  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    factorial = factorial * i;
  }

  return console.log(`Factorial of ${num} : ${factorial}`);
};
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
