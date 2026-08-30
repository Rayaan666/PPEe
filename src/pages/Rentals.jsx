import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Rentals.css';

const Rentals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rentalProducts = [
    {
      id: 1,
      name: 'Event Rental Item 1',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/WhatsApp_Image_2026-08-27_at_3.20.16_PM',
    },
    {
      id: 2,
      name: 'Event Rental Item 2',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_30_2026_06_04_06_PM',
    },
    {
      id: 3,
      name: 'Event Rental Item 3',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_30_2026_06_36_06_AM',
    },
    {
      id: 4,
      name: 'Event Rental Item 4',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/WhatsApp_Image_2026-08-30_at_6.09.38_AM',
    },
    {
      id: 5,
      name: 'Event Rental Item 5',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_30_2026_06_04_24_PM',
    }
  ];

  const handleWhatsAppEnquiry = (productName) => {
    const phoneNumber = '971501045227';
    const message = encodeURIComponent(`Hi Perfect Party Events, I’m interested in renting the ${productName}. Could you please share availability and details?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const rentalsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Premium Event Rentals in Abu Dhabi & UAE',
    description: 'Explore event furniture, equipment and party rentals for corporate events, private celebrations, exhibitions and premium experiences across the UAE.',
    url: 'https://perfectpartyeventsae.com/rentals/',
    publisher: {
      '@type': 'Organization',
      name: 'Perfect Party Events'
    }
  };

  return (
    <div className="rentals-page-wrapper">
      <Helmet>
        <title>Premium Event Rentals in Abu Dhabi & UAE | Perfect Party Events</title>
        <meta
          name="description"
          content="Explore premium event furniture, equipment, and party rentals in Abu Dhabi. Perfect Party Events provides luxury event rentals for corporate and private events across the UAE."
        />
        <meta name="keywords" content="event rentals Abu Dhabi, party rentals Abu Dhabi, event furniture rental Abu Dhabi, event equipment rental Abu Dhabi, tables and chairs rental Abu Dhabi, event rentals UAE" />
        <link rel="canonical" href="https://perfectpartyeventsae.com/rentals/" />
        <meta property="og:title" content="Premium Event Rentals in Abu Dhabi & UAE | Perfect Party Events" />
        <meta property="og:description" content="Explore premium event furniture, equipment, and party rentals in Abu Dhabi. Perfect Party Events provides luxury event rentals for corporate and private events across the UAE." />
        <meta property="og:url" content="https://perfectpartyeventsae.com/rentals/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(rentalsStructuredData)}</script>
      </Helmet>

      {/* SECTION 01 — HERO */}
      <section className="rentals-hero section-relative">
        <div className="container rentals-hero-grid">
          <div className="rentals-hero-content">
            <span className="section-label">EVENT RENTALS ABU DHABI</span>
            <div className="rentals-hero-title-wrap">
              <div className="rentals-hero-title-line"></div>
              <h1>
                <span>Premium Event Rentals</span><br />
                <span><em>in Abu Dhabi &amp; UAE.</em></span>
              </h1>
            </div>
            <p className="rentals-hero-text">
              Explore event furniture, equipment and party rentals for corporate events, private celebrations, exhibitions and premium experiences across the UAE.
            </p>
          </div>
          <div className="rentals-hero-visual">
            <div className="rentals-hero-img-mask">
              <img 
                src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_17_2026_04_43_15_PM" 
                alt="Premium Event Rentals in Abu Dhabi UAE" 
                className="rentals-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — RENTAL PRODUCTS */}
      <section className="rentals-gallery-section">
        <div className="container">
          <div className="rentals-section-header">
            <span className="section-label">OUR COLLECTION</span>
            <h2 className="rentals-section-title">Curated Rental Catalogue</h2>
          </div>
          <div className="rentals-grid">
            {rentalProducts.map((product) => (
              <div 
                className="rental-item" 
                key={product.id}
              >
                <div 
                  className="rental-item-image-wrapper"
                  onClick={() => handleWhatsAppEnquiry(product.name)}
                >
                  <img 
                    src={product.image} 
                    alt="Event Rental Product - Perfect Party Events Abu Dhabi" 
                    className="rental-item-image"
                    loading="lazy"
                  />
                </div>
                <button 
                  className="rental-card-whatsapp-btn"
                  onClick={() => handleWhatsAppEnquiry(product.name)}
                  aria-label="Enquire on WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382C17.153 14.221 15.561 13.435 15.269 13.332C14.978 13.228 14.766 13.176 14.553 13.489C14.341 13.803 13.731 14.536 13.545 14.745C13.359 14.954 13.174 14.981 12.855 14.823C12.537 14.665 11.493 14.325 10.252 13.211C9.287 12.346 8.639 11.285 8.453 10.971C8.267 10.657 8.434 10.487 8.594 10.329C8.737 10.187 8.913 9.96 9.072 9.776C9.231 9.593 9.285 9.462 9.391 9.253C9.497 9.043 9.444 8.86 9.364 8.703C9.285 8.546 8.647 6.974 8.381 6.347C8.121 5.732 7.857 5.814 7.666 5.805C7.491 5.796 7.278 5.796 7.066 5.796C6.853 5.796 6.508 5.875 6.216 6.188C5.924 6.502 5.099 7.261 5.099 8.805C5.099 10.35 6.242 11.841 6.402 12.051C6.561 12.261 8.618 15.421 11.758 16.779C12.505 17.102 13.086 17.297 13.543 17.441C14.292 17.68 14.975 17.645 15.513 17.567C16.113 17.48 17.365 16.812 17.63 16.079C17.895 15.347 17.895 14.718 17.789 14.588C17.683 14.456 17.472 14.382 17.472 14.382ZM11.996 22H11.992C10.301 22 8.653 21.545 7.211 20.697L6.877 20.499L3.528 21.378L4.425 18.106L4.207 17.76C3.275 16.279 2.784 14.536 2.784 12.753C2.784 7.667 6.921 3.531 12.008 3.531C14.475 3.531 16.786 4.492 18.529 6.236C20.272 7.978 21.233 10.288 21.233 12.758C21.231 17.842 17.094 22 11.996 22ZM20.088 4.667C17.925 2.5 15.056 1.306 12.003 1.306C5.69 1.306 0.551 6.444 0.551 12.756C0.551 14.774 1.077 16.735 2.059 18.455L0 26L7.697 23.982C9.352 24.877 11.187 25.352 12.046 25.352H12.052C18.365 25.352 23.504 20.213 23.504 13.903C23.504 10.849 22.316 7.979 20.088 4.667Z" fill="currentColor"/>
                  </svg>
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
