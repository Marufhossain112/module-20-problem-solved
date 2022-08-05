const yearList = [2023, 2024, 2025, 2028, 2030];
function findLeapYear(years) {
  let newArray = [];
  for (i = 0; i < years.length; i++) {
    // console.log(years[i]);
    eachYear = years[i];
    if (eachYear % 4 === 0) {
      newArray.push(eachYear);
    }
  }
  console.log(newArray);
}
findLeapYear(yearList);
let result = findLeapYear(yearList);
console.log(result);

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else return false;
}
let nextYear = 2022;
let result = isLeapYear(nextYear);
console.log(result);

function ageEvenOrOdd(age) {
  if (age % 2 === 1) {
    return false;
  } else return true;
}
let myAge = 24;
let result = ageEvenOrOdd(myAge);
console.log(result);

function hourToSeconds(hour) {
  let min = hour * 60;
  let sec = min * 60;
  return sec;
}
let result = hourToSeconds(4);
console.log(result);
