import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Helmet>
        <title>Privacy Policy | Perfect Party Events</title>
        <meta
          name="description"
          content="Learn how Perfect Party Events collects, uses, and protects personal information when you visit our website or enquire about our event services."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/privacy-policy/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="legal-hero">
        <div className="container">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: September 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-container">

          <div className="legal-block">
            <h2>1. Introduction</h2>
            <p>
              Perfect Party Events ("we", "our", "us") is committed to protecting your personal information and
              ensuring a safe, transparent experience when you visit our website or enquire about our event services.
              This Privacy Policy explains how we collect, use, and protect your data.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Details:</strong> Name, email address, phone number, and other information you provide when enquiring about our services or submitting a contact form.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage analytics collected automatically when you visit our site.</li>
              <li><strong>Enquiry Information:</strong> Details about your event requirements, including event type, dates, and preferences.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. How We Use Your Information</h2>
            <p>Your information may be used to:</p>
            <ul>
              <li>Respond to your enquiries and provide information about our event services.</li>
              <li>Plan and coordinate events on your behalf.</li>
              <li>Improve our website, services, and overall customer experience.</li>
              <li>Send relevant updates and communications related to your enquiry or event.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>4. Data Protection &amp; Security</h2>
            <p>
              We use industry-standard security measures to protect your data from unauthorised access, misuse, or
              disclosure. All stored information is accessible only to authorised team members who require it to
              fulfil service operations.
            </p>
            <p>
              <strong>Data Retention:</strong> We retain your data only as long as necessary for event management,
              legal compliance, and customer support purposes.
            </p>
          </div>

          <div className="legal-block">
            <h2>5. Third-Party Sharing</h2>
            <p>
              We do not sell or trade your personal information. We may share limited information with trusted
              partners strictly necessary for event delivery, such as venue partners and technology service
              providers. All third parties are required to maintain the confidentiality of your information.
            </p>
          </div>

          <div className="legal-block">
            <h2>6. Media &amp; Promotional Use</h2>
            <p>
              Photographs and videos may be captured at events managed by Perfect Party Events. Such content may be
              used for marketing, promotional, and social media purposes. If you have concerns about media usage,
              please contact us in advance.
            </p>
          </div>

          <div className="legal-block">
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data held by us.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your data where legally permissible.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a href="mailto:info@perfectpartyeventsae.com">info@perfectpartyeventsae.com</a> or via our{' '}
              <a href="/contact-us">contact page</a>.
            </p>
          </div>

          <div className="legal-block">
            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience and gather
              analytics. By continuing to use our website, you consent to our use of cookies. You may disable
              cookies through your browser settings, though this may affect certain website features.
            </p>
          </div>

          <div className="legal-block">
            <h2>9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable law.
              Continued use of our website after any updates indicates your acceptance of the revised policy.
            </p>
          </div>

          <div className="legal-block">
            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <address className="legal-address">
              <strong>Perfect Party Events</strong><br />
              Plot 3, ME 40, Musaffah, Abu Dhabi, UAE<br />
              <a href="mailto:info@perfectpartyeventsae.com">info@perfectpartyeventsae.com</a><br />
              <a href="tel:+971501045227">+971 50 104 5227</a>
            </address>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
