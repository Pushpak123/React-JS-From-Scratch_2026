import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate, useParams } from 'react-router-dom';
import { deletePerson } from './personSlice';
export default function Delete(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const person = useSelector((state) =>state.persons.find((person) =>person.id === id));
    const navigate = useNavigate();
    if (!person) { return <div>Person not found</div>; }
    const handleDelete = () => { 
        
        if(window.confirm('Are you sure you want to delete this person?')){
             dispatch(deletePerson(id)); 
             navigate('/readAll'); 
            }
         }; 
    const handleCancel = () => { 
        navigate('/readAll'); 
    }; 

    return(
        <>
        <div> 
            <h2>Are you sure you want to delete this person?</h2>
             <p><b>First Name:</b> {person.firstName}</p>
              <p><b>Last Name:</b> {person.lastName}</p> 
              <p><b>Age:</b> {person.age}</p> 
              <button onClick={handleDelete}>Yes, Delete</button> 
              <button onClick={handleCancel}>Cancel</button>
               </div>
                </>
    )
}