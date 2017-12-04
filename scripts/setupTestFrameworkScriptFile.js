/* eslint-disable import/no-extraneous-dependencies */

// This file runs after jsdom has been set up
// use this to add any browser-specific functionality

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

window.matchMedia = () => ({
  addListener: () => {},
});

window.gtag = () => {};

// document.body only has a getter so we add clientWidth as a settable property the hard way
Object.defineProperty(document.body, 'clientWidth', {
  writable: true,
});

window.localStorage = {
  getItem: () => {},
  setItem: () => {},
};
