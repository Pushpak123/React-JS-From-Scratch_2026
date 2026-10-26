import axios from 'axios';
import {useState} from 'react';
export default function Test14(){
    const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState(""); 
    const [age, setAge] = useState(""); 
    const [file, setFile] = useState(null)
    const handleSubmit = (e) =>{
         e.preventDefault() 
         const person = {firstName, lastName, age}
         console.log(file,person) 
         
         const formData = new FormData(); 
         formData.append("person", new Blob([JSON.stringify(person)],
          { type: "application/json" })); 
          formData.append("file", file); 
          axios.post("http://localhost:8080/test/t14", formData) 
        .then(res => console.log(res.data)) 
        .catch(err => console.log(err))
    }
    return(
        <>
        First Name: <input type="text" onChange={e => setFirstName(e.target.value)} /><br />
         Last Name: <input type="text" onChange={e => setLastName(e.target.value)} /><br />
          Age: <input type="text" onChange={e => setAge(e.target.value)} /><br /> 
          File: <input type="file" onChange={e => setFile(e.target.files[0])} /><br /> 
        <button onClick={handleSubmit} type='button'>Submit</button>
        </>
    )
}