import { useState } from "react";

//1
type formData = {
  name: string;
  email: string;
  age: number;
};

const handledSubmit = (data: formData): void => {
  console.log(data.name);
};


//2
type newProp={
  data: FormData;
  next: ()=>void;
}

//3
const [users, setUsers]=useState<User[]>([]);


