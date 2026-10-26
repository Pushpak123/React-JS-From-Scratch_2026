import {useState} from 'react';
export default function Test13(){
const [firstName, setFirstName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
const person = {firstName, email, password};
fetch('http://localhost:8080/test/t13',
{
method: 'POST',
headers: { 
    'Content-Type': 'application/json' 
},
body: JSON.stringify(person)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
}
    return(
        <>
First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
<button onClick={handleSubmit} type='button'>Submit</button>
        
        </>
    )
}