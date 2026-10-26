import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import  {Link} from 'react-router-dom';

function App() {
  useEffect(() =>{
const persons = [
{
  "id": '1',
   "name": "ramu", 
   "age": 20, 
   "address": "BTM"
},
{
  "id": '2', 
  "name": "ravi", 
  "age": 25, 
  "address": "BTM"
},
{
  "id": '3',
   "name": "rakesh",
    "age": 30, 
    "address": "JP Nagar"
}]

sessionStorage.setItem("data", JSON.stringify(persons));
},[]);
  return (
    <>
    <Link to="/create">Create</Link>&nbsp; &nbsp;
  <Link to="/readAll">Read All</Link>&nbsp; &nbsp;
    
    </>
  );
}

export default App;
