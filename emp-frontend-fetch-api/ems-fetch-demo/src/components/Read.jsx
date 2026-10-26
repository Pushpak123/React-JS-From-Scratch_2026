import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function Read(){
    const {id} = useParams();
    const [employee,setEmployee] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:8080/api/v1/employees/${id}`)
        .then((response) =>response.json())
        .then((data) =>setEmployee(data))
        .catch(error =>console.error(error));
    },[])

    return(
        <>
        <h1>Employee Details</h1>
        <p>Employee Id: {employee.id}</p>
        <p>Employee First Name: {employee.firstName}</p>
        <p>Employee Last Name: {employee.lastName}</p>
        <p>Employee Age: {employee.age}</p>
        <p>Employee Email: {employee.email}</p>
        <Link to="/create">Go to create</Link>&nbsp;
        <Link to={`/update/${id}`} >Go to update</Link>&nbsp;
        <Link to={`/delete/${id}`} >Go to delete</Link>&nbsp;
        <Link to="/readAll">Go to read All</Link>&nbsp;     
        
        </>
    )
    }