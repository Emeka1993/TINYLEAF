import React from 'react';
import heroImage from "../images/heroImage.jpeg";
import '../layout/Header.css';

const Hero = ({ heading, subheading }) => {
  return (
   <div>/
     <img className="w-1/5" src={heroImage} alt="hero pic"  />
     <div className="p-1">
       <h1 className="text-1g font-semibold">{heading}</h1>
       <p className="text-neutral-500">{subheading}</p>
     </div>
   </div>
  );
};


export default Hero;


