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
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const currentSlide = page;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload images with prioritization
  useEffect(() => {
    divisions.forEach((division) => {
      const img = new Image();
      img.src = getHeroImage(division);
    });
  }, [divisions, isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  const paginate = (newDirection: number) => {
    setPage([ (page + newDirection + divisions.length) % divisions.length, newDirection ]);
  };

  const onNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    paginate(1);
  };

  const onPrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    paginate(-1);
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

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 35 },
        opacity: { duration: 0.4 },
        scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 35 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.8 }
      }
    })
  };

  return (
    <div 
      className="hero-container" 
      onClick={() => navigate(`/divisions/${slideData.slug}`)}
      style={{ cursor: 'pointer' }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={getHeroImage(divisions[currentSlide])}
          alt={slideData.heroTitle}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="hero-slide-img active"
          loading={page === 0 ? "eager" : "lazy"}
          {...(page === 0 ? { fetchPriority: "high" } as any : {})}
        />
      </AnimatePresence>
      
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
        <button className="nav-btn prev" onClick={onPrevClick} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="nav-btn next" onClick={onNextClick} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;