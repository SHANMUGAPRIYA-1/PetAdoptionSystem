import React from "react";
import { FaFacebookF, FaTwitter, FaTiktok, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./App.css";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Pets</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Brand Section */}
        <div className="footer-section brand">
          <h2 className="brand-name">🐾 Paws</h2>
          <p className="tagline">Leave your pets in safe hands</p>
          <div className="social-icons">
            <FaLinkedinIn className="social-icon" />
            <FaFacebookF className="social-icon" />
            <FaTiktok className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt className="contact-icon" /> 123 Pet Street, Petland</p>
          <p><FaEnvelope className="contact-icon" /> mail@pupps.com</p>
          <p><FaPhone className="contact-icon" /> +202-555-0157</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All Rights Reserved to <span className="studio-name">Rylic Studio 2023</span></p>
      </div>
    </footer>
  );
};

export default Contact;
