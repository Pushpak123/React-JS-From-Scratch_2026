import logo from './logo.svg';
import './App.css';
import Level1Child from './components/Level1Child';
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(10);
  const f1 = () =>{
    setCount(count+1);
  }
  return (
        <h1>
        I am in the App beginning {count}<br />
        <Level1Child arg1={count} arg2 = {f1}/>
        <button onClick={f1}>Button in App</button>
        I am at the App endI am at the App end
        </h1>
 
  );
}

export default App;
