import React from 'react';
import heroImage from "../images/heroImage.jpeg"
import "../layout/Hero.css"


const Hero = ({img, text}) => {
  return (
    <div className='hero'>
      <img src={img} alt="" />
        <h1>{text}</h1>
    </div>
  )
}

export default Hero;


