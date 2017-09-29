/* eslint-disable import/no-extraneous-dependencies */

// This file runs after jsdom has been set up
// use this to add any browser-specific functionality

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

window.matchMedia = () => ({
  addListener: () => {},
});
