import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-hero-content"
            >
              <span className="contact-kicker">Contact us</span>
              <h1>Get in Touch with Florente</h1>
              <p>We're here to help your business grow and succeed. Reach out to us for inquiries, consultations, or partnership opportunities. Our team is ready to assist you with tailored solutions that meet your needs.</p>
            </motion.div>
          </div>
        </section>

        <section className="contact-content-section">
          <div className="container">
            <div className="contact-grid">
              {/* Left Column: Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="contact-info-side"
              >
                <div className="info-card">
                  <div className="info-item">
                    <div className="info-icon"><Mail size={24} /></div>
                    <div className="info-details">
                      <h3>Email</h3>
                      <a href="mailto:contact@florente.com">contact@florente.com</a>
                      <a href="mailto:info@florente.com">info@florente.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><Phone size={24} /></div>
                    <div className="info-details">
                      <h3>Phone</h3>
                      <a href="tel:+919885772356">+91 988577 2356</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><MapPin size={24} /></div>
                    <div className="info-details">
                      <h3>Address</h3>
                      <p>Plot No. 34B, 2nd floor, N Square,</p>
                      <p>Hi-Tech City, Hyderabad - 500081</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><Clock size={24} /></div>
                    <div className="info-details">
                      <h3>Business Hours</h3>
                      <div className="hours-grid">
                        <div className="hour-row">
                          <span>Monday to Friday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="hour-row">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="hour-row">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="contact-form-side"
              >
                <div className="form-container">
                  <h2>Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="premium-contact-form">
                    <div className="form-row">
                      <div className="input-group">
                        <label>First Name</label>
                        <input 
                          type="text" 
                          placeholder="Jane"
                          value={formState.firstName}
                          onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                          required 
                        />
                      </div>
                      <div className="input-group">
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

                    <div className="input-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        placeholder="jane@framer.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required 
                      />
                    </div>

                    <div className="input-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        required 
                      />
                    </div>

                    <div className="input-group">
                      <label>Message</label>
                      <textarea 
                        placeholder="Add a cover letter or anything else you want to share"
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Submit request <Send size={18} />
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="success-message">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
