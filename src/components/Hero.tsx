import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % divisions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [divisions.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % divisions.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + divisions.length) % divisions.length);
  };

  const getHeroImage = (division: typeof divisions[0]) => {
    if (isMobile) {
      const smallImages: Record<string, string> = {
        'marketing-labs': '/marketinglabssmall.png',
        'properties': '/propertiessmall.png',
        'consultancy': '/a consultantsmall.png',
        'wealth-service': '/wealthsmall.png',
        'entertainments': '/entertainmentsmall.png'
      };
      return smallImages[division.slug] || division.image;
    }
    return division.image;
  };

  const slideData = divisions[currentSlide];

  return (
    <div 
      className="hero-container" 
      onClick={() => navigate(`/divisions/${slideData.slug}`)}
      style={{ cursor: 'pointer' }}
    >
      {divisions.map((division, index) => (
        <img 
          key={index}
          src={getHeroImage(division)}
          alt={division.heroTitle}
          className={`hero-slide-img ${index === currentSlide ? 'active' : ''}`}
        />
      ))}
      <div className="hero-overlay"></div>

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
        </div>
      </div>

      <div className="hero-navigation">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;