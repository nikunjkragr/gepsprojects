import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Import company images for the slideshow
import img1 from "../assets/gepsSitePhotos/img1.png";
//import img2 from "../assets/gepsSitePhotos/img2.png";
import img3 from "../assets/gepsSitePhotos/img3.png";
import img4 from "../assets/gepsSitePhotos/img4.png";
import img5 from "../assets/gepsSitePhotos/img5.png";
import img6 from "../assets/gepsSitePhotos/img6.png";
//import img7 from "../assets/gepsSitePhotos/img7.png";
import img8 from "../assets/gepsSitePhotos/img8.png";
import img9 from "../assets/gepsSitePhotos/img9.png";
import img10 from "../assets/gepsSitePhotos/img10.png";
import img11 from "../assets/gepsSitePhotos/img11.png";
import img12 from "../assets/gepsSitePhotos/img12.png";
import img13 from "../assets/gepsSitePhotos/img13.png";
import img14 from "../assets/gepsSitePhotos/img14.png";
import img15 from "../assets/gepsSitePhotos/img15.png";
import img16 from "../assets/gepsSitePhotos/img16.png";
import img17 from "../assets/gepsSitePhotos/img17.png";
import img18 from "../assets/gepsSitePhotos/img18.png";
//import img19 from "../assets/gepsSitePhotos/img19.png";

//import brochure from "/brochure.pdf";    
//sassets/brochure.pdf";




// Import client logos
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.jpg";
import client7 from "../assets/clients/client7.png";
import client8 from "../assets/clients/client8.png";
import client9 from "../assets/clients/client9.jpg";
import client10 from "../assets/clients/client10.png";
import client11 from "../assets/clients/client11.jpeg";
import client12 from "../assets/clients/client12.png";
import client13 from "../assets/clients/client13.png";
import client14 from "../assets/clients/client14.jpeg";
import client15 from "../assets/clients/client15.jpg";
import client16 from "../assets/clients/client16.png";
import client17 from "../assets/clients/client17.png";
import client18 from "../assets/clients/client18.png";
import client19 from "../assets/clients/client19.png";
import client20 from "../assets/clients/client20.png";
import client21 from "../assets/clients/client21.png";
import client22 from "../assets/clients/client22.png";
import client23 from "../assets/clients/client23.png";
import client24 from "../assets/clients/client24.png";
import client25 from "../assets/clients/client25.png";
import client26 from "../assets/clients/client26.png";
import client27 from "../assets/clients/client27.png";
import client28 from "../assets/clients/client28.png";


const images = [
  { src: img1, location: "New York Office" },
  
  { src: img3, location: "Berlin Branch" },
  {src:img4, location:"New Delhi"},
  { src: img5, location: "New York Office" },
  { src: img6, location: "New York Office" },
  { src: img8, location: "New York Office" },
  { src: img9, location: "New York Office" },
  { src: img10, location: "New York Office" },
  { src: img11, location: "New York Office" },
  { src: img12, location: "New York Office" },
  { src: img13, location: "New York Office" },
  { src: img14, location: "New York Office" },
  { src: img15, location: "New York Office" },
  { src: img16, location: "New York Office" },
  { src: img17, location: "New York Office" },
  { src: img18, location: "New York Office" },
  
  

];

const clients = [client1, client2, client3, client4, client5, client6,client7, client8, client9, client10, client11, client12,client13,client14, client15, client16, client17, client18,client19, client20, client21,client22,client23,client24,client25,client26,client27,client28];
const brochureURL="/brochure.pdf"+"#toolbar=0";
const Home = () => {
  const navigate = useNavigate();
  
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="home-container">
      {/* Slideshow Section */}
      <div className="slideshow">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h1>About Us</h1>
        <p>
        Geps Projects is a leading provider of external electrification solutions, specializing in both High Tension (HT) and Low Tension (LT) works. With expertise in power distribution, transmission, and electrical infrastructure development, we deliver reliable, efficient, and high-quality electrification services. Our commitment to safety, innovation, and excellence ensures seamless power solutions for industrial, commercial, and residential projects. At Geps Projects, we power progress with precision and professionalism.
        </p>
        <div className="about-buttons">
          <button onClick={() => navigate("/about")}>Know More</button>
          <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
              <button>GEPS Profile</button>
              </a>
        </div>
      </div>

      {/* Brochure Popup */}
      
      {/* Clients Section */}
      <div className="clients-section">
        <h1>Our Clients</h1>
        <div className="clients-grid">
          {clients.map((logo, index) => (
            <div key={index} className="client-logo">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
