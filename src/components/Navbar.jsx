/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import './Styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <div className="logo">Logo</div>
        <div className="search">
          <input type="text" placeholder="Search products..." />
        </div>
      </div>

      <div className="navbar_right">
        <div className="nav_item">Home</div>
        <div className="nav_item">Shop</div>
        <div className="nav_dropdown">
          <div className="nav_item">Categories</div>
          <div className="dropdown_content">
            <a href="#">Electronics</a>
            <a href="#">Clothing</a>
            <a href="#">Books</a>
          </div>
        </div>
        <div className="nav_item">Contact Us</div>
        <div className="nav_item">History</div>
      </div>
    </nav>
  );
};

export default Navbar;
