import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CorporateGalas.css';

gsap.registerPlugin(ScrollTrigger);

const canonicalUrl = 'https://perfectpartyeventsae.com/services/corporate-gala-events-abu-dhabi';
const galaImage = '/services/2.png';

const deliverables = [
  'Awards Ceremonies',
  'Gala Dinners',
  'Executive Events',
  'Stage Production',
  'AV & Lighting',
  'Entertainment',
  'VIP Hospitality',
  'Event Branding',
];

const process = ['Consultation', 'Concept', 'Planning', 'Event Production', 'Flawless Execution'];

const reasons = [
  'Bespoke Event Design',
  'Premium Production',
  'Experienced Coordination',
  'Luxury Guest Experience',
  'End-to-End Management',
];

const faqs = [
  {
    question: 'How much does a corporate gala cost in Abu Dhabi?',
    answer:
      'The cost of a corporate gala in Abu Dhabi depends on guest count, venue, stage design, AV, entertainment, branding, menu requirements, and VIP hospitality. After a consultation, Perfect Party Events prepares a tailored proposal with clear production and planning scope.',
  },
  {
    question: 'Do you manage awards ceremonies?',
    answer:
      'Yes. We plan and produce awards night UAE experiences, including stage flow, winner presentations, trophy moments, lighting cues, entertainment, event branding, and guest hospitality.',
  },
  {
    question: 'Can you provide AV and stage production?',
    answer:
      'Yes. Our corporate event management Abu Dhabi service includes stage production, audiovisual planning, lighting design, show calling, scenic elements, and technical coordination for polished gala dinners and executive events.',
  },
  {
    question: 'Do you organize executive dinners?',
    answer:
      'Yes. We design executive events UAE clients can use for leadership dinners, VIP receptions, board celebrations, annual corporate events, and private stakeholder gatherings.',
  },
  {
    question: 'Do you work across the UAE?',
    answer:
      'Yes. We support corporate gala Abu Dhabi projects and work across the UAE, including Dubai, for companies seeking a gala event planner Dubai & Abu Dhabi teams can rely on for consistent planning and production quality.',
  },
];

const CorporateGalas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gala-hero-img',
        { scale: 1.08 },
        {
          scale: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.gala-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to('.gala-hero-wash', {
        backgroundPosition: '70% 40%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from('.gala-title-line span', {
        yPercent: 110,
        opacity: 0,
        duration: 1.15,
        stagger: 0.14,
        ease: 'power4.out',
      });

      gsap.from('.gala-hero-text, .gala-hero-actions a', {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        delay: 0.35,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.gala-reveal').forEach((item) => {
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

      gsap.utils.toArray('.gala-parallax').forEach((item) => {
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

      gsap.from('.gala-deliver-band', {
        y: 42,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gala-deliver-bands',
          start: 'top 78%',
        },
      });

      gsap.from('.gala-timeline-item', {
        opacity: 0,
        y: 34,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gala-timeline',
          start: 'top 78%',
        },
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
          { '@type': 'ListItem', position: 4, name: 'Corporate Gala Event Management Abu Dhabi', item: canonicalUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Corporate Gala Event Management Abu Dhabi',
        serviceType: 'Corporate gala event management',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Perfect Party Events',
          url: 'https://perfectpartyeventsae.com/',
          image: 'https://perfectpartyeventsae.com/logo.png',
        },
        areaServed: ['Abu Dhabi', 'Dubai', 'United Arab Emirates'],
        url: canonicalUrl,
        description:
          'Luxury corporate gala event management in Abu Dhabi for gala dinners, awards nights, executive events, annual corporate events, AV, stage production, branding, and VIP hospitality.',
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
    <div className="gala-page" ref={containerRef}>
      <Helmet>
        <title>Corporate Gala Event Management Abu Dhabi | Perfect Party Events</title>
        <meta
          name="description"
          content="Luxury corporate gala event management in Abu Dhabi. Premium awards nights, annual dinners, executive galas, stage production, AV, and VIP event planning across the UAE."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Corporate Gala Event Management Abu Dhabi | Perfect Party Events" />
        <meta
          property="og:description"
          content="Premium corporate gala planning for awards nights, annual dinners, executive events, stage production, AV, and VIP hospitality across the UAE."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://perfectpartyeventsae.com/services/2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate Gala Event Management Abu Dhabi | Perfect Party Events" />
        <meta
          name="twitter:description"
          content="Luxury corporate gala event management in Abu Dhabi for gala dinners, awards ceremonies, executive dinners, stage production, and VIP experiences."
        />
        <meta name="twitter:image" content="https://perfectpartyeventsae.com/services/2.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="gala-hero" aria-labelledby="corporate-gala-title">
        <div className="gala-hero-media" aria-hidden="true">
          <img className="gala-hero-img" src={galaImage} alt="" decoding="async" fetchpriority="high" />
          <div className="gala-hero-wash" />
        </div>
        <div className="gala-hero-content">
          <nav className="gala-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <Link to="/corporate-events/">Corporate Events</Link>
            <span>/</span>
            <span>Corporate Galas</span>
          </nav>
          <p className="gala-kicker">Corporate Gala Abu Dhabi</p>
          <h1 id="corporate-gala-title" className="gala-hero-title" aria-label="Corporate Gala Event Management in Abu Dhabi">
            <span className="gala-title-line"><span>Corporate Gala Event</span></span>
            <span className="gala-title-line"><span>Management in Abu Dhabi</span></span>
          </h1>
          <p className="gala-hero-text">
            Premium gala dinner Abu Dhabi planning for awards nights, executive celebrations, annual corporate events, stage production, AV, and refined VIP hospitality across the UAE.
          </p>
          <div className="gala-hero-actions">
            <Link to="/contact-us" className="gala-btn gala-btn-primary">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="gala-about gala-section" aria-labelledby="gala-about-title">
        <div className="gala-about-image gala-reveal">
          <img
            className="gala-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_03_26_15_PM"
            alt="Luxury corporate gala ballroom with warm lighting, stage production, and elegant dinner tables"
            loading="lazy"
          />
        </div>
        <div className="gala-about-copy gala-reveal">
          <span className="gala-kicker">About the Service</span>
          <h2 id="gala-about-title">Executive evenings with the poise of a private production.</h2>
          <p>
            Perfect Party Events delivers premium corporate gala event management in Abu Dhabi for executive dinners, annual celebrations, awards ceremonies, and VIP hospitality programs. We shape the evening around your audience, your brand standards, and the moments that need to feel effortless on stage and around the room.
          </p>
          <p>
            From venue planning and gala styling to entertainment, show flow, event branding, lighting, and guest experience, our team manages the details that make a corporate event feel composed, luxurious, and memorable.
          </p>
        </div>
      </section>

      <section className="gala-deliver gala-section" aria-labelledby="gala-deliver-title">
        <div className="gala-section-heading gala-reveal">
          <span className="gala-kicker">What We Deliver</span>
          <h2 id="gala-deliver-title">Everything your gala needs, beautifully coordinated.</h2>
        </div>
        <div className="gala-deliver-bands">
          {deliverables.map((item, index) => (
            <div className="gala-deliver-band" key={item}>
              <span className="gala-band-num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="gala-band-title">{item}</h3>
              <p className="gala-band-desc">
                Tailored planning and production for polished corporate event management Abu Dhabi teams can trust for high-visibility occasions.
              </p>
              <div className="gala-band-arrow" aria-hidden="true">&#8594;</div>
            </div>
          ))}
        </div>
      </section>

      <section className="gala-process gala-section" aria-labelledby="gala-process-title">
        <div className="gala-section-heading gala-reveal">
          <span className="gala-kicker">Our Process</span>
          <h2 id="gala-process-title">A clear path from first brief to final applause.</h2>
        </div>
        <div className="gala-timeline">
          {process.map((step, index) => (
            <article className="gala-timeline-item" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
              {index < process.length - 1 && <small aria-hidden="true">-&gt;</small>}
            </article>
          ))}
        </div>
      </section>

      <section className="gala-why gala-section" aria-labelledby="gala-why-title">
        <div className="gala-why-copy gala-reveal">
          <span className="gala-kicker">Why Choose Us</span>
          <h2 id="gala-why-title">Designed for senior audiences and meaningful brand moments.</h2>
          <p>
            As a gala event planner Dubai & Abu Dhabi companies can brief for high-stakes evenings, we bring together design sensitivity, production discipline, and attentive guest coordination.
          </p>
        </div>
        <div className="gala-why-list gala-reveal">
          {reasons.map((reason) => (
            <article key={reason}>
              <h3>{reason}</h3>
              <p>Measured, elegant execution that supports the tone, timing, and guest expectations of executive events UAE-wide.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gala-faq gala-section" aria-labelledby="gala-faq-title">
        <div className="gala-section-heading gala-reveal">
          <span className="gala-kicker">FAQ</span>
          <h2 id="gala-faq-title">Corporate gala planning questions.</h2>
        </div>
        <div className="gala-faq-list gala-reveal">
          {faqs.map((faq) => (
            <details className="gala-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>



      <section id="consultation" className="gala-final-cta" aria-labelledby="gala-final-title">
        <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_03_25_54_PM" alt="Award-winning luxury corporate gala event production in Abu Dhabi" loading="lazy" />
        <div className="gala-final-overlay" />
        <div className="gala-final-content gala-reveal">
          <span className="gala-kicker" style={{ color: 'var(--color-warm-white)' }}>Abu Dhabi's Premier Gala Planner</span>
          <h2 id="gala-final-title">Ready to Design a High-Impact Corporate Gala in Abu Dhabi?</h2>
          <p className="gala-cta-intro">
            From annual corporate dinners on Yas Island to prestigious awards nights UAE-wide, Perfect Party Events delivers end-to-end event management, luxury stage production, bespoke scenic design, and flawless execution for high-profile stakeholders.
          </p>
          <div className="gala-cta-features">
            <div className="gala-cta-feature">
              <strong>Premium AV &amp; Lighting</strong>
              <span>Broadcast-grade event production</span>
            </div>
            <div className="gala-cta-feature">
              <strong>VIP Hospitality</strong>
              <span>Attentive guest &amp; stakeholder care</span>
            </div>
            <div className="gala-cta-feature">
              <strong>Bespoke Styling</strong>
              <span>Custom stage &amp; ballroom decoration</span>
            </div>
          </div>
          <div className="gala-cta-actions">
            <Link to="/contact-us" className="gala-btn gala-btn-primary">Request a Free Proposal</Link>
            <Link to="/contact-us" className="gala-btn gala-btn-secondary" style={{ border: '1px solid var(--color-warm-white)', color: 'var(--color-warm-white)', background: 'rgba(255, 255, 255, 0.12)' }}>Speak to an Event Director</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateGalas;


