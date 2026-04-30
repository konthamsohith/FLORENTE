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
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import Branches from './components/Branches';

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

  // Auto-play and hash scroll logic removed here as they are handled in sub-components or common hooks

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

        <section id="about" className="modern-about-v2" aria-labelledby="about-v2-heading">
          <div className="container">
            <div className="modern-about__grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="modern-about__content"
              >
                <span className="modern-about__kicker">About Florente</span>
                <h2 id="about-v2-heading" className="modern-about__title">
                  Building the Future with Vision &amp; Trust
                </h2>
                <p className="modern-about__lead">
                  At Florente, we believe that progress is driven by a clear vision and sustained by the trust of our partners.
                </p>

                <div className="precision-points">
                  <div className="precision-item">
                    <span className="precision-num">01</span>
                    <span className="precision-text">Purchase and Investment Advisory</span>
                  </div>
                  <div className="precision-item">
                    <span className="precision-num">02</span>
                    <span className="precision-text">Collaborative Expert Consultation</span>
                  </div>
                </div>

                <div className="modern-about__cta-wrap">
                  <Link to="/about" className="modern-about__cta">
                    Explore the Florente story <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="modern-about__visual"
              >
                <div className="modern-about__image-wrapper">
                  <img src="/visionary_architecture.png" alt="Florente Visionary Architecture" className="modern-about__image" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="strategic-intent-minimal"
                >
                  <span className="intent-label">Strategic intent</span>
                  <div className="intent-item">
                    <h3 className="intent-title">Our Vision</h3>
                    <p className="intent-text">To lead through innovation and sustainability, providing diverse solutions that empower communities across the globe.</p>
                  </div>
                  <div className="intent-item">
                    <h3 className="intent-title">Our Mission</h3>
                    <p className="intent-text">To build long-term, trust-based relationships while helping our clients achieve their goals with confidence.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divisions Section - Corporate Bento Grid */}
        <section id="divisions">
          <div className="container">
            <div className="divisions-header-flex">
              <div className="header-left">
                <span className="accent-text">Divisions of Florente</span>
                <h2 style={{ maxWidth: '800px', margin: 0, marginTop: '1rem' }}>Excellence across energy, real estate, wealth, consultancy, and media.</h2>
              </div>
              <div className="header-right-text">
                <p>Our specialized divisions work synergistically to drive innovation, optimize investments, and empower global market leadership through deep industry expertise.</p>
              </div>
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
              <div className="division-bento-card division-bento-card--catalog">
                <span className="div-bento-label">Full Portfolio</span>
                <h3 className="div-bento-title">All Florente Services</h3>
                <p className="div-bento-desc">
                  Explore our complete range of specialized solutions and strategic investment opportunities.
                </p>
                <div className="div-bento-footer">
                  <Link to="/services" className="div-bento-cta">
                    View Full Catalog <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="branches">
          <Branches />
        </section>

        <section id="contact" className="section-padding">
          <div className="container">
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
                    <p>info@florente.com</p>
                  </div>
                  <div className="contact-meta-item">
                    <h4>Phone</h4>
                    <p>+91 988577 2356</p>
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
                        <span className="hours-label">Wednesday to Saturday</span>
                        <p>9:30 AM - 5:30 PM</p>
                      </div>
                    </div>
                    <div className="hours-row" style={{ marginTop: '0.5rem' }}>
                      <div className="hours-col">
                        <span className="hours-label">Tuesday</span>
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
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="compact-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
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
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="compact-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="compact-group full-width">
                    <label>Message</label>
                    <textarea
                      placeholder="Add a cover letter or anything else you want to share"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home divisions={divisions} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/divisions/:slug" element={<DivisionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

