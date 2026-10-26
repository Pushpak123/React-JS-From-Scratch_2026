export default function PromiseWithSuccessDemo(){
    const w1 = (resolve) =>{
        return resolve(1000);
    }
    const test = () =>{
        const p1 = new Promise(w1);
        p1.then((res) =>console.log(res));
    }
    return(
        <>
        <button type="button" onClick={test}>test</button>
        </>
    )
}