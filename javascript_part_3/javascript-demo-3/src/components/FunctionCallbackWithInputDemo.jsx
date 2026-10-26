export default function FunctionCallbackWithInputDemo(){
                    const test1 = (arg1) => {
                console.log('from test1:' + arg1);
                }
                const test2 = (f1) => {
                console.log('test2 begin');
                var results = 100;
                f1(results);
                console.log('test2 end');
                }
                const test3 = () => {
                test2(test1);
                }
    return(
        <>
        <button type="button" onClick ={test3}>test</button>
        </>
    )
}