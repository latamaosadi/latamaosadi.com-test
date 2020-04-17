const plugins = [
  'tailwindcss',
  'postcss-preset-env',
];

if (process.env.NODE_ENV === 'production') {
  plugins.push([
    '@fullhuman/postcss-purgecss',
    {
      content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
      whitelist: ['html', 'body', 'mode-dark'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }
  ]);
}

module.exports = {
  plugins: plugins,
};
