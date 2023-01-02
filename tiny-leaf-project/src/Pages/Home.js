import React from 'react';
import Hero from './Hero.js';
import './hero-image.css'


function Home() {
  return (
    <div>
      <h3>
          Hi 
      </h3>
      <header>
      <Hero
        imageUrl={'../images/d784e78d8e35e6cd17a7550cbf6139c7.jpeg'}
        className='hero-image'
        heading="Welcome to my website"
        subheading="This is the best place to be"
      />
      </header>
    </div> 
  )
}



export default Home
