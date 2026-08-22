import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BrandActivations.css';

gsap.registerPlugin(ScrollTrigger);

const canonicalUrl = 'https://perfectpartyeventsae.com/services/brand-activation-agency-abu-dhabi';
const activationImage = '/services/5.png';
const detailImage = '/services/1.png';

const deliverables = [
  {
    title: 'Activation Strategy',
    text: 'Audience, message, location, and engagement planning for brand activation Abu Dhabi campaigns with clear intent.',
  },
  {
    title: 'Pop-Up Design',
    text: 'Temporary retail and experience environments shaped for launch visibility, guest flow, and premium brand presence.',
  },
  {
    title: 'Mall Activations',
    text: 'Shopping destination activations with production planning, installation coordination, staffing, and consumer interaction.',
  },
  {
    title: 'Digital Installations',
    text: 'Interactive screens, motion-led environments, digital touchpoints, and technology layers that support participation.',
  },
  {
    title: 'Product Experience Zones',
    text: 'Hands-on product engagement areas where guests can discover, test, photograph, and understand the brand story.',
  },
  {
    title: 'Consumer Engagement',
    text: 'Guest interaction mechanics, sampling, guided moments, lead capture support, and memorable brand conversations.',
  },
  {
    title: 'Event Staffing',
    text: 'Professional staffing coordination for hosts, promoters, brand ambassadors, technical support, and guest guidance.',
  },
  {
    title: 'Full Production',
    text: 'End-to-end coordination for interactive brand experiences UAE-wide, from first concept through live activation.',
  },
];

const process = ['Brief', 'Concept', 'Design', 'Production', 'Live Activation'];

const reasons = [
  'Creative Storytelling',
  'Premium Design',
  'Audience Engagement',
  'Technical Production',
  'End-to-End Coordination',
];

const faqs = [
  {
    question: 'What does a brand activation agency in Abu Dhabi do?',
    answer:
      'A brand activation agency in Abu Dhabi plans and produces physical brand experiences such as pop-ups, mall activations, product experience zones, digital installations, staffing, guest engagement, and on-site production.',
  },
  {
    question: 'Do you create pop-up experiences and mall activations?',
    answer:
      'Yes. Perfect Party Events creates pop-up experiences, shopping mall activations, product engagement zones, and experiential marketing Abu Dhabi campaigns for premium brands and corporate teams.',
  },
  {
    question: 'Can you manage interactive brand experiences?',
    answer:
      'Yes. We design interactive brand experiences UAE audiences can participate in, including digital installations, product trials, branded environments, photo moments, and consumer engagement events.',
  },
  {
    question: 'Do you provide staffing and full production?',
    answer:
      'Yes. Our brand activation agency UAE service includes staffing coordination, supplier management, fabrication, installation, technical production, guest support, and live event supervision.',
  },
  {
    question: 'Do you support brand activations across the UAE?',
    answer:
      'Yes. We support brand activation Abu Dhabi projects and campaigns across Yas Island, Saadiyat Island, Al Maryah Island, leading shopping destinations, Dubai, and the wider UAE.',
  },
];

const BrandActivations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.act-hero-img',
        { scale: 1.08 },
        {
          scale: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.act-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to('.act-hero-wash', {
        backgroundPosition: '72% 46%',
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from('.act-title-line span', {
        yPercent: 112,
        opacity: 0,
        duration: 1.15,
        stagger: 0.14,
        ease: 'power4.out',
      });

      gsap.from('.act-hero-copy, .act-hero-actions a', {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        delay: 0.35,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.act-reveal').forEach((item) => {
        gsap.from(item, {
          y: 58,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
          },
        });
      });

      gsap.utils.toArray('.act-parallax').forEach((item) => {
        gsap.to(item, {
          yPercent: -9,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Animate the accordion panels coming in
      gsap.from('.act-accordion-panel', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.act-deliver-accordion',
          start: 'top 80%',
        },
      });

      // Staggered vertical timeline line animation
      gsap.to('.act-process-timeline-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.act-process-timeline-container',
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: true,
        },
      });

      // Staggered timeline items animation
      gsap.utils.toArray('.act-process-timeline-item').forEach((item) => {
        const content = item.querySelector('.act-process-timeline-content');
        const dot = item.querySelector('.act-process-timeline-dot');
        
        gsap.from(content, {
          x: item.classList.contains('left-item') ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
        
        gsap.from(dot, {
          scale: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perfectpartyeventsae.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://perfectpartyeventsae.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Corporate Events', item: 'https://perfectpartyeventsae.com/corporate-events/' },
          { '@type': 'ListItem', position: 4, name: 'Brand Activation Agency Abu Dhabi', item: canonicalUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Brand Activation Agency Abu Dhabi',
        serviceType: 'Brand activation and experiential marketing',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Perfect Party Events',
          url: 'https://perfectpartyeventsae.com/',
          image: 'https://perfectpartyeventsae.com/logo.png',
        },
        areaServed: ['Abu Dhabi', 'Dubai', 'United Arab Emirates'],
        url: canonicalUrl,
        description:
          'Premium brand activation services in Abu Dhabi with pop-up experiences, mall activations, digital installations, consumer engagement, and full event production across the UAE.',
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="act-page" ref={containerRef}>
      <Helmet>
        <title>Brand Activation Agency Abu Dhabi | Perfect Party Events</title>
        <meta
          name="description"
          content="Premium brand activation services in Abu Dhabi, including pop-up experiences, mall activations, digital installations, consumer engagement, and full event production across the UAE."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brand Activation Agency Abu Dhabi | Perfect Party Events" />
        <meta
          property="og:description"
          content="Premium brand activation services in Abu Dhabi with pop-ups, mall activations, digital installations, consumer engagement, and full production."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://perfectpartyeventsae.com/services/5.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Activation Agency Abu Dhabi | Perfect Party Events" />
        <meta
          name="twitter:description"
          content="Pop-up experiences, mall activations, interactive brand environments, staffing, and consumer engagement events across Abu Dhabi and the UAE."
        />
        <meta name="twitter:image" content="https://perfectpartyeventsae.com/services/5.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="act-hero" aria-labelledby="activation-title">
        <div className="act-hero-media" aria-hidden="true">
          <img className="act-hero-img" src={activationImage} alt="" decoding="async" fetchpriority="high" />
          <div className="act-hero-wash" />
        </div>
        <div className="act-hero-content">
          <nav className="act-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <Link to="/corporate-events/">Corporate Events</Link>
            <span>/</span>
            <span>Brand Activations</span>
          </nav>
          <p className="act-kicker">Brand Activation Abu Dhabi</p>
          <h1 id="activation-title" className="act-hero-title" aria-label="Experiential Brand Activation Agency in Abu Dhabi">
            <span className="act-title-line"><span>Experiential Brand Activation</span></span>
            <span className="act-title-line"><span>Agency in Abu Dhabi</span></span>
          </h1>
          <p className="act-hero-copy">
            Premium experiential marketing for brands that want pop-ups, mall activations, digital installations, product engagement zones, and interactive consumer moments across the UAE.
          </p>
          <div className="act-hero-actions">
            <Link to="/contact-us" className="act-btn act-btn-primary">Plan Your Activation</Link>
          </div>
        </div>
      </section>

      <section className="act-overview act-section" aria-labelledby="activation-overview">
        <div className="act-overview-copy act-reveal">
          <span className="act-kicker">Service Overview</span>
          <h2 id="activation-overview">Immersive brand environments built for real-world engagement.</h2>
          <p>
            Perfect Party Events creates immersive pop-ups, shopping mall activations, product engagement zones, and interactive brand environments for premium corporate and consumer brands. As a brand activation agency UAE teams can brief for high-touch campaigns, we turn brand positioning into physical experiences guests can enter, explore, and remember.
          </p>
          <p>
            From experiential marketing Abu Dhabi strategy to fabrication, staffing, digital installations, guest flow, and live production, our team coordinates the full journey so every interaction feels intentional.
          </p>
        </div>
        <div className="act-overview-image act-reveal">
          <img
            className="act-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_05_58_39_PM"
            alt="Premium brand activation environment with warm lighting, display zones, and interactive product areas"
            loading="lazy"
          />
        </div>
      </section>

      <section className="act-deliver-accordion-section act-section" aria-labelledby="activation-deliverables">
        <div className="act-deliver-header act-reveal">
          <span className="act-kicker">What We Deliver</span>
          <h2 id="activation-deliverables">Activation elements shaped around attention and interaction.</h2>
        </div>
        
        <div className="act-deliver-accordion">
          {deliverables.map((item, index) => (
            <div className="act-accordion-panel" key={item.title}>
              <div className="act-accordion-num">{String(index + 1).padStart(2, '0')}</div>
              <div className="act-accordion-vertical-title">{item.title}</div>
              <div className="act-accordion-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="act-process-unique act-section" aria-labelledby="activation-process">
        <div className="act-section-heading act-reveal">
          <span className="act-kicker">Our Process</span>
          <h2 id="activation-process">A focused path from campaign brief to live activation.</h2>
        </div>
        
        <div className="act-process-timeline-container">
          <div className="act-process-timeline-line">
            <div className="act-process-timeline-progress"></div>
          </div>
          
          {process.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                className={`act-process-timeline-item ${isLeft ? 'left-item' : 'right-item'}`} 
                key={step}
              >
                <div className="act-process-timeline-dot"></div>
                <div className="act-process-timeline-content">
                  <span className="act-process-num">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="act-why act-section" aria-labelledby="activation-why">
        <div className="act-why-image act-reveal">
          <img
            className="act-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_05_58_46_PM"
            alt="Luxury temporary brand environment with architectural display, lighting, and hospitality zone"
            loading="lazy"
          />
        </div>
        <div className="act-why-copy act-reveal">
          <span className="act-kicker">Why Choose Us</span>
          <h2 id="activation-why">Campaigns that feel designed, produced, and hosted with care.</h2>
          <p>
            We bring creative storytelling, premium design, audience engagement, technical production, and end-to-end coordination into one managed activation workflow. Every space, digital touchpoint, staff role, and visitor moment is designed to strengthen the brand experience.
          </p>
          <div className="act-why-list">
            {reasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </div>
      </section>


      <section className="act-faq act-section" aria-labelledby="activation-faq">
        <div className="act-section-heading act-reveal">
          <span className="act-kicker">FAQ</span>
          <h2 id="activation-faq">Brand activation planning questions.</h2>
        </div>
        <div className="act-faq-list act-reveal">
          {faqs.map((faq) => (
            <details className="act-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>



      <section id="consultation" className="act-final-cta" aria-labelledby="activation-final-title">
        <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_05_58_51_PM" alt="Experiential brand activation agency in Abu Dhabi mall setups and pop-up events" loading="lazy" />
        <div className="act-final-overlay" />
        <div className="act-final-content act-reveal">
          <span className="act-kicker" style={{ color: 'var(--color-warm-white)' }}>Abu Dhabi's Experiential Marketing Leader</span>
          <h2 id="activation-final-title">Ready to Launch Your Next Brand Activation in Abu Dhabi?</h2>
          <p className="act-cta-copy">
            From retail mall pop-ups in Abu Dhabi and Dubai to high-touch experiential campaigns UAE-wide, Perfect Party Events delivers bespoke designs, interactive visitor flows, custom fabrication, and complete guest hospitality management.
          </p>
          <div className="act-cta-features">
            <div className="act-cta-feature">
              <strong>Interactive Mall Pop-Ups</strong>
              <span>Custom display fabrication &amp; mall approvals</span>
            </div>
            <div className="act-cta-feature">
              <strong>Creative Storytelling</strong>
              <span>Digital &amp; physical experiential design</span>
            </div>
            <div className="act-cta-feature">
              <strong>Complete Campaign Support</strong>
              <span>Turnkey hosting, event staff, &amp; logistics</span>
            </div>
          </div>
          <div className="act-cta-actions">
            <Link to="/contact-us" className="act-btn act-btn-primary">Request a Custom Proposal</Link>
            <Link to="/contact-us" className="act-btn act-btn-secondary" style={{ border: '1px solid var(--color-warm-white)', color: 'var(--color-warm-white)', background: 'rgba(255, 255, 255, 0.12)' }}>Speak to an Experiential Producer</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandActivations;


