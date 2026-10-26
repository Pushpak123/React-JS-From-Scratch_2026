import {useState} from 'react';
const StringArraySortInDESCComponent = () =>{
    const [array, setArray] = useState(["hello", "world", "react", "js", "css", "btm", "test", "abc"]);
const handleFinalize = () =>{
    setArray([array.sort((a,b) =>b.localeCompare(a))]);
}
    return(
        <>
        <h1>Array:{array.join(',')}</h1><br/>
        <button onClick={handleFinalize}>Finalize</button><br/>
        
        </>
    )
}
export default StringArraySortInDESCComponent;