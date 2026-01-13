const numbers = [45, 4, 9, 16, 25];

// foreach
let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txt += value + " + " ;
}
console.log(txt); //45 + 4 + 9 + 16 + 25 +

//map
const numbers2 = numbers.map(myFunction);
function myFunction(value) {
  return value * 2;
}
console.log(numbers2); //[ 90, 8, 18, 32, 50 ]

//filter
const over18 = numbers.filter(myFunction);
function myFunction(value) {
  return value > 18;
}
console.log(over18); // [ 45, 25 ]

//reduce
let sum = numbers.reduce(myFunction, 100); 
//let sum = numbers.reduceRight(myFunction, 100);   ---for reduceRight
function myFunction(total, value) {
  return total + value;
}
console.log(sum); //199 --- if not write 100(initial value) in letsum....then output 99

//every --- check for all element and return final single result for all
let allOver18 = numbers.every(myFunction);
function myFunction(value) {
  return value > 18;
}

//some ---- check for some elements
let someOver18 = numbers.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}

//from
let text = "ABCDEFG";
console.log(Array.from(text));
const myNumbers = [1,2,3,4];
const myArr = Array.from(myNumbers, (x) => x * 2); //same as foreach
console.log(myArr);

//with
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

//Array Spread
const n=[1,2,3];
const result=[...numbers,...n];
console.log(result);

//rest operator
let a, b, rest;
const arr1 = [1,2,3,4,5,6,7,8];
[a, b, ...rest] = arr1;
console.log(a);