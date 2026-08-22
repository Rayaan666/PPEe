import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    location: '',
    date: '',
    guests: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.contact-hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2
      });
      
      gsap.from('.contact-hero-desc', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });
      
      gsap.from('.contact-hero-image-wrapper', {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5
      });

      // Scroll reveals
      gsap.utils.toArray('.contact-reveal').forEach(element => {
        gsap.from(element, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          }
        });
      });
      
      // Animated lines for locations
      gsap.utils.toArray('.location-line').forEach(line => {
        gsap.fromTo(line, 
          { scaleY: 0 },
          { 
            scaleY: 1, 
            duration: 1.5, 
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if(formData.name && formData.email) {
        setFormStatus('success');
        setFormData({
          name: '', email: '', phone: '', eventType: '', 
          location: '', date: '', guests: '', message: ''
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Perfect Party Events',
    description: 'Contact Perfect Party Events for luxury private celebrations, corporate events, exhibitions, product launches, conferences and brand activations across Abu Dhabi, Dubai and the UAE.',
    url: 'https://perfectpartyeventsae.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Perfect Party Events',
      image: 'https://perfectpartyeventsae.com/logo.png',
      email: 'info@perfectpartyeventsae.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 3, ME 40, Musaffah',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00'
      }
    }
  };

  return (
    <div className="contact-page" ref={containerRef}>
      <Helmet>
        <title>Contact Perfect Party Events | Event Planner Abu Dhabi & Dubai</title>
        <meta name="description" content="Contact Perfect Party Events for luxury private celebrations, corporate events, exhibitions, product launches, conferences and brand activations across Abu Dhabi, Dubai and the UAE." />
        <link rel="canonical" href="https://perfectpartyeventsae.com/contact-us/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-grid">
          <div className="contact-hero-content">
            <nav className="contact-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </nav>
            <span className="contact-kicker">Let's Talk</span>
            <h1 className="contact-hero-title">
              <span>Your next</span><br/>
              <span>unforgettable event</span><br/>
              <span>starts here.</span>
            </h1>
            <p className="contact-hero-desc">
              Planning a luxury celebration, corporate event, exhibition, conference, or brand experience? Tell us what you have in mind and let Perfect Party Events bring it to life.
            </p>
            <button 
              className="contact-btn-primary" 
              onClick={() => document.getElementById('enquiry-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Enquiry
            </button>
          </div>
          
          <div className="contact-hero-visual">
            <div className="contact-hero-image-wrapper">
              <div className="contact-glow-peach" aria-hidden="true" />
              <img 
                src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_14_2026_01_30_54_PM" 
                alt="Sophisticated event production setup" 
                className="contact-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="contact-main-section">
        <div className="contact-main-grid">
          
          {/* Form Side */}
          <div className="contact-form-side contact-reveal" id="enquiry-form">
            <div className="contact-form-header">
              <h2>Tell Us About Your Event</h2>
              <p>Please share the initial details of your vision, and our team will be in touch shortly.</p>
            </div>
            
            <form className="premium-contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="" disabled>Select Event Type...</option>
                    <option value="Private Celebration">Private Celebration</option>
                    <option value="Corporate Gala">Corporate Gala</option>
                    <option value="Exhibition Stand">Exhibition Stand</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Corporate Conference">Corporate Conference</option>
                    <option value="Brand Activation">Brand Activation</option>
                    <option value="Private Event">Private Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Event Location</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Abu Dhabi, Dubai..." />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Event Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guests">Estimated Guests</label>
                  <input type="text" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message / Tell Us About Your Vision *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <div className="form-submit-wrapper">
                <button type="submit" className="contact-btn-submit" disabled={formStatus === 'loading'}>
                  {formStatus === 'loading' ? 'Submitting...' : 'Submit Your Enquiry →'}
                </button>
              </div>

              {formStatus === 'success' && (
                <div className="form-message success-message">
                  Thank you for your enquiry. Our team will contact you shortly to discuss your event.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-message error-message">
                  Please fill in all required fields (Name, Email, Message) before submitting.
                </div>
              )}
            </form>
          </div>

          {/* Direct Contact Side */}
          <div className="contact-direct-side contact-reveal">
            <div className="direct-contact-card glass-panel">
              <span className="contact-kicker">Prefer to Talk Directly?</span>
              <h3>Get In Touch</h3>
              
              <div className="direct-info-list">
                <div className="direct-info-item">
                  <span className="info-label">Email Us</span>
                  <a href="mailto:info@perfectpartyeventsae.com" className="info-value">info@perfectpartyeventsae.com</a>
                </div>
                
                <div className="direct-info-item">
                  <span className="info-label">Visit Us</span>
                  <address className="info-value">
                    Plot 3, ME 40, Musaffah<br/>
                    Abu Dhabi, United Arab Emirates
                  </address>
                </div>
                
                <div className="direct-info-item">
                  <span className="info-label">Business Hours</span>
                  <span className="info-value">Mon - Sun: 09:00 AM - 09:00 PM</span>
                </div>
                
                <div className="direct-info-item coverage-info">
                  <span className="info-label">Service Coverage</span>
                  <span className="info-value">Abu Dhabi, Dubai, & Across the UAE</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Where We Create Section */}
      <section className="contact-coverage-section">
        <div className="coverage-header contact-reveal">
          <h2>Where We Create</h2>
          <p>Delivering extraordinary event experiences across the United Arab Emirates.</p>
        </div>
        
        <div className="coverage-locations">
          <div className="coverage-location contact-reveal">
            <div className="location-line" aria-hidden="true"></div>
            <div className="location-content">
              <h3>Abu Dhabi</h3>
              <p>Corporate Events &middot; Conferences &middot; Exhibitions &middot; Luxury Celebrations</p>
            </div>
          </div>
          
          <div className="coverage-location contact-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="location-line" aria-hidden="true"></div>
            <div className="location-content">
              <h3>Dubai</h3>
              <p>Private Celebrations &middot; Product Launches &middot; Brand Activations &middot; Corporate Experiences</p>
            </div>
          </div>
        </div>
        <p className="coverage-note contact-reveal">
          * Full event production services available across the wider UAE.
        </p>
      </section>

      {/* Quick Service Links */}
      <section className="contact-quick-links contact-reveal">
        <div className="quick-links-container">
          <span className="quick-links-label">Explore Our Services</span>
          <div className="quick-links-grid">
            <Link to="/services/exhibition-stand-design-abu-dhabi">Exhibition Stands</Link>
            <Link to="/services/corporate-gala-events-abu-dhabi">Corporate Galas</Link>
            <Link to="/services/product-launch-events-abu-dhabi">Product Launches</Link>
            <Link to="/services/corporate-conference-organizer-abu-dhabi">Corporate Conferences</Link>
            <Link to="/services/brand-activation-agency-abu-dhabi">Brand Activations</Link>
            <Link to="/services/private-celebrations-abu-dhabi">Private Celebrations</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-final-cta contact-reveal">
        <div className="final-cta-bg">
          <img 
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_14_2026_01_30_59_PM" 
            alt="Corporate event management staging and luxury celebrations in Abu Dhabi" 
            loading="lazy"
          />
          <div className="final-cta-overlay"></div>
        </div>
        <div className="final-cta-content">
          <span className="contact-kicker" style={{color: '#fff'}}>Partner with a Premier UAE Event Company</span>
          <h2>Ready to Collaborate with a Top Event Management Company in Abu Dhabi?</h2>
          <p className="contact-cta-seo-desc">
            Perfect Party Events is a trusted luxury event planner in the UAE, specializing in corporate event management, bespoke exhibition stands, high-impact product launches, and private celebrations across Abu Dhabi, Dubai, and the wider UAE. Let's make your next campaign or celebration a landmark success.
          </p>
          <div className="contact-cta-seo-features">
            <div className="contact-cta-seo-feat">
              <strong>Premium Production</strong>
              <span>Custom fabrication &amp; design</span>
            </div>
            <div className="contact-cta-seo-feat">
              <strong>End-to-End Logistics</strong>
              <span>Turnkey venue &amp; delegate coordination</span>
            </div>
            <div className="contact-cta-seo-feat">
              <strong>UAE Wide Coverage</strong>
              <span>Abu Dhabi, Dubai &amp; northern emirates</span>
            </div>
          </div>
          <button 
            className="contact-btn-white"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                document.getElementById('enquiry-form').scrollIntoView({ behavior: 'smooth' });
              }, 500);
            }}
          >
            Start Planning Your Event →
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;


