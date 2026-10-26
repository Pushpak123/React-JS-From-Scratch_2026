import logo from './logo.svg';
import './App.css';

import {useState} from 'react';
import ReadAll from './components/ReadAll';
import { BookContext } from './components/BookContext';


function App() {
  const [books, setBooks] = useState([ 
    {
       id: 1, title: 'Harry Potter', 
       author: 'J.K. Rowling',
        price: 10

     },
     { id: 2, 
      title: 'The Hobbit', 
      author: 'J.R.R. Tolkien',
       price: 15 
      }, 
     { 
      id: 3,
       title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
         price: 20
         }
         ] );
  return (
        <BookContext.Provider value={{ books, setBooks }}>
                    <div className="App">
                        <ReadAll />
                    </div>
        </BookContext.Provider>
        
    );
}

export default App;
