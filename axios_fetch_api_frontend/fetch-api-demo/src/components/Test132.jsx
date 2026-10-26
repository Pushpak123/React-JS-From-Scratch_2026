import axios from 'axios';
import {useState} from 'react';
export default function Test132(){
    const [firstName, setFirstName] = useState('');
     const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
     const [file, setFile] = useState(null);

     const handleSubmit = (e) =>{
      e.preventDefault();
       const formData = new FormData(); 
      formData.append('firstName', firstName); 
      formData.append('email', email); 
      formData.append('password', password); 
      formData.append('file', file); 
      axios.post('http://localhost:8080/test/t132', formData)
      .then(response =>{
        console.log(response.data);
      }).catch(error =>console.error(error));
     }
     
    return(
        <>
        First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br /> 
        Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /> 
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /> 
        File: <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br /> 
        <button onClick={handleSubmit} type='button'>Submit</button>
        </>
    )
}