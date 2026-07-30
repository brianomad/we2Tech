module.exports = {
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images',
          outputPath: 'static/images',
          name: '[name]-[hash].[ext]',
        },
      },
    });
    return config;
  },
};