const path = require("path");

module.exports = {
  // Your entry, output, and other configurations...
  resolve: {
    fallback: {
      // If you want to include a polyfill:
      crypto: require.resolve("crypto-browserify"),

      // If you don't want to include a polyfill:
      // "crypto": false
    },
  },
  // Your module, plugins, and other configurations...
};
