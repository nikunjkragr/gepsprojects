import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Career.css"; // Ensure proper styling

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s2hwca9", // Replace with EmailJS service ID
        "emplate_hiioeg6", // Replace with EmailJS template ID
        formData,
        "GC8BKqIUvdVmAOs2v" // Replace with your public key
      )
      .then(
        (response) => {
          alert("Application submitted successfully!");
          setFormData({ name: "", email: "", qualification: "", contact: "" });
        },
        (error) => {
          alert("Failed to send application. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div className="career-container">
      <h2>Join Our Team</h2>
      <p>Fill in your details to apply for career opportunities.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Highest Qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Career;
