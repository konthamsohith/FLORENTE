import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <a href="/">FLORENTE</a>
        </div>
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#divisions" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Divisions</a>
          <a href="#branches" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Branches</a>
        </nav>
        <div className="header-cta">
          <a href="#contact" className="btn-secondary-nav" onClick={() => setMobileMenuOpen(false)}>Get In Touch</a>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
