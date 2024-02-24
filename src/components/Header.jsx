// import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

// import Button from 'react-bootstrap/Button';

const Header = () => {
  // const isAuthenticated = false;

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  // };

  return (
    <div className="header">
      <div className="header-wrapper container">
        <Link to="/" className="header-logo" style={{ textDecoration: "none" }}>
          <h4>
            Fresh<span>z</span>on
          </h4>
          <div className="header-icon">
            <span className="icon">
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
            <p style={{ lineHeight: "5px" }}>stay with us!</p>
            <span className="icon">
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
        </Link>

        <div className="search-input">
          <input className="text" type="text" placeholder="Search product" />
          <button type="button" className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="header-links">
          {/* {isAuthenticated ? (
            <p onClick={handleLogout} className="logout-btn">
              Logout
            </p>
          ) : (
            <Link to={"/signin"}>
              <button className="signin-btn">Signin</button>
            </Link>
          )} */}
          <Link to={"/signin"}>
            <button className="signin-btn">Signin</button>
          </Link>

          <Link to={"/signup"}>
            <button className="signup-btn">Signup</button>
          </Link>
        </div>

        <div className="shopping-icon">
          <p>
            <span>
              <MdAddShoppingCart />
            </span>{" "}
            Cart{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
