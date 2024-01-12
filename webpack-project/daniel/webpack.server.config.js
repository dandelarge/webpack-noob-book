const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.([jt]sx?)$/,
        exclude: [/node_modules/, /dist/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /dist/],
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf|webp)$/,
        exclude: [/node_modules/, /dist/],
        type: 'asset/resource'
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
};
