import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function Read(){
    const {id} = useParams();
    const persons = JSON.parse(sessionStorage.getItem('data'));
    const person = persons.find(p => p.id === id);
    
    return(
        <>
                <h1>{person.name} Record</h1>
        Id: {person.id} <br />
        Name: {person.name} <br />
        Age: {person.age} <br />
        Address: {person.address} <br />
        <Link to={`/update/${person.id}`}>Update This record</Link>&nbsp;
        <Link to={`/delete/${person.id}`}>Delete This record</Link>&nbsp; <br />
        <Link to='/create'>Create New Record</Link>&nbsp;
        <Link to='/readAll'>Read All the records</Link>&nbsp;
        
        </>
    )
}