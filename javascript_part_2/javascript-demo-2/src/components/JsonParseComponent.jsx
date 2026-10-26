import {useState} from 'react';
const JsonParseComponent = () =>{
    const [person, setPerson] =
useState({
name: "John",
age: 30,
gender: "male"
});
const str = JSON.stringify(person);
const person1 = JSON.parse(str);
    return(
        <>
        Name:{person1.name}<br/>
        Age:{person1.age}<br/>
        Gender:{person1.gender}<br/>
        
        </>
    )
}
export default JsonParseComponent;