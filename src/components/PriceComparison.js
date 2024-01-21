// src/components/PriceComparison.js
import React, { useState } from 'react';

const PriceComparison = ({ productName }) => {
  const [comparisonResults, setComparisonResults] = useState([]);

  const comparePrices = async () => {
    try {
      // Example: Use a free product search API like "PriceAPI" (replace with your API key)
      const response = await fetch(
        `https://api.priceapi.com/products?keyword=${productName}&key=YOUR_API_KEY`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Process the API response and update the state with comparison results
      const results = data?.offers || [];
      setComparisonResults(results);
    } catch (error) {
      console.error('Error fetching price comparison data:', error.message);
    }
  };

  return (
    <div>
      <h2>Price Comparison</h2>
      <button onClick={comparePrices}>Compare Prices</button>

      <ul>
        {comparisonResults.map((result) => (
          <li key={result.id}>
            {result.shop.name}: {result.price} {result.currency}
          </li>
        ))}
      </ul>

      {comparisonResults.length === 0 && <p>No price comparison results available.</p>}
    </div>
  );
};

export default PriceComparison;
