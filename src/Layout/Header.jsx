// src/Layout/Header.jsx
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6"; // React icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../Styles/MyHeader.css"; // Custom styles for the header
import TopHeader from "../Components/TopHeader";
import { Link } from "react-router-dom"; // For navigation links

const Header = () => {
  return (
    <>
      <TopHeader />

      <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="p-0">
        <Container fluid className="px-4 d-flex flex-wrap align-items-center justify-content-between">

          {/* Brand */}
          <Navbar.Brand
            href="#"
           className="fs-3 fw-bold text-warning ms-4"
            data-aos="fade-right"
            data-aos-duration="800"

          >
            #PlayBOLD
          </Navbar.Brand>



          {/* Toggle button */}
          <Navbar.Toggle aria-controls="main-navbar-nav" />

          {/* Collapse */}
          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav>
              
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/AllBlogs">Blog</Nav.Link>
              <Nav.Link href="#">Request A Quote</Nav.Link>
             
              <Nav.Link href="#">IPL Tickets</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Podcast</Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};


export default Header;
