import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-details">
        📧 gepsnoida@gmail.com | 📧 gepsprojects@gmail.com| 📞 +919871963666 
      </div>

      {/* Social Media Icons */}
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a> */}
      </div>
    </div>
  );
};

export default ContactBar;
