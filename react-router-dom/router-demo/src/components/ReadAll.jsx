import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
const ReadAll = () => {

  const navigate = useNavigate();

  const gotoDelete = () =>{
    navigate('/delete');
  }

  return (
    //   <div>
    //       <Link to="/">Go to home</Link>&nbsp; 
    //         <Link to="/read">Go to read</Link>&nbsp; 
    //         <Link to="/update">Go to update</Link>&nbsp; 
    //         <Link to="/delete">Go to delete</Link>&nbsp; 
    //         <Link to="/readAll">Read All</Link>&nbsp; 
    //         <Link to="/goToA">Go To A</Link>&nbsp; 
    //         <Link to="/gotoB">Go To B</Link>
    //         <br/> 
    // <div>i am in the readAll</div>
    // </div>

      <h1> 
            I am in the Read All <br /> 
            <button onClick={gotoDelete}>Delete</button> 
        </h1> 
  )
}

export default ReadAll