import { createSlice } from '@reduxjs/toolkit';
const testSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 10
    },
    reducers: {
        balanceChange: (state,action) =>{
            state.value = action.payload;
        },
        incrementBalance: (state) =>{
            state.value += 1;
        },
        action1: (state) =>{
            state.value = 1000;
        }
    },

});

export const {balanceChange,incrementBalance,action1} = testSlice.actions;
export default testSlice.reducer;
