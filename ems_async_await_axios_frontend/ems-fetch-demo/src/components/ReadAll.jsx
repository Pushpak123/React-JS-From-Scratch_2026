import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
export default function ReadAll(){
    const [employees,setEmployees] = useState([]);
    useEffect(() =>{
        const dboperation = async() =>{
        await axios.get("http://localhost:8080/api/v1/employees")
        .then((response) =>response.data)
        .then((data) =>setEmployees(data.list))
        }
        dboperation();

    },[])
    return(
        <>
        <table className='table table-bordered table-striped'>
            <thead>
            <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Read</th>
            <th>Update</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
            employees.map((emp) =>
            <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.age}</td>
            <td>{emp.email}</td>
            <td><Link to={`/read/${emp.id}`}>Read</Link></td>
            <td><Link to={`/update/${emp.id}`}>Update</Link></td>
            <td><Link to={`/delete/${emp.id}`}>Delete</Link></td>
            </tr>)}
            </tbody>
            </table>
            <Link to="/create">Create Employee</Link>

                </>
            )
                }