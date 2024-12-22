import React from "react";
import "../style/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container py-5">
        <img src="#" alt="LOGO" />
        <h4 className="text-center mt-5 mb-3 text-white">
          Social Media Handles
        </h4>
        <div className="footer-social-media">
          <div className="footer-image">
            <FaFacebookF />
          </div>
          <div className="footer-image">
            <FaXTwitter />
          </div>
          <div className="footer-image">
            <FaInstagram />
          </div>
          <div className="footer-image">
            <FaLinkedinIn />
          </div>
        </div>
        <h4 className="text-center mt-5 mb-3 text-white">Easy Contact</h4>
        <div>
          <Link
            to="mailto:pgoldima@yahoo.com"
            target="blank"
            className="d-flex align-items-center justify-content-center"
          >
            pgoldima@yahoo.com
          </Link>
          <Link to="tel:08184204450" className="d-flex my-4 align-items-center justify-content-center">
            08184204450
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
