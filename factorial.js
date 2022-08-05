function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    fact = fact * i;
  }
  return fact;
}
let result = factorial(10);
console.log(result);
function whileFactorial(num) {
  let i = 1;
  let fact = 1;
  while (i <= num) {
    // console.log(i);
    fact = fact * i;
    i++;
  }
  return fact;
}
let dig = 9;
let result = whileFactorial(dig);
console.log("factorial of ", dig, "is", result);

function whileFactorial(num) {
    let i = num;
    let fact = 1;
    while (i >= 1) {
      console.log(i);
      fact = fact * i;
      i--;
    }
    return fact;
  }
  let dig = 5;
  let result = whileFactorial(dig);
  console.log("factorial of ", dig, "is", result);

function factorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
let result1 = factorial(10);
console.log(result1);

