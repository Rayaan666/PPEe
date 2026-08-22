import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CorporateConferences.css';

gsap.registerPlugin(ScrollTrigger);

const canonicalUrl = 'https://perfectpartyeventsae.com/services/corporate-conference-organizer-abu-dhabi';
const conferenceImage = '/services/4.png';
const detailImage = '/services/3.png';

const managedItems = [
  {
    title: 'Venue Coordination',
    text: 'Venue planning, room layouts, load-in schedules, supplier access, and production communication for polished business events.',
  },
  {
    title: 'AV and Stage Production',
    text: 'Stage design, lighting, audio, LED screens, show flow, and corporate event production UAE teams can trust.',
  },
  {
    title: 'Live Streaming',
    text: 'Hybrid event planning, camera coordination, streaming checks, and technical support for remote audiences.',
  },
  {
    title: 'Speaker Management',
    text: 'Speaker schedules, rehearsal timing, presentation handling, green room planning, and on-site coordination.',
  },
  {
    title: 'Registration Systems',
    text: 'Delegate registration, badge planning, arrival flow, check-in support, and attendee data coordination.',
  },
  {
    title: 'Interpretation Setup',
    text: 'Interpretation booth coordination, language planning, receiver distribution, and technical testing.',
  },
  {
    title: 'Delegate Experience',
    text: 'Guest journey design, hospitality flow, directional planning, networking areas, and VIP attention.',
  },
  {
    title: 'On-Site Logistics',
    text: 'Live event management, supplier supervision, stage cues, timing control, and issue resolution during delivery.',
  },
];

const conferenceProcessSteps = [
  {
    step: '01',
    title: 'Consultation',
    subtitle: 'Strategic Briefing',
    text: 'Defining agenda scope, speaker requirements, delegate targets, and venue parameters.',
    highlights: ['Briefing & Alignment', 'Budget Allocation', 'Venue Shortlisting'],
  },
  {
    step: '02',
    title: 'Planning',
    subtitle: 'Spatial & Schedule Design',
    text: 'Mapping session timings, hall layouts, VIP reception flows, and catering timelines.',
    highlights: ['Agenda Structuring', 'Floorplan Layouts', 'Vendor Procurement'],
  },
  {
    step: '03',
    title: 'Technical Production',
    subtitle: 'AV & Stage Engineering',
    text: 'Building stage environments, LED displays, sound systems, and streaming channels.',
    highlights: ['Stage & LED Design', 'Audio & Sound Checks', 'Live Streaming Setup'],
  },
  {
    step: '04',
    title: 'Registration',
    subtitle: 'Delegate & VIP Systems',
    text: 'Deploying badge printing, check-in portals, VIP welcome protocols, and desk logistics.',
    highlights: ['Attendee Check-In', 'Badge Printing', 'VIP Protocol'],
  },
  {
    step: '05',
    title: 'Event Delivery',
    subtitle: 'On-Site Execution',
    text: 'Flawless show calling, speaker management, live troubleshooting, and post-event debrief.',
    highlights: ['On-Site Show Direction', 'Speaker Coordination', 'Teardown Logistics'],
  },
];

const reasons = [
  'Precise Logistics',
  'Premium Production',
  'Reliable Coordination',
  'Professional Guest Management',
  'End-to-End Execution',
];

const faqs = [
  {
    question: 'How early should a corporate conference in Abu Dhabi be planned?',
    answer:
      'A corporate conference in Abu Dhabi should usually be planned 8 to 16 weeks in advance, depending on venue availability, delegate count, AV production, speaker requirements, registration systems, and live streaming needs.',
  },
  {
    question: 'Do you provide conference AV and live streaming in Abu Dhabi?',
    answer:
      'Yes. Perfect Party Events coordinates conference AV and live streaming Abu Dhabi requirements, including stage production, audio, lighting, LED screens, cameras, hybrid streaming, rehearsals, and technical support.',
  },
  {
    question: 'Can you manage speaker coordination and panel discussions?',
    answer:
      'Yes. We manage speaker schedules, presentation logistics, panel flow, rehearsals, green room requirements, timing, and stage cues for executive conferences, congresses, summits, and panel discussions.',
  },
  {
    question: 'Do you handle registration and delegate experience?',
    answer:
      'Yes. Our conference organizer Abu Dhabi service includes registration planning, badge distribution, check-in flow, guest guidance, VIP handling, hospitality planning, and on-site delegate support.',
  },
  {
    question: 'Do you organize conferences across the UAE?',
    answer:
      'Yes. We support summit management UAE projects across Abu Dhabi, Dubai, Yas Island, Saadiyat Island, Al Maryah Island, ADNEC-area events, and the wider UAE.',
  },
];

const CorporateConferences = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.conf-hero-img',
        { scale: 1.08 },
        {
          scale: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.conf-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to('.conf-hero-wash', {
        backgroundPosition: '72% 46%',
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from('.conf-title-line span', {
        yPercent: 112,
        opacity: 0,
        duration: 1.15,
        stagger: 0.14,
        ease: 'power4.out',
      });

      gsap.from('.conf-hero-copy, .conf-hero-actions a', {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        delay: 0.35,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.conf-reveal').forEach((item) => {
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

      gsap.utils.toArray('.conf-parallax').forEach((item) => {
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
          { '@type': 'ListItem', position: 4, name: 'Corporate Conference Organizer Abu Dhabi', item: canonicalUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Corporate Conference Organizer Abu Dhabi',
        serviceType: 'Corporate conference and summit management',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Perfect Party Events',
          url: 'https://perfectpartyeventsae.com/',
          image: 'https://perfectpartyeventsae.com/logo.png',
        },
        areaServed: ['Abu Dhabi', 'Dubai', 'United Arab Emirates'],
        url: canonicalUrl,
        description:
          'Professional conference and summit management in Abu Dhabi with AV production, live streaming, registration, speaker coordination, and event logistics across the UAE.',
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
    <div className="conf-page" ref={containerRef}>
      <Helmet>
        <title>Corporate Conference Organizer Abu Dhabi | Perfect Party Events</title>
        <meta
          name="description"
          content="Professional conference and summit management in Abu Dhabi, including AV production, live streaming, registration, speaker coordination, and event logistics across the UAE."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Corporate Conference Organizer Abu Dhabi | Perfect Party Events" />
        <meta
          property="og:description"
          content="Professional conference and summit management in Abu Dhabi with AV production, live streaming, registration, speaker coordination, and logistics."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://perfectpartyeventsae.com/services/4.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate Conference Organizer Abu Dhabi | Perfect Party Events" />
        <meta
          name="twitter:description"
          content="Conference AV, live streaming, registration, speaker coordination, summit planning, and event logistics across Abu Dhabi and the UAE."
        />
        <meta name="twitter:image" content="https://perfectpartyeventsae.com/services/4.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="conf-hero" aria-labelledby="conference-title">
        <div className="conf-hero-media" aria-hidden="true">
          <img className="conf-hero-img" src={conferenceImage} alt="" decoding="async" fetchpriority="high" />
          <div className="conf-hero-wash" />
        </div>
        <div className="conf-hero-content">
          <nav className="conf-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <Link to="/corporate-events/">Corporate Events</Link>
            <span>/</span>
            <span>Corporate Conferences</span>
          </nav>
          <p className="conf-kicker">Conference Organizer Abu Dhabi</p>
          <h1 id="conference-title" className="conf-hero-title" aria-label="Corporate Conference Organizer in Abu Dhabi">
            <span className="conf-title-line"><span>Corporate Conference</span></span>
            <span className="conf-title-line"><span>Organizer in Abu Dhabi</span></span>
          </h1>
          <p className="conf-hero-copy">
            Professional conference and summit management for executive meetings, business forums, congresses, panel discussions, live streaming, registration, and precise event logistics across the UAE.
          </p>
          <div className="conf-hero-actions">
            <Link to="/contact-us" className="conf-btn conf-btn-primary">Plan Your Conference</Link>
          </div>
        </div>
      </section>

      <section className="conf-overview conf-section" aria-labelledby="conference-overview">
        <div className="conf-overview-copy conf-reveal">
          <span className="conf-kicker">Service Overview</span>
          <h2 id="conference-overview">Executive conferences produced with clarity, timing, and control.</h2>
          <p>
            Perfect Party Events manages executive conferences, industry summits, congresses, panel discussions, and corporate meetings across Abu Dhabi. As a business conference planner Abu Dhabi organizations can trust with high-visibility programs, we coordinate the details that shape a smooth delegate experience.
          </p>
          <p>
            From agenda flow and speaker coordination to conference AV and live streaming Abu Dhabi production, our team aligns logistics, technical systems, registration, and on-site delivery so the event feels professional from the first arrival to the final session.
          </p>
        </div>
        <div className="conf-overview-image conf-reveal">
          <img
            className="conf-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_05_42_54_PM"
            alt="Premium corporate conference room with stage, blue LED screen, and theatre-style seating"
            loading="lazy"
          />
        </div>
      </section>

      <section className="conf-manage-section conf-section" aria-labelledby="conference-manage">
        <div className="conf-section-heading conf-reveal">
          <span className="conf-kicker">What We Manage</span>
          <h2 id="conference-manage">The operational details behind a composed conference.</h2>
        </div>

        <div className="conf-manage-grid conf-reveal">
          {managedItems.map((item, index) => (
            <article className="conf-manage-card" key={item.title}>
              <span className="conf-card-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="conf-process conf-section" aria-labelledby="conference-process">
        <div className="conf-section-heading conf-reveal">
          <span className="conf-kicker">Our Process</span>
          <h2 id="conference-process">A structured route to confident event delivery.</h2>
          <p className="conf-process-intro">
            From strategic briefing to show calling, our conference masterplan ensures zero friction between speakers, technical teams, venue staff, and delegates.
          </p>
        </div>

        <div className="conf-process-dashboard conf-reveal">
          <div className="conf-process-nav" role="tablist" aria-label="Conference process phases">
            {conferenceProcessSteps.map((item, index) => (
              <button
                type="button"
                key={item.step}
                role="tab"
                aria-selected={activeProcessStep === index}
                className={`conf-process-tab ${activeProcessStep === index ? 'active' : ''}`}
                onClick={() => setActiveProcessStep(index)}
              >
                <span className="conf-tab-step">{item.step}</span>
                <span className="conf-tab-label">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="conf-process-card">
            <div className="conf-card-header">
              <div className="conf-card-badge">
                <span>Phase {conferenceProcessSteps[activeProcessStep].step} of 05</span>
              </div>
              <div className="conf-card-counter">
                <span>{String(activeProcessStep + 1).padStart(2, '0')} / 05</span>
              </div>
            </div>

            <div className="conf-card-body">
              <div className="conf-card-main">
                <span className="conf-card-subtitle">{conferenceProcessSteps[activeProcessStep].subtitle}</span>
                <h3 className="conf-card-title">{conferenceProcessSteps[activeProcessStep].title}</h3>
                <p className="conf-card-desc">{conferenceProcessSteps[activeProcessStep].text}</p>
              </div>

              <div className="conf-card-highlights">
                <span className="conf-highlights-title">Key Milestones &amp; Deliverables</span>
                <ul className="conf-highlights-list">
                  {conferenceProcessSteps[activeProcessStep].highlights.map((point) => (
                    <li key={point}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="conf-card-controls">
              <button
                type="button"
                className="conf-ctrl-btn"
                onClick={() => setActiveProcessStep((prev) => (prev > 0 ? prev - 1 : conferenceProcessSteps.length - 1))}
                aria-label="Previous process step"
              >
                &#8592; Previous Phase
              </button>
              <div className="conf-progress-dots">
                {conferenceProcessSteps.map((s, idx) => (
                  <span
                    key={s.step}
                    className={`conf-dot ${activeProcessStep === idx ? 'active' : ''}`}
                    onClick={() => setActiveProcessStep(idx)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="conf-ctrl-btn"
                onClick={() => setActiveProcessStep((prev) => (prev < conferenceProcessSteps.length - 1 ? prev + 1 : 0))}
                aria-label="Next process step"
              >
                Next Phase &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="conf-why conf-section" aria-labelledby="conference-why">
        <div className="conf-why-image conf-reveal">
          <img
            className="conf-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_05_42_57_PM"
            alt="Premium event production setup with dramatic lighting and digital presentation screen"
            loading="lazy"
          />
        </div>
        <div className="conf-why-copy conf-reveal">
          <span className="conf-kicker">Why Choose Us</span>
          <h2 id="conference-why">The calm behind complex conference production.</h2>
          <p>
            We combine precise logistics, premium production, reliable coordination, professional guest management, and end-to-end execution. Every supplier, cue, speaker, registration point, and guest movement is planned to support the business purpose of your conference.
          </p>
          <div className="conf-why-list">
            {reasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="conf-faq conf-section" aria-labelledby="conference-faq">
        <div className="conf-section-heading conf-reveal">
          <span className="conf-kicker">FAQ</span>
          <h2 id="conference-faq">Conference planning questions.</h2>
        </div>
        <div className="conf-faq-list conf-reveal">
          {faqs.map((faq) => (
            <details className="conf-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>



      <section id="consultation" className="conf-final-cta" aria-labelledby="conference-final-title">
        <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_12_2026_05_43_00_PM" alt="Premium corporate conference stage and seating with blue digital display" loading="lazy" />
        <div className="conf-final-overlay" />
        <div className="conf-final-content conf-reveal">
          <span className="conf-kicker" style={{ color: 'var(--color-warm-white)' }}>Abu Dhabi's Premier Conference Planner</span>
          <h2 id="conference-final-title">Ready to Host a Flawless Corporate Conference in Abu Dhabi?</h2>
          <p className="conf-cta-copy">
            From large-scale summits at ADNEC to executive board meetings on Al Maryah Island, Perfect Party Events provides turnkey conference logistics, advanced AV staging, hybrid streaming systems, and delegate registration services.
          </p>
          <div className="conf-cta-features">
            <div className="conf-cta-feature">
              <strong>Advanced AV &amp; Staging</strong>
              <span>State-of-the-art sound, lighting &amp; LED systems</span>
            </div>
            <div className="conf-cta-feature">
              <strong>Hybrid Event Streaming</strong>
              <span>Seamless remote broadcast &amp; global reach</span>
            </div>
            <div className="conf-cta-feature">
              <strong>End-to-End Logistics</strong>
              <span>Turnkey registration, speakers, &amp; venue control</span>
            </div>
          </div>
          <div className="conf-cta-actions">
            <Link to="/contact-us" className="conf-btn conf-btn-primary">Request a Free Proposal</Link>
            <Link to="/contact-us" className="conf-btn conf-btn-secondary" style={{ border: '1px solid var(--color-warm-white)', color: 'var(--color-warm-white)', background: 'rgba(255, 255, 255, 0.12)' }}>Speak to a Conference Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateConferences;


