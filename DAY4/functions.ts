//named function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(3, 4));

//anonymous function
const subtract = function(a: number, b: number): number {
    return a - b;
}
console.log(subtract(5, 2));

//arrow function
const multiply=(a:number, b:number): number=> a*b;
console.log(multiply(3,2));

//parameters function
function greet(sn: string, num: number = 2): string {
    return `Hello, ${sn} ${num}`;
}
console.log(greet("ab"));
console.log(greet("ab", 1));

//return 
function div(n1:number, n2:number): number{
    return n1/n2;
}
console.log(div(4,2));

function voidf(re:string): void{
    console.log(re);
}
voidf("abc");

//rest parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//function overloading
function hello(person: string): string;
function hello(person:string, num: number): string;
function hello(person:string, num?:number): string{
    if(num!= undefined){
        return `${person}, ${num}`;
    }
    return `${person}`;
}
console.log(hello("krishna"));
console.log(hello("krishna",12));

//callback function
function performOperation(a: number, b: number, callback: (result: number) => void): void {
    let result = a + b;
    callback(result);
}
performOperation(3, 4, (result) => {
    console.log(result);
});