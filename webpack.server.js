const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  // Inform webpack we are building a bundle for nodeJS
  target: 'node',
  // Root file of server app
  entry: './src/index.js',
  // Where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, config)
