import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Create() {

const navigate = useNavigate();
const [id, setId] = useState("");
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [address, setAddress] = useState("");

const addPerson = () =>{
    const person = {id,name,age,address};
    const persons = JSON.parse(sessionStorage.getItem('data'));
    const finalPersons = [...persons,person];
    sessionStorage.setItem('data',JSON.stringify(finalPersons));
    navigate('/readAll');
}

    return(
        <>
        <h1>Add New Person</h1>
                Id : <input type="text" onChange={(e) => setId(e.target.value)} /><br />
                Name : <input type="text" onChange={(e) => setName(e.target.value)} /><br />
                Age : <input type="text" onChange={(e) => setAge(e.target.value)} /><br />
                Address : <input type="text" onChange={(e) => setAddress(e.target.value)} /><br />
                <button onClick={addPerson} type='button'>Add</button>
                        
        </>
    )
}