// sum of all odd numbers
let myNumbers = [5, 32, 66, 43, 5, 32, 12, 19];
let oddNums = [];
for (let i = 0; i < myNumbers.length; i++) {
  allNums = myNumbers[i];
  if (allNums % 2 != 0) {
    // oddNums.push(allNums);
    oddNums.push(allNums);
  }
}
// console.log(oddNums);
let sum = 0;
for (let i = 0; i < oddNums.length; i++) {
  const element = oddNums[i];
  console.log(element);
  sum = sum + element;
}
console.log("Total is =", sum);
for(let i = 5; i<10 ; i=i+2){
console.log(i);
};
