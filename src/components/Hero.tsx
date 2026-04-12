import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  divisions: {
    slug: string;
    title: string;
    shortName: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    subServices: string[];
  }[];
}

const Hero: React.FC<HeroProps> = ({ divisions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % divisions.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [divisions.length, isHovered]);

  return (
    <div 
      className="hero-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {divisions.map((division, index) => (
        <div 
          key={index}
          className={`hero-slide-bg ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${division.image})` }}
        />
      ))}

      <div className="hero-bg-overlay"></div>

      <div className="container hero-content-layout">
        <div className="hero-left-content">
          <div className="hero-badge-wrapper fade-in-up">
             <span className="hero-category-badge">Empowering Your Financial Future</span>
          </div>
          <h1 className="hero-title fade-in-up delay-1">
            Unlock your full potential with expert consulting and tailored financial strategies.
          </h1>
          <p className="hero-subtitle fade-in-up delay-2">
            Whether you're growing a business, optimizing investments, or securing long-term wealth, we're here to guide you every step of the way.
          </p>
          <div className="hero-actions fade-in-up delay-3">
            <button 
              onClick={() => navigate(`/divisions/${divisions[currentSlide].slug}`)} 
              className="btn-success-white"
            >
              Learn more
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-success-dark slide-push-btn"
            >
              <div className="btn-slide-wrapper">
                <div className="btn-state btn-state-lime">
                  <span className="btn-text">Contact us</span>
                  <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                </div>
                <div className="btn-state btn-state-white">
                  <span className="btn-text">Contact us</span>
                  <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="hero-right-nav">
          <div className="nav-slides">
            {divisions.map((div, idx) => (
              <div 
                key={idx} 
                className={`nav-item ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="nav-item-num">{(idx + 1).toString().padStart(2, '0')}.</div>
                <div className="nav-item-line"></div>
                <div className="nav-item-title">{div.shortName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
