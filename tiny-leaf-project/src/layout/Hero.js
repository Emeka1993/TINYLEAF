import React from 'react';

const Hero = ({ imageUrl, heading, subheading }) => {
  return (
    <div className="hero-image">
      <img src={imageUrl} alt="hero image" />
      <div className="hero-text">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      </div>
     </div>
  );
};

export default Hero;
