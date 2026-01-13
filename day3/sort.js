const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [1,4,51,25,34];

// with altering the original array
console.log(fruits.sort());
console.log(fruits.reverse());

// without altering the original array
console.log(fruits.toSorted());
console.log(fruits.toReversed());

numbers.sort(function(a,b){return a-b});
console.log(numbers);
// array descending
numbers.sort(function(a,b){return b-a});
console.log(numbers);
numbers.sort(function(){return 0.5 - Math.random()});
console.log(numbers);

// Fisher Yates Method
const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.group(points);