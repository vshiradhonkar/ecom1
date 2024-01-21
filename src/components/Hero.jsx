/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          src="https://via.placeholder.com/600" // Replace with your actual image URL
          alt="Hero image"
          className="hero-image"
        />
      </div>
      <h2 className="hero-text">Discover our unique products.</h2>
      <button className="hero-button">Explore Now</button>
    </section>
  );
};

export default Hero;
