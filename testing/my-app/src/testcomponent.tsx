import { useState, useCallback } from "react";

const TestComp = () => {

  return (
    <div>
        <h4 className="test">hello</h4>
        <label htmlFor="username">username</label>
        <input placeholder="enter name" id="username" value="name" readOnly/>
        <button > submit</button>

        
    </div>
  );
};



export default TestComp;
