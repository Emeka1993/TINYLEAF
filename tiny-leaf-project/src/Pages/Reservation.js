import React from 'react'
import Hero from './Hero';
import Reserve from '../images/Reserve1.jpg'
import ReserveForm from '../layout/ReserveForm';
import Background from '../images/Background.png';
import '../layout/Globals.css'



    const Reservation = ({img, text}) => {
      return (
      <div>
       <Hero img={Reserve} text="Reservation" />;
       <h1>{text}</h1>
       <ReserveForm />
       <Hero img={Background} text="No storms in our tea cups" className="blends" />;
       <h3>{"We make our blends with love and care, so you can taste aromas from across the globe right here in our tea house"}</h3>
      />
      </div>
     
      )
    };


export default Reservation
