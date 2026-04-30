import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Handshake, Briefcase, ArrowRight, Droplets, Shield, Leaf } from 'lucide-react';
import "./ProductShowcase.css";

interface Product {
  name: string;
  image: string;
  category: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

interface ProductShowcaseProps {
  title?: string;
  description: string;
  products: Product[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title = "Our Portfolio",
  description,
  products,
}) => {
  const features = [
    {
      icon: <Award size={20} />,
      title: "Quality Products",
      desc: "Carefully selected for performance and reliability"
    },
    {
      icon: <Handshake size={20} />,
      title: "Trusted Partnerships",
      desc: "Strong relationships with leading global brands"
    },
    {
      icon: <Users size={20} />,
      title: "Customer Focused",
      desc: "Dedicated support and solutions that put your needs first"
    }
  ];

  return (
    <section className="product-showcase">
      {/* Background Decorative Elements */}
      <img src="/curve.png" alt="" className="showcase-curve-bg" />
      <div className="showcase-dots-pattern"></div>

      <div className="container">
        {/* TOP HERO SECTION */}
        <div className="showcase-top-hero">
          <div className="showcase-info-side">
            <div className="portfolio-pill">
              <Briefcase size={14} className="pill-icon" /> 
              OUR PORTFOLIO
            </div>
            <h1 className="showcase-title">{title}</h1>
            <div className="title-underline"></div>
            <p className="showcase-main-desc">{description}</p>
          </div>

          <div className="showcase-visual-side-new">
            <div className="features-list">
              {features.map((f, i) => (
                <div className="feature-item-inline" key={i}>
                  <div className="f-icon-wrap">{f.icon}</div>
                  <div className="f-text-wrap">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-img-podium">
              <img src="/products.png" alt="Products" className="podium-products" />
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid-modern">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="modern-product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="m-card-image-wrap">
                <img src={product.image} alt={product.name} />
                <div className="m-card-floating-icon">
                  {product.icon || <Droplets size={18} />}
                </div>
              </div>
              
              <div className="m-card-content">
                <span className="m-card-category">{product.category}</span>
                <h3 className="m-card-title">{product.name}</h3>
                <p className="m-card-desc">{product.description}</p>
                <a href={product.link || "#"} className="m-card-link" target={product.link ? "_blank" : undefined} rel={product.link ? "noopener noreferrer" : undefined}>
                  Explore <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
