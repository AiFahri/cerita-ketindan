import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Deklarasi tipe yang lebih spesifik untuk window.gtag
declare global {
  interface Window {
    gtag: (
      command: 'event',
      eventName: 'page_view',
      params: {
        page_path: string;
        page_title?: string;
        page_location?: string;
      }
    ) => void;
  }
}
const Analytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view setiap kali location berubah
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);
  
  return null; // Komponen ini tidak merender apapun
};

export default Analytics;


