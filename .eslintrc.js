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
    'react/require-default-props': 'off',
    // there is a bug in eslint that incorrectly identifies a
    // prop type as not being used an error when destructuring props
    'react/no-unused-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-console': [
      'error', {
        allow: [
          'info',
          'warn',
          'error',
        ],
      }
    ]
  }
};
