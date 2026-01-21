import { useState, useCallback } from "react";

const Component = () => {
    const [count,setCount] = useState(0);

    const handleClick = useCallback ((e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button clicked", e.currentTarget.id);
        setCount (prevCount => prevCount +1);
    }, []);

    const decrement = useCallback (()=>{
        console.log("decrementing:");
        setCount (prevCount => prevCount -1);
    }, []);

    return (
        <div className="box">
            <h2>useCallback</h2>
            <button onClick={handleClick}>
                increment
            </button>
            <button id="my-Button">
            Count: {count}
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>

    )
}

export default Component;