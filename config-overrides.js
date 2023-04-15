module.exports = function override(config, env) {
  // Add fallbacks for 'crypto', 'buffer', and 'stream'
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify"),
  };

  return config;
};
