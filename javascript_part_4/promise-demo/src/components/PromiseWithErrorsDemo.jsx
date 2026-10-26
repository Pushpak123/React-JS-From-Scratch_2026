export default function PromiseWithErrorsDemo(){
    const w1 = (resolve,reject) =>{
        return reject('some error');
    }
    const test = () =>{
        const p1 = new Promise(w1);
        p1.then((res) =>console.log(res))
        .catch((err) =>console.error(err));
    }
    return(
        <>
        <button type="button" onClick={test}>test</button>
        </>
    )
}