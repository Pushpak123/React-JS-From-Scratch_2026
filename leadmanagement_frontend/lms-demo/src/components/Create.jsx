import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { createLead } from '../service/LeadService';

export default function Create(){
    const [name, setName] = useState(''); 
    const [mobileNumber, setMobileNumber] = useState('');
     const [email, setEmail] = useState(''); 
    const [status, setStatus] = useState('new');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        const lead = {name, mobileNumber, email, status};
         createLead(lead)
         .then((results) =>{
            console.log("new lead added",results);
            navigate("/readAll");
         }).catch(error =>{
            console.log("error adding new lead"+error);
         })
    }
    return(
        <>
        <h1>Create</h1> Name: <input onChange={(e) => setName(e.target.value)} type='text' /> <br /> 
        Mobile Number: <input onChange={(e) => setMobileNumber(e.target.value)} type='number' /> <br />
         Email Id: <input onChange={(e) => setEmail(e.target.value)} type='email' /> <br /> 
         <button onClick={handleSubmit} type='button'>Submit</button> &nbsp; &nbsp; 
         <button onClick={() => navigate('/')} type='button'>Cancel</button> <br /> 
        <Link to="/readAll">Read All</Link>&nbsp; &nbsp;
        </>
    )
}