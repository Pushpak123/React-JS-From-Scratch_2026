import {useState} from 'react';
const DeleteObjectComponent = () =>{
    const [person1, setPerson1] =
useState({
name: "John",
age: 30,
gender: "male"
});

const changeData = () =>{
    const person2 = {...person1};
    delete person2.age;
    setPerson1(person2);
}
    return(
        <>
       {Object.entries(person1).map((entry) =><span key={entry}>{entry},</span>)}<br/>
       <button onClick={changeData}>Change</button>
        
        </>
    )
}
export default DeleteObjectComponent;