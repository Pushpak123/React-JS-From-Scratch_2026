export default function MultipleAsynchronousWaitingTimeDemo(){
    const test = () =>{
              
        console.log(1);
        setTimeout(() => {
        console.log('inside setTimeout');
        },10000)
        console.log(2);
        console.log(3);
        console.log(4);
        setTimeout(() => {
        console.log('inside 2nd setTimeout');
        },20000)
        console.log(5);
        }
    
    return(
        <>
        <button type="button" onClick={test}>test</button>
        </>
    )
}