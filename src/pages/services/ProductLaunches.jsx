import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductLaunches.css';

gsap.registerPlugin(ScrollTrigger);

const canonicalUrl = 'https://perfectpartyeventsae.com/services/product-launch-events-abu-dhabi';
const launchImage = '/services/3.png';
const detailImage = '/services/5.png';

const deliverables = [
  {
    title: 'Creative Launch Concepts',
    text: 'Launch narratives that translate positioning, audience intent, and product value into a memorable physical experience.',
  },
  {
    title: 'Product Reveal Staging',
    text: 'Precision reveals with scenic architecture, lighting cues, unveil moments, and stage direction for high-impact attention.',
  },
  {
    title: 'AV and Lighting',
    text: 'Technical staging, LED environments, sound, and lighting design shaped around the drama of the product moment.',
  },
  {
    title: 'Media and Press Styling',
    text: 'Press-ready arrival moments, photo compositions, presentation zones, and environments that support polished coverage.',
  },
  {
    title: 'Interactive Brand Environments',
    text: 'Immersive touchpoints, product trials, digital displays, and experiential launch events UAE audiences can explore.',
  },
  {
    title: 'Guest Journey Planning',
    text: 'A considered flow from arrival to reveal, hospitality, product engagement, networking, and departure.',
  },
  {
    title: 'Venue Coordination',
    text: 'Location planning, production access, technical checks, supplier coordination, and venue communication.',
  },
  {
    title: 'Full Event Production',
    text: 'End-to-end coordination for brand launch event Abu Dhabi projects, from first concept through live execution.',
  },
];

const processSteps = [
  {
    phase: '01',
    title: 'Consultation & Alignment',
    subtitle: 'Defining Vision & Key Objectives',
    desc: 'Deep-dive session into product specs, brand positioning, target audience profile, venue requirements, and core launch goals.',
    tag: 'Phase 01',
  },
  {
    phase: '02',
    title: 'Concept & Narrative',
    subtitle: 'The Story & Visual Direction',
    desc: 'Drafting the master creative concept, spatial layout, reveal mechanics, lighting moodboards, and guest journey arc.',
    tag: 'Phase 02',
  },
  {
    phase: '03',
    title: 'Technical Staging & AV',
    subtitle: 'Engineering the Reveal Moment',
    desc: '3D scenic renderings, LED screen programming, sound engineering, show calling cues, and lighting design rehearsals.',
    tag: 'Phase 03',
  },
  {
    phase: '04',
    title: 'Production & Styling',
    subtitle: 'Bespoke Fabrication & Media Setup',
    desc: 'Custom booth and stage fabrication, media wall styling, VIP lounge prep, and venue technical load-in coordination.',
    tag: 'Phase 04',
  },
  {
    phase: '05',
    title: 'Launch Execution & Live Show',
    subtitle: 'Flawless Live Reveal Moment',
    desc: 'On-site show direction, stage management, live streaming support, media management, and seamless teardown.',
    tag: 'Phase 05',
  },
];

const reasons = [
  'Bespoke Design',
  'Brand Storytelling',
  'Technical Precision',
  'Premium Guest Experience',
  'End-to-End Coordination',
];

const faqs = [
  {
    question: 'How early should a product launch be planned?',
    answer:
      'A product launch event in Abu Dhabi should ideally be planned 8 to 12 weeks in advance. Complex reveals, technical staging, media moments, custom fabrication, and venue approvals may require a longer lead time.',
  },
  {
    question: 'Do you provide AV and staging?',
    answer:
      'Yes. Perfect Party Events provides AV, lighting, stage production, LED environments, reveal staging, sound, and technical coordination for product launch events Abu Dhabi and across the UAE.',
  },
  {
    question: 'Can you manage media and press events?',
    answer:
      'Yes. We create press-ready launch environments with media styling, presentation flow, branded photo moments, guest arrival planning, and coordination for product reveals and corporate announcements.',
  },
  {
    question: 'Do you create interactive launch experiences?',
    answer:
      'Yes. We design interactive brand environments, product trial areas, digital displays, guest engagement moments, and experiential launch events UAE audiences can actively explore.',
  },
  {
    question: 'Do you support product launches across the UAE?',
    answer:
      'Yes. Our team supports product launches across Abu Dhabi, Dubai, Yas Island, Saadiyat Island, Al Maryah Island, and the wider UAE for luxury, automotive, technology, real estate, beauty, and corporate brands.',
  },
];

const ProductLaunches = () => {
  const containerRef = useRef(null);
  const [activeDeliverable, setActiveDeliverable] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pl-hero-img',
        { scale: 1.08 },
        {
          scale: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.pl-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to('.pl-hero-wash', {
        backgroundPosition: '72% 46%',
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from('.pl-title-line span', {
        yPercent: 112,
        opacity: 0,
        duration: 1.15,
        stagger: 0.14,
        ease: 'power4.out',
      });

      gsap.from('.pl-hero-copy, .pl-hero-actions a', {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        delay: 0.35,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.pl-reveal').forEach((item) => {
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

      gsap.utils.toArray('.pl-parallax').forEach((item) => {
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

      gsap.from('.pl-console-tab', {
        y: 28,
        opacity: 0,
        stagger: 0.06,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pl-console-wrapper',
          start: 'top 78%',
        },
      });

      gsap.from('.pl-pathway-step', {
        opacity: 0,
        y: 45,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pl-pathway-container',
          start: 'top 75%',
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
          { '@type': 'ListItem', position: 4, name: 'Product Launch Event Management Abu Dhabi', item: canonicalUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Product Launch Event Management Abu Dhabi',
        serviceType: 'Product launch event management',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Perfect Party Events',
          url: 'https://perfectpartyeventsae.com/',
          image: 'https://perfectpartyeventsae.com/logo.png',
        },
        areaServed: ['Abu Dhabi', 'Dubai', 'United Arab Emirates'],
        url: canonicalUrl,
        description:
          'Premium product launch event management in Abu Dhabi with creative concepts, technical staging, media styling, guest engagement, and complete production across the UAE.',
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
    <div className="launch-page pl-page" ref={containerRef}>
      <Helmet>
        <title>Product Launch Event Management Abu Dhabi | Perfect Party Events</title>
        <meta
          name="description"
          content="Premium product launch event management in Abu Dhabi, including creative concepts, technical staging, media styling, guest engagement, and complete production across the UAE."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Product Launch Event Management Abu Dhabi | Perfect Party Events" />
        <meta
          property="og:description"
          content="Premium product launch event management in Abu Dhabi with creative concepts, technical staging, media styling, guest engagement, and complete production."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://perfectpartyeventsae.com/services/3.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Launch Event Management Abu Dhabi | Perfect Party Events" />
        <meta
          name="twitter:description"
          content="Creative product reveal events, technical staging, media styling, guest engagement, and full event production across Abu Dhabi and the UAE."
        />
        <meta name="twitter:image" content="https://perfectpartyeventsae.com/services/3.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="pl-hero" aria-labelledby="product-launch-title">
        <div className="pl-hero-media" aria-hidden="true">
          <img className="pl-hero-img" src={launchImage} alt="" decoding="async" fetchpriority="high" />
          <div className="pl-hero-wash" />
        </div>
        <div className="pl-hero-content">
          <nav className="pl-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <Link to="/corporate-events/">Corporate Events</Link>
            <span>/</span>
            <span>Product Launches</span>
          </nav>
          <p className="pl-kicker">Product Launch Events Abu Dhabi</p>
          <h1 id="product-launch-title" className="pl-hero-title" aria-label="Product Launch Event Management in Abu Dhabi">
            <span className="pl-title-line"><span>Product Launch Event</span></span>
            <span className="pl-title-line"><span>Management in Abu Dhabi</span></span>
          </h1>
          <p className="pl-hero-copy">
            Premium launch planning for brands that need a reveal moment with cinematic staging, technical precision, press-ready styling, and guest engagement across Abu Dhabi and the UAE.
          </p>
          <div className="pl-hero-actions">
            <Link to="/contact-us" className="pl-btn pl-btn-primary">Plan Your Launch</Link>
          </div>
        </div>
      </section>

      <section className="pl-intro pl-section" aria-labelledby="launch-introduction">
        <div className="pl-intro-copy pl-reveal">
          <span className="pl-kicker">Service Introduction</span>
          <h2 id="launch-introduction">Launches shaped around anticipation, reveal, and brand memory.</h2>
          <p>
            Perfect Party Events manages immersive launches for luxury, automotive, technology, real estate, beauty, and corporate brands. As a product launch company UAE clients can involve from early concept development, we design the full environment around the product story, the audience journey, and the precise moment of reveal.
          </p>
          <p>
            Whether you are planning a brand launch event Abu Dhabi, an executive product presentation, or a product reveal event Dubai audiences will remember, our team brings together creative direction, technical staging, media styling, hospitality, and complete production.
          </p>
        </div>
        <div className="pl-intro-image pl-reveal">
          <img
            className="pl-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_04_20_45_PM"
            alt="Cinematic product reveal staging with premium lighting and LED wall"
            loading="lazy"
          />
        </div>
      </section>

      <section className="pl-process pl-section" aria-labelledby="launch-process">
        <div className="pl-section-heading pl-reveal">
          <span className="pl-kicker">Our Process</span>
          <h2 id="launch-process">A calm production path to a high-impact reveal.</h2>
        </div>

        <div className="pl-pathway-container">
          <div className="pl-pathway-line" aria-hidden="true"></div>

          {processSteps.map((step, index) => (
            <div
              className={`pl-pathway-step ${index % 2 === 0 ? 'left' : 'right'}`}
              key={step.phase}
            >
              <div className="pl-pathway-node" aria-hidden="true">
                <span>{step.phase}</span>
              </div>
              <div className="pl-pathway-content">
                <span className="pl-pathway-tag">{step.tag}</span>
                <h3 className="pl-pathway-title">{step.title}</h3>
                <span className="pl-pathway-subtitle">{step.subtitle}</span>
                <p className="pl-pathway-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pl-why pl-section" aria-labelledby="launch-why">
        <div className="pl-why-image pl-reveal">
          <img
            className="pl-parallax"
            src={detailImage}
            alt="Premium event environment with warm lighting and interactive brand experience design"
            loading="lazy"
          />
        </div>
        <div className="pl-why-copy pl-reveal">
          <span className="pl-kicker">Why Choose Us</span>
          <h2 id="launch-why">A launch should feel designed from the first invitation to the final conversation.</h2>
          <p>
            As a corporate product launch planner, we focus on bespoke design, brand storytelling, technical precision, premium guest experience, and end-to-end coordination. Every decision, from the reveal angle to the guest pathway, supports the commercial and emotional purpose of the launch.
          </p>
          <div className="pl-why-list">
            {reasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-faq pl-section" aria-labelledby="launch-faq">
        <div className="pl-section-heading pl-reveal">
          <span className="pl-kicker">FAQ</span>
          <h2 id="launch-faq">Product launch planning questions.</h2>
        </div>
        <div className="pl-faq-list pl-reveal">
          {faqs.map((faq) => (
            <details className="pl-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>



      <section id="consultation" className="pl-final-cta" aria-labelledby="launch-final-title">
        <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_04_20_48_PM" alt="Dramatic product launch reveal event management in Abu Dhabi" loading="lazy" />
        <div className="pl-final-overlay" />
        <div className="pl-final-content pl-reveal">
          <span className="pl-kicker" style={{ color: 'var(--color-warm-white)' }}>Abu Dhabi's Premium Launch Company</span>
          <h2 id="launch-final-title">Ready to Launch Your Product in Abu Dhabi?</h2>
          <p className="pl-cta-copy">
            From cinematic vehicle launches to immersive luxury product reveals UAE-wide, Perfect Party Events delivers strategic creative concepts, high-impact staging, bespoke LED scenery, and complete media-ready production.
          </p>
          <div className="pl-cta-features">
            <div className="pl-cta-feature">
              <strong>Cinematic Reveal Staging</strong>
              <span>Dramatic stage effects &amp; projection</span>
            </div>
            <div className="pl-cta-feature">
              <strong>Media &amp; Press Styling</strong>
              <span>Instagrammable and press-ready setups</span>
            </div>
            <div className="pl-cta-feature">
              <strong>Full-Service Staging</strong>
              <span>Turnkey technical event execution</span>
            </div>
          </div>
          <div className="pl-cta-actions">
            <Link to="/contact-us" className="pl-btn pl-btn-primary">Request a Launch Proposal</Link>
            <Link to="/contact-us" className="pl-btn pl-btn-secondary" style={{ border: '1px solid var(--color-warm-white)', color: 'var(--color-warm-white)', background: 'rgba(255, 255, 255, 0.12)' }}>Speak to a Launch Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunches;


