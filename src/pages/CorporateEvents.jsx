import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CorporateEvents.css';

const corporateEventsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Event Management Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Perfect Party Events',
    url: 'https://perfectpartyeventsae.com/'
  },
  areaServed: [
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' }
  ],
  description: 'Premier corporate event management in Abu Dhabi and Dubai, specializing in corporate galas, product launches, brand activations, conferences, and custom exhibition stands.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Corporate Event Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Corporate Galas',
        url: 'https://perfectpartyeventsae.com/services/corporate-gala-events-abu-dhabi'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Product Launches',
        url: 'https://perfectpartyeventsae.com/services/product-launch-events-abu-dhabi'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Corporate Conferences',
        url: 'https://perfectpartyeventsae.com/services/corporate-conference-organizer-abu-dhabi'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Brand Activations',
        url: 'https://perfectpartyeventsae.com/services/brand-activation-agency-abu-dhabi'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Exhibition Stands',
        url: 'https://perfectpartyeventsae.com/services/exhibition-stand-design-abu-dhabi'
      }
    ]
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://perfectpartyeventsae.com/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://perfectpartyeventsae.com/services'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Corporate Events',
      item: 'https://perfectpartyeventsae.com/corporate-events/'
    }
  ]
};

const CorporateEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="corporate-events-page">
      <Helmet>
        <title>Corporate Event Management & Planners in Abu Dhabi | Perfect Party Events</title>
        <meta
          name="description"
          content="Leading corporate event organizer in Abu Dhabi & Dubai. We produce high-impact corporate galas, product launches, conferences, and brand activations across the UAE."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/corporate-events/" />
        <script type="application/ld+json">{JSON.stringify(corporateEventsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="ce-hero">
        <div className="container">
          <nav className="ce-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>Corporate Events</span>
          </nav>
          <span className="ce-eyebrow">Expert Corporate Event Planners</span>
          <h1 className="ce-title">Corporate Event Management Abu Dhabi &amp; Dubai</h1>
          <p className="ce-subtitle">
            Perfect Party Events is a premier corporate event organizer, delivering bespoke event production, strategic planning, and flawless execution for the UAE's most distinguished businesses and brands.
          </p>
        </div>
      </section>

      {/* Corporate Services Hub */}
      <section className="ce-services-hub">
        <div className="container">
          <div className="ce-hub-header">
            <h2>Comprehensive Corporate Event Services</h2>
            <p>From international summits to exclusive brand roll-outs, our corporate event management solutions in the UAE are engineered for absolute impact.</p>
          </div>

          <div className="ce-grid">
            <div className="ce-card">
              <h3><Link to="/services/corporate-gala-events-abu-dhabi">Corporate Galas &amp; Award Ceremonies</Link></h3>
              <p>Elevate your annual galas with stunning stage design, AV production, and VIP hospitality.</p>
              <Link to="/services/corporate-gala-events-abu-dhabi" className="ce-link">Explore Corporate Galas &rarr;</Link>
            </div>
            
            <div className="ce-card">
              <h3><Link to="/services/product-launch-events-abu-dhabi">Experiential Product Launches</Link></h3>
              <p>Unveil your brand with precision through high-end technical staging and immersive environments.</p>
              <Link to="/services/product-launch-events-abu-dhabi" className="ce-link">Explore Product Launches &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/corporate-conference-organizer-abu-dhabi">Corporate Conferences &amp; Summits</Link></h3>
              <p>End-to-end management for global summits, including logistics, registration, and live broadcasting.</p>
              <Link to="/services/corporate-conference-organizer-abu-dhabi" className="ce-link">Explore Conferences &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/brand-activation-agency-abu-dhabi">Brand Activations &amp; Pop-ups</Link></h3>
              <p>Interactive brand experiences and luxury retail setups designed to forge deep consumer connections.</p>
              <Link to="/services/brand-activation-agency-abu-dhabi" className="ce-link">Explore Brand Activations &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/exhibition-stand-design-abu-dhabi">Exhibition Stand Design &amp; Build</Link></h3>
              <p>Bespoke exhibition booths and trade show pavilions managed from 3D concept to full fabrication.</p>
              <Link to="/services/exhibition-stand-design-abu-dhabi" className="ce-link">Explore Exhibition Stands &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="ce-seo-content">
        <div className="container">
          <article className="seo-article">
            <h2>Your Trusted Corporate Event Organizer in Abu Dhabi</h2>
            <p>
              As a leading corporate event planner in Abu Dhabi, we understand that corporate events are a direct reflection of your brand's prestige and vision. 
              Whether you are hosting an intimate stakeholder dinner or a large-scale corporate event production for thousands of attendees, our dedicated team 
              ensures every detail is meticulously curated. 
            </p>
            <p>
              Our corporate event management company operates across the UAE, bringing unparalleled expertise in audio-visual integration, stage fabrication, 
              venue selection, and on-ground coordination to ensure your corporate events are seamless and memorable.
            </p>
            <div className="ce-cta-wrap">
              <Link to="/contact-us" className="btn-editorial">Consult Our Event Planners</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default CorporateEvents;


