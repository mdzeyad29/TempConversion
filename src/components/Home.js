import React, { useState } from 'react';

const Home = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? (value * 9/5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? ((value - 32) * 5/9).toFixed(2) : '');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Temperature Converter</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="celsius">
            Celsius:
          </label>
          <input 
            id="celsius"
            type="number" 
            value={celsius} 
            onChange={handleCelsiusChange} 
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fahrenheit">
            Fahrenheit:
          </label>
          <input 
            id="fahrenheit"
            type="number" 
            value={fahrenheit} 
            onChange={handleFahrenheitChange} 
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
