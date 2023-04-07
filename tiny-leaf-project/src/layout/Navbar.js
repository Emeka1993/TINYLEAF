import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="navbar">
      <section className='nav-logo'>
      </section>
      <section>
        <nav className={`nav-links ${showMenu ? 'show-menu' : ''}`}>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/reservation">
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
