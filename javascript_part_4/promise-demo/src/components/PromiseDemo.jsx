export default function PromiseDemo(){
            const w1 = (resolve, reject) => {
        //perform the logic and assume results as 1000
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