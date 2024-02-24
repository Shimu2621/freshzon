// import React from 'react'
// import { Button, container, Navbar } from 'react-bootstrap';
import { IoMdHeartEmpty } from "react-icons/io";
import { TiLockClosedOutline } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPersonOutline } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-wrapper container">
        <nav className="navbar-details">
          <div className="navbar-links container">
            {/* <button className="nav-btn">
              <span className="nav-span">&#8801;</span> All Departments{" "}
              <span className="nav-span">&#x25BC;</span>
            </button> */}

            <div className="navbar-links-menu">
              <button className="nav-btn">
                <span className="nav-span">&#8801;</span>
                <p className="text">All Departments</p>
                <span className="nav-span">&#x25BC;</span>
              </button>
              {/* {toggleMenu ? (
                <GiHamburgerMenu
                  color="white"
                  size={27}
                  onClick={() => setToggleMenu(true)}
                />
              ) : (
                <GiHamburgerMenu
                  color="red"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              )} */}
              <div
                className={
                  toggleMenu
                    ? "navbar-links-list mobile-menu-list"
                    : "navbar-links-list"
                }
              >
                <Link to="/" href="" className="navbar-links-item">
                  Home
                </Link>

                <Link to="/all" href="" className="navbar-links-item">
                  All
                </Link>

                <Link to="/vagetables" href="" className="navbar-links-item">
                  Vagetables
                </Link>

                <Link to="/fruits" href="" className="navbar-links-item">
                  Fruits
                </Link>

                <Link to="/breads" href="" className="navbar-links-item">
                  Breads
                </Link>

                <Link to="/returns" href="" className="navbar-links-item">
                  Returns & Orders
                </Link>

                <Link to="/contactUs" href="" className="navbar-links-item">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="nav-icon">
            <div className="icon">
              <MdPersonOutline />
            </div>
            <div className="icon">
              <IoMdHeartEmpty />
            </div>
            <div className="icon">
              <TiLockClosedOutline />
            </div>
          </div>
          <div
            className="hamburger-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "15px",
              }}
            >
              <GiHamburgerMenu size={30} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
