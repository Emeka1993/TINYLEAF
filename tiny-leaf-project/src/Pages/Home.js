import React from 'react';
import heroImage from '../images/heroImage.jpeg'
import Hero from './Hero';
import Navbar from '../layout/Navbar';
import '../layout/Globals.css';

function Home() {
  return (
    <div>
      <body>
    <section className="grid-container">
      <div className="green-box"></div>
      <div className="text-box">
        <h3>Wise Leaf evening</h3>
        <p>
          Bringing together those with curious minds, speakers and observers
          alike, our Wise Leaf events are a melting pot to share, reflect and
          contemplate.
        </p>
      </div>
      <div className="teapot-image"></div>
      <div className="flowers-image"></div>
    </section>
  </body>
    </div>
  );
}


export default Home

