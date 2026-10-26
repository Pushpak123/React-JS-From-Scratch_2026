import { Link, useNavigate, useParams } from "react-router-dom";
export default function Dlete() {
const navigate = useNavigate();
const {id} = useParams();
const persons = JSON.parse(sessionStorage.getItem('data'));
const person = persons.find((person) => person.id === id);


const deletePerson = () => {
if(window.confirm('Are you sure you want to delete this record?')){
const persons = JSON.parse(sessionStorage.getItem('data'));
const newPersons = persons.filter((person) => person.id !== id);
sessionStorage.setItem('data', JSON.stringify(newPersons));
navigate('/readAll');
}
}
return (<>
            <h1>{person.name} Record</h1>
            Id: {person.id} <br />
            Name: {person.name} <br />
            Age: {person.age} <br />
            Address: {person.address} <br />
            <button onClick={deletePerson} type='button'>Delete This Record</button><br />
            <Link to={`/update/${person.id}`}>Update This record</Link>&nbsp;
            <Link to='/create'>Create New Record</Link>&nbsp;
            <Link to='/readAll'>Read All the records</Link>&nbsp;
</>)
}