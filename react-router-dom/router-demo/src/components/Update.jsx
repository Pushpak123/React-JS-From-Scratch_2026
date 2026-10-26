import React from 'react'
import {Link,useParams} from 'react-router-dom';
const Update = () => {
  const {dept,id} = useParams();
  return (
      <div>
          <Link to="/">Go to home</Link>&nbsp; 
            <Link to="/read">Go to read</Link>&nbsp; 
            <Link to="/update">Go to update</Link>&nbsp; 
            <Link to="/delete">Go to delete</Link>&nbsp; 
            <Link to="/readAll">Read All</Link>&nbsp; 
            <Link to="/goToA">Go To A</Link>&nbsp; 
            <Link to="/gotoB">Go To B</Link>
            <br/> 
    <div>    <h1>I am in the Update, dept: {dept} and id : {id}</h1> </div>
    </div>
  )
}

export default Update