const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const app = [
  'core-js/modules/es6.promise',
  'core-js/modules/es6.array.iterator',
  './src/TodoApp/entry.js',
  // './src/Client/client.js',
]

const outputPath = path.resolve(__dirname, 'public/js')
const publicPath = '/'
const resolve = {
  extensions: ['.js', '.jsx', '.json', '.css', '.styl', '.scss'],
}

const client = {
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    // compress: true,
    // contentBase: outputPath,
    // historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'public'),
  // },
  // prettier-ignore
  entry: {
    app: [
      'react-hot-loader/patch',
      ...app,
    ],
  },
  output: {
    path: outputPath,
    filename: '[name].client.bundle.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [path.resolve('./src')],
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['react-hot-loader/babel'],
              ['dynamic-import-webpack'],
              ['@babel/plugin-proposal-export-default-from'],
            ],
          },
        },
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
      // {
      //   test: /(\.css|\.styl)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoader: 2,
      //       },
      //     },
      //     'stylus-loader',
      //   ],
      //   exclude: path.resolve(__dirname, './node_modules'),
      // },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: './public/styles/[name].css',
    //   chunkFilename: './public/client_[id].css',
    //   allChunks: true,
    // }),
  ],
  resolve,
  target: 'web',
  // externals: [nodeExternals()],
}

const server = {
  // prettier-ignore
  entry: {
    app: [
      ...app,
    ],
    // index: [
    //   'core-js/modules/es6.promise',
    //   'core-js/modules/es6.array.iterator',
    //   './index.js',
    // ],
  },
  // output: {
  //   path: __dirname,
  //   filename: './.build/server.js',
  //   publicPath: '/',
  // },
  output: {
    path: outputPath,
    filename: '[name].server.bundle.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [path.resolve('./src')],
        exclude: path.resolve(__dirname, './node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['dynamic-import-node'],
              ['@babel/plugin-proposal-export-default-from'],
            ],
          },
        },
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
      // {
      //   test: /(\.css|\.styl)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoader: 2,
      //       },
      //     },
      //     'stylus-loader',
      //   ],
      //   exclude: path.resolve(__dirname, './node_modules'),
      // },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: './public/styles/[name].css',
    //   chunkFilename: './public/client_[id].css',
    //   allChunks: true,
    // }),
  ],
  resolve,
  target: 'node',
  externals: [nodeExternals()],
}

module.exports = [client, server]
