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
  ArrowRight,
  Phone
} from 'lucide-react';
import './App.css';

function App() {
  const divisions = [
    {
      title: 'FISrente Marketing Labs LLP',
      shortName: 'Marketing Labs',
      description: 'A leading player in sustainable energy and infrastructure development, providing end-to-end solutions for a greener future.',
      icon: <HardHat size={32} />,
      image: '/marketing_labs_solar_energy_1775411828713.png',
      subServices: ['Solar Energy', 'Infrastructure', 'MEP', 'Interior Design'],
      caseStudy: {
        tag: 'Sustainable Energy',
        title: 'Guided EcoGreen Power in meeting sustainability goals, increasing efficiency by 35%.',
      },
      impactStat: { value: '45%', label: 'improvement in sustainability ratings' },
      testimonial: {
        quote: "Their commitment to sustainability has helped us align our financial goals with environmental responsibility.",
        avatar: '/avatar_robert_hayes_1775590403482.png',
        author: 'Robert Hayes',
        role: 'COO, EcoGreen Power',
      }
    },
    {
      title: 'FISrente PROPERTIES LLP',
      shortName: 'Properties',
      description: 'Your premier real estate advisory firm bridging the gap between luxury living in Dubai and strategic investments in India.',
      icon: <Home size={32} />,
      image: '/properties_dubai_luxury_realestate_1775411853341.png',
      subServices: ['Dubai Real Estate', 'Advisory', 'Emaar Partner', 'Investment'],
      caseStudy: {
        tag: 'Global Real Estate',
        title: 'Successfully portfolio-diversified top investors with high-yield Dubai properties.',
      },
      impactStat: { value: '22%', label: 'average annual portfolio growth' },
      testimonial: {
        quote: "Florente's insight into the Dubai market was invaluable for our international expansion.",
        avatar: '/avatar_mohamed_sultan_1775590419943.png',
        author: 'Mohamed Sultan',
        role: 'Director, Sultan Holdings',
      }
    },
    {
      title: 'FISrente A CONSULTANT LLP',
      shortName: 'Consultancy',
      description: 'Connecting top-tier talent with world-class organizations across insurance, banking, and software industries.',
      icon: <UserPlus size={32} />,
      image: '/consultant_recruitment_banking_1775411878440.png',
      subServices: ['Manpower', 'Recruitment', 'Banking', 'Software Personnel'],
      caseStudy: {
        tag: 'Talent Acquisition',
        title: 'Built the foundational leadership team for a Fortune 500 Fintech branch in India.',
      },
      impactStat: { value: '500+', label: 'specialist roles placed in last 12 months' },
      testimonial: {
        quote: "The quality of talent provided by Florente has transformed our operational efficiency.",
        avatar: '/avatar_ananya_kapoor_1775590437503.png',
        author: 'Ananya Kapoor',
        role: 'HR Head, Global Finance',
      }
    },
    {
      title: 'FISrente WEALTH SERVICE LLP',
      shortName: 'Wealth Service',
      description: 'Dedicated to helping individuals and families grow, protect, and manage their wealth through expert-led fund advisory.',
      icon: <TrendingUp size={32} />,
      image: '/wealth_service_financial_planning_1775411901441.png',
      subServices: ['Mutual Funds', 'SIP', 'Retirement Planning', 'Monitoring'],
      caseStudy: {
        tag: 'Asset Management',
        title: 'Optimized retirement funds for 200+ HNI families with diverse risk-reward profiles.',
      },
      impactStat: { value: '₹150Cr+', label: 'assets under expert advisory' },
      testimonial: {
        quote: "Our family's financial future is secure thanks to the meticulous planning of Florente's wealth team.",
        avatar: '/avatar_vikram_reddy_1775590457878.png',
        author: 'Vikram Reddy',
        role: 'HNI Client',
      }
    },
    {
      title: 'FISrente ENTERTAINMENTS LLP',
      shortName: 'Entertainments',
      description: 'Transforming creative visions into cinematic masterpieces. Focused on meaningful content that captures the human experience.',
      icon: <Camera size={32} />,
      image: '/entertainment_film_production_set_1775411922771.png',
      subServices: ['Film Production', 'KIRAYI Project', 'Storytelling', 'Cinema'],
      caseStudy: {
        tag: 'Media Production',
        title: 'Launched the KIRAYI Project, a national-level documentary series gaining critical acclaim.',
      },
      impactStat: { value: '1M+', label: 'combined viewership for KIRAYI series' },
      testimonial: {
        quote: "Florente's dedication to authentic storytelling is a breath of fresh air in the film industry.",
        avatar: '/avatar_sanjay_kumar_1775590475778.png',
        author: 'Sanjay Kumar',
        role: 'Creative Producer',
      }
    }
  ];

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

  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotation effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveDivisionIndex((prev) => (prev + 1) % divisions.length);
      }, 7000); // Rotate every 7 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, divisions.length]);

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
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" alt="TATA Motors" className="brand-logo-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="brand-logo-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys" className="brand-logo-img" />
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
                      onMouseEnter={() => {
                        setActiveDivisionIndex(index);
                        setIsAutoPlaying(false); // Pause auto-play on manual hover
                      }}
                      onMouseLeave={() => setIsAutoPlaying(true)} // Resume auto-play
                    >
                      <span className="division-item-number">0{index + 1}</span>
                      <span className="division-item-name">{div.title}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '4rem' }}>
                  <a href="#contact" className="btn-success-dark slide-push-btn" style={{ display: 'inline-block', width: '150px', textDecoration: 'none' }}>
                    <div className="btn-slide-wrapper">
                      <div className="btn-state btn-state-white">
                        <span className="btn-text">All services</span>
                        <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                      </div>
                      <div className="btn-state btn-state-dark">
                        <span className="btn-text">All services</span>
                        <span className="cta-icon-circle"><ArrowRight size={16} /></span>
                      </div>
                    </div>
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
              {/* Box 1: Hyderabad HQ (Image-First / Tall) */}
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

              {/* Box 2: Vijayawada (Solid Gold / High Impact) */}
              <div className="bento-card card-vijayawada-gold">
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

              {/* Box 3: Qatar (Midnight / International) */}
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
              {/* Row 1 & 2 Left: Case Study Highlight */}
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

              {/* Row 1 Right: Image */}
              <div className="success-item-image">
                <img 
                  src={divisions[activeDivisionIndex].image} 
                  alt={divisions[activeDivisionIndex].title} 
                />
              </div>

              {/* Row 2 Middle: Impact Stat */}
              <div className="success-item-stat success-card-gold">
                <div className="stat-value">{divisions[activeDivisionIndex].impactStat.value}</div>
                <p className="stat-label">{divisions[activeDivisionIndex].impactStat.label}</p>
              </div>

              {/* Row 2 Right: Testimonial Quote */}
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

            {/* Row 3: Horizontal CTA Banner */}
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
              {/* Left Side: Contact Info Block */}
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

              {/* Right Side: Messaging Form Block */}
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
}

export default App;

