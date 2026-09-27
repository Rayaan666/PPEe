import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';
import CorporateEvents from './pages/CorporateEvents';
import NotFound from './pages/NotFound';
import EventManagementCompany from './pages/EventManagementCompany';
import EventOrganizers from './pages/EventOrganizers';
import BlogCreativeConcept from './pages/BlogCreativeConcept';
import BlogPlanningChecklist from './pages/BlogPlanningChecklist';
import BlogChoosingCompany from './pages/BlogChoosingCompany';
import BlogListing from './pages/BlogListing';
import BlogPostExhibitionDubai from './pages/BlogPostExhibitionDubai';

// New Dedicated Service Pages
import ExhibitionStands from './pages/services/ExhibitionStands';
import CorporateGalas from './pages/services/CorporateGalas';
import ProductLaunches from './pages/services/ProductLaunches';
import CorporateConferences from './pages/services/CorporateConferences';
import BrandActivations from './pages/services/BrandActivations';
import PrivateCelebrations from './pages/services/PrivateCelebrations';

import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import { trackPageView } from './utils/analytics';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Delay slightly to let React Helmet Async update document.title
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
}

export function AppContent() {
  return (
    <div className="app-container">
      <AnalyticsTracker />
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="/corporate-events/" element={<CorporateEvents />} />
          
          {/* Dedicated Service Routes */}
          <Route path="/services/exhibition-stand-design-abu-dhabi" element={<ExhibitionStands />} />
          <Route path="/services/corporate-gala-events-abu-dhabi" element={<CorporateGalas />} />
          <Route path="/services/product-launch-events-abu-dhabi" element={<ProductLaunches />} />
          <Route path="/services/corporate-conference-organizer-abu-dhabi" element={<CorporateConferences />} />
          <Route path="/services/brand-activation-agency-abu-dhabi" element={<BrandActivations />} />
          <Route path="/services/theme-decoration-private-events-abu-dhabi" element={<PrivateCelebrations />} />
          <Route path="/services/theme-decoration-private-events-abu-dhabi/" element={<PrivateCelebrations />} />
          <Route path="/services/private-celebrations-abu-dhabi" element={<PrivateCelebrations />} />
          <Route path="/services/private-celebrations-abu-dhabi/" element={<PrivateCelebrations />} />

          {/* SEO Landers */}
          <Route path="/event-management-company" element={<EventManagementCompany />} />
          <Route path="/event-management-company/" element={<EventManagementCompany />} />
          <Route path="/event-organizers" element={<EventOrganizers />} />
          <Route path="/event-organizers/" element={<EventOrganizers />} />
          
          {/* Preserved Blogs */}
          <Route path="/how-to-design-the-best-creative-event-concept" element={<BlogCreativeConcept />} />
          <Route path="/how-to-design-the-best-creative-event-concept/" element={<BlogCreativeConcept />} />
          <Route path="/the-complete-corporate-event-planning-checklist-for-the-uae-2026" element={<BlogPlanningChecklist />} />
          <Route path="/the-complete-corporate-event-planning-checklist-for-the-uae-2026/" element={<BlogPlanningChecklist />} />
          <Route path="/how-to-choose-the-right-event-management-companies" element={<BlogChoosingCompany />} />
          <Route path="/how-to-choose-the-right-event-management-companies/" element={<BlogChoosingCompany />} />

          {/* Official Blog System */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/" element={<BlogListing />} />
          <Route path="/blog/exhibition-stand-design-companies-dubai" element={<BlogPostExhibitionDubai />} />
          <Route path="/blog/exhibition-stand-design-companies-dubai/" element={<BlogPostExhibitionDubai />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="/blogs" element={<BlogListing />} />
          <Route path="/blogs/" element={<BlogListing />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rentals/" element={<Rentals />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;


