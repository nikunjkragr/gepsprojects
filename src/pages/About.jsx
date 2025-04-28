import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1> Introduction – Geps Projects</h1>
      <p>
        At Geps Projects, we specialize in delivering comprehensive external electrification solutions, 
        including High Tension (HT) and Low Tension (LT) works. With a strong foundation in power 
        distribution and transmission, we cater to industries, commercial establishments, residential 
        projects, and infrastructure developments, ensuring seamless and efficient power supply.
      </p>

      <h2 className="section-title">Who We Are</h2>
      <p>
        Geps Projects is a dynamic and forward-thinking company committed to powering progress with 
        reliable and innovative electrification services. Our team of skilled professionals brings 
        extensive expertise in HT & LT installations, substation work, transformer setups, cabling, 
        overhead and underground power distribution, street lighting, and electrical infrastructure development.
      </p>

      <h2 className="section-title">Our Services</h2>
      <ul className="service-list">
        <li>High Tension (HT) & Low Tension (LT) Electrification</li>
        <li>Substation Installation & Commissioning</li>
        <li>Overhead & Underground Cable Laying</li>
        <li>Transformer Supply, Installation & Maintenance</li>
        <li>Industrial & Commercial Power Distribution</li>
        <li>Street Lighting & Urban Electrification</li>
        <li>Testing, Inspection & Compliance</li>
      </ul>

      <h2 className="section-title">Why Choose Us?</h2>
      <div className="why-choose-us">
        <div><p>Expertise & Experience: Backed by years of industry knowledge, we ensure top-notch quality and efficiency in every project.</p></div>
        <div><p>Reliability & Safety: We adhere to the highest safety standards and use premium-quality materials for long-lasting performance.</p></div>
        <div><p>Customized Solutions: Every project is unique, and we tailor our solutions to meet specific client requirements.</p></div>
        <div><p>Timely Execution: With a well-structured project management approach, we ensure timely completion without compromising quality.</p></div>
        <div><p>Commitment to Excellence: We believe in innovation, precision, and delivering sustainable electrification solutions.</p></div>
        <div><p>Indoor and outdoor Bus-duct Trunking / Rising mains with tap-offs & end feed units.</p></div>
        <div><p>Ladder / perforated type Cable tray with structural supports – indoor / outdoor.</p></div>

      </div>

      <p className="tagline">
        Geps Projects – Powering the Future
      </p>
    </div>
  );
};

export default About;
