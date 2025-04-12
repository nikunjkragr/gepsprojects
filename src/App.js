import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact.jsx";
import Career from "./pages/Career.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <ContactBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career/>}/>
      </Routes>
    </Router>
  );
}

export default App;
