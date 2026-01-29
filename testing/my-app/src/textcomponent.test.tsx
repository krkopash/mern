import { render, screen } from "@testing-library/react";
import TestComp from "./testcomponent";
import userEvent from "@testing-library/user-event";


test('it should work!!!!!!!!!', ()=>{
    render(<TestComp/>);
    expect (screen.getByText(/hello/i)).toBeInTheDocument();
    expect (screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    expect(2+2).toBe(4);

    const heading=screen.getByRole('heading', {name:/hello/i,level:4});
    expect(heading).toBeInTheDocument();

    const input=screen.getByLabelText(/username/i);
    expect(input).toBeInTheDocument();

    expect(screen.getByDisplayValue(/name/i)).toBeInTheDocument();

    //user event example
    const newb=screen.getByRole('button', {name: /submit/i});
    userEvent.click(newb);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
    
    
    screen.debug();
});