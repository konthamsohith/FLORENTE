import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#divisions" className="nav-link">Divisions</a>
          <a href="#branches" className="nav-link">Branches</a>
        </nav>
        <div className="header-cta">
          <a href="#contact" className="btn-secondary-nav">Get In Touch</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
