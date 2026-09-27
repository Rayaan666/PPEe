/**
 * Google Analytics 4 (GA4) Integration Helper
 * Measurement ID: G-WVDDEN5CNE
 * Website: https://perfectpartyeventsae.com/
 */

export const GA_MEASUREMENT_ID = 'G-WVDDEN5CNE';

/**
 * Send an event to GA4 via gtag
 * @param {string} eventName 
 * @param {Object} eventParams 
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track route / page view in GA4
 * @param {string} path 
 * @param {string} title 
 */
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: title || (typeof document !== 'undefined' ? document.title : ''),
      page_location: typeof window !== 'undefined' ? window.location.href : '',
      page_path: path || (typeof window !== 'undefined' ? window.location.pathname + window.location.search : ''),
    });
  }
};

/**
 * Track WhatsApp enquiry clicks
 * Custom event name: whatsapp_enquiry
 * Parameters: product_name, product_category, page_path
 * @param {Object} params
 */
export const trackWhatsAppEnquiry = ({ product_name, product_category, page_path } = {}) => {
  const params = {
    page_path: page_path || (typeof window !== 'undefined' ? window.location.pathname : ''),
  };
  if (product_name) params.product_name = product_name;
  if (product_category) params.product_category = product_category;

  trackEvent('whatsapp_enquiry', params);
};

/**
 * Track successful contact form submissions
 * GA4 recommended event: generate_lead
 * @param {Object} params
 */
export const trackLead = ({ event_type, method = 'contact_form' } = {}) => {
  const params = {
    currency: 'AED',
    method: method,
  };
  if (event_type) params.event_type = event_type;

  trackEvent('generate_lead', params);
};
