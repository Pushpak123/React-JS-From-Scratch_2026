const LetComponent = () =>{
//     const test1 = () => { 
//     let a = 10; 
//     console.log(a); 
//     a = 20; 
//     console.log(a); 
//     a = 'abc'; 
//     console.log(a); 
//     a = true; 
//     console.log(a); 
//     a = 56.4; 
//     console.log(a); 
//   }
//   const test2 = () => { 
//     for(let i = 0; i < 10; i++) { 
//       console.log(i); 
//     } 
//     console.log(i); 
//   } 
//  const test3 = () => { 
//     if(true){ 
//       let a = 10; 
//       console.log(a); 
//     } 
//     console.log(a); 
//   } 
 const test4 = () => { 
    let a = 10; 
    console.log(a); 
    a = 20; 
    console.log(a); 
    a = 'abc'; 
    console.log(a); 
    // let a = true; 
    console.log(a); 
    a = 56.4; 
    console.log(a); 
  } 
    return(
        <div>
              {/* <button onClick={test1}>Click me</button>  */}
               {/* <button onClick={test2}>Click me</button>  */}
               {/* <button onClick={test3}>Click me</button>  */}
               <button onClick={test4}>Click me</button>



        </div>
    )
}
export default LetComponent;