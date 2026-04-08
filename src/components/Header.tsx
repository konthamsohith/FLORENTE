import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLink = (id: string) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <img src="/Florente_Logos/Florente_logo.png" alt="Florente" style={{ height: '40px', width: 'auto' }} />
          </Link>
        </div>
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href={getNavLink('home')} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href={getNavLink('about')} className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href={getNavLink('divisions')} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Divisions</a>
          <a href={getNavLink('branches')} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Branches</a>
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
