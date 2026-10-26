import {useState,useEffect} from 'react';
const UseEffectWithArgs = () =>{
    var [j,setJ] = useState(1);
    useEffect(() =>{
        setJ(200);
    },[])

    function changeValues(){
        setJ(j+1);
    }

    return(
        <>
        j : {j}<br/>
        <button onClick={changeValues}>Change</button>
        </>
    )
}
export default UseEffectWithArgs;