import {useState} from 'react';
const ObjectAssignComponent = () =>{
    const [person1, setPerson1] =
useState({
name: "John",
age: 30,
gender: "male"
});
const [person2, setPerson2] =
useState({
weight: 56.89,
height: 5.4
});

// const person3 = Object.assign(person1,person2);
const person3 = Object.assign({}, person1, person2);
    return(
        <>
        {Object.entries(person1).map((entry) =><span key={entry}>{entry},</span>)}<br/>
        {Object.entries(person2).map((entry) =><span key={entry}>{entry},</span>)}<br/>
        {Object.entries(person3).map((entry) =><span key={entry}>{entry},</span>)}<br/>

         </>
    )
}
export default ObjectAssignComponent;