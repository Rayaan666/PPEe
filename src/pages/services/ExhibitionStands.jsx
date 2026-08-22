import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ExhibitionStands.css';

gsap.registerPlugin(ScrollTrigger);

const canonicalUrl = 'https://perfectpartyeventsae.com/services/exhibition-stand-design-abu-dhabi';
const standImage = '/services/1.png';
const detailImage = '/services/3.png';

const solutions = [
  'Custom Exhibition Stand Design',
  'Modular Exhibition Stands',
  'Double-Decker Exhibition Booths',
  'Island Booths',
  'Country Pavilion Design',
  'Product Display Areas',
  'Interactive Brand Zones',
  'Technology Integration',
  'Lighting Design',
  'Digital Displays',
  'Fabric Graphics',
  'Luxury Hospitality Areas',
  'Storage Solutions',
  'Meeting Rooms',
  'VIP Lounge Design',
];

const process = [
  'Discover',
  'Concept',
  '3D Visualization',
  'Engineering',
  'Fabrication',
  'Installation',
  'Event Support',
  'Dismantling',
];



const faqs = [
  {
    question: 'How much does exhibition stand design cost in Abu Dhabi?',
    answer: 'Exhibition stand design cost in Abu Dhabi depends on stand size, construction method, materials, lighting, technology, graphics, and installation complexity. After a consultation, we prepare a scoped proposal so you can compare concept, fabrication, logistics, and on-site support clearly.',
  },
  {
    question: 'Do you build custom exhibition booths?',
    answer: 'Yes. We design and build custom exhibition booths for brands that need a tailored architectural presence, including reception counters, meeting lounges, product displays, storage, custom booth fabrication Abu Dhabi support, and immersive visitor zones.',
  },
  {
    question: 'Can you manage fabrication and installation?',
    answer: 'Yes. Our team coordinates exhibition fabrication UAE requirements, workshop production, graphics, transport, installation, event support, and dismantling for a complete exhibition contractor Abu Dhabi service.',
  },
  {
    question: 'Do you provide modular exhibition stands?',
    answer: 'Yes. We create modular exhibition stand UAE solutions for brands that need reusability, easier transportation, quicker assembly, and adaptable layouts across multiple trade shows.',
  },
  {
    question: 'Can you design stands for ADNEC exhibitions?',
    answer: 'Yes. We regularly plan exhibition stand design Abu Dhabi projects with venue practicalities in mind, including visitor flow, build timing, access, and organizer submission requirements for events at ADNEC Centre Abu Dhabi.',
  },
  {
    question: 'Do you offer exhibition graphics?',
    answer: 'Yes. We provide exhibition graphics UAE support, including fabric graphics, large-format displays, brand walls, wayfinding, product messaging, and visual systems designed to integrate with the architecture of the stand.',
  },
  {
    question: 'Do you support Dubai exhibitions?',
    answer: 'Yes. While this page focuses on Abu Dhabi, we also support exhibition stand build Dubai projects and event exhibition solutions UAE-wide for trade fairs, corporate exhibitions, and international expos.',
  },
  {
    question: 'How early should an exhibition stand be planned?',
    answer: 'For custom exhibition stand Abu Dhabi projects, we recommend beginning 8 to 12 weeks before the show. Larger builds, double-decker stands, complex approvals, and heavy technology integration should begin earlier.',
  },
];



const ExhibitionStands = () => {
  const containerRef = useRef(null);


  useEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.es-hero-img',
        { scale: 1.08 },
        {
          scale: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.es-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to('.es-hero-gradient', {
        backgroundPosition: '70% 45%',
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from('.es-title-line span', {
        yPercent: 115,
        opacity: 0,
        duration: 1.25,
        stagger: 0.16,
        ease: 'power4.out',
      });

      gsap.from('.es-hero-copy, .es-hero-actions a', {
        y: 26,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        delay: 0.45,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.es-reveal').forEach((item) => {
        gsap.from(item, {
          y: 70,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
          },
        });
      });

      gsap.utils.toArray('.es-parallax').forEach((item) => {
        gsap.to(item, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        '.es-blueprint-path',
        { strokeDashoffset: 1800 },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.es-process',
            start: 'top 72%',
            end: 'bottom 35%',
            scrub: true,
          },
        }
      );

      gsap.from('.es-process-step', {
        opacity: 0,
        y: 28,
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.es-process-board',
          start: 'top 68%',
        },
      });



      const hero = document.querySelector('.es-hero');
      const heroInner = document.querySelector('.es-hero-content');
      const onMove = (event) => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(heroInner, { x: x * 18, y: y * 12, duration: 0.7, ease: 'power2.out' });
      };
      hero.addEventListener('mousemove', onMove);

      ScrollTrigger.refresh();

      return () => {
        hero.removeEventListener('mousemove', onMove);
      };
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
          { '@type': 'ListItem', position: 4, name: 'Exhibition Stand Design Abu Dhabi', item: canonicalUrl },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://perfectpartyeventsae.com/#localbusiness',
        name: 'Perfect Party Events',
        url: 'https://perfectpartyeventsae.com/',
        image: 'https://perfectpartyeventsae.com/logo.png',
        areaServed: ['Abu Dhabi', 'Dubai', 'United Arab Emirates'],
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Exhibition Stand Design Abu Dhabi',
        serviceType: 'Exhibition stand design and build',
        provider: { '@id': 'https://perfectpartyeventsae.com/#localbusiness' },
        areaServed: ['Abu Dhabi', 'Dubai', 'United Arab Emirates'],
        url: canonicalUrl,
        description:
          'Premium exhibition stand design, exhibition booth design UAE, fabrication, modular displays, graphics, installation, and event exhibition solutions across Abu Dhabi and the UAE.',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Exhibition Stand Abu Dhabi',
          },
        },
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
    <div className="exhibition-stands-page" ref={containerRef}>
      <Helmet>
        <title>Exhibition Stand Design Abu Dhabi | Custom Exhibition Booth Builder UAE | Perfect Party Events</title>
        <meta
          name="description"
          content="Looking for premium exhibition stand design in Abu Dhabi? Perfect Party Events designs and builds bespoke exhibition stands, trade show booths, modular displays, and immersive brand experiences across the UAE."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Exhibition Stand Design Abu Dhabi | Custom Exhibition Booth Builder UAE | Perfect Party Events" />
        <meta
          property="og:description"
          content="Premium exhibition stand design, bespoke booths, modular displays, fabrication, graphics, and installation across Abu Dhabi and the UAE."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://perfectpartyeventsae.com/services/1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exhibition Stand Design Abu Dhabi | Perfect Party Events" />
        <meta
          name="twitter:description"
          content="Bespoke exhibition stand design and build for premium trade show booths and immersive brand environments in Abu Dhabi and the UAE."
        />
        <meta name="twitter:image" content="https://perfectpartyeventsae.com/services/1.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="es-page-glow" aria-hidden="true" />

      <section className="es-hero" aria-labelledby="exhibition-stand-title">
        <div className="es-hero-media" aria-hidden="true">
          <img
            className="es-hero-img"
            src={standImage}
            alt=""
            decoding="async"
            fetchpriority="high"
          />
          <div className="es-hero-gradient" />
        </div>

        <div className="es-hero-content">
          <nav className="es-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <Link to="/corporate-events/">Corporate Events</Link>
            <span>/</span>
            <span>Exhibition Stands</span>
          </nav>
          <p className="es-eyebrow">Exhibition Stand Design Abu Dhabi</p>
          <h1 id="exhibition-stand-title" className="es-hero-title" aria-label="Luxury Exhibition Stand Design and Build in Abu Dhabi">
            <span className="es-title-line"><span>Luxury Exhibition Stand</span></span>
            <span className="es-title-line"><span>Design &amp; Build</span></span>
          </h1>
          <p className="es-hero-copy">
            Create extraordinary exhibition experiences through bespoke stand design, premium fabrication, immersive visitor engagement, and flawless on-site execution across Abu Dhabi and the UAE.
          </p>
          <div className="es-hero-actions" aria-label="Exhibition stand actions">
            <Link to="/contact-us" className="es-btn es-btn-primary">Request a Consultation</Link>
            <Link to="/gallery" className="es-btn es-btn-secondary">View Our Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="es-why-matter es-section" aria-labelledby="why-stands-matter">
        <div className="es-why-container">
          <div className="es-why-header es-reveal">
            <div className="es-section-kicker">Why Exhibition Stands Matter</div>
            <h2 id="why-stands-matter">Built for attention, shaped for conversation.</h2>
            <p>
              A strong exhibition stand is more than a backdrop. It controls first impressions, frames your brand story, and gives visitors a clear reason to step inside. For companies competing across government exhibitions, technology expos, and luxury product showcases, the right environment turns passing traffic into qualified conversations.
            </p>
          </div>
          
          <div className="es-why-bento">
            <div className="es-bento-item es-bento-large es-reveal">
              <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_11_2026_12_44_10_PM" className="es-bento-bg" alt="Luxury exhibition stand with architectural lighting" loading="lazy" />
              <div className="es-bento-overlay" aria-hidden="true"></div>
              <div className="es-bento-content">
                <h3>Premium Brand Positioning</h3>
                <p>Exhibition display design that gives your team a composed, high-value setting for meetings, demos, hospitality, and memorable brand moments.</p>
              </div>
            </div>

            <div className="es-bento-item es-reveal">
              <div className="es-bento-content">
                <div className="es-bento-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3>Brand Visibility</h3>
                <p>Stand out in crowded trade fairs with striking architecture designed to command attention from across the exhibition hall.</p>
              </div>
            </div>

            <div className="es-bento-item es-reveal">
              <div className="es-bento-content">
                <div className="es-bento-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Visitor Engagement</h3>
                <p>Create interactive zones that draw attendees in and guide them naturally through your brand's narrative.</p>
              </div>
            </div>

            <div className="es-bento-item es-bento-wide es-reveal">
              <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_11_2026_12_44_15_PM" className="es-bento-bg" alt="Detailed view of exhibition stand lead generation area" loading="lazy" />
              <div className="es-bento-overlay" aria-hidden="true"></div>
              <div className="es-bento-content">
                <h3>Lead Generation Engine</h3>
                <p>Turn architectural design into ROI. Our layouts optimize visitor flow and designate clear areas for lead capture, quiet negotiations, and premium networking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="es-process es-section" aria-labelledby="our-process">
        <div className="es-section-heading es-reveal">
          <span>Our Process</span>
          <h2 id="our-process">A blueprint-led build journey.</h2>
          <p>
            We move from strategy to handover through a controlled production workflow, balancing creative concept, engineering, exhibition fabrication UAE coordination, and site execution.
          </p>
        </div>
        <div className="es-process-board es-reveal">
          <svg className="es-blueprint" viewBox="0 0 1200 460" role="img" aria-label="Blueprint animation showing exhibition stand design stages">
            <path className="es-blueprint-path" d="M72 235 H208 C250 235 250 110 292 110 H430 C472 110 472 235 514 235 H650 C692 235 692 350 734 350 H894 C936 350 936 235 978 235 H1128" />
            <path className="es-blueprint-detail" d="M120 70 H410 V190 M524 92 h230 v150 h-230 z M820 88 h220 M820 130 h160 M170 318 h280 M170 360 h210 M748 160 v120 M790 160 v120 M832 160 v120 M874 160 v120" />
          </svg>
          <div className="es-process-steps">
            {process.map((stage, index) => (
              <article className="es-process-step" key={stage}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{stage}</h3>
                {index < process.length - 1 && <small aria-hidden="true">-&gt;</small>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="es-difference es-section" aria-labelledby="stands-different">
        <div className="es-difference-media es-reveal">
          <img
            className="es-parallax"
            src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_17_2026_09_28_35_AM"
            alt="Premium exhibition stand build with rose gold lighting, meeting lounge, and luxury finishes"
            loading="lazy"
          />
          {['Premium Materials', 'Lighting Experience', 'Visitor Flow Planning', 'Luxury Finishes'].map((label) => (
            <span className="es-floating-label" key={label}>{label}</span>
          ))}
        </div>
        <div className="es-difference-copy es-reveal">
          <span className="es-section-kicker">What Makes Our Stands Different</span>
          <h2 id="stands-different">Designed as brand architecture, not temporary decoration.</h2>
          <p>
            As an exhibition stand builder Abu Dhabi clients can involve from the first concept stage, we consider structure, storytelling, lighting, and operations together. The result is a stand that feels precise on opening morning and practical throughout the show.
          </p>
          <div className="es-difference-list">
            {['Creative Architecture', 'Brand Storytelling', 'Technology Integration', 'Reusability', 'Easy Transportation', 'Quick Assembly'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>




      <section className="es-faq es-section" aria-labelledby="exhibition-faqs">
        <div className="es-section-heading es-reveal">
          <span>Frequently Asked Questions</span>
          <h2 id="exhibition-faqs">Planning clarity before the build begins.</h2>
        </div>
        <div className="es-faq-list es-reveal">
          {faqs.map((faq) => (
            <details className="es-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>



      <section className="es-final-cta" id="consultation" aria-labelledby="final-cta-title">
        <img src="https://res.cloudinary.com/iiddvwaz/image/upload/v1/ChatGPT_Image_Aug_11_2026_01_12_43_PM" alt="Luxury exhibition environment with warm lighting and elegant architectural stand design" loading="lazy" />
        <div className="es-final-overlay" />
        <div className="es-final-content es-reveal">
          <h2 id="final-cta-title">Let's Build Your Next Exhibition Stand</h2>
          <p>
            Whether you are exhibiting at a major trade show, government expo, technology exhibition, or international business summit, our team creates bespoke exhibition environments that elevate your brand and maximize visitor engagement.
          </p>
          <div className="es-hero-actions">
            <Link to="/contact-us" className="es-btn es-btn-primary">Request Consultation</Link>
            <Link to="/contact-us" className="es-btn es-btn-secondary">Speak With Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionStands;


