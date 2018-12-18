const utils = require('./utils')
const portfinder = require('portfinder')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const webpackDevConfig = {
  context: utils.rootPath(),
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './scripts/dev/index.js',
  },
  output: {
    path: utils.distPath(),
    filename: '[name].js',
  },
  devServer: {
    contentBase: false,
    hot: true,
    compress: true,
    host: process.platform === 'win32' ? 'localhost' : '0.0.0.0',
    port: 8000,
    quiet: true,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue-showdown': utils.srcPath(),
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
        },
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'scripts/dev/index.html',
      inject: true,
    }),
  ],
  node: {
    Buffer: false,
    setImmediate: false,
    global: false,
    process: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = webpackDevConfig.devServer.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      webpackDevConfig.devServer.port = port
      webpackDevConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Webpack dev server is listening: http://${webpackDevConfig.devServer.host}:${port}`],
        },
      }))
      resolve(webpackDevConfig)
    }
  })
})
