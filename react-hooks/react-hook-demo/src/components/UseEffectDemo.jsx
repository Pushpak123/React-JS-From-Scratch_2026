import {useState,useEffect} from 'react';
const UseEffectDemo = () =>{
    var [j,setJ] = useState(1);

    useEffect(() =>{
        setJ(200);
    })

    return(
        <>
        J:{j} <br/>
        </>
    )
}
export default UseEffectDemo;