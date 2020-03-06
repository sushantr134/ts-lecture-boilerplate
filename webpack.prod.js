const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.min.js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader"
          // "style-loader",
          // "sass-loader"
        ]
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader"
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf)(\?\S*)?$/,
        loader: "url-loader"
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Images: path.join(__dirname, "static", "images")
    }
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html"
    }),
    // new CleanWebpackPlugin(["build"]),
    new MiniCssExtractPlugin({
      filename: "main.css",
      chunkFilename: "[id].css"
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new Dotenv()
  ]
};
