import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Update(){
const {id} = useParams();
const navigate = useNavigate();
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [address, setAddress] = useState("");

useEffect(() =>{
    const persons = JSON.parse(sessionStorage.getItem('data'));
    const person = persons.find((p) =>p.id === id);
    console.log(person);
    setName(person.name);
    setAge(person.age);
    setAddress(person.address);
},[])

const updatePerson = () =>{
    const person = {id,name,age,address};
    const persons = JSON.parse(sessionStorage.getItem('data'));
    const finalPersons = persons.map((p) =>p.id === id ? person : p);
    sessionStorage.setItem('data',JSON.stringify(finalPersons));
    navigate('/readAll');
}

    return(
        <>
        <h1>Update Person</h1>
            Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
            Age : <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /><br />
            Address : <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            <button onClick={updatePerson} type='button'>Update</button>&nbsp;
            <button onClick={() => navigate('/readAll')} type='button'>Cancel</button>
            <br />
            <Link to={`/delete/${id}`}>Delete This record</Link>&nbsp; <br />
            <Link to='/create'>Create New Record</Link>&nbsp;
            <Link to='/readAll'>Read All the records</Link>&nbsp;
        
        </>
    )
}