import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const personSlice = createSlice({
    name: 'persons',
    initialState: [],
    reducers: {
        createPerson: (state,action) =>{
            state.push({id:uuidv4(),...action.payload});
        },

        updatePerson: (state,action) =>{
            const index = state.findIndex((person) =>person.id === action.payload.id);
            if(index !== -1)
            {
                state[index] = action.payload;
            }
        },

        deletePerson: (state,action) =>{
            return state.filter((person) => person.id !== action.payload);
        },

    },

});

export const {createPerson,updatePerson,deletePerson} = personSlice.actions;
export default personSlice.reducer;