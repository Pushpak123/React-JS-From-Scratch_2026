import {createSlice} from '@reduxjs/toolkit';
const jsonSlice = createSlice({
    name: 'person',
    initialState: {
        value: {
            firstName: 'test',
            lastName: 'demo',
            age: 39
        }

    },
    reducers: {
        changeAge : (state,action) =>{
            state.value.age = action.payload;
        },
    },

});
export const {changeAge} = jsonSlice.actions;
export default jsonSlice.reducer;