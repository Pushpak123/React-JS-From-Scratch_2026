import logo from './logo.svg';
import './App.css';
import Level1Child from './components/Level1Child';

function App() {
  const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
  return (
        <h1>
        I am in the App beginning <br />
        <Level1Child obj={person}/>
        I am at the App end
        </h1>

  );
}

export default App;
