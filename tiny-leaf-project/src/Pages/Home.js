import React from 'react';
import Hero from '../layout/Hero';

function Home() {
  return (
    <div>
      <h3>
          Hi 
      </h3>
      <Hero
        imageUrl={'../../images/image2022.png'}
        heading="Welcome to my website"
        subheading="This is the best place to be"
      />
    </div>
  )
}



export default Home
