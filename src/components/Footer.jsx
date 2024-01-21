import React from 'react'
import "./Styles.css";


const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Connect with Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>&copy; 2024 Your Ecommerce. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;