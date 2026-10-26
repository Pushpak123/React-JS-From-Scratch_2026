import {useState} from 'react';
const StringArraySortInASCComponent = () =>{
    const [array, setArray] = useState(["hello", "world", "react", "js", "css", "btm", "test", "abc"]);
    const handleFinalize = () =>{
        setArray([array.sort((a,b) =>a.localeCompare(b))]);
    }
    return(
        <>
        <h1>Array:{array.join(',')}</h1>
        <button onClick={handleFinalize}>Finalize</button>
        
        </>
    )
}
export default StringArraySortInASCComponent;