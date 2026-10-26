import axios from 'axios';
import {useState} from 'react';
import Test9Child from './Test9Child';
export default function Test10(){
    const [persons,setPersons] = useState([]);
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t10')
        .then(response =>response.data)
        .then(data =>setPersons(data.members))
        .catch(error =>console.error(error));
    }
    return(
        <>
        {Object.entries(persons).map(([key,value]) => <>{key} : <Test9Child person ={value}/></>)}
        <button onClick={callToApi}>Get Data</button>
        </>
    )
}