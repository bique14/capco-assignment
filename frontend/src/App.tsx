import React, { useEffect } from 'react';
import { BACKEND_URL } from './constant';
import './App.css';

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
    <div className="bg-red-200 text-green-600">!Hello w1orld from Frontend</div>
  );
}

export default App;
