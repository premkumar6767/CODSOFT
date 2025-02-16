import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Alumni Association Platform</div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#events">Events</a></li>
          <li><a href="#mentoring">Mentoring</a></li>
          <li><a href="#newsroom">Newsroom</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <button className="login-btn">Login</button>
        </ul>
          
        
      </nav>
    </header>
  );
};

export default Header;