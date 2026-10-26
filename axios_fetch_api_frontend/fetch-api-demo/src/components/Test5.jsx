import axios from 'axios';
import {useState} from 'react';
export default function Test5()
{
    const [message,setMessage] = useState([]);
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t5')
        .then(response =>response.data)
        .then((data) =>{
            console.log(data.names);
        setMessage(data.names);
        })
        .catch(error =>console.error(error));

    }
    return(
        <>
        <h1>{message.join(', ')}</h1> 
        <button onClick={callToApi} type='button'>Test5</button>
        </>
    )
}