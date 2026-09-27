import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackWhatsAppEnquiry } from '../utils/analytics';
import './Rentals.css';

const Rentals = () => {
  const [activeTab, setActiveTab] = useState('all');

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
    trackWhatsAppEnquiry({
      product_name: productName,
      product_category: 'Event Furniture & Equipment',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '/rentals/'
    });
    const phoneNumber = '971501045227';
    const message = encodeURIComponent(`Hi Perfect Party Events, I’m interested in renting the ${productName}. Could you please share availability and details?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleFoodWhatsAppEnquiry = (productName, category = 'Live Food Station') => {
    trackWhatsAppEnquiry({
      product_name: productName,
      product_category: category,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '/rentals/'
    });
    const phoneNumber = '971501045227';
    const message = encodeURIComponent(`Hi Perfect Party Events, I’m interested in the ${productName} for my event. Could you please share availability and details?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const foodStationsAndTreats = [
    // FOOD STATIONS
    {
      id: 'popcorn',
      name: 'Popcorn',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Freshly popped warm gourmet popcorn cart with vintage cinema charm',
      image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
      alt: 'Live Popcorn Machine Rental Abu Dhabi - Perfect Party Events',
      isFeature: false
    },
    {
      id: 'cotton-candy',
      name: 'Cotton Candy',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Freshly spun pastel sugar floss clouds crafted live for guests',
      image: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=800&q=80',
      alt: 'Cotton Candy Machine Rental Abu Dhabi - Event Live Food Station',
      isFeature: false
    },
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      type: 'food-station',
      category: 'Feature Live Station',
      subtitle: 'Artisanal soft-serve & gelato station with crisp waffle cones, sauces & luxury toppings bar',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_30_2026_06_36_06_AM',
      alt: 'Ice Cream Machine Rental Abu Dhabi - Luxury Outdoor Event Live Station',
      isFeature: true
    },
    {
      id: 'sweet-corn',
      name: 'Sweet Corn',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Steamed buttered sweet corn served piping hot with signature seasonings',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/WhatsApp_Image_2026-08-27_at_3.20.16_PM',
      alt: 'Steamed Sweet Corn Station Rental Abu Dhabi - Event Catering',
      isFeature: false
    },
    {
      id: 'spiral-potatoes',
      name: 'Spiral Potatoes',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Crispy golden tornado spiral potato skewers seasoned to perfection',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/spiral-potatoes',
      alt: 'Spiral Potato Tornado Skewers Live Station Abu Dhabi',
      isFeature: false
    },
    {
      id: 'mini-burgers',
      name: 'Mini Burgers',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Gourmet brioche beef & chicken sliders assembled fresh at your event',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      alt: 'Mini Slider Burgers Live Catering Station Abu Dhabi',
      isFeature: false
    },
    {
      id: 'nuggets',
      name: 'Nuggets',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Crispy golden chicken bites served with an array of artisanal dips',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
      alt: 'Crispy Chicken Nuggets Station for Events Abu Dhabi',
      isFeature: false
    },
    {
      id: 'fries',
      name: 'Fries',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Hand-cut shoestring & truffle parmesan fries in bespoke cones',
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
      alt: 'Gourmet Fries Station Abu Dhabi - Party Food Stations',
      isFeature: false
    },
    {
      id: 'frozen-yogurt',
      name: 'Frozen Yogurt',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Refreshing swirled froyo bar with fresh berries & sweet crumbles',
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=800&q=80',
      alt: 'Frozen Yogurt Live Station Rental UAE',
      isFeature: false
    },
    {
      id: 'hotdogs',
      name: 'Hotdogs',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Classic New York style cart hot dogs with gourmet relishes & brioche buns',
      image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80',
      alt: 'Gourmet Live Hot Dog Cart Abu Dhabi',
      isFeature: false
    },
    {
      id: 'nachos',
      name: 'Nachos',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Warm artisan tortilla crisps with spiced queso, fresh guacamole & salsa',
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
      alt: 'Warm Nacho Station with Cheese & Salsa Abu Dhabi',
      isFeature: false
    },
    {
      id: 'chocolate-fountain',
      name: 'Chocolate Fountain',
      type: 'food-station',
      category: 'Feature Live Station',
      subtitle: 'Cascading tiers of rich Belgian chocolate with fresh strawberry & marshmallow skewers',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80',
      alt: 'Cascading Chocolate Fountain Rental Abu Dhabi UAE',
      isFeature: true
    },
    {
      id: 'hot-chocolate',
      name: 'Hot Chocolate',
      type: 'food-station',
      category: 'Live Food Station',
      subtitle: 'Velvety artisanal hot cocoa bar with toasted marshmallows & cinnamon sprinkles',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
      alt: 'Artisanal Hot Chocolate Station Abu Dhabi Events',
      isFeature: false
    },

    // TREATS & HOSPITALITY
    {
      id: 'lemonade',
      name: 'Lemonade',
      type: 'treats',
      category: 'Feature Hospitality',
      subtitle: 'Hand-crafted citrus & berry infused lemonades served from luxury bespoke carts',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_30_2026_06_04_24_PM',
      alt: 'Vintage Lemonade Cart Rental Abu Dhabi - Event Drink Station',
      isFeature: true
    },
    {
      id: 'mini-pancakes',
      name: 'Mini Pancakes',
      type: 'treats',
      category: 'Treats & Hospitality',
      subtitle: 'Live golden Dutch poffertjes drizzled with warm Belgian chocolate & berries',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
      alt: 'Live Mini Pancake Station Rental Abu Dhabi',
      isFeature: false
    },
    {
      id: 'crepes',
      name: 'Crepes',
      type: 'treats',
      category: 'Treats & Hospitality',
      subtitle: 'Thin French crepes made to order with chocolate, caramel & fruit compotes',
      image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
      alt: 'Live Crepe Making Station Abu Dhabi Event Catering',
      isFeature: false
    },

    {
      id: 'candy-bar',
      name: 'Candy Bar',
      type: 'treats',
      category: 'Treats & Hospitality',
      subtitle: 'Curated crystal jars filled with luxury pastel confections & vintage sweets',
      image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80',
      alt: 'Aesthetic Event Candy Bar Display Abu Dhabi',
      isFeature: false
    },
    {
      id: 'donut-bar',
      name: 'Donut Bar',
      type: 'treats',
      category: 'Treats & Hospitality',
      subtitle: 'Interactive designer donut wall & stands featuring artisan glazes & toppings',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/WhatsApp_Image_2026-09-23_at_1.26.56_PM',
      alt: 'Gourmet Donut Wall & Bar Display Abu Dhabi',
      isFeature: false
    },
    {
      id: 'charcuterie-bar',
      name: 'Charcuterie Bar',
      type: 'treats',
      category: 'Hospitality',
      subtitle: 'Generous grazing banquet with imported cheeses, artisan crackers, figs & grapes',
      image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury Grazing Table and Charcuterie Bar Abu Dhabi',
      isFeature: false
    },
    {
      id: 'kids-meal-boxes',
      name: 'Kids Meal Boxes',
      type: 'treats',
      category: 'Hospitality',
      subtitle: 'Chic personalized party meal gift boxes packed with gourmet treats for young guests',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/kids-meal-boxes',
      alt: 'Kids Party Meal Boxes Abu Dhabi Event Catering',
      isFeature: false
    },
    {
      id: 'gahwa-service',
      name: 'Gahwa Service',
      type: 'treats',
      category: 'Heritage Hospitality',
      subtitle: 'Traditional Emirati hospitality served with royal golden dallah, finjan & premium dates',
      image: 'https://res.cloudinary.com/iiddvwaz/image/upload/v1/gahwa-service',
      alt: 'Traditional Emirati Gahwa Coffee Service Abu Dhabi Events',
      isFeature: true
    }
  ];

  const filteredFoodItems = foodStationsAndTreats.filter(item => {
    if (activeTab === 'food-stations') return item.type === 'food-station';
    if (activeTab === 'treats') return item.type === 'treats';
    return true;
  });

  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(prev => prev === index ? null : index);
  };

  const rentalFaqs = [
    {
      question: 'Where can I rent event furniture and equipment in Abu Dhabi?',
      answer: 'Perfect Party Events provides event furniture, party equipment, and live food stations for corporate events, private celebrations, and exhibitions across Abu Dhabi and the UAE.'
    },
    {
      question: 'What types of event rental products are available?',
      answer: 'Our rental collection includes event furniture, equipment, ice cream machines, popcorn stations, cotton candy stations, and a variety of interactive food and hospitality experiences.'
    },
    {
      question: 'Can I book live food stations for corporate events?',
      answer: 'Yes. Perfect Party Events offers live food stations for corporate gatherings, brand activations, exhibitions, and private celebrations, with options including ice cream, popcorn, mini pancakes, and more.'
    },
    {
      question: 'How can I enquire about event rentals in Abu Dhabi?',
      answer: 'Browse our rental collection and select your preferred product. Click the WhatsApp enquiry button to contact our team directly for availability, event requirements, and further details.'
    }
  ];

  const rentalsStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://perfectpartyeventsae.com/rentals/#webpage',
        url: 'https://perfectpartyeventsae.com/rentals/',
        name: 'Event Rentals & Live Food Stations Abu Dhabi | Perfect Party Events',
        description: 'Explore event rentals, party furniture, equipment and live food stations in Abu Dhabi. Enquire with Perfect Party Events for your next event.',
        datePublished: '2026-08-22',
        dateModified: '2026-09-27',
        publisher: {
          '@id': 'https://perfectpartyeventsae.com/#organization'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://perfectpartyeventsae.com/rentals/#faq',
        mainEntity: rentalFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="rentals-page-wrapper">
      <Helmet>
        <title>Event Rentals & Live Food Stations Abu Dhabi | Perfect Party Events</title>
        <meta
          name="description"
          content="Explore event rentals, party furniture, equipment and live food stations in Abu Dhabi. Enquire with Perfect Party Events for your next event."
        />
        <meta name="keywords" content="Event Rentals Abu Dhabi, Party Rentals Abu Dhabi, Event Furniture Rental Abu Dhabi, Event Equipment Rental Abu Dhabi, Live Food Stations Abu Dhabi, Ice Cream Machine Rental Abu Dhabi, Popcorn Machine Rental Abu Dhabi, Cotton Candy Machine Rental Abu Dhabi" />
        <link rel="canonical" href="https://perfectpartyeventsae.com/rentals/" />
        <meta property="og:title" content="Event Rentals & Live Food Stations Abu Dhabi | Perfect Party Events" />
        <meta property="og:description" content="Explore event rentals, party furniture, equipment and live food stations in Abu Dhabi. Enquire with Perfect Party Events for your next event." />
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
                <span>Event Rentals &amp; Live Food Stations Abu Dhabi</span><br />
                <span><em>| Perfect Party Events</em></span>
              </h1>
            </div>
            <p className="rentals-hero-text">
              Explore event furniture rental, party equipment, and live food stations in Abu Dhabi for corporate events, private celebrations, exhibitions, and bespoke experiences across the UAE.
            </p>
          </div>
          <div className="rentals-hero-visual">
            <div className="rentals-hero-img-mask">
              <img 
                src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_17_2026_04_43_15_PM" 
                alt="Event Rentals and Live Food Stations Abu Dhabi UAE" 
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
            <h2 className="rentals-section-title">Event Furniture &amp; Equipment Rental Abu Dhabi</h2>
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

          {/* VISUALLY DISTINCT FOOD STATIONS & TREATS COLLECTION */}
          <div className="food-stations-collection">
            <div className="food-stations-intro">
              <span className="food-stations-eyebrow">EXPERIENTIAL EVENT CATERING</span>
              <h2 className="food-stations-title">Live Food Stations Abu Dhabi &amp; Treats</h2>
              <p className="food-stations-subtitle">
                Interactive party rentals and food station experiences, from ice cream, popcorn, and cotton candy machine rentals to bespoke event catering across Abu Dhabi.
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="food-tab-filters" role="tablist" aria-label="Food collection categories">
              <button 
                className={`food-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
                role="tab"
                aria-selected={activeTab === 'all'}
              >
                All Experiences ({foodStationsAndTreats.length})
              </button>
              <button 
                className={`food-tab-btn ${activeTab === 'food-stations' ? 'active' : ''}`}
                onClick={() => setActiveTab('food-stations')}
                role="tab"
                aria-selected={activeTab === 'food-stations'}
              >
                Food Stations (13)
              </button>
              <button 
                className={`food-tab-btn ${activeTab === 'treats' ? 'active' : ''}`}
                onClick={() => setActiveTab('treats')}
                role="tab"
                aria-selected={activeTab === 'treats'}
              >
                Treats &amp; Hospitality (13)
              </button>
            </div>

            {/* Compact Refined Grid */}
            <div className="food-editorial-grid">
              {filteredFoodItems.map((item) => (
                <article 
                  className="food-editorial-card" 
                  key={item.id}
                >
                  <div 
                    className="food-card-media"
                    onClick={() => handleFoodWhatsAppEnquiry(item.name, item.category)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Get details for ${item.name}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleFoodWhatsAppEnquiry(item.name, item.category);
                      }
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="food-card-img" 
                      loading="lazy"
                    />
                    <div className="food-card-hover-overlay">
                      <span className="food-hover-category">{item.category}</span>
                      <div className="food-hover-action-pill">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382C17.153 14.221 15.561 13.435 15.269 13.332C14.978 13.228 14.766 13.176 14.553 13.489C14.341 13.803 13.731 14.536 13.545 14.745C13.359 14.954 13.174 14.981 12.855 14.823C12.537 14.665 11.493 14.325 10.252 13.211C9.287 12.346 8.639 11.285 8.453 10.971C8.267 10.657 8.434 10.487 8.594 10.329C8.737 10.187 8.913 9.96 9.072 9.776C9.231 9.593 9.285 9.462 9.391 9.253C9.497 9.043 9.444 8.86 9.364 8.703C9.285 8.546 8.647 6.974 8.381 6.347C8.121 5.732 7.857 5.814 7.666 5.805C7.491 5.796 7.278 5.796 7.066 5.796C6.853 5.796 6.508 5.875 6.216 6.188C5.924 6.502 5.099 7.261 5.099 8.805C5.099 10.35 6.242 11.841 6.402 12.051C6.561 12.261 8.618 15.421 11.758 16.779C12.505 17.102 13.086 17.297 13.543 17.441C14.292 17.68 14.975 17.645 15.513 17.567C16.113 17.48 17.365 16.812 17.63 16.079C17.895 15.347 17.895 14.718 17.789 14.588C17.683 14.456 17.472 14.382 17.472 14.382ZM11.996 22H11.992C10.301 22 8.653 21.545 7.211 20.697L6.877 20.499L3.528 21.378L4.425 18.106L4.207 17.76C3.275 16.279 2.784 14.536 2.784 12.753C2.784 7.667 6.921 3.531 12.008 3.531C14.475 3.531 16.786 4.492 18.529 6.236C20.272 7.978 21.233 10.288 21.233 12.758C21.231 17.842 17.094 22 11.996 22ZM20.088 4.667C17.925 2.5 15.056 1.306 12.003 1.306C5.69 1.306 0.551 6.444 0.551 12.756C0.551 14.774 1.077 16.735 2.059 18.455L0 26L7.697 23.982C9.352 24.877 11.187 25.352 12.046 25.352H12.052C18.365 25.352 23.504 20.213 23.504 13.903C23.504 10.849 22.316 7.979 20.088 4.667Z"/>
                        </svg>
                        <span>Check Availability</span>
                      </div>
                    </div>
                  </div>

                  <div className="food-card-info">
                    <span className="food-card-tag">{item.category}</span>
                    <h3 className="food-card-name">{item.name}</h3>
                    <p className="food-card-desc">{item.subtitle}</p>
                    <button 
                      className="food-card-action-btn"
                      onClick={() => handleFoodWhatsAppEnquiry(item.name, item.category)}
                      aria-label={`Request quote for ${item.name}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382C17.153 14.221 15.561 13.435 15.269 13.332C14.978 13.228 14.766 13.176 14.553 13.489C14.341 13.803 13.731 14.536 13.545 14.745C13.359 14.954 13.174 14.981 12.855 14.823C12.537 14.665 11.493 14.325 10.252 13.211C9.287 12.346 8.639 11.285 8.453 10.971C8.267 10.657 8.434 10.487 8.594 10.329C8.737 10.187 8.913 9.96 9.072 9.776C9.231 9.593 9.285 9.462 9.391 9.253C9.497 9.043 9.444 8.86 9.364 8.703C9.285 8.546 8.647 6.974 8.381 6.347C8.121 5.732 7.857 5.814 7.666 5.805C7.491 5.796 7.278 5.796 7.066 5.796C6.853 5.796 6.508 5.875 6.216 6.188C5.924 6.502 5.099 7.261 5.099 8.805C5.099 10.35 6.242 11.841 6.402 12.051C6.561 12.261 8.618 15.421 11.758 16.779C12.505 17.102 13.086 17.297 13.543 17.441C14.292 17.68 14.975 17.645 15.513 17.567C16.113 17.48 17.365 16.812 17.63 16.079C17.895 15.347 17.895 14.718 17.789 14.588C17.683 14.456 17.472 14.382 17.472 14.382ZM11.996 22H11.992C10.301 22 8.653 21.545 7.211 20.697L6.877 20.499L3.528 21.378L4.425 18.106L4.207 17.76C3.275 16.279 2.784 14.536 2.784 12.753C2.784 7.667 6.921 3.531 12.008 3.531C14.475 3.531 16.786 4.492 18.529 6.236C20.272 7.978 21.233 10.288 21.233 12.758C21.231 17.842 17.094 22 11.996 22ZM20.088 4.667C17.925 2.5 15.056 1.306 12.003 1.306C5.69 1.306 0.551 6.444 0.551 12.756C0.551 14.774 1.077 16.735 2.059 18.455L0 26L7.697 23.982C9.352 24.877 11.187 25.352 12.046 25.352H12.052C18.365 25.352 23.504 20.213 23.504 13.903C23.504 10.849 22.316 7.979 20.088 4.667Z"/>
                      </svg>
                      <span>Request a Quote</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* COMPACT EDITORIAL FAQ AREA */}
          <div className="rentals-faq-section" id="faq">
            <div className="rentals-faq-header">
              <span className="section-label">FAQS</span>
              <h2 className="rentals-faq-title">Frequently Asked Questions</h2>
            </div>

            <div className="rentals-faq-accordion">
              {rentalFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={faq.question} 
                    className={`rentals-faq-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <h3 className="rentals-faq-question-heading">
                      <button
                        type="button"
                        className="rentals-faq-trigger"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        aria-controls={`rentals-faq-answer-${index}`}
                        id={`rentals-faq-question-${index}`}
                      >
                        <span className="rentals-faq-question-text">{faq.question}</span>
                        <span className="rentals-faq-chevron" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`rentals-faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`rentals-faq-question-${index}`}
                      className={`rentals-faq-answer-pane ${isOpen ? 'is-open' : ''}`}
                    >
                      <div className="rentals-faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
