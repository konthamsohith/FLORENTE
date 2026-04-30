import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
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
                        <span className="hours-label">Wednesday to Monday</span>
                        <p>9:30 AM - 5:30 PM</p>
                      </div>
                      <div className="hours-col">
                        <span className="hours-label">Saturday</span>
                        <p>10:00 AM - 4:00 PM</p>
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
                    <div className="form-success" style={{ marginTop: '1rem', color: '#4CAF50', fontWeight: '600' }}>
                      Message sent successfully! We will contact you soon.
                    </div>
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

export default ContactPage;
