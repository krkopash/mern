import Test from "./test";
import { prettyDOM, render, screen } from "@testing-library/react";


//getByText
test('it should work!!', ()=>{
    render(<Test/>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
})

//only and skip
// test.only('only this', ()=>{
//     expect(true).toBe(true);
// });
// test.skip('skip this', ()=>{
//     expect(false).toBe(false);
// });

//custom assertion
expect.extend({
    toBeEven(received){
        const pass= received%2===0;
        return{  
            message: ()=>`${received} is even`,
            pass,
        };
    },
    toBeOdd(received){
        const pass=received%2 !=0;
        return{
            message:() =>`${received} is odd`,
            pass,
        };
    },
});
expect(4);

//getbyrole
test('work!',()=>{
        render(<Test/>)
        const newbutton=screen.getByRole('button', {name:/submit/i});
        expect(newbutton).toBeInTheDocument();
        //option
        expect(screen.getByRole('heading',{name:/submit button/i, level:3})).toBeInTheDocument();

        //getbylabel
        expect(screen.getByLabelText('username')).toBeInTheDocument();
        //expect(screen.getByLabelText(/username/i)).toBeInTheDocument();

        //getbyplaceholder
        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();

        //geybydisplayvalue
        expect(screen.getByDisplayValue(/nameuser/i)).toBeInTheDocument();

        //getbyalttext
        expect(screen.getByAltText(/ge/i)).toBeInTheDocument();
        //getallbytest-multiple
        expect(screen.getAllByText(/name/i)).toHaveLength(2);
        //getbytitle
        expect(screen.getByTitle(/content/i)).toBeInTheDocument();

        //getbhtestid
        expect(screen.getByTestId(/test-element/i)).toBeInTheDocument();

        expect(screen.queryByText(/hello/i)).toBeNull();
        

        const {container}=render(<Test/>);
        //prettydom
        console.log(prettyDOM(container));

        //mock-unit testing
        const mock=jest.fn();
        mock.mockReturnValue('mocked value');
        expect(mock().toBeInTheDocument);


});
