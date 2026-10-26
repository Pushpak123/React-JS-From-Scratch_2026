import axios from 'axios';
import {useState} from 'react';
import Test9Child from './Test9Child';
export default function Test9(){
    const [persons,setPersons] = useState([]);
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t9')
        .then(response =>response.data)
        .then(data =>{
            console.log(data.members);
            setPersons(data.members);
        }).catch(error =>console.error(error));
    }
    return(
        <>
        {persons.map(person =><Test9Child person={person}/>)}
        <button onClick={callToApi} type='button'>Call to API</button>
        </>
    )
}