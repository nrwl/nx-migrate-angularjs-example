const webpack = require('./webpack.config');
const getBaseKarmaConfig = require('../../karma.conf');

module.exports = function (config) {
  const baseConfig = getBaseKarmaConfig();
  config.set({
    ...baseConfig,
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-webpack'),
    ],
    // This will be the new entry to webpack
    // so it should just be a single file
    files: ['src/test.js'],

    // Preprocess test index and test files using
    // webpack (will run babel)
    preprocessors: {
      'src/test.js': ['webpack'],
      'src/**/*.spec.js': ['webpack'],
    },

    // Reference webpack config (single object)
    // and configure some middleware settings
    webpack: {
      ...webpack({}),
      mode: 'development',
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    // Typical Karma settings, see docs
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
  });
};
