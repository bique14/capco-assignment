import React, { useEffect } from 'react';
import './App.css';
import { BACKEND_URL } from './constant';

function App() {
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(`${BACKEND_URL}`);
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
