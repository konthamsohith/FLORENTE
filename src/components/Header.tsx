import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const isHome = location.pathname === '/';
  /** Non-home pages use light backgrounds; keep header solid so white nav text stays visible */
  const showSolidHeader = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServiceMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('touchstart', handleClickOutside); // Added for iOS tap-to-close
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const getNavLink = (id: string) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  const services = [
    { name: "All Services", slug: "services" },
    { name: "Florente Marketing Labs", slug: "marketing-labs" },
    { name: "Florente Properties", slug: "properties" },
    { name: "Florente A Consultant", slug: "consultancy" },
    { name: "Florente Wealth Service", slug: "wealth-service" },
    { name: "Florente Entertainments", slug: "entertainments" }
  ];

  const industries = [
    "Renewable Energy",
    "Real Estate & Construction",
    "Banking & Financial Services",
    "Technology & Software",
    "Healthcare & Life Sciences",
    "Media & Production"
  ];

  return (
    <header className={`header ${showSolidHeader ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <img src="/Florente_Logos/florente.png" alt="Florente" style={{ height: '40px', width: 'auto' }} />
          </Link>
        </div>
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          
          <div className="nav-item-dropdown" ref={dropdownRef}>
            <button 
              className={`nav-link service-trigger ${serviceMenuOpen ? 'active' : ''}`}
              onClick={() => setServiceMenuOpen(!serviceMenuOpen)}
            >
              Service <ChevronDown size={14} className={`chevron ${serviceMenuOpen ? 'rotate' : ''}`} />
            </button>
            
            {serviceMenuOpen && (
              <div className="mega-menu animate-in-fast">
                <div className="mega-menu-content">
                  <div className="mega-col">
                    <h4>Divisions</h4>
                    <div className="mega-links">
                      {services.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.slug === 'services' ? '/services' : (item.slug === 'divisions' ? getNavLink('divisions') : `/divisions/${item.slug}`)} 
                          onClick={() => { setServiceMenuOpen(false); setMobileMenuOpen(false); }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mega-col">
                    <h4>Core Industries</h4>
                    <div className="mega-links">
                      {industries.map((item, idx) => (
                        <span key={idx} className="mega-industry-item">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href={getNavLink('branches')} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Branches</a>
          <a href={getNavLink('contact')} className="nav-link mobile-only-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-cta">
          <a href={getNavLink('contact')} className="btn-secondary-nav" onClick={() => setMobileMenuOpen(false)}>Get In Touch</a>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
