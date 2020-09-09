const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, './public/'),
		filename: 'bundle.js'
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
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, './public/'),
		hot: true,
		inline: true
	},
	plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: './dist' }
      ],
    }),
  ],
};