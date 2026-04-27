import React from 'react';
import { motion } from 'framer-motion';
import { Film, Clapperboard, MonitorPlay, Sparkles, BookOpen, Camera } from 'lucide-react';
import './EntertainmentContent.css';

const EntertainmentContent: React.FC = () => {
  return (
    <div className="ent-content">
      <section className="ent-hero-full">
        <div className="ent-hero-bg">
          <img 
            src="/film_production_creative_cinematic_media_entertainments_1775411201163.png" 
            alt="Cinematic Storytelling Background" 
          />
          <div className="ent-hero-overlay"></div>
        </div>
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="ent-hero-content"
          >
            <span className="accent-tag-premium">Cinematic Storytelling</span>
            <h1>Crafting Meaningful <br />Cinematic Experiences</h1>
            <p>Florente Entertainments focuses on high-quality film production and creative storytelling. We are dedicated to producing engaging cinema that combines commercial appeal with meaningful content.</p>
          </motion.div>
        </div>
      </section>

      {/* Auto-scrolling Movie Slideshow */}
      <section className="movie-slideshow-section">
        <div className="slideshow-container">
          <div className="slideshow-track">
            {[
              { title: "KIRAYI", year: "2024", image: "/movies/kirayi.png" },
              { title: "SHADOWS", year: "2025", image: "/movies/shadows.png" },
              { title: "LEGACY", year: "2025", image: "/movies/legacy.png" },
              { title: "KIRAYI", year: "2024", image: "/movies/kirayi.png" },
              { title: "SHADOWS", year: "2025", image: "/movies/shadows.png" },
              { title: "LEGACY", year: "2025", image: "/movies/legacy.png" },
              { title: "KIRAYI", year: "2024", image: "/movies/kirayi.png" },
              { title: "SHADOWS", year: "2025", image: "/movies/shadows.png" },
              { title: "LEGACY", year: "2025", image: "/movies/legacy.png" }
            ].map((movie, i) => (
              <div className="movie-poster-card" key={i}>
                <div className="poster-img-wrap">
                  <img src={movie.image} alt={movie.title} />
                  <div className="poster-overlay">
                    <h4>{movie.title}</h4>
                    <span>{movie.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
