const HAS_VISITED_FEEDBACK_PAGE = 'HAS_VISITED_FEEDBACK_PAGE';
const NAVIGATION_COUNT = 'NAVIGATION_COUNT';
const SHOW_CHART_PATTERNS = 'SHOW_CHART_PATTERNS';

const setItem = (name, item) => {
  try {
    const serializedItem = JSON.stringify(item);

    window.localStorage.setItem(name, serializedItem);
  } catch (err) {
    console.warn(err);
  }
};

const getItem = (name) => {
  try {
    const serializedItem = window.localStorage.getItem(name);

    if (serializedItem === null) return undefined;

    return JSON.parse(serializedItem);
  } catch (err) {
    console.warn(err);

    return undefined;
  }
};

export function hasVisitedFeedbackPage() {
  return !!getItem(HAS_VISITED_FEEDBACK_PAGE);
}

export function rememberVisitToFeedbackPage() {
  setItem(HAS_VISITED_FEEDBACK_PAGE, true);
}

export function getNavigationCount() {
  return getItem(NAVIGATION_COUNT) || 0;
}

export function incrementNavigationCount() {
  setItem(NAVIGATION_COUNT, getNavigationCount() + 1);
}

export function setShowChartPatterns(value) {
  setItem(SHOW_CHART_PATTERNS, value);
}

export function getShowChartPatterns() {
  return getItem(SHOW_CHART_PATTERNS);
}
