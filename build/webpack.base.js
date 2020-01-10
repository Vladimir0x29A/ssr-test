const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const paths = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

module.exports = {
  externals: {
    paths,
  },
  entry: {
    app: paths.src,
  },
  output: {
    filename: '[name].[hash].js',
    path: paths.dist,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
        /*options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
        },*/
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: false,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(ttf|woff2?|eot)$/i,
        loader: 'url-loader',
        options: {
          limit: false,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': 'src',
      'vue$': 'vue/dist/vue.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: `${paths.src}/assets/images`,
        to: 'img',
      },
      {
        from: `${paths.src}/assets/fonts`,
        to: 'fonts',
      },
    ]),
  ],
};
