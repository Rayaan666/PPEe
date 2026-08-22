import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Gallery.css';

const imageNames = [
  "WhatsApp_Image_2026-08-04_at_4.42.27_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.27_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.27_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.27_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.26_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.26_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.26_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.26_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.25_PM_4",
  "WhatsApp_Image_2026-08-04_at_4.42.25_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.25_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.25_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.25_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.24_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.24_PM_5",
  "WhatsApp_Image_2026-08-04_at_4.42.24_PM_4",
  "WhatsApp_Image_2026-08-04_at_4.42.24_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.24_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.24_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.23_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.22_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.23_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.22_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.21_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.21_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.21_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.21_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.19_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.19_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.19_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.19_PM_1",
  "WhatsApp_Image_2026-08-04_at_4.42.18_PM_3",
  "WhatsApp_Image_2026-08-04_at_4.42.18_PM",
  "WhatsApp_Image_2026-08-04_at_4.42.18_PM_2",
  "WhatsApp_Image_2026-08-04_at_4.42.18_PM_1"
];

const galleryImages = imageNames.map((name, index) => ({
  id: index + 1,
  url: `https://res.cloudinary.com/iiddvwaz/image/upload/v1/${name}`,
  alt: `Luxury event production project portfolio showcase image ${index + 1}`
}));

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Event Portfolio & Gallery | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="Browse our luxury portfolio showcase of corporate galas, custom exhibition stands, high-impact product launches, and business conferences across Abu Dhabi and Dubai."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/gallery" />
      </Helmet>

      {/* Hero Section */}
      <section className="portfolio-hero" aria-label="Portfolio Intro Banner">
        <div className="portfolio-hero-glow" aria-hidden="true" />
        <div className="portfolio-hero-content">
          <nav className="portfolio-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </nav>
          <span className="portfolio-eyebrow">Visual Showcase</span>
          <h1 className="portfolio-title">Experiential Portrayals</h1>
          <p className="portfolio-subtitle">
            A curated showcase of luxury corporate events, premium exhibition stands, custom fabrication, and flawless stage productions in Abu Dhabi and across the UAE.
          </p>
        </div>
      </section>

      {/* Pure Image Grid Section */}
      <section className="portfolio-grid-section" aria-label="Event Image Showcase">
        <div className="portfolio-grid">
          {galleryImages.map((image, index) => (
            <div 
              className="portfolio-grid-item" 
              key={image.id}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index); }}
              aria-label={`Open details for ${image.alt}`}
            >
              <div className="portfolio-media-wrapper">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  loading="lazy" 
                  className="portfolio-img"
                />
                <div className="portfolio-item-overlay">
                  <div className="portfolio-zoom-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="portfolio-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox modal">
          <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button type="button" className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous image">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[lightboxIndex].url} 
              alt={galleryImages[lightboxIndex].alt} 
              className="lightbox-main-img" 
            />
          </div>

          <button type="button" className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next image">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;


