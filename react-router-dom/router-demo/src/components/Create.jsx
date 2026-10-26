import React from 'react'
import {Link} from 'react-router-dom';

const Create = () => {
  
  return (
    <div>
      <Link to="/">Go to home</Link>&nbsp; 
        <Link to="/read/6">Go to read</Link>&nbsp; 
        <Link to="/update/software/6">Go to update</Link>&nbsp; 
        <Link to="/delete">Go to delete</Link>&nbsp; 
        <Link to="/readAll">Read All</Link>&nbsp; 
        <Link to="/goToA">Go To A</Link>&nbsp; 
        <Link to="/gotoB">Go To B</Link>
        <br/> 
     
        <div>I am in the create</div>
        </div>
  )
}

export default Create