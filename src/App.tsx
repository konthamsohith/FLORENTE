import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { 
  UserPlus, 
  TrendingUp, 
  Home, 
  Camera,
  HardHat,
  ArrowRight
} from 'lucide-react';
import './App.css';

function App() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormState({ name: '', email: '', subject: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);

  const divisions = [
    {
      title: 'FISrente Marketing Labs LLP',
      shortName: 'Marketing Labs',
      description: 'A leading player in sustainable energy and infrastructure development, providing end-to-end solutions for a greener future.',
      icon: <HardHat size={32} />,
      image: '/marketing_labs_solar_energy_1775411828713.png',
      subServices: ['Solar Energy', 'Infrastructure', 'MEP', 'Interior Design']
    },
    {
      title: 'FISrente PROPERTIES LLP',
      shortName: 'Properties',
      description: 'Your premier real estate advisory firm bridging the gap between luxury living in Dubai and strategic investments in India.',
      icon: <Home size={32} />,
      image: '/properties_dubai_luxury_realestate_1775411853341.png',
      subServices: ['Dubai Real Estate', 'Advisory', 'Emaar Partner', 'Investment']
    },
    {
      title: 'FIrente A CONSULTANT LLP',
      shortName: 'Consultancy',
      description: 'Connecting top-tier talent with world-class organizations across insurance, banking, and software industries.',
      icon: <UserPlus size={32} />,
      image: '/consultant_recruitment_banking_1775411878440.png',
      subServices: ['Manpower', 'Recruitment', 'Banking', 'Software Personnel']
    },
    {
      title: 'FISrente WEALTH SERVICE LLP',
      shortName: 'Wealth Service',
      description: 'Dedicated to helping individuals and families grow, protect, and manage their wealth through expert-led fund advisory.',
      icon: <TrendingUp size={32} />,
      image: '/wealth_service_financial_planning_1775411901441.png',
      subServices: ['Mutual Funds', 'SIP', 'Retirement Planning', 'Monitoring']
    },
    {
      title: 'FISrente ENTERTAINMENTS LLP',
      shortName: 'Entertainments',
      description: 'Transforming creative visions into cinematic masterpieces. Focused on meaningful content that captures the human experience.',
      icon: <Camera size={32} />,
      image: '/entertainment_film_production_set_1775411922771.png',
      subServices: ['Film Production', 'KIRAYI Project', 'Storytelling', 'Cinema']
    }
  ];

  return (
    <div className="app-container">
      <Header />
      
      <main>
        <section id="home">
          <Hero divisions={divisions} />
        </section>

        {/* Trusted By Banner mimicking the image design */}
        <section className="trusted-banner">
          <div className="container trusted-inner">
            <div className="trusted-text">
              Trusted by Leading Companies Worldwide
            </div>
            <div className="trusted-logos">
              <img src="https://www.vectorlogo.zone/logos/tatamotors/tatamotors-ar21.svg" alt="TATA Motors" className="brand-logo-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Qatar_Airways_logo.svg/512px-Qatar_Airways_logo.svg.png" alt="Qatar Airways" className="brand-logo-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/512px-Infosys_logo.svg.png" alt="Infosys" className="brand-logo-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="brand-logo-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="brand-logo-img" />
            </div>
          </div>
        </section>

        <section id="about" className="section-padding">
          <div className="about-section-container">
            <div className="about-4-box-grid">
              {/* Box 1: Intro Text */}
              <div className="about-box about-text-box">
                <h2 className="about-box-title">Building the Future with Vision & Trust</h2>
                <p className="about-box-desc">
                  At Florente, we believe that progress is driven by a clear vision and sustained by the trust of our partners.
                </p>
              </div>

              {/* Box 2: Image Purchase & Investment */}
              <div className="about-box about-img-box">
                <img src="/buy_sell_cards_consultancy_1775407503392.png" alt="Purchase and Investment Advisory" />
              </div>

              {/* Box 3: Image Expert Collaboration */}
              <div className="about-box about-img-box">
                <img src="/experts_collaboration_laptop_1775407527405.png" alt="Collaborative Expert Consultation" />
              </div>

              {/* Box 4: Vision & Mission */}
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
                <a href="#contact" className="btn-about" style={{ marginTop: '2rem' }}>
                  More about us <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Horizontal Stats Bar */}
            <div className="about-stats-bar">
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-text">Global Divisions</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">25+</span>
                <span className="stat-text">Experts</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">10+</span>
                <span className="stat-text">Associated Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">250+</span>
                <span className="stat-text">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </section>

        <section id="divisions" className="section-padding">
          <div className="container">
            <div className="divisions-container">
              <div className="divisions-left">
                <div className="section-header">
                  <span className="accent-text">Our Companies</span>
                  <h2>Divisions of Florente</h2>
                  <p className="section-desc">Excellence across energy, real estate, wealth, consultancy, and media.</p>
                </div>
                <div className="divisions-list">
                  {divisions.map((div, index) => (
                    <div 
                      key={index} 
                      className={`division-item ${activeDivisionIndex === index ? 'active' : ''}`}
                      onMouseEnter={() => setActiveDivisionIndex(index)}
                    >
                      <span className="division-item-number">0{index + 1}</span>
                      <span className="division-item-name">{div.title}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '4rem' }}>
                  <a href="#contact" className="btn-about">
                    All services <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              <div className="divisions-right">
                <img 
                  key={activeDivisionIndex}
                  src={divisions[activeDivisionIndex].image} 
                  alt={divisions[activeDivisionIndex].title} 
                  className="division-main-image animate-in"
                />
                <div className="division-floating-card animate-in">
                  <h3 className="division-card-title">{divisions[activeDivisionIndex].title}</h3>
                  <p className="division-card-desc">{divisions[activeDivisionIndex].description}</p>
                  <div className="division-tag-cloud">
                    {divisions[activeDivisionIndex].subServices.map((tag, idx) => (
                      <span key={idx} className="division-mini-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="branches" className="section-padding">
          <div className="container">
            <div className="grid-presence-header">
              <div className="presence-title-area">
                <h2>We build trust and maintain long-lasting relations!</h2>
              </div>
              <div className="presence-cta-area">
                <p>Our specialist team understands the importance of long lasting relationships with our clients to deliver specific investment solutions.</p>
                <div className="book-call-wrapper">
                  <a href="#contact" className="btn-book-call">
                    Book a call <div className="arrow-circle"><ArrowRight size={16} /></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="presence-cards-grid">
              {/* Card 1: Hyderabad */}
              <div className="presence-card">
                <div className="presence-card-img">
                  <img src="/professional_consultant_banking_recruitment_1775411150948.png" alt="Hyderabad Head Office" />
                </div>
                <div className="presence-card-content">
                  <span className="presence-card-tag">Head Office</span>
                  <h3 className="presence-card-title">Hyderabad (HQ)</h3>
                  <p className="presence-card-desc">Plot No. 34B, 2nd floor, N Square, Hi-Tech City, Hyderabad - 500081</p>
                  <p className="presence-card-contact">+91 988577 2356</p>
                </div>
              </div>

              {/* Card 2: Vijayawada */}
              <div className="presence-card">
                <div className="presence-card-img">
                  <img src="/solar_infrastructure_energy_marketing_1775411104272.png" alt="Vijayawada Branch" />
                </div>
                <div className="presence-card-content">
                  <span className="presence-card-tag">Regional Excellence</span>
                  <h3 className="presence-card-title">Vijayawada Branch</h3>
                  <p className="presence-card-desc">Jayaprakash nagar, Dno: 54-19-20/12/2B, Vijayawada - 520008</p>
                  <p className="presence-card-contact">+91 988577 2356</p>
                </div>
              </div>

              {/* Card 3: Qatar */}
              <div className="presence-card">
                <div className="presence-card-img">
                  <img src="/dubai_luxury_real_estate_properties_1775411126789.png" alt="Qatar Support" />
                </div>
                <div className="presence-card-content">
                  <span className="presence-card-tag">International Support</span>
                  <h3 className="presence-card-title">Qatar (International)</h3>
                  <p className="presence-card-desc">Specialized property advisory and management for our global clients.</p>
                  <p className="presence-card-contact">+974 33344369</p>
                </div>
              </div>

              {/* Card 4: Strategy */}
              <div className="presence-card">
                <div className="presence-card-img">
                  <img src="/wealth_management_fund_advisory_advisor_1775411176410.png" alt="Strategy & Analytics" />
                </div>
                <div className="presence-card-content">
                  <span className="presence-card-tag">Data Analytics</span>
                  <h3 className="presence-card-title">Strategy & Analytics</h3>
                  <p className="presence-card-desc">Advanced data-driven insights to maximize investment performance.</p>
                </div>
              </div>

              {/* Card 5: Team */}
              <div className="presence-card">
                <div className="presence-card-img">
                  <img src="/experts_collaboration_laptop_1775407527405.png" alt="Experts & Team" />
                </div>
                <div className="presence-card-content">
                  <span className="presence-card-tag">Building Future</span>
                  <h3 className="presence-card-title">Collective Vision</h3>
                  <p className="presence-card-desc">A powerful network of 25+ industry experts committed to your goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="success" className="section-padding">
          <div className="container">
            <div className="section-header">
              <h2>Our clients' success is our top priority</h2>
              <p className="section-desc">What our customers feel about our services!</p>
            </div>

            <div className="success-grid">
              {/* Row 1 & 2 Left: Case Study Highlight */}
              <div className="success-item-vertical success-card-light">
                <span className="case-tag">Sustainable Energy</span>
                <h3 className="case-title">
                  Guided EcoGreen Power in meeting sustainability goals, increasing efficiency by 35%.
                </h3>
                <div className="case-nav">
                  <button className="nav-btn-small"><ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
                  <button className="nav-btn-small active"><ArrowRight size={18} /></button>
                </div>
              </div>

              {/* Row 1 Right: Large Image */}
              <div className="success-item-image">
                <img src="/experts_collaboration_laptop_1775407527405.png" alt="Collaborative Expert Consultation" />
              </div>

              {/* Row 2 Middle: Impact Stat */}
              <div className="success-item-stat success-card-lime">
                <div className="stat-value">45%</div>
                <p className="stat-label">improvement in sustainability ratings</p>
              </div>

              {/* Row 2 Right: Testimonial Quote */}
              <div className="success-item-quote success-card-dark">
                <p className="quote-text">
                  "Their commitment to sustainability has helped us align our financial goals with environmental responsibility."
                </p>
                <div className="quote-author">
                  <div className="author-avatar">RH</div>
                  <div className="author-info">
                    <strong>Robert Hayes</strong>
                    <span>COO, EcoGreen Power</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Horizontal CTA Banner */}
            <div className="success-cta-banner success-card-lime">
              <div className="cta-left">
                <span className="cta-subtitle">Empowering Your Financial Future</span>
                <h2 className="cta-title">Unlock your full potential with expert consulting and tailored financial strategies.</h2>
                <p className="cta-desc">
                  Whether you're growing a business, optimizing investments, or securing long-term wealth, we're here to guide you every step of the way.
                </p>
                <div className="cta-buttons">
                  <button className="btn-success-white">Pricing</button>
                  <button className="btn-success-dark">Get in touch <ArrowRight size={18} /></button>
                </div>
              </div>
              <div className="cta-right-img">
                <img src="/buy_sell_cards_consultancy_1775407503392.png" alt="Tailored Financial Strategies" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="container">
            <div className="contact-redesign-wrapper">
              {/* Left Side: Contact Info Block */}
              <div className="contact-info-block">
                <span className="contact-small-tag">Contact us</span>
                <h2 className="contact-block-title">Get in Touch with Florente</h2>
                <p className="contact-block-desc">
                  Have questions about our services or looking for a partnership? Our experts are here to help you.
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
                    <p>+974 33344369 (Qatar)</p>
                  </div>
                  <div className="contact-meta-item">
                    <h4>Address</h4>
                    <p>Plot No. 34B, 2nd floor, N Square, Hi-Tech City, Hyderabad - 500081</p>
                  </div>
                  <div className="contact-meta-item">
                    <h4>Business Hours</h4>
                    <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Sat:</strong> 10:00 AM - 4:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Messaging Form Block */}
              <div className="contact-form-block">
                <h3 className="form-block-title">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="modern-contact-form">
                  <div className="form-row">
                    <div className="compact-group">
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="compact-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="compact-group">
                      <label>Subject</label>
                      <input 
                        type="text" 
                        placeholder="Partnership Inquiry"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="compact-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX"
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
                      rows={6}
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
}

export default App;
