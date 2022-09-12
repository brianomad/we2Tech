const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack')

// const nextConfiguration = {
//   target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
// };

// module.exports = withPlugins([optimizedImages], nextConfiguration);

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};
const { parsed: myEnv } = require('dotenv').config({
  path: '/full/custom/path/to/env'
})


module.exports =
  withPlugins([optimizedImages], nextConfiguration),
{
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}