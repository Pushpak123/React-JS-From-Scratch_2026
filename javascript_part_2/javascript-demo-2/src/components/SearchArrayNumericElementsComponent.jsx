import {useState} from 'react';
const SearchArrayNumericElementsComponent = () =>{
    const [array, setArray] = useState([121, 453, 431, 765, 984]);
    const [results,setResults] = useState([]);
    const handleFinalize = () =>{
        setResults(array.filter((item) =>item.toString().includes('4')));
    }
    return(
        <>
        <h1>Array:{array.join(',')}</h1><br/>
        <h1>Results:{results.join(',')}</h1><br/>
        <button onClick={handleFinalize}>Finalize</button>
        
        </>
    )
}
export default SearchArrayNumericElementsComponent;