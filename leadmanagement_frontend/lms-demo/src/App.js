import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
  <>
  <Link to="/readAll"> Read All Leads </Link> &nbsp;&nbsp; 
  <Link to="/create"> Create New Lead </Link>
  </>
  );
}

export default App;
