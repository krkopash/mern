import { useState, useMemo } from "react";

function Usememo (){
    const [count, setCount] = useState(0);
    const doubleCount = useMemo (()=>{
        console.log("double");
        return count * 2;
    }, [count]);

    return (
        <div className="box"><br/>
            <h2>useMemo</h2>
            <h4> count: {count}</h4>
            <h4>double count: {doubleCount}</h4>
            <button onClick={()=>{
                setCount (count+1);
            }}>Click</button><br/><br/>
            <button onClick={()=>{
                setCount (0);
            }}> Reset
            </button><br/><br/>

        </div>
    )
}

export default Usememo;