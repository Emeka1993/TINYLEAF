import React from 'react';
import '../layout/Globals.css';
import '../layout/Hero.css';



import blends from '../images/blends.jpeg'
import teapot from '../images/teapot.png'


function Home() {
  return (
    <div>
      <body>
      <div className="about">
        <section className="about-text">
          <h2>Our blends</h2>
          <p className="paragraph-about-text"> 
            We make our very own Tiny Leaf blends right here in the tea house,
            offering new flavours according to the season. We source all our
            produce sustainably and make sure the hands that laboured for our
            flavoursome cups were rewarded fairly.
          </p>
          <hr className="horizontal-line" /> 
          <h2 className="subheading-about-text">Hand-picked and sustainable</h2> 
        </section>
        <section className="about-img">
          <img src={blends} alt="blendpicture" />
        </section>
      </div> 
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
      <img src={teapot} alt="teapot" />
      <div className="flowers-image"></div>
    </section>
  </body>
    </div>

  );
}




export default Home

