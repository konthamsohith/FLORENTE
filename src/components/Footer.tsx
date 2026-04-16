import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-flex">
        {/* Left Accent Block */}
        <div className="footer-block-accent">
          <div className="footer-accent-top">
            <img src="/Florente_Logos/florente.png" alt="Florente" style={{ maxHeight: '60px', width: 'auto', display: 'block' }} />
          </div>
          <div className="footer-accent-bottom">
            <p className="brand-mission">
              We're dedicated to helping you build a future driven by vision and sustained by trust.
            </p>
          </div>
        </div>

        {/* Right Black Block */}
        <div className="footer-block-black">
          <div className="footer-black-top">
            <div className="footer-nav-col">
              <h4>About</h4>
              <ul>
                <li><a href="#about">Who We Are</a></li>
                <li><a href="#branches">Our Presence</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">News & Media</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Divisions</h4>
              <ul>
                <li><a href="#divisions">Marketing Labs</a></li>
                <li><a href="#divisions">Properties</a></li>
                <li><a href="#divisions">Consultancy</a></li>
                <li><a href="#divisions">Wealth Service</a></li>
                <li><a href="#divisions">Entertainments</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Industries</h4>
              <ul>
                <li><a href="#">Real Estate</a></li>
                <li><a href="#">Infrastructure</a></li>
                <li><a href="#">Human Resources</a></li>
                <li><a href="#">Media & Film</a></li>
                <li><a href="#">Fund Advisory</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-black-middle">
            <div className="footer-contact-main">
              <a href="mailto:info@florente.com" className="footer-email">info@florente.com</a>
            </div>
            
            <div className="footer-contact-grid">
              <div className="contact-sub-item">
                <span className="contact-label">Phone</span>
                <p>+91 988577 2356</p>
              </div>
              <div className="contact-sub-item">
                <span className="contact-label">Address</span>
                <p>N Square, 2nd Floor, Hi-Tech City, Hyderabad - 500081</p>
              </div>
              <div className="contact-sub-item">
                <span className="contact-label">Follow Us</span>
                <div className="footer-social-links">
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-black-bottom">
            <div className="footer-legal-links">
              <a href="#">Term & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Florente. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
