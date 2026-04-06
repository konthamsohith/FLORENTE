import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Header.css'; // Reusing some shared UI tokens if any, but mostly standalone

interface DivisionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  subServices: string[];
}

const DivisionCard: React.FC<DivisionCardProps> = ({ title, description, icon, image, subServices }) => {
  return (
    <div className="division-card glass-card">
      <div className="division-image">
        <img src={image} alt={title} />
        <div className="division-overlay"></div>
        <div className="division-icon-badge">{icon}</div>
      </div>
      
      <div className="division-content">
        <h3 className="division-title">{title}</h3>
        <p className="division-desc">{description}</p>
        
        <div className="division-services">
          {subServices.map((service, idx) => (
            <span key={idx} className="service-tag">
              <ChevronRight size={14} /> {service}
            </span>
          ))}
        </div>
        
        <div className="division-footer">
          <a href="#contact" className="division-link">
            Learn More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DivisionCard;
