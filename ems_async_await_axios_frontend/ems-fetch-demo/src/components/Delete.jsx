import { useState,useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Delete(){
    const {id} = useParams();
const [employee, setEmployee] = useState({});
const navigate = useNavigate();

    useEffect(() =>{
        const dboperation = async() =>{
    await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
    .then((response) =>response.data)
    .then((data) =>{
        setEmployee(data);
    }).catch(error =>console.error(error));
}
dboperation();
    },[])

    const handleDelete = async() =>{
        if(window.confirm("Are you sure you want to delete this employee?")) 
            {
    await axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
    .then((response) =>response.json())
    .then((data) =>{
    console.log(data)})
    .catch(error =>console.error(error));
     navigate('/readAll');

    }
}
    return(
        <>
                <h1>Employee Details</h1>
        <p>Employee Id: {employee.id}</p>
        <p>Employee First Name: {employee.firstName}</p>
        <p>Employee Last Name: {employee.lastName}</p>
        <p>Employee Age: {employee.age}</p>
        <p>Employee Email: {employee.email}</p>
        <button onClick={handleDelete} type='button'>Delete</button><br/>
        <Link to="/create">Go to create</Link>&nbsp;
        <Link to={`/update/${id}`} >Go to update</Link>&nbsp;
        <Link to={`/read/${id}`} >Go to read</Link>&nbsp;
        <Link to="/readAll">Go to read All</Link>&nbsp;
        </>
    )
}