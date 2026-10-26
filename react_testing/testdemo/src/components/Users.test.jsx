import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import Users from './Users';
// test('checking the data retrival in the list item',async() =>{
//     render(<Users/>);
//     const listEl = await screen.findAllByRole('listitem');
//     expect(listEl).not.toHaveLength(0);

// })


test('checking the data retrival in the list item',async() =>{
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async() =>{
             return[{email:'abc@test.com',username:'abctest'}];
        }
    })
    render(<Users/>);
    const listEl = await screen.findAllByRole('listitem');
    expect(listEl).not.toHaveLength(0);

})