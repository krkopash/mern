import useGlobalEvent from "beautiful-react-hooks/useGlobalEvent"
import * as React from "react";

const {useState}=React;

 const Resize=()=>{
    const [windowwidth, setWindowwidth]=useState(window.innerWidth);
    const onWindowResize=useGlobalEvent("resize");    

    onWindowResize((event:React.SyntheticEvent)=>{
        setWindowwidth(window.innerWidth);
    })
    return(
        <div>
            <p>{windowwidth}</p>
        </div>
    )

    }
    export default Resize;