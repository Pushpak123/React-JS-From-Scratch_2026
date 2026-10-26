import {useState} from 'react';
const JsonObjectComponent = () =>{
    const [person,setPerson] = useState({
        name:'John',
        age:39,
        gender:'male'
    });
    return(
        <>
        Name:{person.name}<br/>
        Age:{person.age}<br/>
        gender:{person.gender}<br/>
        </>
    )
}
export default JsonObjectComponent;