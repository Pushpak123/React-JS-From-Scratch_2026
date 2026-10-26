import logo from './logo.svg';
import './App.css';
import Level1Child from './components/Level1Child';

function App() {
          const persons = [{
        firstName: 'John',
        lastName: 'Doe',
        age: 30
          },
        {
        firstName: 'Mohan',
        lastName: 'Babu',
        age: 32
        }]

  return (
        <h1>
        I am in the App beginning <br />
        <Level1Child data={persons}/>
        I am at the App end
        </h1>
  );
}

export default App;
