import React from 'react'
import Hero from './Hero';
import Reserve from '../images/Reserve1.jpg'
import ReserveForm from '../layout/ReserveForm';
import Background from '../images/Background.png';
import '../layout/Reserve.css'

const Reservation = ({ img, text }) => {
  return (
    <div>
      <Hero img={Reserve} text="Reservation" />
      <h1>{text}</h1>
      <ReserveForm />
      <div className="tea-info">
        <Hero img={Background} text="No storms in our tea cups" className="blends" />
        <h3 className="tea-info-text">We make our blends with love and care, so you can taste aromas from across the globe right here in our tea house</h3>
        <button className="menu-button">See what’s on the menu</button>
        <div className="new-blends" />
      </div>
    </div>
  );
};

export default Reservation;

