import React from "react";
import "../style/about.css";
import { aboutUs } from "./dbase/About";

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold my-5">ABOUT US</h1>
      <div className="about-us-container">
        {aboutUs.map((item, index) => (
          <div key={index} className={item.style ? "about-div" : "about-div-style"}>
            <div className="about-img-div">
            <img src={item.image} alt={item.title} />
            </div>
           <div className="about-text">
           <h2 className="about-us-title">{item.title}</h2>
           <p className="about-us-description">{item.description}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
