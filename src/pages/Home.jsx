import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://perfectpartyeventsae.com/#organization',
      name: 'Perfect Party Events',
      url: 'https://perfectpartyeventsae.com/',
      logo: 'https://perfectpartyeventsae.com/logo.png',
      email: 'info@perfectpartyeventsae.com',
      description: 'Luxury event management, private event planning, event styling, and corporate event production across Abu Dhabi and Dubai, UAE.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 3, ME 40, Musaffah',
        addressLocality: 'Abu Dhabi',
        addressCountry: 'AE',
      },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://perfectpartyeventsae.com/#event-services',
      name: 'Luxury Event Management Services in the UAE',
      numberOfItems: 5,
      itemListElement: [
        ['Luxury Private Event Planning & Design', 'Bespoke private celebrations, themed experiences, venue selection, floral styling, and full-scale event production in Abu Dhabi and Dubai.', '/home/1.png'],
        ['Corporate Galas & Awards Production', 'Corporate gala, awards ceremony, stage design, audio-visual production, and VIP hospitality services across the UAE.', '/home/2.png'],
        ['Bespoke Product Launch Events', 'Experiential product launches, media styling, technical staging, and branded event environments in the UAE.', '/home/3.png'],
        ['Corporate Conferences & Summits', 'End-to-end conference and summit management, AV logistics, live streaming, interpretation, and registration in Dubai and Abu Dhabi.', '/home/4.png'],
        ['Experiential Brand Activations', 'Interactive brand activations, luxury pop-ups, retail installations, and consumer experiences across the Emirates.', '/home/5.png'],
      ].map(([name, description, image], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name,
          description,
          image: `https://perfectpartyeventsae.com${image}`,
          url: 'https://perfectpartyeventsae.com/services',
          provider: { '@id': 'https://perfectpartyeventsae.com/#organization' },
          areaServed: ['Dubai', 'Abu Dhabi', 'United Arab Emirates'],
        },
      })),
    },
  ],
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Image Parallax & Scale
      gsap.fromTo('.hero-img-inner', 
        { scale: 1.2 }, 
        { 
          scale: 1, 
          ease: 'power3.out', 
          duration: 2 
        }
      );
      
      gsap.to('.hero-img-inner', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-editorial',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text Reveal
      gsap.fromTo('.reveal-inner', 
        { y: '110%' }, 
        { 
          y: '0%', 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power4.out',
          delay: 0.5 
        }
      );

      // Section Fade Ups
      const fadeUpElements = gsap.utils.toArray('.fade-up');
      fadeUpElements.forEach(el => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });

      // Horizontal Parallax for Services Images
      const serviceImages = gsap.utils.toArray('.service-img img');
      serviceImages.forEach(img => {
        gsap.fromTo(img, 
          { scale: 1.2, transformOrigin: 'center center' },
          {
            scale: 1,
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-editorial" ref={containerRef}>
      <Helmet>
        <title>Perfect Party Events | Luxury Event Management Abu Dhabi & Dubai</title>
        <meta
          name="description"
          content="Premium event management company in Abu Dhabi & Dubai. Specializing in luxury private events, corporate galas, bespoke product launches, and brand activations across the UAE."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/" />
        <script type="application/ld+json">{JSON.stringify(homeStructuredData)}</script>
      </Helmet>
      
      {/* Editorial Hero */}
      <section className="hero-editorial">
        <div className="container hero-grid">
          <div className="hero-text-content">
            <h1 className="hero-heading">
              <span className="reveal-text"><span className="reveal-inner">Luxury Event</span></span><br/>
              <span className="reveal-text"><span className="reveal-inner">Management</span></span><br/>
              <span className="reveal-text"><span className="reveal-inner accent-dusty">&amp; Event Stylist.</span></span>
            </h1>
            <div className="hero-meta fade-up" style={{ animationDelay: '1.5s' }}>
              <p>We plan, style, and coordinate premier corporate events, luxury private celebrations, theme decorations, and brand activations across Abu Dhabi &amp; Dubai, UAE.</p>
              <Link to="/services" className="btn-editorial">Explore Services</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-mask">
              <img 
                src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_17_2026_04_03_31_PM"
                alt="Luxury Abu Dhabi event reception styled by Perfect Party Events"
                className="hero-img-inner"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats — Editorial Redesign */}
      <section className="stats-editorial">
        <div className="stats-ticker">
          {[...Array(2)].map((_, idx) => (
            <div className="ticker-track" key={idx}>
              <span>Luxury Private Events</span>
              <span className="ticker-divider">✦</span>
              <span>Corporate Events</span>
              <span className="ticker-divider">✦</span>
              <span>Private Celebrations</span>
              <span className="ticker-divider">✦</span>
              <span>Event Styling & Design</span>
              <span className="ticker-divider">✦</span>
              <span>Stage Productions</span>
              <span className="ticker-divider">✦</span>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">10<em>+</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Years of <br/> Bespoke Craft</p>
                <span className="stat-index">01</span>
              </div>
            </div>

            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">500<em>+</em></span>
              </div>
              <div className="stat-bottom">
                 <p className="stat-label">Curated Private <br/> Celebrations</p>
                <span className="stat-index">02</span>
              </div>
            </div>

            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">10k<em>+</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Guests Wowed <br/> Across UAE</p>
                <span className="stat-index">03</span>
              </div>
            </div>

            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">100<em>%</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Client <br/> Satisfaction</p>
                <span className="stat-index">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Services Preview — Highly SEO Structured Schema Markup */}
      <section className="services-editorial services-editorial-tight" id="event-management-services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-title-wrap fade-up">
            <span className="section-kicker">Our Expertise</span>
            <h2 id="services-title">Bespoke Event Styling &amp; <span className="accent-dusty">Management Services</span></h2>
          </div>

          <div className="service-list">

            {/* Service 1 — Exhibition Stands */}
            <article className="service-row fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Exhibition Stand Design & Build" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-info">
                <h3 itemProp="name">Exhibition Stand Design &amp; Build</h3>
                <p itemProp="description">Designing and fabricating bespoke exhibition stands and interactive booths in Abu Dhabi and Dubai. We manage everything from custom design and council approvals to workshop fabrication and complete AV/lighting integration.</p>
                <Link to="/services/exhibition-stand-design-abu-dhabi" className="btn-editorial" aria-label="Learn more about Exhibition Stand Design and Build in Dubai and Abu Dhabi">Learn More</Link>
              </div>
              <div className="service-visual">
                <div className="service-img">
                  <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_17_2026_09_28_35_AM" itemProp="image" alt="Bespoke exhibition stand design and build in Dubai, UAE" loading="lazy" />
                </div>
              </div>
            </article>

            {/* Service 2 — Corporate Galas */}
            <article className="service-row reverse fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Corporate gala and awards ceremony production" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-visual">
                <div className="service-img square">
                  <img src="/home/2.png" itemProp="image" alt="Corporate gala dinner and awards ceremony production in Dubai" loading="lazy" />
                </div>
              </div>
              <div className="service-info">
                <h3 itemProp="name">Corporate Galas &amp; Awards Production</h3>
                <p itemProp="description">Elevating high-end corporate retreats, annual galas, and prestigious award ceremonies across the UAE. We deliver complete audio-visual setup, stage design, VIP guest hospitality, and premium coordination.</p>
                <Link to="/services/corporate-gala-events-abu-dhabi" className="btn-editorial" aria-label="Learn more about corporate gala and awards production in the UAE">Learn More</Link>
              </div>
            </article>

            {/* Service 3 — Product Launches */}
            <article className="service-row fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Experiential product launch event production" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-info">
                <h3 itemProp="name">Bespoke Product Launch Events</h3>
                <p itemProp="description">Unveil your brand to the UAE market with precision. We specialize in experiential product launches, premium media styling, high-end technical staging, and interactive custom brand environments.</p>
                <Link to="/services/product-launch-events-abu-dhabi" className="btn-editorial" aria-label="Learn more about bespoke product launch events in the UAE">Learn More</Link>
              </div>
              <div className="service-visual">
                <div className="service-img">
                  <img src="/home/3.png" itemProp="image" alt="Bespoke product launch stage and experiential production in the UAE" loading="lazy" />
                </div>
              </div>
            </article>

            {/* Service 4 — Conferences & Summits */}
            <article className="service-row reverse fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Corporate conference and summit management" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-visual">
                <div className="service-img square">
                  <img src="/home/4.png" itemProp="image" alt="Corporate conference and summit management in Abu Dhabi, UAE" loading="lazy" />
                </div>
              </div>
              <div className="service-info">
                <h3 itemProp="name">Corporate Conferences &amp; Summits</h3>
                <p itemProp="description">End-to-end congress and summit coordination in Dubai for global enterprises. Managing AV logistics, live broadcast streaming, interpreter setups, and premium registration portals.</p>
                <Link to="/services/corporate-conference-organizer-abu-dhabi" className="btn-editorial" aria-label="Learn more about corporate conference and summit management in the UAE">Learn More</Link>
              </div>
            </article>

            {/* Service 5 — Brand Activations */}
            <article className="service-row fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Experiential brand activation and luxury pop-up production" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-info">
                <h3 itemProp="name">Experiential Brand Activations</h3>
                <p itemProp="description">Forging powerful, emotional connections between consumers and your product. Interactive pop-up shops, luxury shopping mall setups, and creative digital installations across the Emirates.</p>
                <Link to="/services/brand-activation-agency-abu-dhabi" className="btn-editorial" aria-label="Learn more about experiential brand activations in Dubai and Abu Dhabi">Learn More</Link>
              </div>
              <div className="service-visual">
                <div className="service-img">
                  <img src="/home/5.png" itemProp="image" alt="Experiential brand activation and luxury pop-up event in Dubai" loading="lazy" />
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section" id="client-stories" aria-labelledby="client-stories-title">

        <div className="container">
          <div className="testi-header fade-up">
            <span className="section-kicker">Client Stories</span>
            <h2 id="client-stories-title">Voices of <span className="accent-rose">unforgettable moments.</span></h2>
            <p className="testi-subtext">From themed private events to beautiful celebrations — see what our clients say about their experience with us on Google.</p>
            <a 
              href="https://www.google.com/search?q=perfect+party+events+reviews&oq=perfect+party+events+&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCggAEEUYFhgeGDsyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMgYIBhBFGD0yBggHEEUYPdIBCDQ0MjZqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3e5e41e768b8401b:0xf3878b573c42b0dd,3,,,," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-google-reviews"
            >
              <span>View Google Reviews</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M21.35 11.1H12v3.8h5.38c-.23 1.28-.96 2.37-2.04 3.1v2.57h3.3c1.93-1.78 3.04-4.4 3.04-7.47 0-.68-.06-1.34-.17-2.0z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.3-2.57c-.92.61-2.1.98-3.98.98-3.07 0-5.67-2.08-6.6-4.88H2.03v2.66C3.85 20.16 7.63 23 12 23z" fill="#34A853"/>
                <path d="M5.4 13.87c-.24-.72-.38-1.5-.38-2.3s.14-1.58.38-2.3V6.6H2.03C1.22 8.22.75 10.05.75 12s.47 3.78 1.28 5.4l3.37-2.53z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.63 1 3.85 3.84 2.03 7.43l3.37 2.53c.93-2.8 3.53-4.88 6.6-4.88z" fill="#EA4335"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="testi-track-wrap">
          <div className="testi-track testi-track-left">
            {[
              { name: 'avni', event: 'Google Review', text: 'the decorations were absolutely beautiful and far better than we could have imagined. Fahreha was extremely kind and helpful throughout the whole process!! We hosted for around 190 people and everybody took many pictures at the photo booth, entrance including red carpet and at the stage. we loved everything and would for sure recommend!', avatar: 'linear-gradient(135deg,#E8B4B8,#C9888D)' },
              { name: 'Romy Ezquerro', event: 'Google Review', text: 'This team completely exceeded my expectations on my Baby Shower! The decoration was absolutely stunning, the floral arrangements were breathtaking, and every single detail was perfectly executed. The kids\' games, the desserts, the service — everything was flawless. What really stood out was their punctuality and professionalism from start to finish. They turned my baby shower into a truly magical memory. Highly recommend! 🌸', avatar: 'linear-gradient(135deg,#F7D5C7,#D98E95)' },
              { name: 'Hayley Ammori', event: 'Google Review', text: 'We had the most amazing experience with this party planning team everything was absolutely perfect from start to finish. The organisation, setup and flow of the party made it completely stress-free for us and so much fun for the children. A huge special mention to Rose, who was truly fantastic. She had all the children completely engaged from the moment she arrived laughing, dancing and joining in with every activity. Her energy and warmth made the party so special. Thank you 💕', avatar: 'linear-gradient(135deg,#FCE7DF,#C9888D)' },
              { name: 'Harshvardhan Ojha', event: 'Google Review', text: 'We organized a birthday party with 20 kids and 50 adults and we are beyond delighted to have them as our event managers. They reached before time, organized and decorated our stage, gave suggestions to improve the aesthetics. Most important of all, they kept all the KIDS and parents engaged with multiple games and everyone just kept praising. I would highly recommend their service to anyone planning their event. Thank you for making our day memorable.', avatar: 'linear-gradient(135deg,#E8B4B8,#D98E95)' },
              { name: 'Nargis Khalid', event: 'Google Review', text: 'Hello, I would like to thank you and your team for the lovely service.. the positive energy and amazing vibe. Everyone enjoyed it and have graet time. The popcorn was amazing, the ice cream was delicious and cotton candy was nice. The staff were very nice and cooperative. Thank you for creating lovely atmosphere ❤️', avatar: 'linear-gradient(135deg,#C9888D,#E8B4B8)' },
              { name: 'avni', event: 'Google Review', text: 'the decorations were absolutely beautiful and far better than we could have imagined. Fahreha was extremely kind and helpful throughout the whole process!! We hosted for around 190 people and everybody took many pictures at the photo booth, entrance including red carpet and at the stage. we loved everything and would for sure recommend!', avatar: 'linear-gradient(135deg,#E8B4B8,#C9888D)' },
              { name: 'Romy Ezquerro', event: 'Google Review', text: 'This team completely exceeded my expectations on my Baby Shower! The decoration was absolutely stunning, the floral arrangements were breathtaking, and every single detail was perfectly executed. The kids\' games, the desserts, the service — everything was flawless. What really stood out was their punctuality and professionalism from start to finish. They turned my baby shower into a truly magical memory. Highly recommend! 🌸', avatar: 'linear-gradient(135deg,#F7D5C7,#D98E95)' },
              { name: 'Hayley Ammori', event: 'Google Review', text: 'We had the most amazing experience with this party planning team everything was absolutely perfect from start to finish. The organisation, setup and flow of the party made it completely stress-free for us and so much fun for the children. A huge special mention to Rose, who was truly fantastic. She had all the children completely engaged from the moment she arrived laughing, dancing and joining in with every activity. Her energy and warmth made the party so special. Thank you 💕', avatar: 'linear-gradient(135deg,#FCE7DF,#C9888D)' },
              { name: 'Harshvardhan Ojha', event: 'Google Review', text: 'We organized a birthday party with 20 kids and 50 adults and we are beyond delighted to have them as our event managers. They reached before time, organized and decorated our stage, gave suggestions to improve the aesthetics. Most important of all, they kept all the KIDS and parents engaged with multiple games and everyone just kept praising. I would highly recommend their service to anyone planning their event. Thank you for making our day memorable.', avatar: 'linear-gradient(135deg,#E8B4B8,#D98E95)' },
              { name: 'Nargis Khalid', event: 'Google Review', text: 'Hello, I would like to thank you and your team for the lovely service.. the positive energy and amazing vibe. Everyone enjoyed it and have graet time. The popcorn was amazing, the ice cream was delicious and cotton candy was nice. The staff were very nice and cooperative. Thank you for creating lovely atmosphere ❤️', avatar: 'linear-gradient(135deg,#C9888D,#E8B4B8)' }
            ].map((r, i) => (
              <article className="rcard" key={i} aria-label={`${r.event} client story from ${r.name}`}>
                <div className="rcard-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="rcard-text">&ldquo;{r.text}&rdquo;</blockquote>
                <footer className="rcard-footer">
                  <div className="rcard-avatar" style={{background: r.avatar}} aria-hidden="true"></div>
                  <div>
                    <cite className="rcard-name">{r.name}</cite>
                    <span className="rcard-event">{r.event}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="testi-track-wrap">
          <div className="testi-track testi-track-right">
            {[
              { name: 'JPH', event: 'Google Review', text: 'Fareeha is an exceptional event planner with an amazing team. From parties to conferences, I would highly recommend her services.', avatar: 'linear-gradient(135deg,#D98E95,#FCE7DF)' },
              { name: 'Layan Turjman', event: 'Google Review', text: 'Absolutely wonderful experience with perfect party events they took care of our prom party and made it perfect , the decoration set up and the photobooth was wonderful very neat and perfect work And big thank you to Ms. Fareeha she is a very kind women and the party was perfect all thanks to her work and beautiful ideas', avatar: 'linear-gradient(135deg,#C9888D,#F7D5C7)' },
              { name: 'Sara Almarzooqi', event: 'Google Review', text: 'Everything was perfect , loved the small details and kids had such a great time .. one of the best event planner', avatar: 'linear-gradient(135deg,#E8B4B8,#FCE7DF)' },
              { name: 'Sarah Badri', event: 'Google Review', text: 'Always delivers a beautiful event, with great attention to detail. Highly recommend', avatar: 'linear-gradient(135deg,#F7D5C7,#C9888D)' },
              { name: 'JPH', event: 'Google Review', text: 'Fareeha is an exceptional event planner with an amazing team. From parties to conferences, I would highly recommend her services.', avatar: 'linear-gradient(135deg,#D98E95,#FCE7DF)' },
              { name: 'Layan Turjman', event: 'Google Review', text: 'Absolutely wonderful experience with perfect party events they took care of our prom party and made it perfect , the decoration set up and the photobooth was wonderful very neat and perfect work And big thank you to Ms. Fareeha she is a very kind women and the party was perfect all thanks to her work and beautiful ideas', avatar: 'linear-gradient(135deg,#C9888D,#F7D5C7)' },
              { name: 'Sara Almarzooqi', event: 'Google Review', text: 'Everything was perfect , loved the small details and kids had such a great time .. one of the best event planner', avatar: 'linear-gradient(135deg,#E8B4B8,#FCE7DF)' },
              { name: 'Sarah Badri', event: 'Google Review', text: 'Always delivers a beautiful event, with great attention to detail. Highly recommend', avatar: 'linear-gradient(135deg,#F7D5C7,#C9888D)' }
            ].map((r, i) => (
              <article className="rcard" key={i} aria-label={`${r.event} client story from ${r.name}`}>
                <div className="rcard-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="rcard-text">&ldquo;{r.text}&rdquo;</blockquote>
                <footer className="rcard-footer">
                  <div className="rcard-avatar" style={{background: r.avatar}} aria-hidden="true"></div>
                  <div>
                    <cite className="rcard-name">{r.name}</cite>
                    <span className="rcard-event">{r.event}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

      </section>

      {/* ── TRUSTED BY ── */}
      <section className="trustedby-section" aria-labelledby="partnerships-title">
        <div className="partnerships-watermark" aria-hidden="true">PARTNERS</div>
        <div className="container">
          <div className="trustedby-grid-layout">
            <div className="trustedby-info fade-up">
              <span className="section-kicker">Distinguished Partnerships</span>
              <h2 id="partnerships-title">In exceptional <br /> <em>company.</em></h2>
              <p className="trustedby-sub">We are proud to have orchestrated bespoke experiences and premium activations for the UAE's most prestigious luxury brands, hotels, and institutions.</p>
              <div className="partnership-note">
                <span className="partnership-note-line"></span>
                <span>Relationships built through remarkable experiences</span>
              </div>
            </div>

            <div className="partner-stage fade-up" aria-label="Selected distinguished partners">
              <span className="partner-stage-label">Selected collaborations</span>
              <div className="partner-flow">
                {Array.from({ length: 23 }, (_, i) => 62 + i).map((num) => (
                  <img 
                    src={`/brands/Untitled design (${num}).png`} 
                    alt={`Partner Brand ${num}`} 
                    className="partner-logo" 
                    key={num} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="cta-section">
        <div className="cta-bg-wrap">
          <img
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_17_2026_05_23_12_PM"
            alt="Luxury event setting by Perfect Party Events"
            className="cta-bg-img"
          />
          <div className="cta-bg-overlay"></div>
        </div>

        <div className="container cta-inner">
          <div className="cta-orb"></div>

          <div className="cta-content fade-up">
            <span className="cta-kicker">Begin Your Story</span>
            <h2 className="cta-heading">
              Your most extraordinary <br/>
              <em>moment awaits.</em>
            </h2>
            <p className="cta-subtext">
              From intimate private affairs to grand-scale corporate galas across Dubai & Abu Dhabi — we engineer unforgettable events for clients who demand only the finest.
            </p>
            <div className="cta-actions">
              <Link to="/contact-us" className="cta-btn-primary">
                <span>Book a Private Consultation</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/gallery" className="cta-btn-primary">
                <span>View Our Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>

          <div className="cta-divider fade-up">
            <div className="cta-stat-inline">
              <span className="cta-stat-num">500<em>+</em></span>
              <span className="cta-stat-label">Events Executed</span>
            </div>
            <div className="cta-vline"></div>
            <div className="cta-stat-inline">
              <span className="cta-stat-num">10<em>+</em></span>
              <span className="cta-stat-label">Years of Excellence</span>
            </div>
            <div className="cta-vline"></div>
            <div className="cta-stat-inline">
              <span className="cta-stat-num">100<em>%</em></span>
              <span className="cta-stat-label">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;


