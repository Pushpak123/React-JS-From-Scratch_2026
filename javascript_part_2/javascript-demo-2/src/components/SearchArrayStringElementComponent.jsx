import {useState} from 'react';
const SearchArrayStringElementComponent = () =>{
    const [array, setArray] = useState(["hello", "world", "react", "js", "css", "btm", "test", "abc"]);
 const [results,setResults] = useState([]);
 const handleFinalize = () =>{
    setResults(array.filter((item) =>item.includes('c')));
 }
 
    return(
        <>
        <h1>Array:{array.join(',')}</h1><br/>
        <h1>Results:{results.join(',')}</h1><br/>
        <button onClick={handleFinalize}>Finalize</button>
       
        
        </>
    )
}
export default SearchArrayStringElementComponent;