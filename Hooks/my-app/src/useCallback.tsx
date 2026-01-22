import { useState, useCallback } from "react";

const Component = () => {
    const [count,setCount] = useState(0);

    const increment = useCallback ((e: React.MouseEvent<HTMLButtonElement>) => {
        setCount (prevCount => prevCount +1);
    }, []);

    const decrement = useCallback (()=>{
        setCount (prevCount => prevCount -1);
    }, []);

    return (
        <div className="card">
            <div className="box">
            <h2>useCallback</h2>
            <button onClick={increment}>
                increment
            </button>
            <button id="my-Button">
            Count: {count}
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>

        </div>

    )
}

export default Component;