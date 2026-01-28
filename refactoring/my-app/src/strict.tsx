import { useState } from "react";
import TypeData from "./type";

//1
type DataForm={
    name: string;
    id: number;
};
const handleEvent=(data:DataForm): void=>{
    console.log(data.name);
}

//2
type Props={
    data:TypeData;
    next: ()=>void;
}

//3
const [users, setUsers] = useState<TypeData[]>([]);
const[error,setError]=useState<null|string>(null);

//api handling
const res=await fetch('https://jsonplaceholder.typicode.com/users');
if(!res.ok){
    throw new Error("fail");
}
// const datas:user=await res.json();
// setUsers(datas);

let name;
name=4;

//strictNullChecks
var usernames:string; 
const userlist=[
    {name:"a", id:1},
    {name:"b", id:2},
];
const username=users.find((u)=>u.name===usernames);
console.log(username.id);

//noUnusedParameters
const defaultFun=(para1:number)=>{
    const para2=4;
    console.log(para2);
}
console.log(defaultFun(1));

//noUnusedLocals
const unusedLocal=(local1:number)=> {
    const local2:number=5;
    console.log(local1);
}

//noFallthroughCasesInSwitch
const a:number=4;
switch(a){
    case 0:
        console.log("even");
    case 1:
        console.log("odd");
        break;
}


//useUnknownInCatchVariables
function f1(n:number){
    if(n>5){
        return true;
    }else{
        return false;
    }
    return true;
}
console.log(f1(2));

//allowUnusedLabels
function label(num:number){
    if(num>5){
        newnum: false;
    }
}
console.log(label(2));

//noImplicitAny
function fn( s ) {
  console.log(s.subtr(3));
}
fn(42);

//strictBindCallApply
function strictBind(x:string){
    return parseInt(x);
}
const n1=strictBind.call(undefined,"10");
const n2=strictBind.call(undefined, true);
console.log(n1+n2);

//strictFunctionTypes
function fnc(x:number){
    console.log("hello");
}
type stringnum=(ns:string | number)=>void;
let func:stringnum=fnc;
console.log(func);

//strictPropertyInitialization
class UserInfo{
    name: string;
    AccTpye: "user";
    email: string;

    constructor(name: string){
        this.name=name;
    }
}
console.log(UserInfo);

//downlevelIteration 
const str="hello";
for(const s of str){
    console.log(s);
}