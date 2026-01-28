import { useState, useEffect } from "react";
import TypeData from "./type";

//1
const handleEvent=(data:any) =>{
    console.log(data.name);
}

//2
type Props={
    data: TypeData;
};

//3
export const MyComponent = () => {
  const [users, setUsers]=useState([]);
  const[error,setError]=useState(null);


//4-safe api handling
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();
setUsers(data);

}