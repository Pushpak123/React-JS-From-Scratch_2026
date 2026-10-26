import logo from './logo.svg';
import './App.css';
import Level1Child from './components/Level1Child';

function App() {
  const test = () =>{
    console.log('from test');
  }
  return (
    <>
    <h1>
    I am in the App beginning <br />
    <Level1Child f1={test}/>
    I am at the App end
    </h1>
    </>
 
  );
}

export default App;
