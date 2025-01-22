// src/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-RJZ2SLMP0N'); // replace with your Measurement ID
};

export const trackPageView = (page) => {
  ReactGA.send({
    hitType: "pageview",
    page: page
  });
};

export default ReactGA;
