import ReactGA from 'react-ga4';

export const initAnalytics = () => {
  ReactGA.initialize('G-C9WG36FZ7T'); // Замените на ваш Measurement ID
};

export const sendPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
