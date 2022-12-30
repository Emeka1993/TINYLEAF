import React from 'react';
import HeroImage from './Hero';

function Hero() {
  return (
    <div className="hero-image">
      <HeroImage
        imageUrl={'../../images/image2022.png'}
        heading="Welcome to my website"
        subheading="This is the best place to be"
      />
    </div>
  );
}

export default Hero;
