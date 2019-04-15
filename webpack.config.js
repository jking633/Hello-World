const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const app = [
  'core-js/modules/es6.promise',
  'core-js/modules/es6.array.iterator',
  './src/Client/client.js',
]

// const entry = './src/entry.jsx';
const outputPath = path.resolve('./public/js')
const publicPath = '/js/'
const resolve = {
  extensions: ['.js', '.jsx', '.json', '.css', '.styl', '.scss'],
}

const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          // prettier-ignore
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

          // npm package names are URL-safe, but some servers don't like @ symbols
          return `npm.${packageName.replace('@', '')}`
        },
      },
      styles: {
        name: 'styles',
        test: /\.s?css$/,
        chunks: 'all',
        minChunks: 1,
        reuseExistingChunk: true,
        enforce: true,
      },
    },
  },
}

const client = {
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'src'),
  //   compress: true,
  //   port: 3000,
  //   hot: true,
  //   historyApiFallback: true,
  // },
  // prettier-ignore
  entry: {
    app,
  },
  output: {
    path: outputPath,
    filename: '[name].client.bundle.js',
    publicPath,
  },
  // optimization,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve('./src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
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
    // new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
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
    app,
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
  // optimization,
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
  // externals: [nodeExternals()],
}

module.exports = [client, server]
