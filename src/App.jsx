import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"



const App = () => {
  return (
    <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
};

export default App;
