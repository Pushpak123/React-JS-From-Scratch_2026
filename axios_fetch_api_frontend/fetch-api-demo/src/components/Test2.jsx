import axios from 'axios';
export default function Test2(){
    const callToAPI = () =>{
        axios.get('http://localhost:8080/test/t2')
        .then((response) =>console.log(response))
        .catch(error =>console.error(error));
    }
    return(
        <>
        <button onClick={callToAPI}>Call to API</button>
        </>
    )
}