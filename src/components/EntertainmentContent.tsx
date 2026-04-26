import React from 'react';
import { motion } from 'framer-motion';
import { Film, Clapperboard, MonitorPlay, Sparkles, BookOpen, Camera } from 'lucide-react';
import './EntertainmentContent.css';

const EntertainmentContent: React.FC = () => {
  return (
    <div className="ent-content">
      <section className="ent-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ent-intro-flex"
          >
            <div className="ent-intro-text">
              <span className="accent-tag">Cinema & Storytelling</span>
              <h1>Crafting Meaningful <br />Cinematic Experiences</h1>
              <p>Florente Entertainments focuses on high-quality film production and creative storytelling. We are dedicated to producing engaging cinema that combines commercial appeal with meaningful content.</p>
            </div>
            <div className="ent-visual-img-frame">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071" 
                alt="Cinematic Storytelling" 
                className="ent-hero-img" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ent-projects">
        <div className="container">
          <div className="projects-grid">
            <motion.div 
              className="project-card main-project"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="project-badge">Debut Project</div>
              <div className="project-info">
                <h2>KIRAYI</h2>
                <span className="status-tag">Under Production</span>
                <p>Our flagship debut project, currently in active production. A testament to our commitment to high-quality storytelling.</p>
              </div>
              <div className="project-overlay"></div>
            </motion.div>

            <motion.div 
              className="project-card side-project"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="project-info">
                <BookOpen size={32} className="card-icon" />
                <h3>Future Pipeline</h3>
                <p>Three additional scripts have been shortlisted and are currently under development for future release.</p>
                <div className="pipeline-dots">
                  <div className="p-dot"></div>
                  <div className="p-dot"></div>
                  <div className="p-dot"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="ent-values">
        <div className="container">
          <div className="values-mosaic">
            <div className="v-mosaic-item">
              <Clapperboard className="v-icon" />
              <h4>High-Quality Production</h4>
              <p>Leveraging state-of-the-art technology and talent to deliver superior visual experiences.</p>
            </div>
            <div className="v-mosaic-item">
              <Sparkles className="v-icon" />
              <h4>Creative Storytelling</h4>
              <p>Focusing on narratives that resonate emotionally while maintaining commercial appeal.</p>
            </div>
            <div className="v-mosaic-item">
              <MonitorPlay className="v-icon" />
              <h4>Engaging Cinema</h4>
              <p>Creating content that bridges the gap between artistic expression and audience engagement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntertainmentContent;
