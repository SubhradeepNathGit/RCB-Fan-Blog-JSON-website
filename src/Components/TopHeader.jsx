// src/Layout/TopHeader.jsx
import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import "../Styles/MyHeader.css";
 // Make sure this exists

const TopHeader = () => {
  return (
    <div className="top-header bg-black text-light py-2">
      <Container className="d-flex justify-content-between align-items-center px-4 flex-wrap">
        
        {/* Logo */}
        <div className="logo-container">
          <img src={"/LOGO.png"} alt="Logo" height="60" />
        </div>

        {/* Center Title with AOS */}
        {/* <div
          className="header-title text-center flex-grow-1"
          data-aos="zoom-in-up"
            data-aos-duration="1000"

         
        >
          <span className="fw-bold fs-3">
            Royal <span className = "text-warning">Challengers</span> <span className="text-danger">Bengaluru</span>
          </span>
        </div> */}

        {/* Social Icons */}
        <div className="d-flex gap-3 social-icons">
          <a href="#" className="text-light"><FaFacebookF /></a>
          <a href="#" className="text-light"><FaXTwitter /></a>
          <a href="#" className="text-light"><FaInstagram /></a>
          <a href="#" className="text-light"><FaYoutube /></a>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
