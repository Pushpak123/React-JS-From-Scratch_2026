const VarComponent = () =>{
//       const test1 = () => { 
//     var a = 5; 
//     console.log(a); 
//     a = 40; 
//     console.log(a); 
//     a = 50; 
//     console.log(a); 
//     a = "abc"; 
//     console.log(a); 
//     a = true; 
//     console.log(a); 
//     a = 56.6; 
//     console.log(a); 
//     a = 'abc hello xyz'; 
//     console.log(a); 
//   } 
//  const test2 = () => { 
//       for(var i = 1; i <= 10; i++){ 
//         console.log("loop body:" + i); 
//       } 
//       console.log("outside a loop:" + i); 
//   }
// const test3 = () => { 
//     if(true){ 
//       var a = 5; 
//       console.log("inside if:" + a); 
//     }  
//     console.log("outside if block:" + a); 
//   } 
//   const test4 = () => { 
//     console.log(a); 
//   } 
 
  const test5 = () => { 
    var a = 5; 
    console.log(a); 
    a = 40; 
    console.log(a); 
    var a = 400; 
    console.log(a); 
    a = "abc"; 
    console.log(a); 
    var a = 'hello'; 
    console.log(a); 
  }
    return(
        <div>
            {/* <button onClick={test1}>Test 1</button>  */}
              {/* <button onClick={test2}>Test 2</button>  */}
               {/* <button onClick={test3}>Test 3</button> <br />  */}
                {/* <button onClick={test4}>Test 4</button> */}
                 <button onClick={test5}>Test 5</button> 

        </div>
    )
}
export default VarComponent;