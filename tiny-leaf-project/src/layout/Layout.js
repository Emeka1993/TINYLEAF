import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import './Header.css';
import Hero from '../Pages/Hero';


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
      <Hero 
        imageUrl={'../images/d784e78d8e35e6cd17a7550cbf6139c7.jpeg'}
        heading="Welcome to my website"
        subheading="This is the best place to be"
      />
    </div>
  );
};

export default Layout;

