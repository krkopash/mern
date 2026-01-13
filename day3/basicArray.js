// sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

// foreach
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txt += value + "<br>";
}
console.log(txt);

// ReduceRight
const n = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);

//
const a2=[1,2,3,4];
console.log(a2.toString());

const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; 
console.log(fruits);

const person = [];
person["firstName"] = "John";
person["age"] = 46;
person["lastName"] = "Doe";
console.log(person.length);     
console.log(person[0]);         
console.log(person);


console.log(fruits.at(2));

a4.unshift("Lemon");
console.log(fruits);

delete fruits[0];
console.log(fruits);

const a6 = ["Emil", "Tobias", "Linus"];
const myChildren = a6.concat("Peter"); 
console.log(myChildren);

const a7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(a7.copyWithin(2, 0));

const a8 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(a8.copyWithin(2, 0, 2));

//flat
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//flatmap
const arr = [1, 2, 3];
// map would give [[1, 10], [2, 20], [3, 30]] (nested)
const flatArr = arr.flatMap(x => [x, x * 2]);
console.log(flatArr);

//findlast (largest element)
const temp = [27, 28, 30, 40, 42, 45, 30];
let high = temp.findLast(x => x > 40);
console.log(high);