import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, TrendingUp, ShieldCheck, MapPin, CheckCircle, ArrowRight, Award, PieChart, Gem } from 'lucide-react';
import './PropertiesContent.css';

const PropertiesContent: React.FC = () => {
  return (
    <div className="properties-content">
      {/* High-Impact Hero Segment */}
      <section className="prop-luxury-hero">
        <div className="container">
          <div className="luxury-hero-grid">
            <motion.div 
              className="luxury-hero-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1>Curated Property <br /><span className="text-gradient-gold">Investments.</span></h1>
              <div className="accent-tag-group">
                <span className="accent-tag">Premier Real Estate Advisory</span>
              </div>
              <p className="hero-lead">Florente Properties LLP is a trusted real estate advisory firm dealing in premium properties across Dubai and India. We guide clients toward the right investment opportunities in both residential and commercial segments.</p>
              
              <div className="hero-stats-row">
                <div className="hero-stat-node">
                  <div className="stat-icon-box"><PieChart size={20} /></div>
                  <div className="stat-info">
                    <strong>22%</strong>
                    <span>Avg. Annual Growth</span>
                  </div>
                </div>
                <div className="hero-stat-node">
                  <div className="stat-icon-box"><Gem size={20} /></div>
                  <div className="stat-info">
                    <strong>Prime</strong>
                    <span>Selected Locations</span>
                  </div>
                </div>
              </div>

              <div className="hero-cta-group">
                <button className="btn-luxury-primary">
                  View Portfolios <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="luxury-hero-visual-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="luxury-hero-image-frame">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070" alt="Dubai Luxury" />
                <div className="image-overlay-vignette"></div>
                
                <div className="floating-badge experience-badge">
                  <div className="badge-icon"><Award size={24} /></div>
                  <div className="badge-text">
                    <strong>10+ Years</strong>
                    <span>Market Intelligence</span>
                  </div>
                </div>

                <div className="floating-badge location-badge">
                  <div className="badge-icon"><MapPin size={24} /></div>
                  <div className="badge-text">
                    <strong>Dubai Luxury</strong>
                    <span>Exclusive Access</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asymmetric Alternating Sections (No Cards) */}
      <section className="prop-regions-v2">
        <div className="container">
          {/* Dubai Section */}
          <div className="region-split dubai-split">
            <motion.div 
              className="region-split-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="location-context">
                <Globe className="context-icon" />
                <span>Dubai, UAE</span>
              </div>
              <h3>Dubai Properties & Expertise</h3>
              <p className="region-description">Strategic partnerships with Emaar, DAMAC, Sobha, and Nakheel. Accessing the world's most stable and high-yield real estate ecosystem.</p>
              
              <div className="feature-modern-grid">
                <div className="f-m-item">
                  <strong>Zero Property Tax</strong>
                  <p>Maximize your returns with tax-free yields.</p>
                </div>
                <div className="f-m-item">
                  <strong>High Rental Yields</strong>
                  <p>Outperforming global real estate benchmarks.</p>
                </div>
                <div className="f-m-item">
                  <strong>Golden Visa Support</strong>
                  <p>Long-term residency through property investment.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="region-split-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="visual-frame">
                <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=1935" alt="Dubai Architecture" />
                <div className="visual-deco-line"></div>
              </div>
            </motion.div>
          </div>

          {/* India Section */}
          <div className="region-split india-split reverse">
            <motion.div 
              className="region-split-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="location-context">
                <MapPin className="context-icon" />
                <span>India</span>
              </div>
              <h3>Properties in India</h3>
              <p className="region-description">Elite residential and commercial developments across major metros. Partnered with MSN, Sattva, Brigade, and Prestige.</p>
              
              <div className="feature-modern-grid">
                <div className="f-m-item">
                  <strong>RERA Approved</strong>
                  <p>Ensuring transparency and project compliance.</p>
                </div>
                <div className="f-m-item">
                  <strong>Metro Hub Locations</strong>
                  <p>Strategically positioned for capital appreciation.</p>
                </div>
                <div className="f-m-item">
                  <strong>Institutional Quality</strong>
                  <p>Built to global standards by credible developers.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="region-split-visual"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="visual-frame">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" alt="Indian Luxury Projects" />
                <div className="visual-deco-line"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Minimalist Clean Grid */}
      <section className="prop-services-v2">
        <div className="container">
          <div className="services-v2-header">
            <h2>Our Services</h2>
            <div className="v2-header-line"></div>
          </div>
          
          <div className="services-v2-grid">
            <div className="s-v2-item">
              <div className="s-v2-num">01</div>
              <h4>Portfolio Consultation</h4>
              <p>Selection based on budget, requirements, and investment goals.</p>
            </div>
            <div className="s-v2-item">
              <div className="s-v2-num">02</div>
              <h4>ROI Analysis</h4>
              <p>Deep-dive data analysis into projected yields and capital appreciation.</p>
            </div>
            <div className="s-v2-item">
              <div className="s-v2-num">03</div>
              <h4>Legal Advisory</h4>
              <p>Comprehensive support for documentation and agreement processes.</p>
            </div>
            <div className="s-v2-item">
              <div className="s-v2-num">04</div>
              <h4>Asset Management</h4>
              <p>End-to-end support until final handover and long-term possession.</p>
            </div>
          </div>

          <motion.div 
            className="prop-commitment-v2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>"We bridge the gap between global investors and world-class developments through transparent, ethical, and customer-focused advisory."</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesContent;
