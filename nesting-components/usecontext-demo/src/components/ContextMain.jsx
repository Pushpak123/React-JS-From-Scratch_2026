import {createContext,useContext} from 'react';

export const NamesContext = createContext();
export const useNames = () =>{
    return useContext(NamesContext);
}