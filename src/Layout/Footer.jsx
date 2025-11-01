// src/Layout/Footer.jsx
import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import '../Styles/footer.css'; // Custom CSS

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* COMPANY */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">COMPANY</h6>
            <ul className="list-unstyled small">
              <li>Contact Us</li>
              <li>Write for RCB</li>
              <li>Affiliate Program</li>
              <li>Terms of Use</li>
              <li>PlayBOLD Privacy Policy</li>
              <li>DMCA Policy</li>
              <li>Return and Refund Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          {/* COACHES RESOURCES */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">COACHES RESOURCES</h6>
            <ul className="list-unstyled small">
              <li>Shop Online</li>
              <li>Match Day Blog</li>
              <li>Buyer’s Guide</li>
              <li>Freelap Friday Five</li>
              <li>Coaches Job Listing</li>
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">CONTACT INFORMATION</h6>
            <p className="small mb-1">13100 Tech City Circle Suite 200<br />Bengaluru, Pin 326150</p>
            <p className="small mb-1">(925) 461-5990 (office)</p>
            <p className="small mb-1">(925) 461-5991 (fax)</p>
            <p className="small mb-2">(800) 634-5990 (toll free in US)</p>
          </div>

          {/* LOGO + SOCIAL + SUBSCRIBE */}
          <div className="col-md-3 text-md-start text-center">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-3">
              <img src="/LOGO.png" alt="Logo" style={{ height: '60px' }} />
              <span className="ms-2 fw-bold" style={{ color: '#ffc107', fontSize: '1.2rem' }}>
                #PlayBold
              </span>
            </div>

            <div className="d-flex gap-3 mb-3 justify-content-md-start justify-content-center">
              <a href="#"><FaFacebookF className="text-white" /></a>
              <a href="#"><FaXTwitter className="text-white" /></a>
              <a href="#"><FaYoutube className="text-white" /></a>
              <a href="#"><FaInstagram className="text-white" /></a>
            </div>

            {/* Newsletter */}
            <div className="mt-3">
              <h6 className="fw-bold">SIGNUP FOR NEWSLETTER</h6>
              <div className="input-group mb-2">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <button className="btn btn-danger btn-sm px-4">SUBMIT</button>
            </div>
          </div>

        </div>

        <hr className="border-top border-warning mt-4" /> {/* Yellow horizontal line */}
        <div className="text-center small">
          Copyright © 2025 Subhradeep Nath. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
