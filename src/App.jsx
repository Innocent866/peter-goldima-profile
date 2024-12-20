import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"
import HeroPage from "./component/HeroPage"
import AboutPage from "./component/AboutPage"
import ServicePage from "./component/Service"
import ContactPage from "./component/Contact"
import ProjectPage from "./component/Project"


const App = () => {
  return (
    <div>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<HeroPage/>} />
              {/* <Route path="/AboutPage" element={<AboutPage/>} /> */}
              <Route path="#" element={<ServicePage/>} />
              <Route path="#" element={<ContactPage/>} />
              <Route path="#" element={<ProjectPage/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
};

export default App;
