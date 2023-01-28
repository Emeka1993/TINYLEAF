import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from '../Pages/Home';


const NavBar = () => {
  return (
    <div className="navbar">
      <section className='nav-logo'>
      </section>
      <section>
        <nav className="nav-links">
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
      </section>
    </div>
  );
}

export default NavBar;