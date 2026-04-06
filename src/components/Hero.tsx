import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  divisions: {
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
          <div className="hero-badge-wrapper fade-in-up" key={`badge-${currentSlide}`}>
             <span className="hero-category-badge">{divisions[currentSlide]?.title}</span>
          </div>
          <h1 className="hero-title fade-in-up delay-1" key={`title-${currentSlide}`}>
            Building Your Assets<br />
            for a Secure Future!
          </h1>
          <p className="hero-subtitle fade-in-up delay-2" key={`desc-${currentSlide}`}>
            {divisions[currentSlide]?.description}
          </p>
          <div className="hero-actions fade-in-up delay-3" key={`btn-${currentSlide}`}>
            <a href="#divisions" className="btn-solid-dark">
              Our service
            </a>
            <a href="#contact" className="btn-solid-accent">
              Contact us <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-right-nav">
          <div className="nav-slides">
            {divisions.map((div, idx) => (
              <div 
                key={idx} 
                className={`nav-item ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
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
