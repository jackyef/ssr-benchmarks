const path = require("path");
const webpack = require("webpack");
const vueConfig = require("./vue.loader.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "index.js",
  },
  resolve: {
    alias: {
      public: path.resolve(__dirname, "../public")
    }
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [ 
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader?minimize",
          fallback: "vue-style-loader"
        })
      }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin({
  //     filename: "common.[chunkhash].css"
  //   })
  // ]
};
