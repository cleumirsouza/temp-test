const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './public/'),
    inline: true,
    host: '0.0.0.0',
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, './src/assets'), to: './dist' }
      ],
    }),
  ],
};