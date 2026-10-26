import {useState} from 'react';
const ArrayComponent = () =>{
    const a1 = [1,2,3,4,5];
    const [a2,setA2] = useState([0,2,3,4,5]);
    return(
        <>
        {a1.join(',')}<br/>
        {a2.join(',')}<br/>
        </>
    )
}
export default ArrayComponent;