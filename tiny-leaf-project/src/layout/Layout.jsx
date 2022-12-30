import React from 'react';
import './Nav.css';
import './Header.css';


const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="/home">Home</a>
          <a href="/Menu">Menu</a>
          <a href="/Reservations">Reservations</a>
        </nav>
      </header>
    </div>
    
  );
};

export default Layout;

