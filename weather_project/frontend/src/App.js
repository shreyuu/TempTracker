import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './index.css'


function App() {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios.get('api/temperature/')
    .then(response => {
      setTemperature(response.data.temperature);
      setCity(response.data.city);
    })
    .catch(error => {
      console.error('Error fetching temperature:', error);      
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700">Current Temperature</h1>
        {city && <h2 className="text-2xl mt-2 text-gray-600">City: {city}</h2>}
        {temperature !== null ? (
          <p className="text-3xl mt-4 text-gray-800">{temperature}°C</p>
        ) : (
          <p className="text-xl mt-4 text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
