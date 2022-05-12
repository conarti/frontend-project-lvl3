// eslint-disable-next-line import/no-extraneous-dependencies
const purgecss = require('@fullhuman/postcss-purgecss');

const getPlugins = () => {
  const plugins = ['postcss-preset-env'];
  if (process.env.NODE_ENV === 'production') {
    plugins.push(purgecss({
      content: ['./**/*.html'],
    }));
  }
  return plugins;
};

module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: getPlugins(),
};
