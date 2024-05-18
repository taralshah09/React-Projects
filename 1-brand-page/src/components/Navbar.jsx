import logo from "../images/brand_logo.png"
import { useState } from "react";
import '../index.css'
function Navbar() {
    const menu = document.getElementById("menu-icon");
    const sidebar = document.querySelector(".sidebar")
    
    
   

  return (
    <header>
        <nav>
            <img src={logo} alt="logo" />
            <ul className="nav-links">
                <li className="nav-links-items"><a href="#">Menu</a></li>
                <li className="nav-links-items"><a href="#">Loaction</a></li>
                <li className="nav-links-items"><a href="#">About </a></li>
                <li className="nav-links-items"><a href="#">Contact</a></li>
            <button id="nav-btn">Login</button>
            </ul>
            <ul className="nav-links sidebar">
            <button id="close-icon" style={{border:"none",outline:"none",}}  >
            <i className="fa-solid fa-xmark" style={{color: "#000000",fontSize:"25px",}}></i>
            </button>
                <li className="nav-links-items"><a href="#">Menu</a></li>
                <li className="nav-links-items"><a href="#">Loaction</a></li>
                <li className="nav-links-items"><a href="#">About </a></li>
                <li className="nav-links-items"><a href="#">Contact</a></li>
            <button id="nav-btn">Login</button>
            </ul>
            <button id="menu-icon" style={{border:"none",outline:"none",}}  >
            <i className="fa-solid fa-bars" style={{color: "#000000",fontSize:"25px",}}></i>
            </button>
        </nav>
    </header>
  )
}

export default Navbar