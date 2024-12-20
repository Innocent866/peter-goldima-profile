import React from "react";
import "../style/navbar.css";
import Canvas from "./Canvas";
import HeroPage from "./HeroPage";
import About from "./AboutPage";
import Workwithus from "./Workwithus";
import Comment from "./Comment";
import Contact from "./Contact";
import Footer from "./Footer";
import DeliveredProjectPage from "./DeliveredProjectPage";

const Navbar = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="nav-main-div">
        <div className="container nav">
          <div>
            {/* Logo */}
            <img src="path-to-logo.png" alt="LOGO" />
          </div>
          <div>
            {/* Responsive Canvas */}
            <div className="d-lg-none d-md-none">
              <Canvas />
            </div>
            <ul className="nav-ul">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <section id="home">
          <HeroPage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Workwithus />
          <DeliveredProjectPage />
        </section>
        <section id="comments">
          <Comment />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Navbar;
