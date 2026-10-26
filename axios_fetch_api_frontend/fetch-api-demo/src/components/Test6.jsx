import axios from 'axios';
import {useState} from 'react';
export default function Test6(){
    const [values,setValues] = useState([]);
    const callToApi =()=>{
        axios.get('http://localhost:8080/test/t6')
        .then(response =>response.data)
        .then((data) =>{
            console.log(data.list);
            setValues(data.list);
        }).catch(error =>console.error(error));
        
    }
    return(
        <>
        <h1>{values.join(', ')}</h1> 
        <button onClick={callToApi} type='button'>Test6</button>
        </>
    )
}