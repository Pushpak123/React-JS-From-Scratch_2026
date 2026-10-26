import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
export default function ReadAll(){
    const [data,setData] = useState([]);

    useEffect(() =>{
        setData(JSON.parse(sessionStorage.getItem('data')))
    },[]);
          

        
    return(
        <>
        <table className='table table-bordered table-striped'> 
                <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Read</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map((person) =>
                <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.address}</td>
                <td><Link to={`/read/${person.id}`}>Read</Link></td>
                <td><Link to={`/update/${person.id}`}>Update</Link></td>
                <td><Link to={`/delete/${person.id}`}>Delete</Link></td>
                </tr>)}
                </tbody>
                </table>
                <Link to="/create">Create One More?</Link>
        
        </>
    )
}