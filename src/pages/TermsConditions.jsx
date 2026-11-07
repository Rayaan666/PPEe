import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Helmet>
        <title>Terms &amp; Conditions | Perfect Party Events</title>
        <meta
          name="description"
          content="Read the terms and conditions for using the Perfect Party Events website, including important information about enquiries, services, and website usage."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/terms-conditions/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="legal-hero">
        <div className="container">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Terms &amp; Conditions</h1>
          <p className="legal-subtitle">Last updated: September 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-container">

          <div className="legal-block">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Perfect Party Events website (perfectpartyeventsae.com), you agree to be
              bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not
              use our website.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. About Our Services</h2>
            <p>
              Perfect Party Events provides professional event management, planning, and coordination services in
              Abu Dhabi and across the UAE. Our services include corporate events, exhibition stand design,
              product launches, brand activations, private celebrations, and event rentals.
            </p>
            <p>
              All service details, pricing, and availability are subject to confirmation and may vary depending on
              the nature and requirements of your event.
            </p>
          </div>

          <div className="legal-block">
            <h2>3. Enquiries &amp; Bookings</h2>
            <p>
              Submitting an enquiry through our website does not constitute a confirmed booking. All enquiries are
              reviewed and responded to by our team. A booking is only confirmed upon receipt of a written
              agreement and any applicable deposit.
            </p>
            <p>
              Perfect Party Events reserves the right to decline any enquiry or booking request at our sole
              discretion.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Payments &amp; Cancellations</h2>
            <p>
              Payment terms, deposit requirements, and cancellation policies are outlined in the individual service
              agreement provided to each client. These terms vary depending on the event type and service scope.
            </p>
            <p>
              Cancellations must be made in writing. Refund eligibility will be assessed in accordance with the
              terms set out in your service agreement.
            </p>
          </div>

          <div className="legal-block">
            <h2>5. Website Usage</h2>
            <p>
              You agree to use this website for lawful purposes only. You must not:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations.</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems.</li>
              <li>Reproduce, duplicate, or copy any content from this website without our prior written consent.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, graphics, logos, and design elements, is the
              property of Perfect Party Events and is protected by applicable intellectual property laws. Unauthorised
              use, reproduction, or distribution of any content is strictly prohibited.
            </p>
          </div>

          <div className="legal-block">
            <h2>7. Limitation of Liability</h2>
            <p>
              Perfect Party Events shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our website or services. Our total liability in connection with any claim
              shall not exceed the amount paid for the specific service giving rise to such claim.
            </p>
            <p>
              We do not guarantee uninterrupted or error-free operation of this website and accept no liability
              for any loss or damage caused by website downtime or technical issues.
            </p>
          </div>

          <div className="legal-block">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for your convenience
              only. Perfect Party Events has no control over the content of those websites and accepts no
              responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </div>

          <div className="legal-block">
            <h2>9. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of the United Arab Emirates and the Emirate of
              Abu Dhabi. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of
              the courts of Abu Dhabi.
            </p>
          </div>

          <div className="legal-block">
            <h2>10. Changes to These Terms</h2>
            <p>
              Perfect Party Events reserves the right to update or modify these Terms &amp; Conditions at any time.
              Any changes will be posted on this page with an updated revision date. Your continued use of the
              website following any changes constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div className="legal-block">
            <h2>11. Contact Us</h2>
            <p>If you have any questions about these Terms &amp; Conditions, please contact us:</p>
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

export default TermsConditions;
