// React 16 requires requestAnimationFrame
// This is available in all browsers we support, but not in the test environment (jsdom)
// So we stub it here and include it in the test setup

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
