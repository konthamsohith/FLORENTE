import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Check, Linkedin, Mail, Shield, Target, BarChart3, Award } from 'lucide-react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /*
  const team = [
    { name: "Emily Carter", role: "Chief Executive Officer", image: "/team_member_1_1775964073984.png" },
    { name: "Andrew Brown", role: "Financial Strategy Director", image: "/team_member_2_1775964093346.png" },
    { name: "David Martinez", role: "Lead Portfolio Manager", image: "/team_member_3_1775964112177.png" },
    { name: "Sarah Jenkins", role: "VP of Sustainability", image: "/team_member_sarah_jenkins_sustainability_1775966241137.png" }, 
    { name: "Michael Chen", role: "Head of Infrastructure", image: "/team_member_michael_chen_infrastructure_1775966262612.png" },
    { name: "Olivia Thompson", role: "Global HR Director", image: "/team_member_olivia_thompson_hr_1775966285122.png" }
  ];
  */

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="about-page">
      <Header />
      
      <main>
        {/* About Hero Mosaic */}
        <section className="about-hero-mosaic">
          <div className="container">
            <div className="hero-text-grid">
              <div className="hero-text-left">
                <motion.span initial="hidden" animate="visible" variants={fadeIn} className="about-badge">ABOUT US</motion.span>
                <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="mosaic-title">
                  Empowering Businesses with Smart Solutions
                </motion.h1>
              </div>
              <div className="hero-text-right">
                <p>Helping businesses implement sustainable practices and meet ESG standards for long-term success.</p>
                <div className="btn-group-hero">
                   <Link to="/services" className="btn-success-blue-static" style={{ textDecoration: 'none' }}>
                     <span className="btn-text">Our services</span>
                     <span className="cta-icon-circle-static"><ArrowRight size={16} /></span>
                   </Link>
                </div>
              </div>
            </div>
            
            <div className="mosaic-gallery-grid">
              <div className="mosaic-item vertical">
                <img src="/hero_mosaic_vertical_1775964014961.png" alt="Office Atmosphere" />
              </div>
              <div className="mosaic-item horizontal-top">
                <img src="/hero_mosaic_horizontal_1_1775964038110.png" alt="Team Collaboration" />
              </div>
              <div className="mosaic-item horizontal-bottom">
                <img src="/hero_mosaic_horizontal_2_1775964054833.png" alt="Data Analysis" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="about-mission section-padding">
          <div className="container">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeIn}
              className="mission-content"
            >
              <span className="mission-tag">OUR MISSION</span>
              <p className="mission-text">
                Helping businesses implement sustainable practices and meet ESG standards for long-term success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dual Feature Grid (Commitment & Why Choose) */}
        <section className="about-dual-grid section-padding">
          <div className="container">
            <div className="composite-grid">
              {/* Row 1: Commitment */}
              <div className="feature-card commitment-card">
                <h2 className="feature-title">Our Commitment</h2>
                <p className="feature-desc">
                  At Florente, we are committed to delivering excellence, transparency, and innovation in every aspect of our services. We strive to build lasting relationships with our clients, ensuring that their financial goals are met with precision and efficiency.
                </p>
              </div>
              <div className="feature-image">
                <img src="/commitment_excellence_corporate_1775966307490.png" alt="Commitment" />
              </div>

              {/* Row 2: Why Choose */}
              <div className="feature-card values-card">
                <h2 className="feature-title">Why Choose Florente?</h2>
                <div className="feature-blocks-grid">
                  <div className="feature-item-block">
                    <div className="feature-icon-wrapper"><Shield size={24} /></div>
                    <div className="feature-text-content">
                      <strong>Expertise You Can Trust</strong>
                      <span>Our team brings years of industry experience to deliver high-quality consulting and innovative solutions.</span>
                    </div>
                  </div>
                  <div className="feature-item-block">
                    <div className="feature-icon-wrapper"><Target size={24} /></div>
                    <div className="feature-text-content">
                      <strong>Tailored Approach</strong>
                      <span>We craft customized strategies that align with your unique business needs and financial objectives.</span>
                    </div>
                  </div>
                  <div className="feature-item-block">
                    <div className="feature-icon-wrapper"><BarChart3 size={24} /></div>
                    <div className="feature-text-content">
                      <strong>Data-Driven Insights</strong>
                      <span>Our cutting-edge analytics and financial modeling ensure informed decision-making for long-term success.</span>
                    </div>
                  </div>
                  <div className="feature-item-block">
                    <div className="feature-icon-wrapper"><Award size={24} /></div>
                    <div className="feature-text-content">
                      <strong>Proven Results</strong>
                      <span>We have a track record of helping businesses enhance financial efficiency, manage risks, and achieve their goals.</span>
                    </div>
                  </div>
                </div>
                <div className="feature-actions">
                   <button className="btn-pricing">Pricing</button>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                      <button className="btn-success-black-static">
                        <span className="btn-text" style={{ color: '#095F8A' }}>Get in touch</span>
                        <span className="cta-icon-circle-static" style={{ background: '#095F8A', color: '#FFFFFF' }}><ArrowRight size={16} /></span>
                      </button>
                    </Link>
                </div>
              </div>
              <div className="feature-image">
                <img src="/strategy_insights_vertical_1775966327650.png" alt="Strategic Planning" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section 
        <section className="about-team section-padding">
          <div className="container">
            <div className="team-header">
              <span className="team-tag">OUR TEAM</span>
              <h2>Meet the Brilliant Minds Behind our Successful Campaigns</h2>
            </div>
            
            <div className="team-grid">
              {team.map((member, idx) => (
                <div key={idx} className="team-card">
                  <div className="team-img">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="team-info-card">
                    <div className="team-info-top">
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                    </div>
                    <div className="team-social">
                      <a href="#"><Linkedin size={18} /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
