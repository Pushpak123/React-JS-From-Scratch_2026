import axios from 'axios';
import {useState} from 'react';
export default function Test7(){
    const [values,setValues] = useState([]);
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t7')
        .then(response =>response.data)
        .then(data =>{
            console.log(data.educations);
            setValues(data.educations);
        }).catch(error =>console.error(error));
    }

    return(
        <>
        <h1>{Object.entries(values).map(([key,value]) =><p key={key}>{key}:{value}</p>)}</h1>
        <button onClick={callToApi} type='button'>Test7</button>
        </>
    )
}