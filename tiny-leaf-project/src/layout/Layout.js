import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './leaf.css';
import './Nav.css';

const Layout = () => {
  return (
    <>
    <header style={{ backgroundColor: '#86907D', padding: '40px' }}>...</header> 
    <header>
    <nav>
    <nav className="right-align">
      {/* Nav content goes here */}
    </nav>
        <ul>
          <li>
           <Link to="/Home">Home</Link>
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

    
      <footer>
        Footer
      </footer>
      <Outlet />
    </>
  )
};

export default Layout;