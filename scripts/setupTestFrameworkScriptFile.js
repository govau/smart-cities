// This file runs after jsdom has been set up
// use this to add any browser-specific functionality

window.matchMedia = () => ({
  addListener: () => {}
});
