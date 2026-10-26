import { useState,useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Update(){
const {id} = useParams();
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')
const [email, setEmail] = useState('')
const navigate = useNavigate();

useEffect(() =>{
    const dboperation = async() =>{

  await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
.then(response =>response.data)
.then(data =>{
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
    setEmail(data.email);
}).catch(error =>console.log(error));
    }
    dboperation();
},[])

const handleSubmit = async(e) =>{
                e.preventDefault();
            console.log(id, firstName, lastName, age, email);
            const employee = {id,firstName, lastName, age, email};
              await axios.put(`http://localhost:8080/api/v1/employees/${id}`,employee,id)
            .then((results) =>{
                console.log('Employee Updated', results);
            navigate('/readAll')
            })
            .catch((err) =>
            console.log('error adding new employee', err));
            }
            
    return(
        <>
     First Name : <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br/>
    Last Name : <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br/>
    Age : <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br/>
    Email : <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
    <button onClick={handleSubmit} type='button'>Update</button> &nbsp; &nbsp;
    <button onClick={() => navigate('/')} type='button'>Cancel</button> <br/>
    <Link to="/create">Go to create</Link>&nbsp;
    <Link to={`/read/${id}`} >Go to Read</Link>&nbsp;
    <Link to={`/delete/${id}`} >Go to delete</Link>&nbsp;
    <Link to="/readAll ">Go to read All</Link>&nbsp;
        </>
    )
}