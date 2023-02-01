import React, { useState } from "react";

import "../layout/GallerySpin.css"


import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"

const GallerySpin = ({ sign }) => {
  const [angle, setAngle] = useState(0);

  const handleSpin = () => {
    sign ? setAngle(angle - 45) : setAngle(angle + 45);
  };

  return (
    <>
      <base href="" />
      <div id="carousel">
        <figure id="spinner" style={{
          transform: `rotateY(${angle}deg)`,
          WebkitTransform: `rotateY(${angle}deg)`,
          MozTransform: `rotateY(${angle}deg)`
        }}>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </figure>
      </div>
      <span style={{ float: "left" }} className="ss-icon" onClick={() => handleSpin("-")}>&lt;</span>
      <span style={{ float: "right" }} className="ss-icon" onClick={() => handleSpin("")}>&gt;</span>
    </>
  );
};

export default GallerySpin;




