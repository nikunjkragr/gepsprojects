import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Ensure styling is consistent

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s2hwca9", // Replace with your EmailJS service ID
        "template_dxyrdvi", // Replace with your EmailJS template ID
        form.current,
        "GC8BKqIUvdVmAOs2v" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Contact Information */}
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Email: gepsprojects@gmail.com, gepsnoida@gmail.com</p>
        <p className="space">Phone: +91 120-4270060, +91-98719 63666</p>
      </div>

      {/* Get More Info Section */}
      <div className="get-more-info">
        <h2>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Company Name:</label>
          <input type="text" name="user_name" required />

          <label>Email:</label>
          <input type="email" name="user_email" required />

          <label>Phone:</label>
          <input type="text" name="user_phone" required />

          <label>Message:</label>
          <textarea name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
