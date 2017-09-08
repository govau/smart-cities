module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    '__DEV__': true
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'no-console': [
      'error', {
        allow: [
          'warn',
          'error',
        ],
      }],
  }
};
