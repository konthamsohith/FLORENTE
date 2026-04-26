import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';
import { divisions } from '../data/divisions';
import { ArrowRight } from 'lucide-react';

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

  const menuServices = [
    { name: "All Services", slug: "services", icon: <ArrowRight size={18} /> },
    ...divisions.map(d => ({ name: d.shortName, slug: d.slug, icon: d.icon }))
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
                      {menuServices.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.slug === 'services' ? '/services' : `/divisions/${item.slug}`} 
                          onClick={() => { setServiceMenuOpen(false); setMobileMenuOpen(false); }}
                          className="mega-link-item"
                        >
                          <span className="mega-link-icon">{item.icon}</span>
                          <span className="mega-link-name">{item.name}</span>
                          <ArrowRight className="mega-link-arrow" size={16} />
                        </Link>
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
