import React from 'react';
import './hero-image.css';

const Hero = ({ heading, subheading }) => {
  return (
    <div className="hero-image">
      <img src={"../images/d784e78d8e35e6cd17a7550cbf6139c7.jpeg"} alt="hero pic" />
      <div className="hero-text">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      </div>
     </div>
  );
};

export default Hero;

