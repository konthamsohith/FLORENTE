import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Shield, Target, Compass, BarChart3, Clock, Milestone, Sparkles, Key, Coins, Landmark, ShieldCheck, Sprout, Hourglass } from 'lucide-react';
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
      <section className="wealth-hero-v3">
        <div className="container wealth-container-v3">
          <div className="wealth-hero-grid">
            {/* Left Column: Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="wealth-info-side"
            >
              <div className="wealth-kicker">
                <Shield size={18} className="kicker-icon" />
                <span>Wealth Management</span>
              </div>
              
              <h1 className="wealth-main-title">
                Smart Investing.<br />
                Trusted Advice.<br />
                <span className="blue-text">Long-Term Wealth Creation.</span>
              </h1>

              <p className="wealth-desc-p1">
                Florente Wealth Services is dedicated to helping individuals and families grow, protect, and manage their wealth through expert-led mutual fund advisory and distribution services.
              </p>

              <div className="wealth-quote-box">
                <p>
                  With a customer-centric approach and deep market understanding, we guide investors toward informed financial decisions aligned with their goals.
                </p>
              </div>

              <div className="wealth-cta-group">
                <button className="btn-wealth-primary">
                  <span>Explore Solutions</span>
                  <TrendingUp size={18} />
                </button>
                <button className="btn-wealth-secondary">
                  <Clock size={18} />
                  <span>Talk to an Advisor</span>
                </button>
              </div>

              <div className="wealth-features-footer">
                <div className="w-feature">
                  <Shield size={24} className="feature-icon" />
                  <div className="feature-text">
                    <strong>Trusted Guidance</strong>
                    <span>Experienced & Reliable</span>
                  </div>
                </div>
                <div className="w-feature">
                  <PieChart size={24} className="feature-icon" />
                  <div className="feature-text">
                    <strong>Tailored Solutions</strong>
                    <span>Built Around Your Goals</span>
                  </div>
                </div>
                <div className="w-feature">
                  <Key size={24} className="feature-icon" />
                  <div className="feature-text">
                    <strong>Secure & Transparent</strong>
                    <span>Your Wealth, Protected</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="wealth-visual-side"
            >
              <div className="wealth-main-card">
                {/* Background Dot Pattern */}
            
                
                <div className="visual-container">
                  

                  {/* Static Wealth Image */}
                  <div className="wealth-image-wrapper">
                    <motion.img 
                      src="/wealth.png" 
                      alt="Wealth Management Growth" 
                      className="wealth-static-image"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div className="wealth-bottom-banner">
                  <Shield size={18} className="banner-icon" />
                  <span>Expertise you can trust. Solutions that create lasting wealth.</span>
                </div>
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

      {/* Our Philosophy - Elite Narrative */}
      <section className="wealth-philosophy-narrative">
        <div className="container">
          <motion.div 
            className="philosophy-hero-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="philosophy-label">Our Philosophy</span>
            <h2 className="philosophy-main-title">Our Promise</h2>
            <div className="philosophy-divider"></div>
            <p className="philosophy-mission">
              At Florente Wealth Services, we believe wealth creation is a journey, not a transaction. Our mission is to build long-term, trust-based relationships while helping our clients achieve financial freedom with confidence and clarity.
            </p>
          </motion.div>

          <div className="philosophy-roadmap">
            {[
              { 
                title: "Strategic Planning", 
                desc: "Defining clear roadmaps for your unique financial goals.",
                icon: <Compass size={24} />
              },
              { 
                title: "Disciplined Growth", 
                desc: "Nurturing wealth through market cycles with expert analysis.",
                icon: <TrendingUp size={24} />
              },
              { 
                title: "Financial Freedom", 
                desc: "The ultimate goal: absolute clarity and confidence in your future.",
                icon: <Sparkles size={24} />,
                highlight: true
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                className={`roadmap-block ${step.highlight ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="roadmap-header">
                  <div className="roadmap-icon">{step.icon}</div>
                  <div className="roadmap-line"></div>
                </div>
                <div className="roadmap-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WealthContent;
