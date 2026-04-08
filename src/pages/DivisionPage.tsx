import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { divisions } from '../data/divisions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import './DivisionPage.css';
import { motion } from 'framer-motion';

const DivisionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const division = divisions.find((d) => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!division) {
    return (
      <div className="error-page">
        <Header />
        <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
          <h1>Division Not Found</h1>
          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="division-page">
      <Header />
      
      <main>
        {/* Division Hero */}
        <section className="division-hero" style={{ backgroundImage: `url(${division.image})` }}>
          <div className="division-hero-overlay"></div>
          <div className="container division-hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/#divisions" className="back-link">
                <ArrowLeft size={18} /> Back to Divisions
              </Link>
              <div className="division-badge">
                 {division.shortName}
              </div>
              <h1 className="division-title">{division.title}</h1>
              <p className="division-desc">{division.description}</p>
              <div className="division-hero-actions">
                <a href="#contact" className="btn-solid-accent">
                  Start a Project <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services & Details */}
        <section className="division-details section-padding">
          <div className="container">
            <div className="details-grid">
              <div className="details-left">
                <span className="accent-tag">Expertise</span>
                <h2>What we deliver at {division.shortName}</h2>
                <div className="services-list-grid">
                  {division.subServices.map((service, idx) => (
                    <div key={idx} className="service-item-card">
                      <CheckCircle2 size={24} className="service-check" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="details-right">
                <div className="impact-box">
                  <div className="impact-value">{division.impactStat.value}</div>
                  <div className="impact-label">{division.impactStat.label}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="case-study-feature section-padding">
          <div className="container">
            <div className="case-feature-card">
              <div className="case-content">
                <span className="case-badge">{division.caseStudy.tag} Case Study</span>
                <h3 className="case-heading">{division.caseStudy.title}</h3>
                <p className="case-text">
                  Our strategic approach ensured that every milestone was met with precision, 
                  leveraging our deep industry expertise to deliver measurable value and sustainable growth.
                </p>
                <div className="case-divider"></div>
                <div className="case-testimonial">
                  <p className="case-quote">"{division.testimonial.quote}"</p>
                  <div className="case-author">
                    <img src={division.testimonial.avatar} alt={division.testimonial.author} />
                    <div className="author-details">
                      <strong>{division.testimonial.author}</strong>
                      <span>{division.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="case-image">
                 <img src={division.image} alt="Case Study Visualization" />
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Division Quick Nav */}
        <section className="quick-nav-section">
            <div className="container">
                <h4 className="quick-nav-title">Explore Other Divisions</h4>
                <div className="quick-nav-grid">
                    {divisions.filter(d => d.slug !== slug).map((other) => (
                        <Link to={`/divisions/${other.slug}`} key={other.slug} className="quick-nav-card">
                            <span className="q-num">/ {other.shortName}</span>
                            <ArrowRight size={20} className="q-arrow" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DivisionPage;
