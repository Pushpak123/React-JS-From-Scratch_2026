import React from 'react'
import {Link} from 'react-router-dom';

const Delete = () => {
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
    <div>I am in the delete</div>
    </div>
  )
}

export default Delete;