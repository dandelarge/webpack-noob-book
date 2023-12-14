const path = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
