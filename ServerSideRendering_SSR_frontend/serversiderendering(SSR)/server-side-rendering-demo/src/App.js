import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/test/t1')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error('API error:', error);
        setMessage('Failed to load API response');
      });
  }, []);

  return (
    <div className="App">
      <h1>React SSR with Spring Boot</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App;