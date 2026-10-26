import logo from './logo.svg';
import './App.css';
import { NamesContext } from './components/ContextMain';
import Level1Child from './components/Level1Child';

function App() {
  const names = ['John', 'Jane', 'Doe', 'Alex'];

  return (
    <>

        <NamesContext.Provider value={names}>
        <Level1Child/>
        </NamesContext.Provider>
    
    </>

  );
}

export default App;
