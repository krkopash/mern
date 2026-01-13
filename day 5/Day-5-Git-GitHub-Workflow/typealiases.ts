type type_aliases=string | number | boolean;

let variable: type_aliases;
variable = 7;
console.log(variable);
variable = "mern";
console.log(variable);

//for function
type type_fun=string | number;
let ans: string;
function display(id: type_fun){
    if(typeof id == typeof ans){
        return id;
    }
    return  `${id.toString()}`;
}
console.log(display("abc"));
console.log(6);