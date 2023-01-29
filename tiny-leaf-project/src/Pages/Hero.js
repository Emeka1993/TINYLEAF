import React from 'react';
import "../layout/Hero.css"


const Hero = ({img, text}) => {
  return (
    <div className='hero'>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap" rel="stylesheet"/>
      <img src={img} alt="" />
        <h1>{text}</h1>
    </div>
  )
}

export default Hero;


