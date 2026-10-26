import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import Level1Child from './components/Level1Child';

function App() {
  return (
    <>
    {/* <h1>I am in the App beginning <br />
    <Child1 /> <br/>
    I am at the App end
    </h1> */}

    <h1>
    I am in the App beginning <br />
    <Level1Child />
    I am at the App end
    </h1>


    </>
  );
}

export default App;
