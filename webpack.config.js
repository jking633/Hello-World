const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const client = {
  // prettier-ignore
  entry: [
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    './src/Client/client.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        // query: {
        //   presets: ['stage-0']
        // }
      },
      {
        test: /\.(jpe?g|png|gif)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'public/images/[hash].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader?limit=50000&name=fonts/[hash].[ext]',
      },
      {
        test: /(\.css|\.styl)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
        exclude: path.resolve(__dirname, './node_modules'),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './public/client.css',
      chunkFilename: './public/client_[id].css',
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.styl'],
    // mainFields: ['module', 'browser', 'main']
  },
  target: 'web',
}

const server = {
  // prettier-ignore
  entry: [
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    './index.js',
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: './.build/server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        // query: {
        //   presets: ['stage-0']
        // }
      },
      {
        test: /\.(jpe?g|png|gif)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'public/images/[hash].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader?limit=50000&name=fonts/[hash].[ext]',
      },
      {
        test: /(\.css|\.styl)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
        exclude: path.resolve(__dirname, './node_modules'),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './public/style.css',
      chunkFilename: './public/style_[id].css',
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.styl'],
    // mainFields: ['module', 'browser', 'main']
  },
  target: 'node',
}

module.exports = [client, server]
