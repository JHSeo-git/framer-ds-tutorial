/**
 * @see https://github.com/facebook/create-react-app/issues/8909
 */

const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
}
