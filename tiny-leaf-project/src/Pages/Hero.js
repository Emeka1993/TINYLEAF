import React from 'react';
import heroImage from "../images/heroImage.jpeg"
import "../layout/Hero.css"


const Hero = ({img, text}) => {
  return (
    <div className='hero'>
      <img src={heroImage} alt="" />
        <h1>{"A Flavour For All Seasons"}</h1>
    </div>
  )
}

export default Hero;