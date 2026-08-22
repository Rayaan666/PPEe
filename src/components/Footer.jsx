import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-editorial">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-col-left">
            <span className="footer-label">Ready for perfection?</span>
            <h2 className="footer-cta-text">Let's craft your <br/> <span className="subheading">legacy.</span></h2>
            <Link to="/contact-us" className="btn-editorial" style={{marginTop: '2rem', display: 'inline-block'}}>
              Start the conversation
            </Link>
          </div>
          
          <div className="footer-col-right">
            <div className="footer-nav-grid">
              <div className="footer-nav-col">
                <span className="footer-label">Menu</span>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/rentals">Rentals</Link></li>
                  <li><Link to="/gallery">Portfolio</Link></li>
                  <li><Link to="/blogs">Journal</Link></li>
                  <li><Link to="/contact-us">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <span className="footer-label">Socials</span>
                <ul>
                  <li><a href="https://www.instagram.com/perfectpartyevents/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <span className="footer-label">Contact</span>
                <address className="footer-address">
                  Plot 3, ME 40, Musaffah, Abu Dhabi
                </address>
                <a href="mailto:info@perfectpartyeventsae.com" className="footer-email">info@perfectpartyeventsae.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="Perfect Party Events Logo" className="footer-logo-img" />
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Perfect Party Events. All Rights Reserved.</p>
          <div className="legal">
            <Link to="/privacy-policy" onClick={(e) => e.preventDefault()}>Privacy Policy</Link>
            <Link to="/terms-conditions" onClick={(e) => e.preventDefault()}>Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


