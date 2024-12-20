import React from "react";
import "../style/Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container py-5">
        <img src="#" alt="LOGO" />
        <div className="footer-social-media">
          <div className="footer-image">
            <FaFacebookF/>
          </div>
          <div className="footer-image">
            <FaXTwitter/>
          </div>
          <div className="footer-image">
            <FaInstagram/>
          </div>
          <div className="footer-image">
            <FaLinkedinIn/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
