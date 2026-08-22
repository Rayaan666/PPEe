import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '12rem 2rem 8rem', textAlign: 'center', minHeight: '80vh', backgroundColor: 'var(--color-very-light-peach)' }}>
      <Helmet>
        <title>Page Not Found | Perfect Party Events</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(4rem, 8vw, 8rem)', color: 'var(--color-rose-gold)', marginBottom: '1rem', lineHeight: '1' }}>404</h1>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(47, 47, 47, 0.75)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-editorial">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;


