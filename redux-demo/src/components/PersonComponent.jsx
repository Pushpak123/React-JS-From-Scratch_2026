import {useDispatch,useSelector} from 'react-redux';
import { changeAge } from './jsonSlice';
export default function PersonComponent(){
    const dispatch = useDispatch();
    const person = useSelector((state) =>state.person.value);
    return(
        <>
        <div> Person: First Name: {person.firstName} <br />
         Last Name{person.lastName} <br /> 
         Age: {person.age} <br /> 
        <button onClick={() => dispatch(changeAge(50))}>Change Age</button>
        </div>
        </>
    )
}