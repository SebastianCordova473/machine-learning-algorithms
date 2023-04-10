module.exports = {
  // ...other webpack config...
  resolve: {
    fallback: {
      crypto: false,
    },
  },
  node: {
    crypto: false,
  },
};
