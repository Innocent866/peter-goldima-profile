import React from "react";
import "../style/about.css";
import { aboutUs } from "../component/dbase/About";
import { Link } from "react-router-dom";
import realEstateVideo from "../assets/real-estate-video.mp4";

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
                <div className="about-btn">
                  <Link
                    className="about-btn text-decoration-none text-white"
                    to="/contact"
                  >
                    Contact now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="about-video">
          <video autoPlay muted loop width="100%" poster={realEstateVideo}>
            <source src={realEstateVideo} type="video/mp4" />
            Your browser does not support the video tag.
            <a href="../assets/real-estate video.mp4">
              Download the video
            </a>{" "}
            instead.
          </video>

          <p className="text-center">
            At Mouth Throne Limited, our client-first approach ensures
            transparency, professionalism, and excellence in all our dealings.
            Whether you're looking to buy your dream home, find the perfect
            rental, or maximize the value of your investments, we are here to
            guide you every step of the way. Our experienced team leverages
            cutting-edge technology and a wealth of industry expertise to stay
            ahead of market trends, making property decisions seamless and
            rewarding for our clients. Partner with us to discover
            opportunities, unlock the potential of your real estate assets, and
            achieve your property goals with confidence and ease.
          </p>
          <div className="about-btn">
            <Link
              className="about-btn text-decoration-none text-white"
              to="/contact"
            >
              Contact now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
