import './App.css';
import React, { useState } from 'react';

function JavaMeter() {
  const [caffeine, setCaffeine] = useState(60);
  const [drinkTime, setDrinkTime] = useState(10);
  const [projectionTime, setProjectionTime] = useState(4);
  const [result, setResult] = useState(null); // State to hold API response

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data to send
    const data = {
      caffeine_amount: parseInt(caffeine), // Convert to integer
      drink_time: parseInt(drinkTime),      // Convert to integer
      projection_time: parseInt(projectionTime) // Convert to integer
    };

    // Call backend API (Django) with the form data
    fetch('http://127.0.0.1:8000/api/caffeine/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setResult(data); // Update state with the response data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Caffeine Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Caffeine Amount (mg):
          <input type="number" value={caffeine} onChange={(e) => setCaffeine(e.target.value)} />
        </label>
        <label>
          Time to Consume (min):
          <input type="number" value={drinkTime} onChange={(e) => setDrinkTime(e.target.value)} />
        </label>
        <label>
          Time to Project (hrs):
          <input type="number" value={projectionTime} onChange={(e) => setProjectionTime(e.target.value)} />
        </label>
        <button type="submit">Run Calculation</button>
      </form>

      {result && (
        <div>
          <h2>Results:</h2>
          {/* Display the results returned from the API */}
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default JavaMeter;
