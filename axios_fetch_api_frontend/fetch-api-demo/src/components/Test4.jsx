import axios from 'axios';
export default function Test4()
{
 const callToAPI = () =>{
   axios.get('http://localhost:8080/test/t4')
   .then((response) =>{
    console.log(response);
    console.log(response.data);
   }).catch(error =>console.error(error));
    
 }
    return(
        <>
        <button onClick={callToAPI}>Call to API</button>
        </>
    )
}