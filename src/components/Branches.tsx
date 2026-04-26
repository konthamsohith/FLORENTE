import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Building2, ExternalLink } from 'lucide-react';
import './Branches.css';

const Branches: React.FC = () => {
  const branches = [
    {
      city: "HYDERABAD",
      label: "(HEAD OFFICE)",
      address: ["Plot No.34B , Sy No.11/26, 2nd floor,", "N Square, Opp. Mahindra Servide Center,", "Near N Convention Road, Hi-Tech City,", "Khanamet, Senlingampali Mandal,", "Hyderabad, Rangareddy District,", "Telangana 500081"],
      mapsUrl: "https://maps.google.com/?q=N+Square,+Hi-Tech+City,+Khanamet,+Hyderabad,+Telangana+500081",
      email: "info@company.com",
      phone: "+91 98857 72356",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000"
    },
    {
      city: "VIJAYAWADA",
      label: "",
      address: ["Film colony 1st lane, 1st cross road,", "Jayaprakash nagar,", "Dno: 54-19-20/12/2B", "Vijayawada", "Andhra Pradesh 520008"],
      mapsUrl: "https://maps.google.com/?q=Film+Colony+1st+Lane,+Jayaprakash+Nagar,+Vijayawada,+Andhra+Pradesh+520008",
      email: "info@company.com",
      phone: "+91 98857 72356",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section className="branches-section-ref">
      {/* Decorative Background Elements */}
      <div className="bg-decor dots-map"></div>
      <div className="bg-decor skyline-outline"></div>

      <div className="container">
        <div className="branches-ref-header">
          <h2>Our Branches</h2>
          <p>Strategically located to serve you better.<br />Find our offices across key locations.</p>
        </div>

        <div className="branches-ref-grid">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="branch-ref-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-maps-link"
              >
                <div className="card-top-flex">
                  <div className="branch-ref-image">
                    <img src={branch.image} alt={branch.city} />
                  </div>
                  
                  <div className="branch-ref-info">
                    <div className="city-title-group">
                      <div className="icon-circle">
                        <Building2 size={24} />
                      </div>
                      <div className="title-text">
                        <h3>{branch.city}</h3>
                        {branch.label && <span className="head-office-tag">{branch.label}</span>}
                      </div>
                    </div>
                    
                    <div className="blue-divider"></div>
                    
                    <div className="address-flex">
                      <MapPin className="pin-icon" size={18} />
                      <div className="address-lines">
                        <p>{branch.address.join(' ')}</p>
                      </div>
                      <ExternalLink size={14} className="map-external-icon" />
                    </div>
                  </div>
                </div>
              </a>
              
              <div className="card-footer-bar">
                <div className="contact-item">
                  <div className="small-icon-circle">
                    <Phone size={14} />
                  </div>
                  <span>{branch.phone}</span>
                </div>
                <div className="footer-v-divider"></div>
                <div className="contact-item">
                  <div className="small-icon-circle">
                    <Mail size={14} />
                  </div>
                  <span>{branch.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
