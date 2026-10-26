const JsonObjectComponent = () =>{
    const student = { 
    "firstName": "Kumar", 
    "age": 22, 
    "marks": [56, 79, 99] 
  }; 
 
  const product = { 
    "name": "TV", 
    "price": 45000 
  } 
    return(
        <div>
              <h1> 
        Student: <br /> 
        First Name : {student.firstName} <br /> 
        Age : {student.age} <br /> 
        Marks : {student.marks.join(",")} 
       </h1> 
       <hr /> 
       <h1> 
        Product: <br /> 
        Name : {product.name} <br /> 
        Price : {product.price} 
       </h1> 
       <hr />

        </div>
    )
}
export default JsonObjectComponent;