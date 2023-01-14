import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/newlogo.png";
import "./Header.css";



function Header() {
  return (
    <div>
      <header  className="header">
        
        <img className="newlogo" src={logo} alt="" srcSet="" />
        <nav>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Reservation">Reservation</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
