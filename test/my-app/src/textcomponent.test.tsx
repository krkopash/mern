import { render, screen } from "@testing-library/react";
import TestComp from "./testcomponent";

// const{ container }= render(<TestComp/>);
// const testElement=container.querySelector('.test');
// expect (testElement).toBeInTheDocument();

test('it should work!', ()=>{
    // render(<div>
    //     <p>hello</p>
    //     <input placeholder="name"/>
    // </div>);
    // expect (screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    render(<TestComp/>);
    expect (screen.getByText(/hello/i)).toBeInTheDocument();
    expect (screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    expect(2+2).toBe(4);
})