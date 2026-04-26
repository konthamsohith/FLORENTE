import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Shield, Target, Compass, BarChart3, Clock, Milestone, Sparkles, Key } from 'lucide-react';
import './WealthContent.css';

const WealthContent: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const funds = [
    "Equity Mutual Funds",
    "Debt Mutual Funds",
    "Hybrid/Balanced Funds",
    "Index Funds",
    "ELSS (Tax-Saving Funds)",
    "SIP (Systematic Investment Plans)",
    "Lumpsum Investments",
    "Retirement & Child Education Funds"
  ];

  return (
    <div className="wealth-content">
      <section className="wealth-hero">
        <div className="container">
          <div className="wealth-hero-flex">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="wealth-hero-text"
            >
              <span className="accent-tag">Wealth Management</span>
              <h1>Smart Investing. <br />Trusted Advice. <br />Long-Term Wealth Creation.</h1>
              <p className="wealth-lead">
                Florente Wealth Services is dedicated to helping individuals and families grow, protect, and manage their wealth through expert-led mutual fund advisory and distribution services.
              </p>
              <p className="wealth-sublead">
                With a customer-centric approach and deep market understanding, we guide investors toward informed financial decisions aligned with their goals.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="wealth-hero-visual"
            >
              <div className="wealth-data-graphic">
                <div className="graphic-circle outer"></div>
                <div className="graphic-circle middle"></div>
                <div className="graphic-circle inner"></div>
                <div className="graphic-bars">
                  <motion.div 
                    className="g-bar" 
                    initial={{ height: 0 }} 
                    whileInView={{ height: '60%' }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.div 
                    className="g-bar" 
                    initial={{ height: 0 }} 
                    whileInView={{ height: '80%' }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  />
                  <motion.div 
                    className="g-bar" 
                    initial={{ height: 0 }} 
                    whileInView={{ height: '100%' }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                  />
                </div>
                <TrendingUp className="graphic-center-icon" size={48} />
                <div className="graphic-float-node n1"><PieChart size={20} /></div>
                <div className="graphic-float-node n2"><Shield size={20} /></div>
                <div className="graphic-float-node n3"><BarChart3 size={20} /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="wealth-offerings">
        <div className="container">
          <div className="offerings-layout">
            <div className="offerings-header">
              <span className="accent-tag">Our Core Offering</span>
              <h3>Mutual Fund Sales & Advisory</h3>
              <p>We offer a comprehensive range of mutual funds across all leading Asset Management Companies (AMCs) in India. Our experts analyze market trends to recommend the most suitable solutions.</p>
            </div>
            
            <div className="funds-grid">
              {funds.map((fund, idx) => (
                <motion.div 
                  key={idx}
                  className="fund-item"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="fund-dot"></div>
                  <span>{fund}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wealth-why">
        <div className="container">
          <div className="section-header-centered">
            <span className="accent-tag">The Florente Edge</span>
            <h3>Why Choose Florente Wealth Services</h3>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <Compass className="why-icon" />
              <h4>Expert Guidance</h4>
              <p>Experienced financial experts guiding you through every market cycle.</p>
            </div>
            <div className="why-card">
              <Shield className="why-icon" />
              <h4>Unbiased Selection</h4>
              <p>Independent fund selection focused solely on your financial success.</p>
            </div>
            <div className="why-card">
              <Target className="why-icon" />
              <h4>Goal-Based Planning</h4>
              <p>Strategies built around your specific life milestones and aspirations.</p>
            </div>
            <div className="why-card">
              <BarChart3 className="why-icon" />
              <h4>Risk-Aligned Strategies</h4>
              <p>Portfolios optimized to match your personal risk tolerance and time horizon.</p>
            </div>
            <div className="why-card">
              <Milestone className="why-icon" />
              <h4>Transparent & Ethical</h4>
              <p>A commitment to clarity and integrity in every piece of advice we offer.</p>
            </div>
            <div className="why-card">
              <Clock className="why-icon" />
              <h4>Continuous Monitoring</h4>
              <p>Regular reviews and rebalancing to keep your wealth on the right track.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wealth-promise">
        <div className="container">
          <motion.div 
            className="promise-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="promise-content">
              <h3>Our Promise</h3>
              <p>At Florente Wealth Services, we believe wealth creation is a journey, not a transaction. Our mission is to build long-term, trust-based relationships while helping our clients achieve financial freedom with confidence and clarity.</p>
            </div>
            <div className="promise-visual">
              <div className="journey-path-graphic">
                <svg className="path-line" viewBox="0 0 400 200">
                  <motion.path 
                    d="M 20 180 Q 100 180 150 100 T 380 20" 
                    fill="none" 
                    stroke="var(--accent-10)" 
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                <div className="journey-node node-start">
                  <Compass size={24} />
                  <span>Planning</span>
                </div>
                <div className="journey-node node-mid">
                  <TrendingUp size={24} />
                  <span>Growth</span>
                </div>
                <div className="journey-node node-end">
                  <Sparkles size={32} />
                  <span>Freedom</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WealthContent;
