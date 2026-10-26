import {useState} from 'react';
const ArraySortInASCComponent = () =>{
    const [array, setArray] = useState([101, 120, 40, 510, 601, 70, 180, 9, 100]); 
    const handleFinalize = () =>{
        setArray([array.sort((a,b) =>a - b)]);
    }
  
    return(
        <>
       <h1>Array:{array.join(',')}</h1>
       <button onClick={handleFinalize}>Finalize</button>
        
        </>
    )
}
export default ArraySortInASCComponent;