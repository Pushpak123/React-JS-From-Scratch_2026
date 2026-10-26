import {useState} from 'react';
const UseStateDemo = () =>{
    var i=1;
    var [j,setJ] = useState(1);

    function changeValues(){
        i = i + 1;
        setJ(j+1); 

    }
    return(
        <>
        i value:{i} <br/>
        j:{j}<br/>
        <button onClick={changeValues}>Change</button>
        </>
    )
}
export default UseStateDemo;