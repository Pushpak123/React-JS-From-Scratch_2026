export default function SynchronousAsynchronousDemo(){
                
    const test = () => {
            console.log(1);
            setTimeout(() => {
            console.log('begin in setTimeout');
            //time consuming operation
            for(var i = 1; i < 9999999999;i++){

            }
            console.log('end in setTimeout');

            },0)
            console.log(2);
            console.log(3);
            console.log('before for loop in synchronous operation')
            for(var i = 1; i < 9999999999; i++){
            }
            console.log('after for loop in synchronous operation')
            console.log(4);
                    setTimeout(() => {
        console.log('begin in the 2nd setTimeout');
        //time consuming operation
        for(var i = 1; i < 9999999999; i++){
        }
        console.log('end in the 2nd setTimeout');
        }, 0)
            console.log(5);
            console.log('before for loop in the 2nd synchronous operation')
            for(var i = 1; i < 9999999999; i++){
            }
            console.log('after for loop in the 2nd synchronous operation')
            console.log(6);
            
        
    
}
    
    return(
        <>
        <button type="button" onClick={test}>test</button>
        </>
    )
}