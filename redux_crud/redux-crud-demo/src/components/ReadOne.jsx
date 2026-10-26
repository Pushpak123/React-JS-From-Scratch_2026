import { useSelector } from 'react-redux'; 
import { Link, useParams } from 'react-router-dom';
export default function ReadOne(){
    const {id} = useParams();
    const person = useSelector(state =>state.persons.find(p =>p.id === id ));
    if (!person) return <div>Person not found</div>;
    return(
        <>
        <div> 
            <h2>Person Details</h2> 
            <p><b>First Name:</b> {person.firstName}</p> 
            <p><b>Last Name:</b> {person.lastName}</p> 
        <p><b>Age:</b> {person.age}</p> 
        <Link to="/readAll">ReadAll</Link> 
        </div>
        </>
    )
}