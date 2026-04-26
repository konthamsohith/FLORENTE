import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Code, ShieldCheck, HeartHandshake, Zap, Building2, TrendingUp } from 'lucide-react';
import './ConsultancyContent.css';

const ConsultancyContent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="consultancy-content">
      <section className="cons-hero-section">
        <div className="container">
          <div className="cons-hero-flex">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cons-hero-text"
            >
              <span className="accent-tag">Talent Strategy</span>
              <h1>Strategic Talent Acquisition</h1>
              <p>
                Florente A Consultant LLP provides manpower and placement services across key industries including insurance, banking, and software. 
              </p>
              <div className="cons-hero-stats">
                <div className="stat-pill">
                  <strong>500+</strong> <span>Placements</span>
                </div>
                <div className="stat-pill">
                  <strong>50+</strong> <span>Top Organizations</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="cons-hero-graphic"
            >
              <div className="bridge-graphic-container">
                <div className="bridge-nodes">
                  <motion.div 
                    className="b-node professional"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="b-icon-wrapper"><Users size={32} /></div>
                    <span>Skilled<br/>Professionals</span>
                  </motion.div>
                  
                  <div className="b-connection">
                    <motion.div 
                      className="b-line"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div 
                      className="b-center-node"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 20px rgba(59, 130, 246, 0)'] }}
                    >
                      <HeartHandshake size={24} />
                    </motion.div>
                    <motion.div 
                      className="b-line"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      style={{ originX: 1 }}
                    />
                  </div>

                  <motion.div 
                    className="b-node organization"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <div className="b-icon-wrapper"><Building2 size={32} /></div>
                    <span>Top<br/>Organizations</span>
                  </motion.div>
                </div>
                
                <p className="bridge-text-overlay">
                  "Ensuring mutual growth through ethical and efficient recruitment practices."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cons-grid-section">
        <div className="container">
          <div className="cons-grid-layout">
            <div className="cons-grid-sidebar">
              <span className="accent-tag">Specializations</span>
              <h3>Industries <br />We Empower</h3>
              <p>We focus on high-impact sectors where talent is the ultimate competitive advantage.</p>
            </div>
            <div className="cons-grid-main">
              <motion.div className="ind-item-wide" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="ind-item-header">
                  <div className="ind-num">01</div>
                  <h4>Insurance</h4>
                </div>
                <p>Specialized recruitment for insurance professionals, from actuarial roles to field operations.</p>
                <ShieldCheck className="ind-bg-icon" />
              </motion.div>

              <motion.div className="ind-item-wide" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="ind-item-header">
                  <div className="ind-num">02</div>
                  <h4>Banking</h4>
                </div>
                <p>Connecting elite financial talent with leading banking institutions for strategic growth.</p>
                <Briefcase className="ind-bg-icon" />
              </motion.div>

              <motion.div className="ind-item-wide" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="ind-item-header">
                  <div className="ind-num">03</div>
                  <h4>Software</h4>
                </div>
                <p>Scaling technology teams with high-performance developers and technical leaders.</p>
                <Code className="ind-bg-icon" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="cons-values-infographic">
        <div className="container">
          <div className="cons-section-header-center">
            <span className="accent-tag">Our Core Pillars</span>
            <h2>Driven by Excellence</h2>
          </div>
          <div className="values-info-grid">
            <motion.div 
              className="v-info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="v-info-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <div className="v-info-content">
                <h5>Ethical Recruitment</h5>
                <p>Highest standards of integrity in every placement.</p>
              </div>
              <div className="v-info-bg-shape"></div>
            </motion.div>

            <motion.div 
              className="v-info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="v-info-icon-wrapper">
                <Zap size={32} />
              </div>
              <div className="v-info-content">
                <h5>Efficient Practices</h5>
                <p>Streamlined processes for fast talent acquisition.</p>
              </div>
              <div className="v-info-bg-shape"></div>
            </motion.div>

            <motion.div 
              className="v-info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="v-info-icon-wrapper">
                <TrendingUp size={32} />
              </div>
              <div className="v-info-content">
                <h5>Mutual Growth</h5>
                <p>Success for both organization and professional.</p>
              </div>
              <div className="v-info-bg-shape"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultancyContent;
