//basic program
var myString;
myString = 'Hello from ts';
console.log(myString);

//variables
var n: string = "krishna";
console.log(n);
var city: string;
console.log(city); 

var c="abc";
console.log(c);

//fun with type annotations
function info(name: string): string{
    return `${name}`;
}
console.log(info("krishna"));

//object with type annotation
var per: {name: string; age: number}={
    name:"krishna",
    age: 21,
}
console.log(per);

//array with
var n: number[]=[1,2,3,4,5];
console.log(n);

//class
class In{
    sn: string;
    num:number;

    constructor(sn:string, num:number){
        this.sn=sn;
        this.num=num;
    }
}
const student=new In("krishna", 51);
    console.log(student);



    
//------Type assertions------
let ass:any="good morning";
let len:number=(ass as string).length;
console.log(len);

//with function
function get(): any{
    return `hello`;
}
let res:number=(get() as string).length;
console.log(res)

