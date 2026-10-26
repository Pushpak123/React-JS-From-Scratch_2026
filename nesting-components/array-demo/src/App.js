import logo from './logo.svg';
import './App.css';
import Level1Child from './components/Level1Child';

function App() {
  const names = ["ramu", "sita", "gita", "hari "]
  return (
    <>
      <h1>
      I am in the App beginning <br />
      <Level1Child allNames={names}/>
      I am at the App end
      </h1>
    </>

  );
}

export default App;
