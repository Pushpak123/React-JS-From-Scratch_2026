import {useState} from 'react';
export default function Test15(){
const [firstName, setFirstName ] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState("");
const [file, setFile] = useState(null);

const handleSubmit = (e) => {
            const person = {firstName, lastName, age};
            e.preventDefault();
            console.log(file,person);
            const formData = new FormData();
            formData.append("person",
            new Blob([JSON.stringify(person)], { 
                type: "application/json" }));
            formData.append("file", file);
            fetch("http://localhost:8080/test/t15", {
            method: "POST",
            body: formData
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            }
    return(
        <>
            First Name: <input type="text" onChange={ e => setFirstName(e.target.value)} /><br />
            Last Name: <input type="text" onChange={e => setLastName(e.target.value)} /><br />
            Age: <input type="number" onChange={e => setAge(e.target.value)} /><br />
            File: <input type="file" onChange ={e => setFile(e.target.files[0])} /><br/>
            <button onClick={handleSubmit} type='button'>Submit</button>
        </>
    )
}