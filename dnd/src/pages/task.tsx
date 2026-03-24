import { useState } from "react"
import Time from "./time"
const Task: React.FC = () => {
 const [time,setTime]=useState();
 
 const handleTime=()=>{
  
 }
  return (
      <div>
        <p>task</p>
        <button onClick={handleTime}>add</button>
        <form>
                                             
          <label>enter title:</label>
          <input type="text" placeholder="enter title:"/><br/><br/>
          <label>enter task:</label>
          <input type="text" placeholder="task..."/><br/><br/>
          <button>submit</button>
        </form>
      </div>
  )
} 

export default Task