import React from "react";

const Test=() =>{
    return(
        <div data-testid="test-element">
            <p className="testCom">test</p>
            <h3>submit button</h3>
            <label htmlFor="username">username</label>
            <input id="username" placeholder="name" value="nameuser"/>
            <button name="submit">submit</button>
            <img src="" alt="image"/>
            <p>username</p>
            <span title="content">new</span>
        </div>
    )
}
export default Test;