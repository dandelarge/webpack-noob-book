const path = require("path");
const isDev = process.env.NODE_ENV === "development";
module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: isDev ? "bundle.js" : "bundle.[contenthash].js",
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
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 420,
  },
};
