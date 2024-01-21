// src/components/Categories.js
import React from 'react';
import './Styles.css';

const Categories = () => {
  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Kitchen',
    'Toys & Games',
    // Add more categories as needed
  ];

  return (
    <div className="categories-container">
    <h2 className="categories-heading">Shop by Categories</h2>
    <div className="category-list">
        {categories.map((category, index) => (
        <div key={index} className="category-item">
            <img
              src={`https://via.placeholder.com/100x100?text=${category}`} // Replace with category-specific image URL
            alt={category}
            className="category-image"
            />
            <p className="category-name">{category}</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default Categories;
