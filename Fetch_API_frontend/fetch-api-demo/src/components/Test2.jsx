export default function Test2(){
    const callToAPI = () =>{

         fetch('http://localhost:8080/test/t2')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    return(
        <>
        <button onClick={callToAPI}>Call to API</button>
        </>
    )
}