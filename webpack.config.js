var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		home  : './development/scripts/home',
		error : './development/scripts/error'
    },
	output: {
		path: path.join(__dirname, 'build/scripts'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
            {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
	 ]
	}
};





