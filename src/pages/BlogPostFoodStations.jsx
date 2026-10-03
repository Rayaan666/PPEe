import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Blog.css';

const BlogPostFoodStations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canonicalUrl = 'https://perfectpartyeventsae.com/blog/corporate-event-food-station-packages/';
  const featuredImageUrl = 'https://perfectpartyeventsae.com/blog/corporate-event-food-stations.jpg';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        isPartOf: {
          '@type': 'Blog',
          '@id': 'https://perfectpartyeventsae.com/blog/#blog',
          name: 'Perfect Party Events Blog',
          publisher: {
            '@id': 'https://perfectpartyeventsae.com/#organization'
          }
        },
        headline: 'Corporate Event Food Station Packages',
        description: 'Premium catering and live food stations for exhibitions, galas, product launches, and conferences across Abu Dhabi and the UAE.',
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        datePublished: '2026-10-03T00:00:00+04:00',
        dateModified: '2026-10-03T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Business'
        },
        editor: {
          '@type': 'Person',
          name: 'Fareeha'
        },
        publisher: {
          '@id': 'https://perfectpartyeventsae.com/#organization'
        },
        image: {
          '@type': 'ImageObject',
          url: featuredImageUrl,
          caption: 'Corporate Event Food Station Packages in Abu Dhabi'
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
            item: 'https://perfectpartyeventsae.com/blog/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Corporate Event Food Station Packages',
            item: canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="blog-article-wrapper">
      <Helmet>
        <title>Corporate Event Food Station Packages | Perfect Party Events</title>
        <meta
          name="description"
          content="Premium catering and live food stations for exhibitions, galas, product launches, and conferences across Abu Dhabi and the UAE."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Corporate Event Food Station Packages | Perfect Party Events" />
        <meta property="og:description" content="Premium catering and live food stations for exhibitions, galas, product launches, and conferences across Abu Dhabi and the UAE." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={featuredImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate Event Food Station Packages | Perfect Party Events" />
        <meta name="twitter:description" content="Premium catering and live food stations for exhibitions, galas, product launches, and conferences across Abu Dhabi and the UAE." />
        <meta name="twitter:image" content={featuredImageUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ARTICLE HEADER */}
      <header className="blog-article-header">
        <div className="blog-container">
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/blog/">Blog</Link>
            <span className="sep">/</span>
            <span className="current">Corporate Event Food Station Packages</span>
          </nav>

          <span className="blog-category-tag">Corporate Catering</span>

          <h1 className="blog-article-title">
            Corporate Event Food Station Packages
          </h1>

          <div className="blog-article-meta">
            <div className="blog-meta-item">
              <span className="meta-label">Date:</span>
              <span className="meta-value">3rd October 2026</span>
            </div>
            <div className="blog-meta-divider" aria-hidden="true">•</div>
            <div className="blog-meta-item">
              <span className="meta-label">Author:</span>
              <span className="meta-value">Business</span>
            </div>
            <div className="blog-meta-divider" aria-hidden="true">•</div>
            <div className="blog-meta-item">
              <span className="meta-label">Edited by:</span>
              <span className="meta-value">Fareeha</span>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div className="blog-featured-media-wrap">
        <div className="blog-container">
          <figure className="blog-featured-figure">
            <img
              src="/blog/corporate-event-food-stations.jpg"
              alt="Corporate Event Food Station Packages in Abu Dhabi and UAE"
              className="blog-featured-img"
              width="1600"
              height="900"
              loading="eager"
            />
          </figure>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <main className="blog-article-main">
        <div className="blog-container blog-reading-column">
          <article className="blog-prose">
            <p className="blog-intro-lead" style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-dark-charcoal, #2b2b2b)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Premium catering and live food stations for exhibitions, galas, product launches, and conferences across Abu Dhabi and the UAE.
            </p>

            <h2>The Challenge</h2>
            <p>
              Corporate events need food service that fits the format. An exhibition needs quick guest flow. A gala needs premium presentation. A product launch needs impact. A conference needs ease for large guest groups.
            </p>
            <p>
              Customers often compare scale, budget, and venue needs at the same time. Clear bundles make that choice easier.
            </p>

            <h2>The Solution: Perfect Party Events Food Station Packages</h2>
            <p>
              Perfect Party Events offers catering and live food stations as part of its luxury event management and styling solutions. These packages can support exhibitions, corporate gala and awards production, <Link to="/services/product-launch-events-abu-dhabi/">product launch planning</Link> and experiential activations, and <Link to="/services/corporate-conference-organizer-abu-dhabi/">corporate conferences and summit management</Link>.
            </p>
            <p>
              Each package combines live food stations with <Link to="/rentals/">event rentals</Link>, venue sourcing, and on-site coordination as needed. Customers get a format that matches the event, without piecing together separate services.
            </p>

            <h2>Package Options</h2>
            <div className="package-table-container">
              <table className="package-table">
                <thead>
                  <tr>
                    <th scope="col">Package</th>
                    <th scope="col">What's Included</th>
                    <th scope="col">Who's It For</th>
                    <th scope="col">Why It Works</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Package" className="package-name-td">
                      <strong>Exhibition Flow Package</strong>
                    </td>
                    <td data-label="What's Included">
                      Live food stations, event rentals, on-site coordination
                    </td>
                    <td data-label="Who's It For">
                      Trade shows and exhibition stands
                    </td>
                    <td data-label="Why It Works">
                      Supports steady guest traffic and keeps service aligned with <Link to="/services/exhibition-stand-design-abu-dhabi/">exhibition stand design and build</Link> needs.
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Package" className="package-name-td">
                      <strong>Gala Service Package</strong>
                    </td>
                    <td data-label="What's Included">
                      Live food stations, catering, premium rentals, on-site coordination
                    </td>
                    <td data-label="Who's It For">
                      Awards nights and formal corporate dinners
                    </td>
                    <td data-label="Why It Works">
                      Suits high-end presentation and structured guest service.
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Package" className="package-name-td">
                      <strong>Product Launch Experience Package</strong>
                    </td>
                    <td data-label="What's Included">
                      Live food stations, catering, venue sourcing, AV and stage production, on-site coordination
                    </td>
                    <td data-label="Who's It For">
                      Brand launches and experiential activations
                    </td>
                    <td data-label="Why It Works">
                      Brings food service into a full event production environment.
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Package" className="package-name-td">
                      <strong>Conference Hospitality Package</strong>
                    </td>
                    <td data-label="What's Included">
                      Live food stations, catering, event rentals, venue sourcing, on-site coordination
                    </td>
                    <td data-label="Who's It For">
                      Conferences and summits
                    </td>
                    <td data-label="Why It Works">
                      Supports organized service for larger guest groups and scheduled breaks.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>How It Works</h2>
            <p>
              Customers choose the event format, then select the food station package that fits the venue and guest flow. Perfect Party Events plans, styles, and coordinates the solution, with support that can include catering, live food stations, rentals, venue sourcing, and on-site coordination. For product launch event management, corporate galas, exhibitions, and conferences, the team aligns the package with the full event setup. Installation and dismantling are also part of the wider service offering.
            </p>

            <h2>Why Perfect?</h2>
            <ul>
              <li>Luxury event management and event styling from Abu Dhabi</li>
              <li>End-to-end production across Abu Dhabi, Dubai, and the wider UAE</li>
              <li>Solutions for private celebrations, <Link to="/corporate-events/">corporate events</Link>, product launches, exhibitions, and brand activations</li>
              <li>Support for AV, lighting, stage production, rentals, and hospitality</li>
            </ul>

            <h2>Ready to Plan Your Package?</h2>
            <p>
              <Link to="/contact-us/">Contact us</Link> to discuss the right food station bundle for your next corporate event.
            </p>

            <ul>
              <li><Link to="/contact-us/">Book a consultation</Link></li>
              <li><Link to="/contact-us/">Request event package options</Link></li>
              <li><Link to="/contact-us/">Learn more about catering and live food stations</Link></li>
            </ul>

            <div className="blog-contact-card" style={{ marginTop: '3rem', padding: '2rem', background: '#ffffff', border: '1px solid rgba(201, 136, 141, 0.3)', borderRadius: '12px', boxShadow: '0 8px 24px rgba(43, 43, 43, 0.04)' }}>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--color-dark-charcoal, #2b2b2b)' }}>Contact Information</p>
              <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.7 }}>
                Perfect Party Events | Abu Dhabi, United Arab Emirates | <a href="mailto:businessgpt02@gmail.com">businessgpt02@gmail.com</a> | <a href="https://perfectpartyeventsae.com" target="_blank" rel="noopener noreferrer">https://perfectpartyeventsae.com</a>
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPostFoodStations;
