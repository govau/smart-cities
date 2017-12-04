// don't ever change these, they must remain consistent over time for reporting
const UA = 'UA-61222473-12';
const FMP = 'First meaningful paint (ms)';
const TTI = 'Time to interactive (ms)';

export const logPageView = () => {
  // changing the page_path config also sends a new page view
  window.gtag('config', UA, {
    page_path: document.location.pathname,
  });
};

export const logFirstMeaningfulPaint = (timeSincePageLoad = Math.round(performance.now())) => {
  // The point at which the user can begin to read the page
  // https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint
  window.gtag('event', 'timing_complete', {
    name: FMP,
    value: timeSincePageLoad,
  });
};

export const logTimeToInteractive = (timeSincePageLoad = Math.round(performance.now())) => {
  // The point at which the user can interact with the site (e.g. change pages)
  // https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive
  window.gtag('event', 'timing_complete', {
    name: TTI,
    value: timeSincePageLoad,
  });
};
