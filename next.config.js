/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[name]__[local]__[hash:base64:5]',
  },
})
