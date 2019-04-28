const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin({
  filename: 'assets.json',
  fullPath: false,
  path: path.resolve(__dirname, 'public'),
  includeManifest: true,
  manifestFirst: true,
  useCompilerPath: true,
  prettyPrint: true,
  // processOutput: function(assets) {
  //   return 'window.staticMap = ' + JSON.stringify(assets)
  // },
  update: true,
  metadata: { version: 123 },
  includeAllFileTypes: true,
  keepInMemory: true,
  integrity: true,
  entrypoints: true,
})

const app = [
  'core-js/modules/es6.promise',
  'core-js/modules/es6.array.iterator',
  'react-hot-loader/patch',
  // App logic, ../Routes controls actual app loading
  path.resolve(__dirname, 'src/Shared/entry.js'),
]

const outputPath = path.resolve(__dirname, 'public/js')
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
  // devtool: 'source-map',
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
    filename: `[name].[${
      process.env.NODE_ENV === 'production' ? 'chunkhash' : 'hash:8'
    }].js`,
    chunkFilename: `[name].[${
      process.env.NODE_ENV === 'production' ? 'chunkhash' : 'hash:8'
    }].js`,
    path: outputPath,
    publicPath,
  },
  optimization,
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
          name: 'public/images/[hash:8].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader?limit=50000&name=fonts/[hash:8].[ext]',
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
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    // new MiniCssExtractPlugin({
    //   filename: './public/styles/[name].css',
    //   chunkFilename: './public/client_[id].css',
    //   allChunks: true,
    // }),
    assetsPluginInstance,
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
    filename: '[name].server.bundle.js',
    // Not working
    // filename: '[name][chunkhash].server.bundle.js',
    // chunkFilename: '[name][chunkhash].server.bundle.js',
    path: outputPath,
    publicPath,
    libraryTarget: 'commonjs2',
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
          name: 'public/images/[hash:8].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader?limit=50000&name=fonts/[hash:8].[ext]',
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
