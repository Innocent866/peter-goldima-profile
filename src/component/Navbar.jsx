import { Link } from "react-router-dom"
import "../style/navbar.css"
import React from 'react'
import Canvas from "./Canvas"

const Navbar = () => {
  return (
    <div className="nav-main-div">    
      <div className="container nav">
      <div>
        <img src="#" alt="LOGO" />
      </div>
      <div>
        <div className="d-lg-none">
        <Canvas/>
        </div>
      <ul className="nav-ul">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Service</Link>
          </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      </div>
      </div>
    </div>
    // </div>

  )
}

export default Navbar