import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Import company images for the slideshow
import img1 from "../assets/gepsSitePhotos/img1.jpg";
import img2 from "../assets/gepsSitePhotos/img2.jpg";
import img3 from "../assets/gepsSitePhotos/img3.jpg";
import img4 from "../assets/gepsSitePhotos/img4.jpg";
import img5 from "../assets/gepsSitePhotos/img5.jpg";
import img6 from "../assets/gepsSitePhotos/img6.jpg";
import img7 from "../assets/gepsSitePhotos/img7.jpg";
import img8 from "../assets/gepsSitePhotos/img8.jpg";
import img9 from "../assets/gepsSitePhotos/img9.jpg";
import img10 from "../assets/gepsSitePhotos/img10.jpg";
import img11 from "../assets/gepsSitePhotos/img11.jpg";
import img12 from "../assets/gepsSitePhotos/img12.jpg";
import img13 from "../assets/gepsSitePhotos/img13.jpg";
import img14 from "../assets/gepsSitePhotos/img14.jpg";
import img15 from "../assets/gepsSitePhotos/img15.jpg";
import img16 from "../assets/gepsSitePhotos/img16.jpg";
import img17 from "../assets/gepsSitePhotos/img17.jpg";
import img18 from "../assets/gepsSitePhotos/img18.jpg";
import img19 from "../assets/gepsSitePhotos/img19.jpg";
import img20 from "../assets/gepsSitePhotos/img20.jpg";
import img21 from "../assets/gepsSitePhotos/img21.jpg";
import img22 from "../assets/gepsSitePhotos/img22.jpg";
import img23 from "../assets/gepsSitePhotos/img23.jpg";
import img24 from "../assets/gepsSitePhotos/img24.jpg";
import img25 from "../assets/gepsSitePhotos/img25.jpg";
import img26 from "../assets/gepsSitePhotos/img26.jpg";
import img27 from "../assets/gepsSitePhotos/img27.jpg";
import img28 from "../assets/gepsSitePhotos/img28.jpg";
import img29 from "../assets/gepsSitePhotos/img29.jpg";
import img30 from "../assets/gepsSitePhotos/img30.jpg";
import img31 from "../assets/gepsSitePhotos/img31.jpg";
import img32 from "../assets/gepsSitePhotos/img32.jpg";
import img33 from "../assets/gepsSitePhotos/img33.jpg";
import img34 from "../assets/gepsSitePhotos/img34.jpg";
import img35 from "../assets/gepsSitePhotos/img35.jpg";
import img36 from "../assets/gepsSitePhotos/img36.jpg";
import img37 from "../assets/gepsSitePhotos/img37.jpg";
import img38 from "../assets/gepsSitePhotos/img38.jpg";
import img39 from "../assets/gepsSitePhotos/img39.jpg";
import img40 from "../assets/gepsSitePhotos/img40.jpeg";
import img41 from "../assets/gepsSitePhotos/img41.jpeg";
import img42 from "../assets/gepsSitePhotos/img42.jpeg";
import img43 from "../assets/gepsSitePhotos/img43.jpeg";
import img44 from "../assets/gepsSitePhotos/img44.jpeg";






// Import client logos
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.jpeg";
import client6 from "../assets/clients/client6.jpg";
import client7 from "../assets/clients/client7.png";
import client8 from "../assets/clients/client8.jpeg";
import client9 from "../assets/clients/client9.jpg";
import client10 from "../assets/clients/client10.png";
import client11 from "../assets/clients/client11.jpeg";
import client12 from "../assets/clients/client12.avif";
import client13 from "../assets/clients/client13.png";
import client14 from "../assets/clients/client14.jpeg";
import client15 from "../assets/clients/client15.jpg";
import client16 from "../assets/clients/client16.png";
import client17 from "../assets/clients/client17.png";
import client18 from "../assets/clients/client18.jpeg";
import client19 from "../assets/clients/client19.jpeg";
import client20 from "../assets/clients/client20.jpeg";
import client21 from "../assets/clients/client21.jpeg";
import client22 from "../assets/clients/client22.jpeg";
import client23 from "../assets/clients/client23.jpeg";
import client24 from "../assets/clients/client24.jpeg";
import client25 from "../assets/clients/client25.jpeg";
import client26 from "../assets/clients/client26.jpeg";
import client27 from "../assets/clients/client27.jpeg";
import client28 from "../assets/clients/client28.jpeg";


const images = [
  { src: img1, location: "New York Office" },
  { src: img2, location: "London Headquarters" },
  { src: img3, location: "Berlin Branch" },
  {src:img4, location:"New Delhi"},
  { src: img5, location: "New York Office" },
  { src: img6, location: "New York Office" },
  { src: img7, location: "New York Office" },
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
  { src: img19, location: "New York Office" },
  { src: img20, location: "New York Office" },
  { src: img21, location: "New York Office" },
  { src: img22, location: "New York Office" },
  { src: img23, location: "New York Office" },
  { src: img24, location: "New York Office" },
  { src: img25, location: "New York Office" },
  { src: img26, location: "New York Office" },
  { src: img27, location: "New York Office" },
  { src: img28, location: "New York Office" },
  { src: img29, location: "New York Office" },
  { src: img30, location: "New York Office" },
  { src: img31, location: "New York Office" },
  { src: img32, location: "New York Office" },
  { src: img33, location: "New York Office" },
  { src: img34, location: "New York Office" },
  { src: img35, location: "New York Office" },
  { src: img36, location: "New York Office" },
  { src: img37, location: "New York Office" },
  { src: img38, location: "New York Office" },
  { src: img39, location: "New York Office" },
  { src: img40, location: "New York Office" },
  { src: img41, location: "New York Office" },
  { src: img42, location: "New York Office" },
  { src: img43, location: "New York Office" },
  { src: img44, location: "New York Office" }
  
  

];

const clients = [client1, client2, client3, client4, client5, client6,client7, client8, client9, client10, client11, client12,client13,client14, client15, client16, client17, client18,client19, client20, client21,client22,client23,client24,client25,client26,client27,client28];

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
        <button onClick={() => navigate("/about")}>Know More</button>
      </div>

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
