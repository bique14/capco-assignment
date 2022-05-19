import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch('http://localhost:3001/');
      const result = await response.json();

      console.log(result);
    };

    fetching();
  }, []);

  return (
    <div className="bg-red-200 text-green-600">Hello world from Frontend</div>
  );
}

export default App;
