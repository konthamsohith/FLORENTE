import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { divisions } from '../data/divisions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustedBanner from '../components/TrustedBanner';
import { ArrowLeft, ArrowRight, CheckCircle2, Droplets, Shield, Leaf, Wind, Tv, Award, Sparkles } from 'lucide-react';
import './DivisionPage.css';
import { motion } from 'framer-motion';

import ProductShowcase from '../components/ProductShowcase';
import PropertiesContent from '../components/PropertiesContent';
import ConsultancyContent from '../components/ConsultancyContent';
import WealthContent from '../components/WealthContent';
import EntertainmentContent from '../components/EntertainmentContent';

const DivisionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const division = divisions.find((d) => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If user lands on /divisions/services, redirect to /services
  if (slug === 'services') {
    return <Navigate to="/services" replace />;
  }

  if (!division) {
    return (
      <div className="error-page">
        <Header />
        <main className="error-content">
          <div className="container">
            <motion.div 
              className="error-inner"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="error-badge">Error 404</span>
              <h1 className="error-title">Division Not Found</h1>
              <p className="error-desc">
                The division you are looking for does not exist or has been moved. 
                Please return to our main catalog or explore our specialized services.
              </p>
              <div className="error-actions">
                <Link to="/" className="btn-error-primary">
                  <ArrowLeft size={18} /> <span>Back to Home</span>
                </Link>
                <Link to="/services" className="btn-error-secondary">
                  <span>Explore Services</span> <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
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
        {/* Division Hero removed per request */}

        {slug === 'marketing-labs' ? (
          <ProductShowcase 
            title="Our Portfolio"
            description="Florente Marketing Labs LLP specializes in promoting and selling a diverse range of high-quality products and services. Our portfolio includes insurance, Enagic wellness systems, TML water solutions, Hisense appliances, and hydroponic farming solutions. We focus on delivering strong market presence, reliable customer support, and sustainable growth for every brand we represent."
            products={[
              { 
                name: "Enagic Kangen Water", 
                image: "/kangen-jriv.png", 
                category: "Wellness", 
                description: "Advanced water ionization systems for better health.",
                icon: <Droplets size={18} />
              },
              { 
                name: "Anespa DX", 
                image: "/anespa-dx-home-spa-system-removebg-preview.png", 
                category: "Wellness", 
                description: "Revitalizing showers for wellness and relaxation.",
                icon: <Sparkles size={18} />
              },
              { 
                name: "Emguarde Emf Guard", 
                image: "/enagic-em-guarde.png", 
                category: "Protection", 
                description: "Advanced EMF protection for a safer environment.",
                icon: <Shield size={18} />
              },
              { 
                name: "TML Water Softener", 
                image: "/3m-fully-automatic-water-softener-removebg-preview.png", 
                category: "Water Solutions", 
                description: "Efficient water softening for homes and businesses.",
                icon: <Droplets size={18} />
              },
              { 
                name: "HydroACE", 
                image: "/HydroACE.png", 
                category: "Farming", 
                description: "Next-gen hydroponic solutions for sustainable agriculture.",
                icon: <Leaf size={18} />
              },
              { 
                name: "Hisense AC", 
                image: "/hisense ac.png", 
                category: "Appliances", 
                description: "Smart cooling technology with energy-efficient performance.",
                icon: <Wind size={18} />
              },
              { 
                name: "Hisense TV", 
                image: "/Q6N-fron2t3tentative.png", 
                category: "Appliances", 
                description: "Ultra-high-definition cinematic visual experiences.",
                icon: <Tv size={18} />
              },
              { 
                name: "Nutrigreen4u", 
                image: "/nutrigreen4.png", 
                category: "Hydroponics", 
                description: "Organic and nutrient-rich growth solutions.",
                icon: <Award size={18} />
              },
            ]}
          />
        ) : slug === 'properties' ? (
          <PropertiesContent />
        ) : slug === 'consultancy' ? (
          <ConsultancyContent />
        ) : slug === 'wealth-service' ? (
          <WealthContent />
        ) : slug === 'entertainments' ? (
          <EntertainmentContent />
        ) : (slug !== 'properties' && slug !== 'consultancy' && slug !== 'wealth-service' && slug !== 'entertainments') ? (
          <TrustedBanner />
        ) : null}

        {/* Services & Details */}
        <section className={`division-details ${slug === 'properties' ? 'bg-fcfcfc' : ''}`}>
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
        <section className="case-study-feature" style={{ backgroundImage: `url("${division.image}")` }}>
          <div className="case-section-overlay"></div>
          <div className="container">
            <motion.div 
              className="case-feature-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="case-content">
                <div className="case-badge-container">
                  <span className="case-badge">{division.caseStudy.tag} Excellence</span>
                  <div className="case-number-deco">CS-01</div>
                </div>
                <h3 className="case-heading">{division.caseStudy.title}</h3>
                <p className="case-subtitle">Strategic Talent Infrastructure</p>
                <p className="case-text">
                  Our strategic approach ensured that every milestone was met with precision, 
                  leveraging our deep industry expertise to deliver measurable value and sustainable growth.
                </p>
                
                <div className="case-testimonial-premium">
                  <div className="quote-mark">"</div>
                  <p className="case-quote">{division.testimonial.quote}</p>
                  <div className="case-author-branding">
                    <div className="author-info-main">
                      <strong>{division.testimonial.author}</strong>
                      <span>{division.testimonial.role}</span>
                    </div>
                    <div className="author-signature-seal">
                      {division.testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-visual-box">
                 <div className="visual-header">
                    <span>Process Visualization</span>
                    <div className="visual-dot"></div>
                 </div>
                 <div className="visual-image-wrapper">
                    <img src={division.image} alt="Process Visualization" />
                    <div className="visual-overlay-glow"></div>
                 </div>
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
                          <Link 
                            to={`/divisions/${other.slug}`} 
                            className="quick-nav-card"
                          >
                              <div 
                                className="q-image-layer" 
                                style={{ backgroundImage: `url("${other.image}")` }}
                              ></div>
                              <div className="q-overlay-layer"></div>
                              <span className="q-num">0{idx + 1}</span>
                              <div className="q-label">
                                <span className="q-name">{other.shortName}</span>
                                <ArrowRight size={24} className="q-arrow" />
                              </div>
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
