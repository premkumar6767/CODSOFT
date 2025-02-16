import React from "react";
import {useState} from "react";
import "./Footer.css";

function Footer() {
  const [email,setEmail]=useState("");
  const clearImmediate = () => {
    if(email.trim() !== ""){
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>+1 234 567 890</p>
          <p>alumni232@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Join Our Newsletter</h3>
          <input type="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
          <button onClick={clearImmediate}>Subscribe</button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 Your Alumni Association. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;