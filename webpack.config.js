const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const browserConfig = {
  entry: './src/Client/client.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   __isBrowser__: JSON.stringify(true),
    // }),
  ],
}

const serverConfig = {
  entry: './src/server/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   __isBrowser__: JSON.stringify(false),
    // }),
  ],
}

module.exports = [browserConfig, serverConfig]

// module.exports = {
//   entry: {
//     client: './src/client.js',
//     bundle: './src/bundle.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'assets'),
//     filename: '[name].js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//     ],
//   },
// }
