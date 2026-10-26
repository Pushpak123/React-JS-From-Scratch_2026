export default function Test1(){
    const callToApi = () =>{
                fetch('http://localhost:8080/test/t1')
        .then(() => console.log('ok'))
        .catch(() => console.log('error'));
            }
    return(
        <>
        <button onClick={callToApi} type='button'>Call to API</button>
        </>
    )
}