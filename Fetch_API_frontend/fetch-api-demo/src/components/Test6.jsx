import {useState} from 'react';
export default function Test6(){
const [values,setValues] = useState([]);
    const callToApi = () =>{
            fetch('http://localhost:8080/test/t6')
            .then(response => response.json())
            .then(data =>{

            console.log(data.list);
            setValues(data.list);
            })
            .catch(error => console.log(error))
                }
    return(
        <>
                <h1>{values.join(', ')}</h1>
        <button onClick={callToApi} type='button'>Test6</button>
        </>
    )
}