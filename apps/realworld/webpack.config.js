const path = require('path');

module.exports = (config, context) => {
  return {
    ...config,
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.html$/,
          use: [{ loader: 'raw-loader' }],
        },
        // Load js files through Babel
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['angularjs-annotate'],
          },
        },
      ],
    },
  };
};
