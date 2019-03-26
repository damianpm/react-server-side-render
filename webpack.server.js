const path = require('path')

module.exports = {
  // Inform webpack we are building a bundle for nodeJS
  target: 'node',
  // Root file of server app
  entry: './src/index.js',
  // Where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Run babel in every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }]
          ]
        }
      }
    ]
  }
}
