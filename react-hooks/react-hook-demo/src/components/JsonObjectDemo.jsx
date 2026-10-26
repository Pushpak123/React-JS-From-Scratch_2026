import { useState,useEffect} from 'react';
const JsonObjectDemo = () =>{
    const [persons,setPersons] = useState([]);

    useEffect(() =>{
        fetch('Person.json')
        .then(response =>response.json())
        .then(data =>setPersons(data))
        .catch(error =>console.error(error));
    },[])

    return(
        <div>
{persons.map(person =><h1>Person Name:{person.name},Age:{person.age}</h1>)}
        </div>
    )
}
export default JsonObjectDemo;