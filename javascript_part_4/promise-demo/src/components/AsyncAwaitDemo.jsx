export default function AsyncAwaitDemo(){
    const test = async() =>{
        console.log("start");
        const p1 = new Promise((resolve) =>{
            console.log("P1 executor");
            setTimeout(() =>{
                console.log("P1 settimeout");
                resolve("p1 done");
            },0)
        });

        const p2 = new Promise((resolve) =>{
            console.log("p2 executor");
            setTimeout(() =>{
                console.log("p2 setTimeout");
                resolve("p2 done");
            },0)
        });

        const p3 = new Promise((resolve) =>{
            console.log("p3 executor");
            setTimeout(() =>{
                console.log("p3 settimeout");
                resolve("p3 done");
            },0)
        });
        await p1.then((res) =>{
            console.log("p1 then:",res);
        });
        console.log("middle");
        p2.then((res) =>{
            console.log("p2 then:",res);
        });
        console.log("end");
        p3.then((res) =>{
            console.log("p3 then:",res);
        });
    }
    return(
        <>
        <button type="button" onClick={test}>test</button>
        </>
    )
}