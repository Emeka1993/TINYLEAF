import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import './Header.css';
import HeroImage from './Hero';


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
      <HeroImage 
        imageUrl={'../../images/image2022.png'}
        heading="Welcome to my website"
        subheading="This is the best place to be"
      />
    </div>
  );
};

export default Layout;

