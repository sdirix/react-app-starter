module.exports = {
  // prettier must always be the last entry to ensure all rules are compatible
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/sort': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.tsx?'],
      rules: {
        // use sorting of simple-import-sort and disable others
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/sort': 'error',
      },
    },
  ],
};
