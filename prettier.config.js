/** @type {import("prettier").Options} */
const config = {
  printWidth: 90,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  plugins: [require('prettier-plugin-tailwindcss')],
};

module.exports = config;
