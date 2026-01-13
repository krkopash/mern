//named function
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
//anonymous function
var subtract = function (a, b) {
    return a - b;
};
console.log(subtract(5, 2));
//arrow function
var multiply = function (a, b) { return a * b; };
console.log(multiply(3, 2));
//parameters function
function greet(sn, num) {
    if (num === void 0) { num = 2; }
    return "Hello, ".concat(sn, " ").concat(num);
}
console.log(greet("ab"));
console.log(greet("ab", 1));
//return 
function div(n1, n2) {
    return n1 / n2;
}
console.log(div(4, 2));
function voidf(re) {
    console.log(re);
}
voidf("abc");
//rest parameter
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(1, 2, 3, 4, 5));
function hello(person, num) {
    if (num != undefined) {
        return "".concat(person, ", ").concat(num);
    }
    return "".concat(person);
}
console.log(hello("krishna"));
console.log(hello("krishna", 12));
//callback function
function performOperation(a, b, callback) {
    var result = a + b;
    callback(result);
}
performOperation(3, 4, function (result) {
    console.log(result);
});
