require('dotenv').config()
const HTMLPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const {DefinePlugin, EnvironmentPlugin, ProvidePlugin} = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = [
  new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  new ExtractPlugin('bundle.[hash].css'),
  new DefinePlugin({ DEBUG: JSON.stringify(!process.env.NODE_ENV) }),
  new ProvidePlugin({ React: 'react' }),
  new EnvironmentPlugin({NODE_ENV: 'development', DEBUG: false}),
  new BundleAnalyzerPlugin(),
]

const prodPlugins = [
  new UglifyPlugin({chunkFilter:(chunk) => {
    if (chunk.name === 'vendor')
      return false
    return true
  }}),
  new CleanPlugin('dist'),
]

module.exports = {
  stats: {
    all: false,
    modules: true,
    errors: false,
    chunks: false,
    chunkModules: false,
    children: false,
    warnings: false,
    moduleTrace: false,
    errorDetails: false,
    providedExports: false,
    usedExports: false,
  },
  mode: 'production',
  plugins,
  devtool: process.env.NODE_ENV ? undefined : 'inline-source-map',
  entry: `${__dirname}/src/index.js`,
  devServer: {
    port: 8008,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  output: {
    filename: 'bundle.[hash].js',
    chunkFilename: '[name].bundle.js',
    path: `${__dirname}/build`,
  },
  optimization: {
    minimizer: prodPlugins,
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot).*/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        exclude: /\.icon\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[hash].[ext]',
          },
        }],
      },
      {
        test: /\.icon\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractPlugin.extract({
          use: [
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: process.env.NODE_ENV ? false : true,
                includePaths: [`${__dirname}/src/styles`],
              },
            },
          ],
        }),
      },
    ],
  },
}