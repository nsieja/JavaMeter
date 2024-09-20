import './App.css';

import React, { useState } from 'react';

function CaffeineCalculator() {
  const [caffeine, setCaffeine] = useState(60);
  const [drinkTime, setDrinkTime] = useState(10);
  const [projectionTime, setProjectionTime] = useState(4);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call backend API (Django) with the form data
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
    </div>
  );
}
