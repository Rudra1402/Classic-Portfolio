// src/components/Tracking.js
import { useEffect } from 'react';
import { trackPageView } from '../analytics';

function Tracking() {
  useEffect(() => {
    trackPageView("/home"); // Default page view when the portfolio loads
  }, []);

  return null;
}

export default Tracking;