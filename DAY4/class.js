var person = /** @class */ (function () {
    function person(name, num) {
        this.name = name;
        this.num = num;
    }
    person.prototype.introduce = function () {
        return "".concat(this.name, " and ").concat(this.num);
    };
    return person;
}());
var p1 = new person("abc", 2);
console.log(p1);
//Managing a Bank Account
var bankac = /** @class */ (function () {
    function bankac(acname, initbal) {
        this.acname = acname;
        this.balance = initbal;
    }
    bankac.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    bankac.prototype.getbalance = function () {
        return "bank account holder name:".concat(this.acname, " and balance:").concat(this.balance);
    };
    return bankac;
}());
var account = new bankac("client", 20000);
account.deposit(200);
console.log(account.getbalance());
//rectangle
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 5);
console.log("area of rect: ".concat(rect.calculateArea()));
