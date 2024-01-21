// src/components/Testimonials.js
import React from 'react';
import './Styles.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Company ABC',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Marketing Manager, XYZ Corp',
      comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="testimonial-comment">{testimonial.comment}</p>
            <div className="testimonial-author">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
