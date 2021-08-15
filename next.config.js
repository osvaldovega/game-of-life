const path = require('path');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Webpack Config
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      };
    }
    return config;
  },
};
