export default function AsynchronousWithTimeTakingDemo(){
    const test = () => {
            console.log(1);
            setTimeout(() => {
            console.log('begin in setTimeout');
            //time consuming operation
            for(var i = 1; i < 9999999999; i++){
            console.log('end in setTimeout');
            }
            },0)
            console.log(2);
            console.log(3);
            console.log(4);
            console.log(5);
            }
    return(
        <>
        <button type="button" onClick={test}>test</button>
        </>
    )
}