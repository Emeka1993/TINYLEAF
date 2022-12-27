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
       <div/>

      <div></div>
        style={{
        backgroundImage: `url(${})`,
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Your content goes here */}
    </div>
  );
};

export default Layout;
