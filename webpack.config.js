const path = require("path");

module.exports = {
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: "kaizen-validation",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};
