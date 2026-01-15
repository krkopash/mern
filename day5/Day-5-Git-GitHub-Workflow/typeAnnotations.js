//basic program
var myString;
myString = 'Hello from ts';
console.log(myString);
//variables
var n = "krishna";
console.log(n);
var city;
console.log(city);
var c = "abc";
console.log(c);
//fun with type annotations
function info(name) {
    return "".concat(name);
}
console.log(info("krishna"));
//object with type annotation
var per = {
    name: "krishna",
    age: 21,
};
console.log(per);
//array with
var n = [1, 2, 3, 4, 5];
console.log(n);
//class
var In = /** @class */ (function () {
    function In(sn, num) {
        this.sn = sn;
        this.num = num;
    }
    return In;
}());
var student = new In("krishna", 51);
console.log(student);
//Type assertions
var ass = "good morning";
var len = ass.length;
console.log(len);
//with function
function get() {
    return "hello";
}
var res = get().length;
console.log(res);
