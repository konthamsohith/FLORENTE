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
                <div className="bg-dots-pattern"></div>
                
                <div className="visual-container">
                  {/* Connection Lines (SVG) */}
                  <svg className="connection-lines-svg" viewBox="0 0 500 500">
                    <line x1="250" y1="250" x2="100" y2="100" className="conn-line" />
                    <line x1="250" y1="250" x2="400" y2="100" className="conn-line" />
                    <line x1="250" y1="250" x2="100" y2="400" className="conn-line" />
                    <line x1="250" y1="250" x2="400" y2="400" className="conn-line" />
                    
                    {/* Dots at intersection points */}
                    <circle cx="175" cy="175" r="4" className="conn-dot" />
                    <circle cx="325" cy="175" r="4" className="conn-dot" />
                    <circle cx="175" cy="325" r="4" className="conn-dot" />
                    <circle cx="325" cy="325" r="4" className="conn-dot" />
                  </svg>

                  {/* Timeline of Growth Visual */}
                  <div className="wealth-timeline-container">
                    {/* SVG Growth Line */}
                    <svg className="growth-line-svg" viewBox="0 0 500 200">
                      <motion.path
                        d="M 50,150 L 150,130 L 250,100 L 350,70 L 450,40"
                        fill="none"
                        stroke="#8b7355"
                        strokeWidth="2.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      {[
                        { x: 50, y: 150, label: 'START', color: '#2563eb', dir: 'left' },
                        { x: 150, y: 130 },
                        { x: 250, y: 100 },
                        { x: 350, y: 70 },
                        { x: 450, y: 40, label: 'SUCCESS', color: '#ef4444', dir: 'right' }
                      ].map((point, idx) => (
                        <g key={idx}>
                          <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="6"
                            fill="#fff"
                            stroke="#8b7355"
                            strokeWidth="2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: idx * 0.4 }}
                          />
                          {point.label && (
                            <motion.foreignObject
                              x={point.dir === 'left' ? point.x - 60 : point.x - 0}
                              y={point.y - 50}
                              width="80"
                              height="60"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.4 + 0.5 }}
                            >
                              <div className={`milestone-marker ${point.dir}`}>
                                {point.label === 'START' ? (
                                  <div className="normal-label" style={{ color: point.color }}>
                                    {point.label}
                                  </div>
                                ) : (
                                  <>
                                    <div className="flag-pole" style={{ backgroundColor: point.color }}></div>
                                    <div className="point-flag" style={{ color: point.color }}>
                                      {point.label}
                                    </div>
                                  </>
                                )}
                              </div>
                            </motion.foreignObject>
                          )}
                        </g>
                      ))}
                    </svg>

                    {/* Central Narrative */}
                    <motion.div 
                      className="timeline-narrative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      "Long-term Investment"
                    </motion.div>

                    {/* Horizontal Stacks */}
                    <div className="timeline-stacks">
                      {[2, 5, 10, 18, 28].map((count, sIdx) => (
                        <div key={sIdx} className="timeline-stack-item">
                          <div className="t-stack">
                            {[...Array(count)].map((_, i) => (
                              <motion.div 
                                key={i}
                                className="t-coin"
                                style={{ bottom: i * 3, zIndex: 10 + i }}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: sIdx * 0.4 + (i * 0.03) }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      {/* Professional Sandtimer SVG */}
                      <motion.div 
                        className="hourglass-container"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                      >
                        <motion.div
                          className="sandtimer-wrapper"
                          animate={{ rotate: [0, 180, 180, 360, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg width="60" height="80" viewBox="0 0 60 80">
                            {/* Wooden Frame - Top */}
                            <rect x="5" y="0" width="50" height="6" rx="2" fill="#5d4037" />
                            {/* Glass Body */}
                            <path d="M10,6 Q10,40 30,40 Q50,40 50,6 Z" fill="rgba(255,255,255,0.1)" stroke="#5d4037" strokeWidth="1" />
                            <path d="M10,74 Q10,40 30,40 Q50,40 50,74 Z" fill="rgba(255,255,255,0.1)" stroke="#5d4037" strokeWidth="1" />
                            {/* Blue Sand - Bottom */}
                            <path d="M12,72 Q12,50 30,40 Q48,50 48,72 Z" fill="#2563eb" opacity="0.8">
                              <animate attributeName="d" values="M12,72 Q12,50 30,40 Q48,50 48,72 Z; M12,72 Q12,70 30,70 Q48,70 48,72 Z; M12,72 Q12,50 30,40 Q48,50 48,72 Z" dur="10s" repeatCount="indefinite" />
                            </path>
                            {/* Sand Stream */}
                            <line x1="30" y1="35" x2="30" y2="70" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2">
                              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                            </line>
                            {/* Wooden Frame - Bottom */}
                            <rect x="5" y="74" width="50" height="6" rx="2" fill="#5d4037" />
                            {/* Support Pillars */}
                            <rect x="8" y="6" width="3" height="68" fill="#5d4037" opacity="0.6" />
                            <rect x="49" y="6" width="3" height="68" fill="#5d4037" opacity="0.6" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
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
