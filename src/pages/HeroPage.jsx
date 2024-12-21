import React from "react";
import "../style/hero.css";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import Workwithus from "../component/Workwithus";
import DeliveredProjectPage from "../component/DeliveredProjectPage";
import Comment from "../component/Comment";


const HeroPage = () => {
  return (
    <div style={{ backgroundColor: "#f7f9fb" }}>
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
                  to="/about"
                >
                  Discover
                </Link>
                <Link
                  className="btn-outline-lg page-scroll text-decoration-none"
                  to="/contact"
                >
                  <IoMdContact /> Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Workwithus/>
      <DeliveredProjectPage/>
      <Comment/>
    </div>
  );
};

export default HeroPage;
