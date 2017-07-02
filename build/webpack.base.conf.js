var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack') // add for jquery
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require("extract-text-webpack-plugin") // 生产环境部署,add for css

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': 'jquery' // add for jquery
      // 'bootstrap': resolve('src/assets/bootstrap') // add for bootstrap
    }
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'), // add all for jquery
    new webpack.ProvidePlugin({  // add all for jquery
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({ // 生产环境部署,指定生产环境
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ //生产环境部署,自动删除代码块内的警告语句
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("style.css") // 生产环境部署,add for css
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        // exclude: [resolve('src/assets/bootstrap')], // add for bootstrap
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // { // 生产环境部署,add for css。不需要了！！
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     extractCSS: true
      //   }
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
