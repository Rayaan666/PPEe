import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const BlogListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canonicalUrl = 'https://perfectpartyeventsae.com/blog/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${canonicalUrl}#blog`,
        url: canonicalUrl,
        name: 'Perfect Party Events Blog | Event Management & Exhibition Design Insights',
        description: 'Insights, guides, and trends on exhibition stand design, luxury corporate events, and experiential event production in Abu Dhabi and Dubai.',
        publisher: {
          '@id': 'https://perfectpartyeventsae.com/#organization'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://perfectpartyeventsae.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="blog-listing-wrapper">
      <Helmet>
        <title>Blog & Insights | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="Insights, guides, and trends on exhibition stand design, luxury corporate events, and experiential event production in Abu Dhabi and Dubai."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Blog & Insights | Perfect Party Events UAE" />
        <meta property="og:description" content="Insights, guides, and trends on exhibition stand design, luxury corporate events, and experiential event production in Abu Dhabi and Dubai." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="blog-listing-hero">
        <div className="container">
          <div className="blog-listing-hero-inner">
            <span className="section-label">EDITORIAL JOURNAL</span>
            <h1 className="blog-listing-title">Insights &amp; Perspectives</h1>
            <p className="blog-listing-subtitle">
              Expert guides, design thinking, and strategic insights for corporate exhibitions, luxury celebrations, and experiential event production across Dubai, Abu Dhabi, and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID SECTION */}
      <section className="blog-listing-section">
        <div className="container">
          <div className="blog-listing-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card-editorial">
                <Link to={post.path} className="blog-card-media-link" aria-label={`Read article: ${post.title}`}>
                  <div className="blog-card-img-wrap">
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      className="blog-card-img"
                      loading="lazy"
                    />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                </Link>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <time dateTime={post.dateIso}>{post.date}</time>
                    <span className="blog-card-meta-dot">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="blog-card-title">
                    <Link to={post.path}>{post.title}</Link>
                  </h2>

                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <Link to={post.path} className="blog-read-more-link">
                      <span>Read Article</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
