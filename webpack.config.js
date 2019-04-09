const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const client = {
  entry: './src/Client/client.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  plugins: [],
}

const server = {
  entry: './index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: './.build/server.js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  plugins: [],
}

module.exports = [client, server]
