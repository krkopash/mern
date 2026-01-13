function add(num1, num2) {
    return num1 + num2;
}
function sub(s1, s2) {
    return s1 - s2;
}
function mul(m1, m2) {
    return m1 * m2;
}
function hi(name) {
    var n = (name ? ", ".concat(name, ".") : '.');
    return 'hello' + n;
}
var a = function (n) {
    return n;
};
console.log(add(3, 4));
console.log(sub(10, 5));
console.log(mul(3, 6));
console.log(hi("krishna"));
console.log(a("abc"));
var nn = 12;
console.log(nn.toString(2));
