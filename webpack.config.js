const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src"),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/build/",
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /.ts(x?)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx"]
  },
  devtool: "source-map"
  // devServer: {
  //   contentBase: path.join(__dirname, "/dist/"),
  //   inline: true,
  //   host: "localhost",
  //   port: 8080
  // }
};
