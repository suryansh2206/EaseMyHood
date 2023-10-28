import React from "react";
import "./Navbar.css";
import cart from "./assets/cart.png"; // Import your downloaded image
// import location from './assets/location_icon.png'
import search from "./assets/search.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>easemyhood</h2>
        </div>
        <div className="location">
          <h2>Location</h2>
          <select name="location">
            <option value="Coimbatore">Coimbatore</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <div className="categories">
          <a href="/" className="shopby">
            Shop by
          </a>
          <a href="/" className="cat">
            Category
          </a>
        </div>
        <div className="search">
          <input type="search" placeholder="Search your item" />
          <a href="/" className="searchBtn">
            <img src={search} alt="search" className="src1" />
          </a>
        </div>
        <div className="login">
          <NavLink to="/signin">Login</NavLink>
        </div>
        <div className="cart">
          <a href="/">
            <img src={cart} alt="your cart" />
          </a>

          <div className="MyCart">
            <a href="/">MyCart</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
