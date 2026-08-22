import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Rentals.css';

const Rentals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rentalCategories = [
    {
      title: "Luxury Furniture",
      description: "Designer sofas, premium seating, banquet chairs, and contemporary tables designed to elevate your event aesthetic.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 18v3h2v-3h12v3h2v-3M3 14c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v2H3v-2zM6 10V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4" />
        </svg>
      )
    },
    {
      title: "Exquisite Tableware",
      description: "Fine china, crystal glassware, bespoke cutlery, and premium linens for sophisticated dining experiences.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 3v9c0 2 1.5 3.5 3.5 3.5H9v4h-3v2h12v-2h-3v-4h.5c2 0 3.5-1.5 3.5-3.5V3H5zM8 3v5h2V3H8zm6 0v5h2V3h-2z" />
        </svg>
      )
    },
    {
      title: "Lighting & Audiovisual",
      description: "State-of-the-art sound systems, ambient lighting structures, LED screens, and architectural project lighting.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      )
    },
    {
      title: "Bespoke Decor & Props",
      description: "Unique design accents, backdrops, custom-fabricated visual props, and floral arrangement elements.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <div className="rentals-page">
      <Helmet>
        <title>Premium Event Rentals | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="High-end event furniture, tableware, staging, lighting, and decor rentals in Abu Dhabi and Dubai. Elevating your celebrations soon."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/rentals" />
      </Helmet>

      {/* Hero Section */}
      <section className="rentals-hero" aria-label="Rentals Intro Banner">
        <div className="rentals-hero-glow" aria-hidden="true" />
        <div className="rentals-hero-content">
          <nav className="rentals-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Rentals</span>
          </nav>
          <span className="rentals-eyebrow">Luxury Inventory</span>
          <h1 className="rentals-title">Exquisite Rentals</h1>
          <p className="rentals-subtitle">
            Curated furniture, tableware, custom props, and state-of-the-art audiovisual setups to bring refinement to any space.
          </p>
        </div>
      </section>

      {/* Coming Soon & Categories Section */}
      <section className="rentals-content-section" aria-label="Rentals Status">
        <div className="container">
          <div className="coming-soon-banner">
            <div className="coming-soon-badge">Coming Soon</div>
            <h2>Elevating Rental Standards</h2>
            <p>
              We are currently handpicking and organizing our extensive catalogue of premium <strong>event rentals in Abu Dhabi</strong>. 
              Whether you are planning a corporate gala or looking for luxury <strong>party rentals in Abu Dhabi</strong>, our collection 
              will feature selected designer items, custom backdrops, and bespoke table settings. 
            </p>
            <p style={{ marginTop: '1rem' }}>
              Soon, you will have access to exclusive <strong>event furniture rental in Abu Dhabi</strong>, including premium 
              <strong> tables and chairs rental in Abu Dhabi</strong>, as well as state-of-the-art <strong>event equipment rental in Abu Dhabi</strong> 
              for seamless audio-visual integration.
            </p>
            <div className="coming-soon-cta">
              <Link to="/contact-us" className="btn-editorial">
                Inquire for Early Access
              </Link>
            </div>
          </div>

          <div className="rental-categories-grid">
            {rentalCategories.map((category, index) => (
              <div className="rental-category-card" key={index}>
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;


