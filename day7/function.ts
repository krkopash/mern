function add(num1:number, num2:number):number{
    return num1+num2;
}

function sub(s1:number, s2:number):number{
    return s1-s2;
}

function mul(m1:number, m2:number):number{
    return m1*m2;
}

function  hi(name?: string):string{
     const n = (name ? `, ${name}.` : '.');
    return 'hello' +n;
}

let a=(n:string):string =>{
    return n;
}

console.log(add(3,4));
console.log(sub(10,5));
console.log(mul(3,6));
console.log(hi("krishna"));
console.log(a("abc"));

let nn=12;
console.log(nn.toString(2));

