export default function Test3(){

    const callToApi = () =>{
        fetch('http://localhost:8080/test/t3') 
        .then(response => response.json()) 
        .then(data => { 
            console.log(data.message);
         }) 
        .catch(error => console.log(error))
    }
    return(
        <>
        <button onClick={callToApi} type='button'>Call To API</button>
        </>
    )
}