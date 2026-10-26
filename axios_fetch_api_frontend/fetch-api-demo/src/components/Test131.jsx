import axios from 'axios';
import {useState} from 'react';
export default function Test131(){
    const [firstName, setFirstName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');  

    const handleSubmit = (e) =>{
        e.preventDefault();
        const person = {firstName,email,password} ;
        console.log(person);
        axios.post('http://localhost:8080/test/t131', person) 
        .then(response =>console.log(response.data))
        .then(data =>console.log(data))
        .catch(error =>{
            console.log(error);
        })
    }

 return (<> 
        First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} 
/><br /> 
        Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /> 
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br 
/> 
        <button onClick={handleSubmit} type='button'>Submit</button> 
    </>) 
} 