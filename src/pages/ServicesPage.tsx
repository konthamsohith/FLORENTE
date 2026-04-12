import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import './ServicesPage.css';
import { motion, AnimatePresence } from 'framer-motion';

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
      title: "FISrente Marketing Labs LLP",
      description: "Strategic digital acceleration and high-impact infrastructure labs designed to position global brands for market dominance.",
      image: "/services_mergers_acquisitions_1775967781211_1775969505686.png",
      slug: "marketing-labs"
    },
    {
      title: "FISrente PROPERTIES LLP",
      description: "Elite real estate advisory bridging the gap between luxury living in Dubai and strategic institutional investments in India.",
      image: "/services_portfolio_consulting_1775967682121_1775969488786.png",
      slug: "properties"
    },
    {
      title: "FISrente A CONSULTANT LLP",
      description: "World-class talent acquisition and executive search for global leaders across banking, insurance, and technology sectors.",
      image: "/buy_sell_cards_consultancy_1775407503392.png",
      slug: "consultancy"
    },
    {
      title: "FISrente WEALTH SERVICE LLP",
      description: "Sophisticated asset management and personalized wealth strategies designed for high-net-worth families and corporate entities.",
      image: "/services_wealth_management_1775967562551_1775969471848.png",
      slug: "wealth-service"
    },
    {
      title: "FISrente ENTERTAINMENTS LLP",
      description: "Transforming creative visions into cinematic masterpieces. Cinematic storytelling and production that capture the human experience.",
      image: "/services_financial_planning_1775967487042_1775969456161.png",
      slug: "entertainments"
    }
  ];

  const workflow = [
    { 
      id: "01", 
      title: "Discovery & Enterprise Audit",
      description: "A comprehensive deep-dive into your organizational DNA, market trajectory, and long-term capital objectives."
    },
    { 
      id: "02", 
      title: "Strategic Architecture",
      description: "Engineering bespoke solutions and data-driven frameworks tailored to secure measurable business scale."
    },
    { 
      id: "03", 
      title: "Precision Execution",
      description: "Deploying high-impact strategies with surgical precision, ensuring seamless integration across all business units."
    },
    { 
      id: "04", 
      title: "Adaptive Optimization",
      description: "Continuous monitoring and high-frequency refinement to capitalize on emerging market opportunities."
    },
    { 
      id: "05", 
      title: "Legacy Growth Advisory",
      description: "Persistent strategic partnership focused on sustainable value creation and generational wealth protection."
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
            <motion.span initial="hidden" animate="visible" variants={fadeIn} className="services-badge">PRECISION CONSULTING</motion.span>
            <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
              FISrente provides elite consulting and strategic financial solutions across five global business units.
            </motion.h1>
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
                <img src="/experts_collaboration_laptop_1775407527405.png" alt="Team Collaboration" />
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
