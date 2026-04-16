import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  divisions: {
    slug: string;
    title: string;
    shortName: string;
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
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

  const slideData = divisions[currentSlide];

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
          <AnimatePresence mode="wait">
            <motion.div 
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {slideData.heroBadge && (
                <div className="hero-badge-wrapper">
                   <span className="hero-category-badge">{slideData.heroBadge}</span>
                </div>
              )}
              {slideData.heroTitle && (
                <h1 className="hero-title">
                  {slideData.heroTitle}
                </h1>
              )}
              {slideData.heroSubtitle && (
                <p className="hero-subtitle">
                  {slideData.heroSubtitle}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
          {/* Removed hero-actions as per user request */}
        </div>
      </div>

      <div className="hero-pagination">
        {divisions.map((_, idx) => (
          <div 
            key={idx} 
            className={`pagination-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            title={divisions[idx].shortName}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
