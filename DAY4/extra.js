var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
greet.description = "A function to greet users";
console.log(greet("Alice"));
console.log(greet.description);
console.log("Number Properties in TypeScript:");
console.log("Maximum value of a number variable has :"
    + Number.MAX_VALUE);
console.log("The least value of a number variable has:"
    + Number.MIN_VALUE);
console.log("Value of Negative Infinity:"
    + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:"
    + Number.POSITIVE_INFINITY);
