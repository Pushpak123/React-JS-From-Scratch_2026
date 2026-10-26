import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import testSlice from "./testSlice";
import ArraySlice from "./arraySlice";
import jsonSlice from "./jsonSlice";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        balance: testSlice,
        marks: ArraySlice,
        person: jsonSlice
    },
});