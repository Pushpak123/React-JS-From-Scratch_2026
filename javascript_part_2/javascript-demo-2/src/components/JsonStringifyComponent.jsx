import {useState} from 'react';
const JsonStringifyComponent = () =>{
    const [person, setPerson] =
useState({
name: "John",
age: 30,
gender: "male"
});
const str = JSON.stringify(person); 
    return(
        <>
        {str}
        
        </>
    )
}
export default JsonStringifyComponent;