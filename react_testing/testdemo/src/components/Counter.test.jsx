import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';


test("Snapshot test",()=>{
   expect(render(<Counter/>)).toMatchSnapshot();
})

beforeEach(() =>{
    render(<Counter/>);
})
 test('initial value of counter should be 0',() =>{

    // render(<Counter/>);
    // const counterEl = screen.getByText(0);
    const counterEl = screen.getByTestId('cnt');
    expect(counterEl).toBeInTheDocument();

})

// fireevent

test('on click,it should be increment by 1',() => {
    // render(<Counter/>);
    const btnEl = screen.getByTestId('btn');
    const counterEl = screen.getByTestId('cnt');
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("1");
})

// userEvent 


test('on click it should be 1',() =>{
    // render(<Counter/>);
    const btnEl = screen.getByTestId('btn');
    const counterEl = screen.getByTestId('cnt');
    expect(counterEl.textContent).toBe('0');
    userEvent.click(btnEl);
    expect(counterEl.textContent).toBe('1');
})


// not toBeNull


test('Initial value of counter should be 0',() =>{
    // render(<Counter/>);
    const counterEl = screen.getByTestId('cnt');
    expect(counterEl).toBeInTheDocument();
    expect(counterEl).not.toBeNull();
})


// toBe

test('on click it should be 1',() =>{
    // render(<Counter/>);
    const btnEl = screen.getByTestId('btn');
    const counterEl = screen.getByTestId('cnt');
    expect(counterEl.textContent).toBe('0');
    fireEvent.click(btnEl);
    fireEvent.click(btnEl);
    fireEvent.click(btnEl);
    // expect(counterEl.textContent).not.toBe('2');
    //  expect(counterEl.textContent).toBe('2');
})


test('input should have 10 as initial value',() =>{
    // render(<Counter/>);
    const inputEl = screen.getByTestId('input');
    expect(inputEl.value).toBe('10');
})


test('entering the value in the input works',() =>{
    // render(<Counter/>);
    const inputEl = screen.getByTestId('input');
    fireEvent.change(inputEl,{
        target:{
            value:20
        }
    })
    expect(inputEl.value).toBe('20');
})