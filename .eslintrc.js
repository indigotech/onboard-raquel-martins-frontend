module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
      },
    ],
    camelcase: [2, { properties: 'always' }],
  },
};
