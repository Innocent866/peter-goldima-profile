import React from "react";
import "../style/hero.css";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import About from "./AboutPage";
import Workwithus from "./Workwithus";
import DeliveredProjectPage from "./DeliveredProjectPage";
import Comment from "./Comment";
import Contact from "./Contact";
import Footer from "./Footer";

const HeroPage = () => {
  return (
    <div>
      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1 className="h1-large">
                  Mouth Throne Group Excellence Across Industries
                </h1>
                <Link
                  className="btn-solid-lg page-scroll text-decoration-none"
                  href="#about"
                >
                  Discover
                </Link>
                <Link
                  className="btn-outline-lg page-scroll text-decoration-none"
                  href="#contact"
                >
                  <IoMdContact /> Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroPage;
