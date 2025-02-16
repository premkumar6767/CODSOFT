import React from "react";
import "./MentoringSection.css";
import Ceo from "./images/Ceo.webp"

function MentoringSection() {
  return (
    <section className="mentoring ui item">
      <div className="content">
      <h2>MENTORING</h2>
      <p>
        Our Mentoring Program connects students with successful alumni through
        webinars and events, offering guidance and opportunities for growth.
      </p>
      </div>
      <img src={Ceo} alt="mentorimage shadowed"/>
    </section>
  );
}

export default MentoringSection;