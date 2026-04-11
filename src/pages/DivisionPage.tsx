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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <div className="division-page">
      <Header />
      
      <main>
        {/* Division Hero */}
        <section className="division-hero" style={{ backgroundImage: `url(${division.image})` }}>
          <div className="division-hero-overlay"></div>
          <div className="container division-hero-nav">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
             >
               <Link to="/#divisions" className="back-link">
                 <ArrowLeft size={16} /> <span>Back to Divisions</span>
               </Link>
             </motion.div>
          </div>
          <div className="container division-hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="division-badge">
                 {division.shortName}
              </div>
              <h1 className="division-title">{division.title}</h1>
              <p className="division-desc">{division.description}</p>
              <div className="division-hero-actions">
                <a href="#contact" className="btn-solid-accent">
                  Start a Project 
                  <span className="cta-icon-circle">
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services & Details */}
        <section className="division-details">
          <div className="container">
            <div className="details-grid">
              <motion.div 
                className="details-left"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.span variants={itemVariants} className="accent-tag">Expertise</motion.span>
                <motion.h2 variants={itemVariants}>Strategic Solutions for {division.shortName}</motion.h2>
                
                <motion.div variants={containerVariants} className="services-list-grid">
                  {division.subServices.map((service, idx) => (
                    <motion.div 
                      key={idx} 
                      className="service-item-tag"
                      variants={itemVariants}
                    >
                      <CheckCircle2 size={16} />
                      <span>{service}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="details-right"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                <div className="impact-box">
                  <motion.span 
                    className="impact-value"
                    variants={itemVariants}
                  >
                    {division.impactStat.value}
                  </motion.span>
                  <motion.span 
                    className="impact-label"
                    variants={itemVariants}
                  >
                    {division.impactStat.label}
                  </motion.span>
                  <motion.div 
                    className="impact-statement"
                    variants={itemVariants}
                  >
                    Leveraging global industry standards to deliver 
                    <span>measurable business impact</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="case-study-feature section-padding">
          <div className="container">
            <motion.div 
              className="case-feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="case-content">
                <span className="case-badge">{division.caseStudy.tag} Excellence</span>
                <h3 className="case-heading">{division.caseStudy.title}</h3>
                <p className="case-text">
                  Our strategic approach ensured that every milestone was met with precision, 
                  leveraging our deep industry expertise to deliver measurable value and sustainable growth.
                </p>
                <div className="case-divider"></div>
                <div className="case-testimonial">
                  <p className="case-quote">{division.testimonial.quote}</p>
                  <div className="case-author">
                    <img src={division.testimonial.avatar} alt={division.testimonial.author} />
                    <div className="author-details">
                      <strong>{division.testimonial.author}</strong>
                      <span className="author-signature">{division.testimonial.author}</span>
                      <span>{division.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="case-image">
                 <img src={division.image} alt="Process Visualization" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Multi-Division Quick Nav */}
        <section className="quick-nav-section">
            <div className="container">
                <h4 className="quick-nav-title">Explore Other Divisions</h4>
                <div className="quick-nav-grid">
                    {divisions.filter(d => d.slug !== slug).map((other, idx) => (
                        <motion.div
                          key={other.slug}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * idx }}
                        >
                          <Link to={`/divisions/${other.slug}`} className="quick-nav-card">
                              <span className="q-num">/ {other.shortName}</span>
                              <ArrowRight size={24} className="q-arrow" />
                          </Link>
                        </motion.div>
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
