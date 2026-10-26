import axios from 'axios';
export default function Test1(){
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t1')
        .then(() =>console.log("ok"))
        .catch(error =>console.error(error));
    }
    return(
        <>
        <button onClick={callToApi} type='button'>Call to API</button>
        </>
    )
}