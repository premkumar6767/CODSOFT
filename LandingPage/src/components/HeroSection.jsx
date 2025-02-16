import React from "react";
import "./HeroSection.css";
import students_celeb from "./images/students_celeb.jpeg";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Join With Our <span className="alumnus-text">Alumnu<span className="cap-container">s</span></span> Now</h1>
        <p>Lorem ipsum text placeholder for description about joining the alumni.</p>
        <div className="hero-buttons">
          <button className="join-btn">Join Us</button>
          <button className="about-btn">About Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={students_celeb} alt="Graduation Celebration" />
      </div>
    </section>
  );
}

export default HeroSection;