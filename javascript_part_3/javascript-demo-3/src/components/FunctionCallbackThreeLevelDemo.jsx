export default function FunctionCallbackThreeLevelDemo(){
            const test1 = () => {
        console.log('from test1');
        }
        const test2 = (f1) => {
        console.log('test2 begin');
        f1();
        console.log('test2 end');
        }
        const test3 = (f1) => {
        console.log('test3 begin');
        f1();
        console.log('test3 end');
        }
        const test4 = (f1) =>{
        console.log('test4 begin');
        f1();
        console.log('test4 end');
        }
        const test5 = () => {
             test2(test1); 
             console.log('---------');
              test3(() => test2(test1));
               console.log('---------'); 
               test4(() => test3(() => test2(test1)));
        }
    return(
        <>
        <button type="button" onClick={test5}>test</button>
        </>
    )
}