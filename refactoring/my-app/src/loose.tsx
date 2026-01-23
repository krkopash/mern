import { useState } from "react";
//1
const handleSubmit = (data:any)=>{
    console.log("data.name");
}


//2
type Props = {
    data: FormData;
}

//3
const [users, setUsers]=useState([]);

