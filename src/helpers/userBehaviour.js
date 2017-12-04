const HAS_VISITED_FEEDBACK_PAGE = 'HAS_VISITED_FEEDBACK_PAGE';
const NAVIGATION_COUNT = 'NAVIGATION_COUNT';

const safelySetLocalStorageItem = (name, value) => {
  try {
    window.localStorage.setItem(name, value);
  } catch (error) {
    console.warn(`Could not set local storage item ${name} with value ${value}: ${error}`);
  }
};

export function hasVisitedFeedbackPage() {
  return window.localStorage.getItem(HAS_VISITED_FEEDBACK_PAGE) === true.toString();
}

export function rememberVisitToFeedbackPage() {
  safelySetLocalStorageItem(HAS_VISITED_FEEDBACK_PAGE, true.toString());
}

export function getNavigationCount() {
  return parseInt(window.localStorage.getItem(NAVIGATION_COUNT), 10) || 0;
}

export function incrementNavigationCount() {
  safelySetLocalStorageItem(NAVIGATION_COUNT, getNavigationCount() + 1);
}
