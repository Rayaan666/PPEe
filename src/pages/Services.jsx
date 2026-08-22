import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Section Refs
  const heroRef = useRef(null);
  const selectorRef = useRef(null);
  
  const [activeService, setActiveService] = useState(0);

  const servicesData = [
    { 
      title: "Exhibition Stands", 
      desc: "Bespoke exhibition stand design and build solutions that elevate brand visibility at trade shows and summits.", 
      image: "/services/1.png",
      link: "/services/exhibition-stand-design-abu-dhabi"
    },
    { 
      title: "Corporate Galas", 
      desc: "Prestigious corporate events that reinforce brand stature and celebrate milestones.", 
      image: "/services/2.png",
      link: "/services/corporate-gala-events-abu-dhabi"
    },
    { 
      title: "Product Launches", 
      desc: "Immersive reveals designed to captivate audiences and maximize market impact.", 
      image: "/services/3.png",
      link: "/services/product-launch-events-abu-dhabi"
    },
    { 
      title: "Corporate Conferences", 
      desc: "Professional summit management with meticulous planning and logistical precision.", 
      image: "/services/4.png",
      link: "/services/corporate-conference-organizer-abu-dhabi"
    },
    { 
      title: "Brand Activations", 
      desc: "Engaging pop-up experiences that forge deep emotional connections with consumers.", 
      image: "/services/5.png",
      link: "/services/brand-activation-agency-abu-dhabi"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo('.services-hero-img', 
        { scale: 1.2 }, 
        { scale: 1, duration: 2, ease: 'power3.out' }
      );
      
      gsap.fromTo('.reveal-inner', 
        { y: '110%' }, 
        { y: '0%', duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
      );

      // 2. Orb Animations
      gsap.to('.orb-1', { y: 100, x: 50, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.orb-2', { y: -100, x: -50, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="services-page-container" ref={containerRef}>
      <Helmet>
        <title>Luxury Event Services | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="Explore our bespoke event services in Abu Dhabi and Dubai, including exhibition stands, corporate galas, product launches, brand activations, and conferences."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/services" />
      </Helmet>
      
      {/* Background Ambience */}
      <div className="bg-ambient">
        <div className="bg-ambient-orb orb-1"></div>
        <div className="bg-ambient-orb orb-2"></div>
        <div className="bg-ambient-orb orb-3"></div>
      </div>

      {/* 1. EDITORIAL HERO */}
      <section className="services-hero section-relative" ref={heroRef}>
        <div className="container services-hero-grid">
          <div className="services-hero-content">
            <div className="services-hero-title-wrap">
              <div className="services-hero-title-line"></div>
              <h1>
                <span className="reveal-text"><span className="reveal-inner">Crafting</span></span><br/>
                <span className="reveal-text"><span className="reveal-inner">Extraordinary</span></span><br/>
                <span className="reveal-text"><span className="reveal-inner"><em>Experiences.</em></span></span>
              </h1>
            </div>
            <p className="services-hero-text reveal-text">
              <span className="reveal-inner">
                From intimate private celebrations to monumental corporate galas, we design and produce events that transcend the ordinary. Our services across Abu Dhabi, Dubai, and the wider UAE are rooted in a strict ethos of luxury, styling, and precision.
              </span>
            </p>
          </div>
          <div className="services-hero-visual">
            <div className="services-hero-img-mask">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600" 
                alt="Luxury event styling and management in Abu Dhabi UAE" 
                className="services-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Service Selector */}
      <section id="selector" className="service-selector" ref={selectorRef}>
        <div className="selector-left">
          <ul className="selector-list">
            {servicesData.map((service, index) => (
              <li 
                key={index} 
                className={`selector-item ${activeService === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div onClick={() => navigate(service.link)} style={{cursor: 'pointer'}}>
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-title-text">{service.title}</span>
                </div>
                <div className="service-details">
                  <p>{service.desc}</p>
                  <Link to={service.link} className="view-more-link">
                    View More
                    <ArrowRight className="view-more-icon" size={16} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="selector-right">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`visual-stage ${activeService === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Services;


