import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function Create(){
const [id, setId] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')
const [email, setEmail] = useState('')
const navigate = useNavigate();

const handleSubmit = async(e) =>{

            e.preventDefault();
            console.log(id, firstName, lastName, age, email);
            const employee = {id, firstName, lastName, age, email};
            await axios.post('http://localhost:8080/api/v1/employees',employee)
            .then((results) =>{
            console.log('new employee added', results);
            navigate('/readAll')
            })
            .catch((err) =>
            console.log('error adding new employee', err));
            }
    return(
        <>
ID : <input type="text" onChange={(e) => setId(e.target.value)} /><br />
First Name : <input type="text" onChange={(e) => setFirstName(e.target.value)} /><br />
Last Name : <input type="text" onChange={(e) => setLastName(e.target.value)} /><br />
Age : <input type="text" onChange={(e) => setAge(e.target.value)} /><br />
Email : <input type="text" onChange={(e) => setEmail(e.target.value)} /><br />
<button onClick={handleSubmit} type='button'>Submit</button>&nbsp;&nbsp;
<button onClick={() => navigate('/')} type='button'>Cancel</button> <br/>
<Link to="/readAll">Read All</Link>&nbsp; &
        </>
    )
}