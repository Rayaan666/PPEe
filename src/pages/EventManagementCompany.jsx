import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CorporateEvents.css'; // Reusing existing CSS to avoid redesigns

const eventManagementSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Full-Service Event Management',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Perfect Party Events',
    url: 'https://perfectpartyeventsae.com/'
  },
  areaServed: [
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'Country', name: 'United Arab Emirates' }
  ],
  description: 'Leading Event Management Company in Abu Dhabi. We provide full-service event management, including corporate events, exhibition stands, and product launches across the UAE.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perfectpartyeventsae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Event Management Company', item: 'https://perfectpartyeventsae.com/event-management-company/' }
  ]
};

const EventManagementCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="corporate-events-page">
      <Helmet>
        <title>Event Management Company Abu Dhabi | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="Leading Event Management Company in Abu Dhabi & UAE. We offer full-service event management, corporate event production, and luxury event planning."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/event-management-company/" />
        <script type="application/ld+json">{JSON.stringify(eventManagementSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="ce-hero">
        <div className="container">
          <nav className="ce-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Event Management Company</span>
          </nav>
          <span className="ce-eyebrow">Events Company Abu Dhabi</span>
          <h1 className="ce-title">Event Management Company Abu Dhabi &amp; UAE</h1>
          <p className="ce-subtitle">
            Perfect Party Events is a premier full-service event management company in Abu Dhabi, delivering seamless corporate event management and luxury experiences across the UAE.
          </p>
        </div>
      </section>

      {/* Hub Section */}
      <section className="ce-services-hub">
        <div className="container">
          <div className="ce-hub-header">
            <h2>Our Full-Service Event Management Capabilities</h2>
            <p>As a leading event management company in the UAE, we engineer strategic corporate events and brand experiences from concept to execution.</p>
          </div>

          <div className="ce-grid">
            <div className="ce-card">
              <h3><Link to="/corporate-events/">Corporate Event Management Abu Dhabi</Link></h3>
              <p>Expert corporate event planning, focusing on impactful galas, conferences, and stakeholder dinners.</p>
              <Link to="/corporate-events/" className="ce-link">Explore Corporate Events &rarr;</Link>
            </div>
            
            <div className="ce-card">
              <h3><Link to="/services/exhibition-stand-design-abu-dhabi">Exhibition Stand Design</Link></h3>
              <p>Bespoke exhibition booths and trade show pavilions managed from 3D concept to full fabrication.</p>
              <Link to="/services/exhibition-stand-design-abu-dhabi" className="ce-link">Explore Exhibition Stands &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/product-launch-events-abu-dhabi">Product Launches</Link></h3>
              <p>Immersive reveals designed to captivate audiences and maximize your brand's market impact.</p>
              <Link to="/services/product-launch-events-abu-dhabi" className="ce-link">Explore Product Launches &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/corporate-conference-organizer-abu-dhabi">Corporate Conferences</Link></h3>
              <p>Professional summit and conference event management with meticulous logistical precision.</p>
              <Link to="/services/corporate-conference-organizer-abu-dhabi" className="ce-link">Explore Conferences &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/brand-activation-agency-abu-dhabi">Brand Activations</Link></h3>
              <p>Interactive pop-up experiences that forge deep emotional connections with your consumers.</p>
              <Link to="/services/brand-activation-agency-abu-dhabi" className="ce-link">Explore Brand Activations &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="ce-seo-content">
        <div className="container">
          <article className="seo-article">
            <h2>Partner with a Leading Events Company in Abu Dhabi</h2>
            <p>
              When you choose Perfect Party Events for your event management in Abu Dhabi, you are partnering with a dedicated team of production experts and creative designers. We pride ourselves on being a premier event management company in the UAE, offering end-to-end solutions that elevate your brand's presence and engage your target audience.
            </p>
            <p>
              Our full-service event management approach ensures that every detail—from stage fabrication and AV integration to VIP hospitality and venue sourcing—is handled with precision, making us the trusted choice for corporate event management in Abu Dhabi.
            </p>
            <div className="ce-cta-wrap">
              <Link to="/services" className="btn-editorial" style={{marginRight: '1rem'}}>View All Services</Link>
              <Link to="/contact-us" className="btn-editorial">Contact Our Team</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default EventManagementCompany;

