const ArraysOfJsonObjectComponent = () =>{
     const students = [ 
                      { 
                        "firstName": "Mohan", 
                        "age": 24, 
                        "marks": [56, 79, 99] 
                      }, 
                      { 
                        "firstName": "Kumar", 
                        "age": 25, 
                        "marks": [56, 79, 99] 
                      }, 
                      { 
                        "firstName": "Swathi", 
                        "age": 21, 
                        "marks": [86, 79, 99] 
                      } 
                  ] 
    return(
        <>
     {students.map((student) =>
    <div>
        <h1>Student Details:</h1>
        <h2>First Name:{student.firstName}</h2>
        <h2>Age:{student.age}</h2>
        <h2>Marks:{student.marks.join(",")}</h2>
        <hr/>
    </div>)}
    </> 
  ); 
} 
export default ArraysOfJsonObjectComponent;