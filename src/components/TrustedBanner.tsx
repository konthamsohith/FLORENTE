import React from 'react';

interface Logo {
  src: string;
  alt: string;
  className?: string;
}

interface TrustedBannerProps {
  title?: string;
  description?: string;
  logos?: Logo[];
  hideTitle?: boolean;
}

const TrustedBanner: React.FC<TrustedBannerProps> = ({ title, description, logos, hideTitle }) => {
  const displayTitle = title || "our products";
  const displayLogos = logos || [
    { src: "/kangen-jriv.png", alt: "Kangen JRIV" },
    { src: "/anespa-dx-home-spa-system-removebg-preview.png", alt: "Anespa DX" },
    { src: "/3m-fully-automatic-water-softener-removebg-preview.png", alt: "3M Water Softener" },
    { src: "/eureka.jpg", alt: "Eureka" },
    { src: "/enagic-em-guarde.png", alt: "Enagic EM Guarde" },
    { src: "/nutrigreen4.png", alt: "Nutrigreen4u", className: "product-img-small" },
    { src: "/Q6N-fron2t3tentative.png", alt: "Q6N", className: "product-img-large" },
    { src: "/hisense ac.png", alt: "Hisense AC", className: "product-img-large" },
  ];

  return (
    <section className="trusted-banner">
      <div className="container trusted-inner">
        {!hideTitle && (
          <div className="trusted-text">
            {displayTitle}
          </div>
        )}
        {description && (
          <div className="trusted-description">
            {description}
          </div>
        )}
        <div className="trusted-logos-mask">
          <div className="trusted-logos">
            {[...displayLogos, ...displayLogos].map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                className={`brand-logo-img ${logo.className || ''}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBanner;
