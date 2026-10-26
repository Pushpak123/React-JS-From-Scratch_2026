import {React,useState} from 'react';
export default function Counter(){
    const [counter,setCounter] = useState(0);
    const [inputChange,setInputChange] = useState('');
    return(
        <>
        <div>
            <h3 data-testid='cnt'>{counter}</h3><br/>
            <button data-testid='btn' className='btn btn-success' 
            onClick={() =>setCounter(counter+1)}>Increment</button>
            <hr/>
            <input type='text' data-testid='input' onChange={(e) =>setInputChange(e.target.value)} defaultValue="10"/>
        </div>

        
        </>
    )
}