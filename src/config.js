
/* global __DEV__ */

const isDev = (() => {
  if (typeof __DEV__ === 'undefined') {
    return false
  }
  return __DEV__;
})();

const config = {
  apiBaseUrl: isDev ? '/__mocks__' : '/api/v1',
};

export default config;
