import ReactGA from 'react-ga';

export const initGA = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'UA-xxxxxxxxx-1';
  if (gaId && gaId !== 'UA-xxxxxxxxx-1') {
    ReactGA.initialize(gaId);
  }
};

export const logPageView = () => {
  if (typeof window === 'undefined') return;
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'UA-xxxxxxxxx-1';
  if (gaId && gaId !== 'UA-xxxxxxxxx-1') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
