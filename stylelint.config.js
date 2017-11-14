module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: '**/_normalize.scss',
  rules: {
    // Sass syntax
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'if',
          'include',
          'mixin',
          'supports',
          'content',
        ],
      },
    ],
    // CSS modules syntax
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'export',
          'import',
          'global',
          'local',
        ],
      },
    ],
  },
};
