import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"
import HeroPage from "./pages/HeroPage";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
    <div className="app">
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<HeroPage/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
    </div>
  );
};

export default App;
