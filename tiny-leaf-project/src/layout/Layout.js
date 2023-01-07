import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import './Header.css';


const Layout = () => {
  return (
    <div>
      
      <header className="header">
        <nav className="nav" title="Main navigation">
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
        </nav>
      </header>
    </div>
  );
};

export default Layout;

