import React from "react";
import "./Testimonials.css";
import student1 from "./images/student1.png"; // Replace with actual image paths
import student2 from "./images/student2.png";
import student3 from "./images/student3.png";

function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className="left-card">
        <h2>What Our Students Are Saying</h2>
        <i name="arrow right" size="large" className="arrow-icon" />
      </div>

      <div className="right-content">
        <div className="testimonial-card">
          <img src={student1} alt="Student" className="testimonial-image" />
          <div>
            <p className="testimonial-text">
              "My college is a vibrant community that fosters creativity and 
              collaboration, providing countless opportunities for personal 
              and academic growth."
            </p>
            <h3 className="testimonial-name">Mathew Jones</h3>
          </div>
        </div>

        <div className="student-navigation">
          <img src={student1} alt="Student 1" className="nav-icon active" />
          <img src={student2} alt="Student 2" className="nav-icon" />
          <img src={student3} alt="Student 3" className="nav-icon" />
          <i name="arrow right" size="large" className="nav-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;