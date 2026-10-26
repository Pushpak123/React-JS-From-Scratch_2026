import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
export default function ReadAll(){
    const persons = useSelector((state) =>state.persons);
    const dispatch = useDispatch();

    if(persons?.length === 0)
    {
        return(<>
        <h2>Person not found</h2>
        <Link to="/create"><button>Create New Person</button></Link>
        </>)
    }
    return(
        <>
        <div> 
            <h2>All Persons</h2> 
            <Link to="/create"><button>Create New Person</button></Link> 
            <table className='table table-bordered table-striped'>
                 <thead> 
                    <tr> 
                        <th>FirstName</th> 
                        <th>LastName</th> 
                        <th>Age</th> 
                        <th>Actions</th> 
                        </tr> 
        </thead> 
        <tbody>
             {
             persons.map(person => (
                 <tr key={person.id}>
             <td>{person.firstName}</td>
              <td>{person.lastName}</td>
               <td>{person.age}</td> 
               <td> <Link to={`/read/${person.id}`}><button>View</button></Link> 
               <Link to={`/update/${person.id}`}><button>Edit</button></Link> 
               <Link to={`/delete/${person.id}`}><button>DELETE</button></Link> 
               </td> </tr> ))} 
               </tbody> 
               </table>
                </div> 
            

        </>
    )
}