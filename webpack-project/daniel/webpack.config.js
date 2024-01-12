const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development': 'production',
  entry: './src/index.js',
  output: {
    filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: true
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 420
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    }
  },  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader' 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
