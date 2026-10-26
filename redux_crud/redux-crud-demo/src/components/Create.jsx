import { useState } from 'react';
 import { useDispatch } from 'react-redux'; 
 import { useNavigate } from 'react-router-dom'; 
import { createPerson } from './personSlice';

 export default function Create() { 
const [formData, setFormData] = useState({ firstName: '', lastName: '', age: '' }); 
const dispatch = useDispatch(); 
const navigate = useNavigate();

const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value});

}
const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createPerson(formData));
    navigate('/readAll');
}

    return(
        <>
        <div>
             <h2>Create Person</h2> 
             <form onSubmit={handleSubmit}> 
                First Name: <input type='text' name='firstName' onChange={handleChange}/> <br />
                 Last Name: <input type='text' name = 'lastName' onChange={handleChange}/> <br />
                  Age: <input type='number' name='age' onChange={handleChange}/> <br /> 
                <button type="submit">Add</button>
                 </form>
                  </div>
        </>
    )
}