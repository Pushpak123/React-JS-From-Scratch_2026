const JavasCriptFunctionComponent = () =>{
    const test1 = () =>{
        console.log("test1");
        alert("I am from test1");
        console.log(test2());
    }
    const test2 = () =>{
        console.log("test2");
        alert("I am from test2");
         test3(); 
    console.log('-------'); 
    test3(20000); 
    console.log('-------'); 
    test3(20000, 30000); 
    console.log('-------'); 
    test3(20000, 30000, 40000); 
    return 1000; 
    }
    const test3 = (a1, arg2, p1) =>{
        console.log("test3");
        alert("I am from test3");
        console.log(a1,arg2,p1);
        return 1000;

    }
    return(
        <div>
            <button type="button" onClick={test1}>Click Me</button>
        </div>

    )
}
export default JavasCriptFunctionComponent;