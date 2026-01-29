//Test drive dev
import { render, screen } from "@testing-library/react";

import Greeting from "./tdd";
describe('new',()=>{
    test('greeting', ()=>{
        const name='hello';
        render(<Greeting name={name}/>);
        expect(screen.getByText(`${name}`)).toBeInTheDocument();
});

});