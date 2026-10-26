import {useState} from 'react';

export default function Test5(){
    const [message,setMessage] = useState([]);
    const callToApi = () =>{
            fetch('http://localhost:8080/test/t5')
            .then(response => response.json())
            .then(data =>{

            
            console.log(data.names);
            setMessage(data.names);
    })
            .catch(error => console.log(error));    
    }
    return(
        <>
            <h1>{message.join(', ')}</h1>
    <button onClick={callToApi} type='button'>Test5</button>
        </>
    )
}