import { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate, useParams } from 'react-router-dom'; 
import { updatePerson } from './personSlice';

export default function Update(){
    const {id} = useParams();
    const person = useSelector((state) =>state.persons.find((person) =>person.id === id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(person);
    
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updatePerson(formData));
        navigate('/readAll');
    }
    if (!person) return <div>Person not found</div>;
    return(
        <>
        <div>
             <h2>Update Person</h2> 
             <form onSubmit={handleSubmit}>
                 First Name: <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} /> <br />
                  Last Name: <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} /> <br />
                   Age: <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} /> <br /> 
                   <button type="submit">Update</button> 
                   </form>
                    </div>
        
        </>
    )
}