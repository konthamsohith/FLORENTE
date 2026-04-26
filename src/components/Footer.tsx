import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { divisions } from '../data/divisions';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="container site-footer__inner">
          <div className="site-footer__head">
            <div className="site-footer__brand">
              <Link to="/" className="site-footer__logo-link" aria-label="Florente home">
                <img
                  src="/Florente_Logos/florente.png"
                  alt=""
                  className="site-footer__logo"
                />
              </Link>
              <p className="site-footer__tagline">
                A diversified group spanning marketing, property, consultancy, wealth, and
                entertainment—built on clear mandates and enduring client relationships.
              </p>
              <p className="site-footer__entity">
                Florente Group · Registered office: Hyderabad, Telangana, India
              </p>
            </div>

            <aside className="site-footer__contact-card" aria-label="Business contact">
              <p className="site-footer__card-label">Business enquiries</p>
              <div className="site-footer__card-rows">
                <a href="mailto:info@florente.com" className="site-footer__card-row">
                  <Mail className="site-footer__card-icon" size={18} strokeWidth={1.75} aria-hidden />
                  <span className="site-footer__card-value">info@florente.com</span>
                </a>
                <a href="tel:+919885772356" className="site-footer__card-row">
                  <Phone className="site-footer__card-icon" size={18} strokeWidth={1.75} aria-hidden />
                  <span className="site-footer__card-value">+91 98857 72356</span>
                </a>
              </div>
            </aside>
          </div>

          <div className="site-footer__divider" aria-hidden="true" />

          <nav className="site-footer__grid" aria-label="Footer navigation">
            <div className="site-footer__col">
              <h3 className="site-footer__heading" id="footer-nav-company">
                Company
              </h3>
              <ul className="site-footer__list" aria-labelledby="footer-nav-company">
                <li>
                  <Link to="/about">Who we are</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <a href={sectionHref('branches')}>Our presence</a>
                </li>
                <li>
                  <a href={sectionHref('contact')}>Contact</a>
                </li>
                <li>
                  <a href="#">News &amp; media</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className="site-footer__col site-footer__col--divisions">
              <h3 className="site-footer__heading" id="footer-nav-divisions">
                Divisions
              </h3>
              <ul
                className="site-footer__list site-footer__list--two-col"
                aria-labelledby="footer-nav-divisions"
              >
                {divisions.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/divisions/${d.slug}`}>{d.shortName}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col">
              <h3 className="site-footer__heading" id="footer-nav-industries">
                Industries
              </h3>
              <ul className="site-footer__list" aria-labelledby="footer-nav-industries">
                <li>
                  <a href="#">Real estate</a>
                </li>
                <li>
                  <a href="#">Infrastructure</a>
                </li>
                <li>
                  <a href="#">Human resources</a>
                </li>
                <li>
                  <a href="#">Media &amp; film</a>
                </li>
                <li>
                  <a href="#">Fund advisory</a>
                </li>
              </ul>
            </div>

            <div className="site-footer__col site-footer__col--office">
              <h3 className="site-footer__heading" id="footer-nav-office">
                Head office
              </h3>
              <div className="site-footer__office-block" aria-labelledby="footer-nav-office">
                <MapPin className="site-footer__office-icon" size={17} strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="site-footer__address">
                    N Square, 2nd Floor, Hi-Tech City
                    <br />
                    Hyderabad 500081 · Telangana, India
                  </p>
                </div>
              </div>
              <p className="site-footer__social-label" id="footer-social-label">
                Follow Florente
              </p>
              <div className="site-footer__social" aria-labelledby="footer-social-label">
                <a
                  href="#"
                  className="site-footer__social-btn"
                  aria-label="Florente on LinkedIn"
                >
                  <Linkedin size={17} strokeWidth={1.75} />
                </a>
                <a href="#" className="site-footer__social-btn" aria-label="Florente on Facebook">
                  <Facebook size={17} strokeWidth={1.75} />
                </a>
                <a href="#" className="site-footer__social-btn" aria-label="Florente on X">
                  <Twitter size={17} strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="site-footer__sub">
        <div className="container site-footer__sub-inner">
          <nav className="site-footer__legal" aria-label="Legal">
            <a href="#">Terms &amp; conditions</a>
            <a href="#">Privacy policy</a>
            <a href="#">Cookie policy</a>
          </nav>
          <p className="site-footer__copy">
            © {year} Florente Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
