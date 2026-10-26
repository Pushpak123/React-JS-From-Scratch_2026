import axios from 'axios';
import {useState} from 'react';
export default function Test12(){

    const [firstName, setFirstName] = useState("") 
    const [lastName, setLastName] = useState("") 
    const [age, setAge] = useState(""); 
    const [firstNameError, setFirstNameError] = useState("") 
    const [lastNameError, setLastNameError] = useState("") 
    const [ageError, setAgeError] = useState("")

     const submitHandler = (event) =>{
       event.preventDefault(); 
       if(firstName === "")
        { 
            setFirstNameError("First Name is required") 

        }
        else
            { setFirstNameError("")

             } 
             if(lastName === "")
                { 
                setLastNameError("Last Name is required")
             }
              else
                { 
                setLastNameError("") 

             }
              if(age === ""){ 
                setAgeError("Age is required") 
            } else
                { 
                    setAgeError("")

                 } 
                }
                
                
                 if(firstName !== "" && lastName !== "" && age !== 0)
                    { 
                        console.log(firstName, lastName, age) 
                        const person = {firstName, lastName, age}; 
                        console.log(person) 
                        axios.post('http://localhost:8080/test/t12', person)
                         .then(response => response.data) 
                         .then(data => console.log(data)) 
                        .catch(error => console.log(error))
     }
    
    
    return(
        <>
        First Name : <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/> {firstNameError &&<span style={{color: "red"}}>{firstNameError}</span>} <br /> 
        Last Name : <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/> {lastNameError &&<span style={{color: "red"}}>{lastNameError}</span>} <br />
         Age : <input type="text" value={age} onChange={(event) => setAge(event.target.value)}/> {ageError &&<span style={{color: "red"}}>{ageError}</span>} <br /> 
        <button onClick={submitHandler} type="button">Submit</button>
        </>
    )
}

