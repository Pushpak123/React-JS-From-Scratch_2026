import {useState} from 'react';
const SpreadComponent = () =>{
    const [person1, setPerson1] =
useState({
name: "John",
age: 30,
gender: "male"
});
const addData = () =>{
    const person2 ={...person1,weight:70};
    setPerson1(person2);
}


    return(
        <>
        {Object.entries(person1).map((entry) =><span key={entry}>{entry},</span>)}<br/>
        <button onClick={addData}>Add</button>
      
        </>
    )
}
export default SpreadComponent;