import React, { useEffect, useState } from "react";
import "./Hero.scss";
import banner1 from "../../assets/banner1.png";
function Hero() {
  return (
    <div className="hero">
      <div className="Slider">
        <div className="slide fade" style={{ display: "block" }}>
          <img src={banner1} alt="Slide 1" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
