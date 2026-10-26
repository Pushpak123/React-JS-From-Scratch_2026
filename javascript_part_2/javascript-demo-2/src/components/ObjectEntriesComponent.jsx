import {useState} from 'react';

const ObjectEntriesComponent = () =>{
    const [person, setPerson] =
useState({
name: "John",
age: 30,
gender: "male"
});

const allEntries = Object.entries(person);
    return(
        <>
        {allEntries.join(',')}<br/>
        {allEntries.map((entry) =><span key={entry}>{entry},</span>)}<br/>
        {allEntries.map((entry) =><span key={entry}>{entry[0]} : {entry[1]},</span>)}<br/>
        {allEntries.map(([key,value]) =><span key={key}>{key} : {value},</span>)}<br/>
        
        </>
    )
}
export default ObjectEntriesComponent;