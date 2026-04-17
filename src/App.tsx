import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TrustedBanner from './components/TrustedBanner';
import { 
  ArrowRight,
  Phone
} from 'lucide-react';
import './App.css';

import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { divisions } from './data/divisions';
import DivisionPage from './pages/DivisionPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

interface HomeProps {
  divisions: any[];
}

const Home: React.FC<HomeProps> = ({ divisions }) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveDivisionIndex((prev) => (prev + 1) % divisions.length);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, divisions.length]);

  // Scroll to hash on load (e.g., when coming from Division pages)
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // remove #
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="home-content">
      <Header />
      <main>
        <section id="home">
          <Hero divisions={divisions} />
        </section>

        <TrustedBanner />

        <section id="about" className="section-padding">
          <div className="about-section-container">
            <div className="about-4-box-grid">
              <div className="about-box about-text-box">
                <h2 className="about-box-title">Building the Future with Vision & Trust</h2>
                <p className="about-box-desc">
                  At Florente, we believe that progress is driven by a clear vision and sustained by the trust of our partners.
                </p>
              </div>
              <div className="about-box about-img-box">
                <img src="/buy_sell_cards_consultancy_1775407503392.png" alt="Purchase and Investment Advisory" />
              </div>
              <div className="about-box about-img-box">
                <img src="/experts_collaboration_laptop_1775407527405.png" alt="Collaborative Expert Consultation" />
              </div>
              <div className="about-box about-text-box light-bg">
                <div className="vm-grid">
                  <div className="vm-box-item">
                    <h4>Our Vision</h4>
                    <p>To lead through innovation and sustainability, providing diverse solutions that empower communities and industries across the globe.</p>
                  </div>
                  <div className="vm-box-item">
                    <h4>Our Mission</h4>
                    <p>To build long-term, trust-based relationships while helping our clients achieve their goals with confidence and clarity.</p>
                  </div>
                </div>
                <a href="#contact" className="btn-success-dark slide-push-btn" style={{ marginTop: '2rem', display: 'inline-block', width: '165px', textDecoration: 'none' }}>
                  <div className="btn-slide-wrapper">
                    <div className="btn-state btn-state-white">
                      <span className="btn-text">More about us</span>
                      <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                    </div>
                    <div className="btn-state btn-state-dark">
                      <span className="btn-text">More about us</span>
                      <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divisions Section - Corporate Bento Grid */}
        <section id="divisions">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '4rem' }}>
              <span className="accent-text">Divisions of Florente</span>
              <h2 style={{ maxWidth: '800px' }}>Excellence across energy, real estate, wealth, consultancy, and media.</h2>
            </div>
            
            <div className="divisions-bento-grid">
              {divisions.map((div: any, index: number) => (
                <div key={index} className="division-bento-card">
                  <span className="div-bento-label">Section 0{index + 1}</span>
                  <h3 className="div-bento-title">{div.shortName}</h3>
                  
                  <div className="div-bento-img-frame">
                    <img src={div.image} alt={div.title} className="div-bento-img" />
                  </div>
                  
                  <p className="div-bento-desc">{div.description}</p>
                  
                  <div className="div-bento-footer">
                    <Link to={`/divisions/${div.slug}`} className="div-bento-cta">
                      Explore Division <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}

              {/* All Services Balance Card */}
              <div className="division-bento-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.2)' }}>
                <span className="div-bento-label">Full Portfolio</span>
                <h3 className="div-bento-title">All Florente Services</h3>
                <p className="div-bento-desc">
                  Explore our complete range of specialized solutions and strategic investment opportunities.
                </p>
                <div className="div-bento-footer">
                  <Link to="/services" className="div-bento-cta" style={{ color: 'var(--accent-10)' }}>
                    View Full Catalog <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="branches">
          <div className="wide-section-container">
            <div className="grid-presence-header">
              <div className="presence-title-area">
                <span className="accent-tag">Global Presence</span>
                <h2>We build trust and maintain relations!</h2>
                <div className="presence-cta-area">
                  <p>Our specialist team understands the importance of long lasting relationships with our clients to deliver specific investment solutions.</p>
                </div>
              </div>
            </div>

            <div className="presence-bento-grid">
              <div className="bento-card card-hyderabad-hq">
                <img src="/professional_consultant_banking_recruitment_1775411150948.png" alt="Hyderabad HQ" className="bento-img-full" />
                <div className="bento-content-overlay">
                  <span className="bento-label">Global Headquarters</span>
                  <h3 className="bento-title">Hyderabad (HQ)</h3>
                  <p className="bento-subtitle">N Square, Hi-Tech City, Hyderabad - 500081</p>
                  <a href="#contact" className="bento-pill-cta">
                    Visit HQ <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="bento-card card-vijayawada-blue">
                <span className="bento-label">Regional Excellence</span>
                <h3 className="bento-title">Vijayawada Branch</h3>
                <p className="bento-subtitle">Jayaprakash nagar, Vijayawada - 520008</p>
                <p className="presence-card-desc-signature">
                  Delivering premier wealth management and investment advisory services across the Andhra region.
                </p>
                <div className="bento-contact-row">
                  <Phone size={22} /> +91 988577 2356
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <a href="#contact" className="bento-pill-cta">
                    Book a call <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="bento-card card-qatar-navy">
                <div className="bento-text-side">
                  <span className="bento-label">International Support</span>
                  <h3 className="bento-title">Qatar Office</h3>
                  <span className="bento-subtitle">Qatar (International)</span>
                  <p className="presence-card-desc-signature">
                    Specialized property advisory and management for our global clients in the Middle East.
                  </p>
                  <div className="bento-contact-row">
                    <Phone size={22} /> +974 33344369
                  </div>
                </div>
                <div className="bento-img-side">
                  <img src="/dubai_luxury_real_estate_properties_1775411126789.png" alt="Qatar Office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="presence-bg-glow"></div>
        </section>

        <section id="success" className="section-padding">
          <div className="wide-section-container">
            <div className="section-header">
              <h2>Our clients' success is our top priority</h2>
              <p className="section-desc">What our customers feel about our services!</p>
            </div>

            <div className="success-grid">
              <div className="success-item-vertical success-card-light">
                <span className="case-tag">{divisions[activeDivisionIndex].caseStudy.tag}</span>
                <h3 className="case-title">
                  {divisions[activeDivisionIndex].caseStudy.title}
                </h3>
                <div className="case-nav">
                  <button 
                    className="nav-btn-small"
                    onClick={() => setActiveDivisionIndex((prev) => (prev - 1 + divisions.length) % divisions.length)}
                  >
                    <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
                  </button>
                  <button 
                    className="nav-btn-small"
                    onClick={() => setActiveDivisionIndex((prev) => (prev + 1) % divisions.length)}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="success-item-image">
                <img 
                  src={divisions[activeDivisionIndex].image} 
                  alt={divisions[activeDivisionIndex].title} 
                />
              </div>

              <div className="success-item-stat success-card-blue">
                <div className="stat-value">{divisions[activeDivisionIndex].impactStat.value}</div>
                <p className="stat-label">{divisions[activeDivisionIndex].impactStat.label}</p>
              </div>

              <div className="success-item-quote success-card-dark">
                <div key={activeDivisionIndex} className="quote-animate-wrapper animate-in">
                  <p className="quote-text">
                    "{divisions[activeDivisionIndex].testimonial.quote}"
                  </p>
                  <div className="quote-author">
                    <div className="author-avatar">
                      <img src={divisions[activeDivisionIndex].testimonial.avatar} alt={divisions[activeDivisionIndex].testimonial.author} />
                    </div>
                    <div className="author-info">
                      <strong>{divisions[activeDivisionIndex].testimonial.author}</strong>
                      <span>{divisions[activeDivisionIndex].testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="success-cta-banner">
              <div className="cta-left">
                <span className="cta-subtitle">Empowering Your Financial Future</span>
                <h2 className="cta-title">Unlock your full potential with expert consulting and tailored financial strategies.</h2>
                <p className="cta-desc">
                  Whether you're growing a business, optimizing investments, or securing long-term wealth, we're here to guide you every step of the way.
                </p>
                <div className="cta-buttons">
                  <button className="btn-success-white">Pricing</button>
                  <button className="btn-success-dark slide-push-btn">
                    <div className="btn-slide-wrapper">
                      <div className="btn-state btn-state-white">
                        <span className="btn-text">Get in touch</span>
                        <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                      </div>
                      <div className="btn-state btn-state-dark">
                        <span className="btn-text">Get in touch</span>
                        <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="cta-right-img">
                <img src="/buy_sell_cards_consultancy_1775407503392.png" alt="Tailored Financial Strategies" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="wide-section-container">
            <div className="contact-redesign-wrapper">
              <div className="contact-info-block">
                <span className="contact-small-tag">Contact us</span>
                <h2 className="contact-block-title">Get in Touch with Florente</h2>
                <p className="contact-block-desc">
                  We're here to help your business grow and succeed. Reach out to us for inquiries, consultations, or partnership opportunities. Our team is ready to assist you with tailored solutions that meet your needs.
                </p>

                <div className="contact-meta-grid">
                  <div className="contact-meta-item">
                    <h4>Email</h4>
                    <p>contact@florente.com</p>
                    <p>info@florente.com</p>
                  </div>
                  <div className="contact-meta-item">
                    <h4>Phone</h4>
                    <p>+91 988577 2356</p>
                    <p>+974 33344369</p>
                  </div>
                  <div className="contact-meta-item">
                    <h4>Address</h4>
                    <p>Plot No. 34B, 2nd floor, N Square,</p>
                    <p>Hi-Tech City, Hyderabad - 500081</p>
                  </div>
                  <div className="contact-meta-item">
                    <h4>Business Hours</h4>
                    <div className="hours-row">
                      <div className="hours-col">
                        <span className="hours-label">Monday to Friday</span>
                        <p>9:00 AM - 6:00 PM</p>
                      </div>
                      <div className="hours-col">
                        <span className="hours-label">Saturday</span>
                        <p>10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="hours-row" style={{ marginTop: '0.5rem' }}>
                      <div className="hours-col">
                        <span className="hours-label">Sunday</span>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-block">
                <h3 className="form-block-title">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="modern-contact-form">
                  <div className="form-row">
                    <div className="compact-group">
                      <label>First Name</label>
                      <input 
                        type="text" 
                        placeholder="Jane"
                        value={formState.firstName}
                        onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="compact-group">
                      <label>Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Smith"
                        value={formState.lastName}
                        onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="compact-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        placeholder="jane@framer.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="compact-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="compact-group full-width">
                    <label>Message</label>
                    <textarea 
                      placeholder="Add a cover letter or anything else you want to share"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      rows={8}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-modern-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit request'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="form-success">Message sent successfully! We will contact you soon.</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home divisions={divisions} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/divisions/:slug" element={<DivisionPage />} />
      </Routes>
    </div>
  );
}

export default App;

