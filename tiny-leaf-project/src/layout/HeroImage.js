import React from 'react';
import HeroImage from './HeroImage';

function App() {
  return (
    <div className="App">
      <HeroImage
        imageUrl={'../../images/image2022.png'}
        heading="Welcome to my website"
        subheading="This is the best place to be"
      />
    </div>
  );
}

export default App;
