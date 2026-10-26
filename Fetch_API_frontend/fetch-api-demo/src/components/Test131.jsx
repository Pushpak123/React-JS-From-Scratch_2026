import {useState} from 'react';
export default function Test131(){
const [firstName, setFirstName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleSubmit = (e) =>{
            e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('email', email);
        formData.append('password', password);
        fetch('http://localhost:8080/test/t131',
        {
        method: 'POST',
        body: formData
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        
}
    return(
        <>
First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
<button onClick={handleSubmit} type='button'>Submit</button>
        </>
    )
}