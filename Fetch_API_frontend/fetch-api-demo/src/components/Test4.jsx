export default function Test4(){
    const callToAPI = () =>{
        fetch('http://localhost:8080/test/t4')
        .then(response =>console.log(response))
        .catch(error =>console.log(error));
    }
    return(
        <>
        <button onClick={callToAPI}>Call to API</button>
        </>
    )
}