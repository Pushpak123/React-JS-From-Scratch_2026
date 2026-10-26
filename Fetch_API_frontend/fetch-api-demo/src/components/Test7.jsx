import {useState} from 'react';
export default function Test7(){
    const [values,setValues] = useState([]);
    const callToApi = () =>{
        fetch('http://localhost:8080/test/t7')
        .then(response => response.json())
        .then(data =>{
        console.log(data.educations);
        setValues(data.educations);
        })
        .catch(error => console.log(error));
            }
    return(
        <>
        <h1>{Object.entries(values).map(([key,value]) =><p key={key}>{key}:{value}</p>)}</h1>
        <button onClick={callToApi} type='button'>Test7</button>
        </>
    )
}