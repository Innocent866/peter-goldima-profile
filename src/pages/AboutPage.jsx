import React from "react";
import "../style/about.css";
import { aboutUs } from "../component/dbase/About";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f7f9fb" }}>
      <div className="about-title">
        <h1 className="fw-bold text-center p-5">ABOUT US</h1>
      </div>
      <div className="container py-5">
        <div className="about-us-container">
          {aboutUs.map((item, index) => (
            <div
              key={index}
              className={item.style ? "about-div" : "about-div-style"}
            >
              <div className="about-img-div">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="about-text">
                <h2 className="about-us-title">{item.title}</h2>
                <p className="about-us-description">{item.description}</p>
                <button className="about-btn">
                  <Link className="text-decoration-none text-white" to="/contact">
                  Contact now
                  </Link>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
