module.exports = {
  webpack: function (config) {
    return {
      ...config,
      ignoreWarnings: [
        {
          message: /Failed to parse source map/,
        },
        {
          message: /Module Warning/,
        },
      ],
    };
  },
};
