class person{
    name:string;
    num:number

    constructor (name:string, num:number){
        this.name=name;
        this.num=num;
    }
    introduce(): string{
        return `${this.name} and ${this.num}`;
    }
}
const p1=new person("abc",2);
console.log(p1);

//Managing a Bank Account
class bankac{
    acname:string;
    balance:number

    constructor (acname: string, initbal:number){
        this.acname=acname;
        this.balance=initbal;
    }
    deposit(amount: number):void{
        this.balance=this.balance+amount;
    }
    getbalance():string{
        return `bank account holder name:${this.acname} and balance:${this.balance}`
    }
}
const account=new bankac("client",20000);
account.deposit(200);
console.log(account.getbalance());

//rectangle
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}
const rect = new Rectangle(10, 5);
console.log(`area of rect: ${rect.calculateArea()}`);