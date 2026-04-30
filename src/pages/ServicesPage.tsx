import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus, Minus, ArrowRight, Activity, Home, Users, TrendingUp, Film, Target } from 'lucide-react';
import './ServicesPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Florente Marketing Labs LLP",
      description: "Strategic digital acceleration and high-impact infrastructure labs designed to position global brands for market dominance.",
      image: "/Marketing Labs.png",
      slug: "marketing-labs"
    },
    {
      title: "Florente PROPERTIES LLP",
      description: "Elite real estate advisory bridging the gap between luxury living in Dubai and strategic institutional investments in India.",
      image: "/properties.jpeg",
      slug: "properties"
    },
    {
      title: "Florente A CONSULTANT LLP",
      description: "World-class talent acquisition and executive search for global leaders across banking, insurance, and technology sectors.",
      image: "/A Consultant.png",
      slug: "consultancy"
    },
    {
      title: "Florente WEALTH SERVICE LLP",
      description: "Sophisticated asset management and personalized wealth strategies designed for high-net-worth families and corporate entities.",
      image: "/Wealth Service.png",
      slug: "wealth-service"
    },
    {
      title: "Florente ENTERTAINMENTS LLP",
      description: "Transforming creative visions into cinematic masterpieces. Cinematic storytelling and production that capture the human experience.",
      image: "/entertainment.jpeg",
      slug: "entertainments"
    }
  ];

  const workflow = [
    { 
      id: "01", 
      title: "Discovery & Enterprise Audit",
      description: "A comprehensive deep-dive into your organizational DNA, market trajectory, and long-term capital objectives.",
      image: "/Discovery & Enterprise Audit.png"
    },
    { 
      id: "02", 
      title: "Strategic Architecture",
      description: "Engineering bespoke solutions and data-driven frameworks tailored to secure measurable business scale.",
      image: "/experts_collaboration_laptop_1775407527405.png"
    },
    { 
      id: "03", 
      title: "Precision Execution",
      description: "Deploying high-impact strategies with surgical precision, ensuring seamless integration across all business units.",
      image: "/Precision Execution.png"
    },
    { 
      id: "04", 
      title: "Adaptive Optimization",
      description: "Continuous monitoring and high-frequency refinement to capitalize on emerging market opportunities.",
      image: "/Adaptive Optimization.png"
    },
    { 
      id: "05", 
      title: "Legacy Growth Advisory",
      description: "Persistent strategic partnership focused on sustainable value creation and generational wealth protection.",
      image: "/Legacy Growth Advisory.png"
    }
  ];

  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="services-page">
      <Header />
      
      <main>
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-flex">
              <div className="services-hero-text">
                <motion.span initial="hidden" animate="visible" variants={fadeIn} className="services-badge">PRECISION CONSULTING</motion.span>
                <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
                  Florente provides elite consulting and strategic financial solutions across five global business units.
                </motion.h1>
                <motion.p initial="hidden" animate="visible" variants={fadeIn} className="services-hero-desc">
                  Our integrated ecosystem leverages deep industry expertise to drive innovation, optimize capital, and secure market leadership for our partners worldwide.
                </motion.p>
              </div>
              
              <motion.div 
                className="services-hero-infographic"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="infographic-core">
                  <div className="core-pulse"></div>
                  <Target size={40} />
                  <span className="core-label">PRECISION</span>
                </div>
                
                <div className="infographic-orbit">
                  <div className="orbit-item item-1" title="Marketing Labs">
                    <div className="orbit-icon"><Activity size={20} /></div>
                    <span className="orbit-text">Marketing</span>
                  </div>
                  <div className="orbit-item item-2" title="Properties">
                    <div className="orbit-icon"><Home size={20} /></div>
                    <span className="orbit-text">Properties</span>
                  </div>
                  <div className="orbit-item item-3" title="Consultant">
                    <div className="orbit-icon"><Users size={20} /></div>
                    <span className="orbit-text">Consultant</span>
                  </div>
                  <div className="orbit-item item-4" title="Wealth Service">
                    <div className="orbit-icon"><TrendingUp size={20} /></div>
                    <span className="orbit-text">Wealth</span>
                  </div>
                  <div className="orbit-item item-5" title="Entertainments">
                    <div className="orbit-icon"><Film size={20} /></div>
                    <span className="orbit-text">Media</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="services-grid-section section-padding">
          <div className="container">
            <div className="services-card-grid">
              {services.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="service-feature-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="s-card-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="s-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button 
                      className="btn-details-black"
                      onClick={() => navigate(`/divisions/${item.slug}`)}
                    >
                      Explore Division
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-we-work">
          <div className="container">
            <div className="workflow-grid">
              <div className="workflow-left">
                <span className="workflow-badge">How We Work</span>
                <h2>A structured, client-focused process to ensure the best results for our clients and the world.</h2>
                
                <div className="workflow-list">
                  {workflow.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`workflow-item ${activeStep === idx ? 'highlighted' : ''}`}
                      onClick={() => setActiveStep(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="w-header">
                        <span className="w-num">{item.id}</span>
                        <span className="w-title">{item.title}</span>
                      </div>
                      <AnimatePresence>
                        {activeStep === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-extra-wrapper"
                          >
                            <p className="w-extra">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
              <div className="workflow-right">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeStep}
                    src={workflow[activeStep].image} 
                    alt={workflow[activeStep].title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
