import {createSlice} from '@reduxjs/toolkit';
const arraySlice = createSlice({
    name: 'marks',
    initialState: {
       value: [90, 70, 80, 60, 95]
    },
    reducers: {
        add: (state,action) =>{
            state.value = [...state.value,action.payload];
        },
        remove: (state,action) =>{
            state.value = state.value.filter((item) =>item !== action.payload);
        },
    },
});
export const {add,remove} = arraySlice.actions;
export default arraySlice.reducer;