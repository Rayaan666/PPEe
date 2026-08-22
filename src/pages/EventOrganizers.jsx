import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CorporateEvents.css'; // Reusing existing CSS to avoid redesigns

const eventOrganizerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professional Event Organizers',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Perfect Party Events',
    url: 'https://perfectpartyeventsae.com/'
  },
  areaServed: [
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'Country', name: 'United Arab Emirates' }
  ],
  description: 'Expert Event Organizer in Abu Dhabi. We are a professional event planning company specializing in corporate event organization and luxury experiences in the UAE.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perfectpartyeventsae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Event Organizers', item: 'https://perfectpartyeventsae.com/event-organizers/' }
  ]
};

const EventOrganizers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="corporate-events-page">
      <Helmet>
        <title>Event Organizer Abu Dhabi | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="Professional Event Organizer in Abu Dhabi. We are a leading event planning company in the UAE offering expert corporate event organizer services."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/event-organizers/" />
        <script type="application/ld+json">{JSON.stringify(eventOrganizerSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="ce-hero">
        <div className="container">
          <nav className="ce-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Event Organizers</span>
          </nav>
          <span className="ce-eyebrow">Event Planning Company Abu Dhabi</span>
          <h1 className="ce-title">Professional Event Organizers in Abu Dhabi</h1>
          <p className="ce-subtitle">
            Perfect Party Events is an expert event organizer in Abu Dhabi, dedicated to meticulously planning and flawlessly executing high-profile corporate events and luxury celebrations across the UAE.
          </p>
        </div>
      </section>

      {/* Hub Section */}
      <section className="ce-services-hub">
        <div className="container">
          <div className="ce-hub-header">
            <h2>Our Expertise as Corporate Event Organizers</h2>
            <p>From initial ideation to on-site execution, our professional event organizers in the UAE ensure your vision is realized with absolute precision.</p>
          </div>

          <div className="ce-grid">
            <div className="ce-card">
              <h3><Link to="/corporate-events/">Corporate Event Organizer Abu Dhabi</Link></h3>
              <p>Specialized corporate event planners for high-stakes business gatherings, galas, and summits.</p>
              <Link to="/corporate-events/" className="ce-link">Explore Corporate Events &rarr;</Link>
            </div>
            
            <div className="ce-card">
              <h3><Link to="/services/corporate-gala-events-abu-dhabi">Gala Dinner Organizers</Link></h3>
              <p>End-to-end event organization for prestigious awards nights and executive gala dinners.</p>
              <Link to="/services/corporate-gala-events-abu-dhabi" className="ce-link">Explore Corporate Galas &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/product-launch-events-abu-dhabi">Product Launch Planners</Link></h3>
              <p>Creative event organizers focused on high-impact experiential product reveals.</p>
              <Link to="/services/product-launch-events-abu-dhabi" className="ce-link">Explore Product Launches &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/corporate-conference-organizer-abu-dhabi">Conference Organizers</Link></h3>
              <p>Meticulous event planning company handling logistics, registration, and AV for major summits.</p>
              <Link to="/services/corporate-conference-organizer-abu-dhabi" className="ce-link">Explore Conferences &rarr;</Link>
            </div>

            <div className="ce-card">
              <h3><Link to="/services/theme-decoration-private-events-abu-dhabi">Private Celebration Planners</Link></h3>
              <p>Discreet and luxurious event organizers for bespoke private parties and VIP gatherings.</p>
              <Link to="/services/theme-decoration-private-events-abu-dhabi" className="ce-link">Explore Private Events &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="ce-seo-content">
        <div className="container">
          <article className="seo-article">
            <h2>Your Trusted Event Organizer in Abu Dhabi</h2>
            <p>
              As professional event organizers in the UAE, we understand that every occasion requires a unique blend of creativity, logistical discipline, and flawless execution. Whether you need a corporate event organizer in Abu Dhabi or an event planning company for a private celebration, our dedicated team is committed to surpassing your expectations.
            </p>
            <p>
              Our role as your event organizers in Abu Dhabi covers every detail—from strategic venue sourcing and bespoke event styling to comprehensive technical production and guest hospitality. Let us organize an unforgettable experience for your brand.
            </p>
            <div className="ce-cta-wrap">
              <Link to="/services" className="btn-editorial" style={{marginRight: '1rem'}}>View All Services</Link>
              <Link to="/contact-us" className="btn-editorial">Contact Our Planners</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default EventOrganizers;

