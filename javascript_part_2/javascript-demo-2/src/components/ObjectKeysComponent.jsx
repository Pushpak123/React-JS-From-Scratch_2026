import {useState} from 'react';
const ObjectKeysComponent = () =>{
    const [person, setPerson] =
useState({
name: "John",
age: 30,
gender: "male"
});
const allkeys = Object.keys(person);
    return(
        <>
{allkeys.join(',')}<br/>
{allkeys.map((key) => <span key={key}>{key},</span>)}<br/>
{allkeys.map((key) => <span key ={key}>{key} : {person[key]},</span>)}<br/>


        
        </>
    )
}
export default ObjectKeysComponent;