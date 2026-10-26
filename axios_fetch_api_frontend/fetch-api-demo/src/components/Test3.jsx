import axios from 'axios';
export default function Test3(){
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t3')
        .then((response) =>{
            console.log(response.data);
            console.log(response.data.message);
        }).catch(error =>console.error(error));
    }
    return(
        <>
        <button onClick={callToApi} type='button'>Call To API</button>
        </>
    )
}