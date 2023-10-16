import React from "react";
import "./Navbar.css";
import cart from './assets/cart.png'; // Import your downloaded image
import location from './assets/location_icon.png'
import search from './assets/search.png'

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            easemyhood
          </h2>
        </div>
        <div className="home">
          <a href="/">Home</a>
        </div>
          <div className="location">
              <a href="/"><img src={location} alt="location" /></a>
          </div>
            <div className="categories">
              <a href="/" className="cat">Categories</a>
            </div>
            <div className="search">
              <input type="search" placeholder="Search your item" />
              <a href="/" className="searchBtn"><img src={search} alt="search" className="src1" /></a>
              </div>
            <div className="login">
              <a href="/"> <button type="button">Login</button></a>
              </div>
            <div className="cart">
              <a href="/">
              <img src={cart} alt="your cart" />
              </a>
              </div>
      </nav>
    </>
  );
};

export default Navbar;
