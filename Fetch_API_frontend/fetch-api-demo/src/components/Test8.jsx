import {useState} from 'react';
export default function Test8(){
    const [person,setPerson] = useState([]);
    const callToApi = () =>{
                fetch('http://localhost:8080/test/t8')
        .then(response => response.json())
        .then(data =>{
            console.log( data);
        setPerson(data);

        })
        
        .catch(error => console.log(error))
            }
    return(
        <>
       
            <h1>First Name : {person.firstName}</h1>
            <h1>Last Name : {person.lastName}</h1>
            <h1>Age : {person.age}</h1>
            <button onClick={callToApi} type='button'>Call to API</button>
        </>
    )
}