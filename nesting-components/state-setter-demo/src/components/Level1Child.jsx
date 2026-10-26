import Level2Child from "./Level2Child";


const Level1Child = ({arg1,arg2,arg3}) =>{
    const test = () =>{
        arg3(arg1+1);
    }
    return(
        <>
                
         Level1Child begin {arg1}<br />
        <button type='button' onClick={arg2}>Button in Child</button><br />
        <button type='button' onClick={test}>2nd Button in Child</button><br/>
        Level1Child end <br />

</>

    )
}
export default Level1Child;